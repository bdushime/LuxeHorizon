import { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { blogPosts as initialPosts } from '../data/content.js'
import { supabase } from '../lib/supabase.js'
import Seo from './Seo.jsx'
import { PAGE_SEO, generateBreadcrumbSchema } from '../config/seo.js'
import './BlogPage.css'

// Deterministic little tilts so the "deal" reads like cards fanning out of a
// hand rather than a perfectly uniform grid snapping into place.
const ROTATIONS = [-7, 5, -3, 8, -5, 4, -8, 6]

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [posts, setPosts] = useState(initialPosts)
  const [loading, setLoading] = useState(true)

  // Fetch blog posts from Supabase Database with local fallback
  useEffect(() => {
    async function loadPostsFromSupabase() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false })

        if (error) {
          console.warn('Supabase fetch error, using local fallback:', error.message)
          return
        }

        if (data && data.length > 0) {
          // Map database snake_case fields to camelCase used in React component
          const formatted = data.map((p) => ({
            id: p.id,
            key: p.key,
            title: p.title,
            category: p.category,
            date: p.date,
            readTime: p.read_time || p.readTime || '5 min read',
            author: p.author,
            authorRole: p.author_role || p.authorRole || '',
            excerpt: p.excerpt,
            image: p.image,
            accent: p.accent || '#5c6b4f',
            quote: p.quote,
            takeaway: p.takeaway,
            paragraphs: p.paragraphs || [],
            highlights: p.highlights || []
          }))
          setPosts(formatted)
          console.log(`[Supabase] Successfully fetched ${formatted.length} posts from Supabase database.`)
        }
      } catch (err) {
        console.warn('Could not connect to Supabase, using local fallback:', err)
      } finally {
        setLoading(false)
      }
    }

    loadPostsFromSupabase()
  }, [])

  const categories = useMemo(() => Array.from(new Set(posts.map((p) => p.category))), [posts])
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedPost, setSelectedPost] = useState(null)

  // Open modal if story key is passed in URL query param ?story=key
  useEffect(() => {
    const storyKey = searchParams.get('story')
    if (storyKey) {
      const match = posts.find((p) => p.key === storyKey)
      if (match) setSelectedPost(match)
    }
  }, [searchParams, posts])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedPost])

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const openStory = (post, e) => {
    if (e) e.preventDefault()
    setSelectedPost(post)
    setSearchParams({ story: post.key }, { replace: true })
  }

  const closeModal = () => {
    setSelectedPost(null)
    setSearchParams({}, { replace: true })
  }

  const filteredPosts =
    activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory)

  // Prev / Next story navigation inside modal
  const currentIndex = selectedPost ? posts.findIndex((p) => p.key === selectedPost.key) : -1
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : posts[posts.length - 1]
  const nextPost =
    currentIndex >= 0 && currentIndex < posts.length - 1
      ? posts[currentIndex + 1]
      : posts[0]


  const seoTitle = selectedPost
    ? `${selectedPost.title} — ${selectedPost.category} | Luxe Horizons Africa`
    : PAGE_SEO.blog.title
  const seoDescription = selectedPost
    ? selectedPost.excerpt
    : PAGE_SEO.blog.description
  const seoImage = selectedPost ? selectedPost.image : PAGE_SEO.blog.ogImage

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ]
  if (selectedPost) {
    breadcrumbs.push({ name: selectedPost.title, url: `/blog?story=${selectedPost.key}` })
  }

  return (
    <section className="bp-page">
      <Seo
        title={seoTitle}
        description={seoDescription}
        image={seoImage}
        schema={generateBreadcrumbSchema(breadcrumbs)}
      />

      <div className="wrap bp-head">
        <div className="bp-head-copy">
          <div className="eyebrow">The Journal</div>
          <h1>Stories &amp; Field Notes</h1>
          <p>Guides, culture and conservation dispatches from Rwanda, Uganda and Tanzania.</p>
        </div>
        <div className="bp-head-deck" aria-hidden="true">
          <span className="bp-deck-card back2" />
          <span className="bp-deck-card back1" />
          <span className="bp-deck-card front">{posts.length}</span>
        </div>
      </div>

      <div className="wrap bp-layout">
        <aside className="bp-sidebar">
          <div className="bp-sidebar-inner">
            <div className="bp-sidebar-label">Browse By</div>
            <button
              type="button"
              className={`bp-filter ${activeCategory === 'All' ? 'active' : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              <span className="bp-filter-dot all" />
              <span className="bp-filter-name">All Stories</span>
              <span className="bp-filter-count">{posts.length}</span>
            </button>
            {categories.map((cat) => {
              const match = posts.find((p) => p.category === cat)
              const count = posts.filter((p) => p.category === cat).length
              return (
                <button
                  key={cat}
                  type="button"
                  className={`bp-filter ${activeCategory === cat ? 'active' : ''}`}
                  style={{ '--accent': match?.accent }}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span className="bp-filter-dot" />
                  <span className="bp-filter-name">{cat}</span>
                  <span className="bp-filter-count">{count}</span>
                </button>
              )
            })}
          </div>
        </aside>

        <div className="bp-grid">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <motion.a
                key={post.key}
                href={`?story=${post.key}`}
                onClick={(e) => openStory(post, e)}
                layout
                className="bp-card cursor-pointer"
                initial={{ opacity: 0, y: -70, scale: 0.4, rotate: ROTATIONS[i % ROTATIONS.length] }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, y: 50, scale: 0.55, rotate: ROTATIONS[i % ROTATIONS.length] }}
                transition={{ type: 'spring', stiffness: 260, damping: 24, delay: i * 0.045 }}
              >
                <div className="bp-card-media">
                  <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
                </div>
                <div className="bp-card-body">
                  <div className="bp-card-meta">
                    <span className="bp-card-category" style={{ color: post.accent }}>
                      {post.category}
                    </span>
                    <span className="bp-card-dot" />
                    <span className="bp-card-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="bp-card-link" style={{ color: post.accent }}>
                    Read the story →
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Full Article Story Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="bpm-overlay" onClick={closeModal}>
            <motion.div
              className="bpm-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            <div className="bpm-wrapper">
              <motion.div
                className="bpm-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="bpm-title"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="bpm-close"
                  onClick={closeModal}
                  aria-label="Close story"
                >
                  ✕
                </button>

                <div className="bpm-hero">
                  <img src={selectedPost.image} alt={selectedPost.title} className="bpm-hero-img" loading="lazy" decoding="async" />
                  <div className="bpm-hero-overlay" />
                  <div className="bpm-hero-content">
                    <div className="bpm-meta">
                      <span className="bpm-category" style={{ backgroundColor: selectedPost.accent }}>
                        {selectedPost.category}
                      </span>
                      <span className="bpm-dot" />
                      <span className="bpm-date">{selectedPost.date}</span>
                      <span className="bpm-dot" />
                      <span className="bpm-time">{selectedPost.readTime || '5 min read'}</span>
                    </div>
                    <h2 id="bpm-title">{selectedPost.title}</h2>
                  </div>
                </div>

                <div className="bpm-body">
                  {selectedPost.author && (
                    <div className="bpm-author-bar">
                      <div className="bpm-author-avatar" style={{ backgroundColor: selectedPost.accent }}>
                        {selectedPost.author.charAt(0)}
                      </div>
                      <div className="bpm-author-info">
                        <span className="bpm-author-name">{selectedPost.author}</span>
                        <span className="bpm-author-role">{selectedPost.authorRole}</span>
                      </div>
                    </div>
                  )}

                  <p className="bpm-lead">{selectedPost.excerpt}</p>

                  {selectedPost.quote && (
                    <blockquote className="bpm-quote" style={{ borderLeftColor: selectedPost.accent }}>
                      <p>“{selectedPost.quote}”</p>
                    </blockquote>
                  )}

                  {selectedPost.paragraphs?.map((p, idx) => (
                    <p key={idx} className="bpm-paragraph">
                      {p}
                    </p>
                  ))}

                  {selectedPost.takeaway && (
                    <div className="bpm-takeaway" style={{ '--accent': selectedPost.accent }}>
                      <div className="bpm-takeaway-header">
                        <span className="bpm-takeaway-badge">Field Note</span>
                      </div>
                      <div className="bpm-takeaway-text">{selectedPost.takeaway}</div>
                    </div>
                  )}

                  {selectedPost.highlights && (
                    <div className="bpm-highlights">
                      <h4>Essential Tips &amp; Checklist</h4>
                      <ul>
                        {selectedPost.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bpm-divider" />

                  <div className="bpm-footer">
                    <div className="bpm-footer-cta">
                      <div>
                        <h4>Inspired by this story?</h4>
                        <p>Speak to our trip designers to customize your tailored East Africa itinerary.</p>
                      </div>
                      <Link to="/contact" className="bpm-cta-btn" onClick={closeModal}>
                        Plan Your Journey &rarr;
                      </Link>
                    </div>

                    <div className="bpm-nav">
                      {prevPost && (
                        <button
                          type="button"
                          className="bpm-nav-btn prev"
                          onClick={() => openStory(prevPost)}
                        >
                          <span className="bpm-nav-label">&larr; Previous Story</span>
                          <span className="bpm-nav-title">{prevPost.title}</span>
                        </button>
                      )}
                      {nextPost && (
                        <button
                          type="button"
                          className="bpm-nav-btn next"
                          onClick={() => openStory(nextPost)}
                        >
                          <span className="bpm-nav-label">Next Story &rarr;</span>
                          <span className="bpm-nav-title">{nextPost.title}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

