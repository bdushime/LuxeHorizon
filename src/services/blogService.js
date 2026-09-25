import { supabase } from '../lib/supabase.js'
import { blogPosts as defaultPosts } from '../data/content.js'

function normalizeImage(url) {
  if (!url) return '/story-guide.webp'
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url
  }
  let clean = url.replace(/ /g, '-')
  clean = clean.replace(/\.(jpg\.jpeg|jpeg|jpg|png|HEIC|heic)$/i, '.webp')
  return clean
}

/**
 * Normalizes database snake_case fields to camelCase for UI consumption.
 */
export function formatPostFromDb(p) {
  if (!p) return null
  return {
    id: p.id,
    key: p.key || `post-${Date.now()}`,
    title: p.title || '',
    category: p.category || 'Safari',
    date: p.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    readTime: p.read_time || p.readTime || '5 min read',
    author: p.author || 'Luxe Horizons Team',
    authorRole: p.author_role || p.authorRole || 'Travel Specialist',
    excerpt: p.excerpt || '',
    image: normalizeImage(p.image),
    accent: p.accent || '#5c6b4f',
    quote: p.quote || '',
    takeaway: p.takeaway || '',
    paragraphs: Array.isArray(p.paragraphs) ? p.paragraphs : [],
    highlights: Array.isArray(p.highlights) ? p.highlights : [],
    published: p.published ?? true,
    createdAt: p.created_at || null
  }
}

/**
 * Normalizes camelCase React form data into snake_case database schema payload.
 */
export function formatPostForDb(post) {
  return {
    key: post.key || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    title: post.title,
    category: post.category,
    date: post.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    read_time: post.readTime || '5 min read',
    author: post.author || 'Luxe Horizons Team',
    author_role: post.authorRole || 'Travel Specialist',
    excerpt: post.excerpt || '',
    image: normalizeImage(post.image),
    accent: post.accent || '#5c6b4f',
    quote: post.quote || null,
    takeaway: post.takeaway || null,
    paragraphs: Array.isArray(post.paragraphs) ? post.paragraphs : [],
    highlights: Array.isArray(post.highlights) ? post.highlights : [],
    published: post.published ?? true
  }
}

/**
 * Fetch all posts (published and drafts) for the Admin Dashboard.
 */
export async function fetchAdminPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching admin posts from Supabase:', error.message)
    throw new Error(error.message)
  }

  return (data || []).map(formatPostFromDb)
}

/**
 * Fetch a single post by ID or Key.
 */
export async function fetchPostById(id) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .or(`id.eq.${id},key.eq.${id}`)
    .single()

  if (error) {
    console.error(`Error fetching post ${id}:`, error.message)
    throw new Error(error.message)
  }

  return formatPostFromDb(data)
}

/**
 * Create a new post in Supabase.
 */
export async function createPost(postData) {
  const payload = formatPostForDb(postData)
  const { data, error } = await supabase
    .from('posts')
    .insert([payload])
    .select()
    .single()

  if (error) {
    console.error('Error creating post in Supabase:', error.message)
    throw new Error(error.message)
  }

  return formatPostFromDb(data)
}

/**
 * Update an existing post by ID.
 */
export async function updatePost(id, postData) {
  const payload = formatPostForDb(postData)
  const { data, error } = await supabase
    .from('posts')
    .update(payload)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error(`Error updating post ${id}:`, error.message)
    throw new Error(error.message)
  }

  return formatPostFromDb(data)
}

/**
 * Delete a post by ID.
 */
export async function deletePost(id) {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id)

  if (error) {
    console.error(`Error deleting post ${id}:`, error.message)
    throw new Error(error.message)
  }

  return true
}

/**
 * Quick toggle published status of a post.
 */
export async function togglePostPublished(id, published) {
  const { data, error } = await supabase
    .from('posts')
    .update({ published })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error(`Error toggling post ${id} status:`, error.message)
    throw new Error(error.message)
  }

  return formatPostFromDb(data)
}

/**
 * Upload image file to Supabase Storage ('blog-images' bucket).
 * If bucket upload fails (e.g. bucket doesn't exist yet), converts to Base64 data URL fallback.
 */
export async function uploadPostImage(file) {
  if (!file) throw new Error('No file provided for upload.')

  const fileExt = file.name.split('.').pop().toLowerCase()
  const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`
  const filePath = `uploads/${fileName}`

  try {
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
      })

    if (uploadError) {
      console.warn('Supabase storage upload error, falling back to data URL:', uploadError.message)
      return await convertFileToBase64(file)
    }

    // Get Public URL from Supabase
    const { data: publicUrlData } = supabase.storage
      .from('blog-images')
      .getPublicUrl(uploadData.path || filePath)

    return publicUrlData.publicUrl
  } catch (err) {
    console.warn('Supabase storage exception, falling back to data URL:', err)
    return await convertFileToBase64(file)
  }
}

/**
 * Helper to convert File object to Base64 Data URL.
 */
function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

/**
 * Seeds initial blog posts from content.js into Supabase database if empty.
 */
export async function seedInitialPosts() {
  const payload = defaultPosts.map((p) => ({
    key: p.key,
    title: p.title,
    category: p.category,
    date: p.date,
    read_time: p.readTime || '5 min read',
    author: p.author,
    author_role: p.authorRole,
    excerpt: p.excerpt,
    image: p.image,
    accent: p.accent || '#5c6b4f',
    quote: p.quote || null,
    takeaway: p.takeaway || null,
    paragraphs: p.paragraphs || [],
    highlights: p.highlights || [],
    published: true
  }))

  const { data, error } = await supabase
    .from('posts')
    .insert(payload)
    .select()

  if (error) {
    console.error('Error seeding initial posts to Supabase:', error.message)
    throw new Error(error.message)
  }

  return (data || []).map(formatPostFromDb)
}
