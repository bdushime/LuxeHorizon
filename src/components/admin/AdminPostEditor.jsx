import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import {
  fetchPostById,
  createPost,
  updatePost,
  uploadPostImage
} from '../../services/blogService.js'
import Seo from '../Seo.jsx'
import './AdminLayout.css'
import '../BlogPage.css'

const CATEGORY_OPTIONS = [
  'Safari',
  'Gorilla Trekking',
  'Conservation',
  'Culture & Heritage',
  'Luxury Travel',
  'Field Notes'
]

const ACCENT_COLORS = [
  { label: 'Sage Green', hex: '#5c6b4f' },
  { label: 'Savannah Gold', hex: '#c6a15b' },
  { label: 'Volcanic Clay', hex: '#9c4a32' },
  { label: 'Emerald Forest', hex: '#234a44' },
  { label: 'Warm Ochre', hex: '#b9772e' }
]

export default function AdminPostEditor() {
  const { id } = useParams()
  const isEditing = Boolean(id)
  const navigate = useNavigate()

  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  // Preview State
  const [showPreview, setShowPreview] = useState(false)
  const [previewMode, setPreviewMode] = useState('modal') // 'modal' | 'card'

  // Form State
  const [title, setTitle] = useState('')
  const [key, setKey] = useState('')
  const [category, setCategory] = useState('Safari')
  const [accent, setAccent] = useState('#5c6b4f')
  const [date, setDate] = useState(
    new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  )
  const [readTime, setReadTime] = useState('5 min read')
  const [author, setAuthor] = useState('Luxe Horizons Team')
  const [authorRole, setAuthorRole] = useState('Senior Travel Specialist')
  const [image, setImage] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [quote, setQuote] = useState('')
  const [takeaway, setTakeaway] = useState('')
  const [paragraphs, setParagraphs] = useState([''])
  const [highlights, setHighlights] = useState([''])
  const [published, setPublished] = useState(true)

  // Load existing post if editing
  useEffect(() => {
    if (isEditing && id) {
      setLoading(true)
      fetchPostById(id)
        .then((data) => {
          if (data) {
            setTitle(data.title || '')
            setKey(data.key || '')
            setCategory(data.category || 'Safari')
            setAccent(data.accent || '#5c6b4f')
            setDate(data.date || '')
            setReadTime(data.readTime || '5 min read')
            setAuthor(data.author || '')
            setAuthorRole(data.authorRole || '')
            setImage(data.image || '')
            setExcerpt(data.excerpt || '')
            setQuote(data.quote || '')
            setTakeaway(data.takeaway || '')
            setParagraphs(data.paragraphs?.length ? data.paragraphs : [''])
            setHighlights(data.highlights?.length ? data.highlights : [''])
            setPublished(data.published ?? true)
          }
        })
        .catch((err) => {
          setErrorMsg(`Failed to load article details: ${err.message}`)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [isEditing, id])

  // Auto-slug key generator when title changes (if creating new)
  const handleTitleChange = (val) => {
    setTitle(val)
    if (!isEditing && (!key || key === title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))) {
      setKey(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''))
    }
  }

  // Handle Image Upload to Supabase Storage
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    setErrorMsg('')
    try {
      const publicUrl = await uploadPostImage(file)
      setImage(publicUrl)
      setSuccessMsg('Image uploaded to Supabase Storage successfully!')
      setTimeout(() => setSuccessMsg(''), 4000)
    } catch (err) {
      setErrorMsg(`Image upload failed: ${err.message}`)
    } finally {
      setUploadingImage(false)
    }
  }

  // Dynamic Array Helpers: Paragraphs
  const handleParagraphChange = (index, val) => {
    const next = [...paragraphs]
    next[index] = val
    setParagraphs(next)
  }
  const addParagraph = () => setParagraphs([...paragraphs, ''])
  const removeParagraph = (index) => setParagraphs(paragraphs.filter((_, i) => i !== index))

  // Dynamic Array Helpers: Highlights
  const handleHighlightChange = (index, val) => {
    const next = [...highlights]
    next[index] = val
    setHighlights(next)
  }
  const addHighlight = () => setHighlights([...highlights, ''])
  const removeHighlight = (index) => setHighlights(highlights.filter((_, i) => i !== index))

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setSuccessMsg('')

    if (!title.trim() || !key.trim() || !excerpt.trim() || !image.trim()) {
      setErrorMsg('Please fill in required fields: Title, Key/Slug, Excerpt, and Image.')
      return
    }

    setSaving(true)

    const postPayload = {
      title: title.trim(),
      key: key.trim(),
      category,
      accent,
      date,
      readTime,
      author,
      authorRole,
      image: image.trim(),
      excerpt: excerpt.trim(),
      quote: quote.trim() || null,
      takeaway: takeaway.trim() || null,
      paragraphs: paragraphs.filter((p) => p.trim() !== ''),
      highlights: highlights.filter((h) => h.trim() !== ''),
      published
    }

    try {
      if (isEditing) {
        await updatePost(id, postPayload)
        setSuccessMsg('Article updated successfully!')
      } else {
        await createPost(postPayload)
        setSuccessMsg('Article created successfully!')
      }

      setTimeout(() => {
        navigate('/admin')
      }, 1000)
    } catch (err) {
      setErrorMsg(`Save failed: ${err.message}`)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div style={{ padding: '60px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(246,241,231,0.6)' }}>Loading post editor...</p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <Seo
        title={`${isEditing ? 'Edit' : 'Create'} Article — Luxe Horizons Admin`}
        description="Editor for Luxe Horizons blog posts."
      />

      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Link to="/admin" style={{ fontSize: '12px', color: '#c6a15b', textDecoration: 'none' }}>
            ← Back to Journal Dashboard
          </Link>
          <h1 className="admin-heading" style={{ marginTop: '6px' }}>
            {isEditing ? 'Edit Journal Article' : 'Create New Journal Article'}
          </h1>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            type="button"
            onClick={() => setShowPreview(true)}
            className="admin-btn-secondary"
            style={{ color: '#c6a15b', borderColor: 'rgba(198, 161, 91, 0.4)' }}
          >
            👁️ Preview Article
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="admin-btn-secondary"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={saving}
            className="admin-btn-primary"
          >
            {saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Publish Article'}
          </button>
        </div>
      </div>

      {/* Alerts */}
      {errorMsg && (
        <div className="admin-alert admin-alert-error">
          <span>{errorMsg}</span>
        </div>
      )}
      {successMsg && (
        <div className="admin-alert admin-alert-success">
          <span>{successMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Basic Information Card */}
        <div className="admin-card">
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', marginBottom: '20px', color: '#c6a15b' }}>
            1. Core Details
          </h3>

          <div className="admin-form-group">
            <label className="admin-label" htmlFor="post-title">
              Article Title *
            </label>
            <input
              id="post-title"
              type="text"
              required
              className="admin-input"
              placeholder="e.g. Gorilla Trekking in Volcanoes National Park"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="post-key">
                URL Key / Slug *
              </label>
              <input
                id="post-key"
                type="text"
                required
                className="admin-input"
                placeholder="gorilla-trekking-volcanoes"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="post-category">
                Category
              </label>
              <select
                id="post-category"
                className="admin-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="post-date">
                Publication Date
              </label>
              <input
                id="post-date"
                type="text"
                className="admin-input"
                placeholder="Oct 14, 2026"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="post-readtime">
                Read Time
              </label>
              <input
                id="post-readtime"
                type="text"
                className="admin-input"
                placeholder="5 min read"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Theme Accent Color</label>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '6px' }}>
                {ACCENT_COLORS.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    title={c.label}
                    onClick={() => setAccent(c.hex)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: c.hex,
                      border: accent === c.hex ? '2px solid #ffffff' : '1px solid transparent',
                      cursor: 'pointer'
                    }}
                  />
                ))}
                <input
                  type="color"
                  value={accent}
                  onChange={(e) => setAccent(e.target.value)}
                  style={{ width: '32px', height: '32px', border: 'none', background: 'none', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="post-author">
                Author Name
              </label>
              <input
                id="post-author"
                type="text"
                className="admin-input"
                placeholder="Gasana Shema"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="post-author-role">
                Author Role
              </label>
              <input
                id="post-author-role"
                type="text"
                className="admin-input"
                placeholder="Head Conservation Specialist"
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Media & Storage Section */}
        <div className="admin-card">
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', marginBottom: '20px', color: '#c6a15b' }}>
            2. Article Hero Image (Supabase Storage)
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'center' }}>
            <div>
              <div className="admin-form-group">
                <label className="admin-label">Upload Image to Supabase</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={uploadingImage}
                  className="admin-input"
                  style={{ padding: '8px' }}
                />
                {uploadingImage && (
                  <p style={{ fontSize: '12px', color: '#c6a15b', marginTop: '6px' }}>
                    Uploading file to Supabase storage bucket...
                  </p>
                )}
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="post-image-url">
                  Or Paste External Image URL
                </label>
                <input
                  id="post-image-url"
                  type="text"
                  className="admin-input"
                  placeholder="https://..."
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="admin-label">Image Preview</label>
              <div
                style={{
                  width: '100%',
                  height: '160px',
                  borderRadius: '12px',
                  border: '1px dashed rgba(246,241,231,0.2)',
                  overflow: 'hidden',
                  background: 'rgba(11,12,14,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {image ? (
                  <img src={image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontSize: '13px', color: 'rgba(246,241,231,0.4)' }}>No image uploaded</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="admin-card">
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', marginBottom: '20px', color: '#c6a15b' }}>
            3. Article Content & Story
          </h3>

          <div className="admin-form-group">
            <label className="admin-label" htmlFor="post-excerpt">
              Short Excerpt / Teaser *
            </label>
            <textarea
              id="post-excerpt"
              required
              rows={3}
              className="admin-textarea"
              placeholder="Brief summary displayed on story cards..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="post-quote">
                Featured Lead Quote (Optional)
              </label>
              <textarea
                id="post-quote"
                rows={2}
                className="admin-textarea"
                placeholder="“Standing meters away from silverback gorillas...”"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="post-takeaway">
                Field Note Takeaway (Optional)
              </label>
              <textarea
                id="post-takeaway"
                rows={2}
                className="admin-textarea"
                placeholder="Key insight or advisory note..."
                value={takeaway}
                onChange={(e) => setTakeaway(e.target.value)}
              />
            </div>
          </div>

          {/* Paragraphs Manager */}
          <div className="admin-form-group" style={{ marginTop: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <label className="admin-label" style={{ margin: 0 }}>
                Body Paragraphs ({paragraphs.length})
              </label>
              <button
                type="button"
                onClick={addParagraph}
                className="admin-btn-secondary"
                style={{ padding: '4px 10px', fontSize: '12px' }}
              >
                + Add Paragraph
              </button>
            </div>

            {paragraphs.map((p, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <textarea
                  rows={3}
                  className="admin-textarea"
                  placeholder={`Paragraph ${idx + 1}...`}
                  value={p}
                  onChange={(e) => handleParagraphChange(idx, e.target.value)}
                />
                {paragraphs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeParagraph(idx)}
                    className="admin-btn-danger"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Highlights / Checklist */}
          <div className="admin-form-group" style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <label className="admin-label" style={{ margin: 0 }}>
                Essential Checklist & Tips ({highlights.length})
              </label>
              <button
                type="button"
                onClick={addHighlight}
                className="admin-btn-secondary"
                style={{ padding: '4px 10px', fontSize: '12px' }}
              >
                + Add Tip
              </button>
            </div>

            {highlights.map((h, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                <input
                  type="text"
                  className="admin-input"
                  placeholder={`Tip / checklist item ${idx + 1}...`}
                  value={h}
                  onChange={(e) => handleHighlightChange(idx, e.target.value)}
                />
                {highlights.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeHighlight(idx)}
                    className="admin-btn-danger"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Publish Options */}
        <div className="admin-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontWeight: '600', color: '#f6f1e7' }}>Publish Status</span>
            <p style={{ fontSize: '13px', color: 'rgba(246,241,231,0.6)' }}>
              {published ? 'This article will be publicly visible on /blog immediately.' : 'Saved as draft.'}
            </p>
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              style={{ width: '20px', height: '20px', accentColor: '#c6a15b' }}
            />
            <span style={{ fontSize: '14px', fontWeight: '600', color: published ? '#75e093' : '#ffb347' }}>
              {published ? 'Published' : 'Draft'}
            </span>
          </label>
        </div>

        {/* Footer Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
          <button
            type="button"
            onClick={() => setShowPreview(true)}
            className="admin-btn-secondary"
            style={{ color: '#c6a15b', borderColor: 'rgba(198, 161, 91, 0.4)' }}
          >
            👁️ Preview Article
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="admin-btn-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="admin-btn-primary"
            style={{ padding: '12px 28px' }}
          >
            {saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Publish Article'}
          </button>
        </div>
      </form>

      {/* Article Live Preview Overlay */}
      {showPreview && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1100,
            background: 'rgba(11, 12, 14, 0.92)',
            backdropFilter: 'blur(12px)',
            overflowY: 'auto',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Controls Header Bar */}
          <div
            style={{
              maxWidth: '900px',
              width: '100%',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              background: 'rgba(20, 31, 25, 0.9)',
              padding: '16px 24px',
              borderRadius: '16px',
              border: '1px solid rgba(246, 241, 231, 0.15)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: '600', color: '#c6a15b' }}>
                Article Live Preview
              </span>
              <div style={{ display: 'flex', gap: '6px', background: 'rgba(11,12,14,0.6)', padding: '4px', borderRadius: '8px' }}>
                <button
                  type="button"
                  style={{
                    padding: '6px 14px',
                    fontSize: '12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    cursor: 'pointer',
                    background: previewMode === 'modal' ? 'rgba(198, 161, 91, 0.2)' : 'transparent',
                    borderColor: previewMode === 'modal' ? '#c6a15b' : 'transparent',
                    color: previewMode === 'modal' ? '#c6a15b' : 'rgba(246,241,231,0.7)'
                  }}
                  onClick={() => setPreviewMode('modal')}
                >
                  Full Story View
                </button>
                <button
                  type="button"
                  style={{
                    padding: '6px 14px',
                    fontSize: '12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    cursor: 'pointer',
                    background: previewMode === 'card' ? 'rgba(198, 161, 91, 0.2)' : 'transparent',
                    borderColor: previewMode === 'card' ? '#c6a15b' : 'transparent',
                    color: previewMode === 'card' ? '#c6a15b' : 'rgba(246,241,231,0.7)'
                  }}
                  onClick={() => setPreviewMode('card')}
                >
                  Journal Card View
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowPreview(false)}
              className="admin-btn-secondary"
              style={{ padding: '8px 16px', fontSize: '13px' }}
            >
              Close Preview ✕
            </button>
          </div>

          {/* Preview Container */}
          {previewMode === 'card' ? (
            <div style={{ maxWidth: '420px', width: '100%', marginTop: '20px' }}>
              <div className="bp-card cursor-pointer" style={{ background: '#141f19', borderRadius: '16px', border: '1px solid rgba(246,241,231,0.1)', overflow: 'hidden' }}>
                <div className="bp-card-media" style={{ height: '220px', position: 'relative' }}>
                  <img
                    src={image || 'https://images.unsplash.com/photo-1516426122078-c23e76319801'}
                    alt={title || 'Preview'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="bp-card-body" style={{ padding: '24px' }}>
                  <div className="bp-card-meta" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', marginBottom: '10px' }}>
                    <span className="bp-card-category" style={{ color: accent, fontWeight: '600' }}>
                      {category}
                    </span>
                    <span className="bp-card-dot" style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'currentColor', opacity: 0.5 }} />
                    <span className="bp-card-date" style={{ color: 'rgba(246,241,231,0.6)' }}>{date}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', color: '#f6f1e7', marginBottom: '10px', lineHeight: 1.3 }}>
                    {title || 'Untitled Article'}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(246,241,231,0.7)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {excerpt || 'Article summary excerpt teaser will appear here.'}
                  </p>
                  <span className="bp-card-link" style={{ color: accent, fontWeight: '600', fontSize: '13px' }}>
                    Read the story →
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bpm-dialog" style={{ maxWidth: '780px', width: '100%', position: 'relative', margin: '0 auto', background: '#121815', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(246,241,231,0.15)', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
              <div className="bpm-hero" style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
                <img
                  src={image || 'https://images.unsplash.com/photo-1516426122078-c23e76319801'}
                  alt={title}
                  className="bpm-hero-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="bpm-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #121815 0%, rgba(18,24,21,0.4) 60%, transparent 100%)' }} />
                <div className="bpm-hero-content" style={{ position: 'absolute', bottom: '24px', left: '32px', right: '32px' }}>
                  <div className="bpm-meta" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span className="bpm-category" style={{ backgroundColor: accent, padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '700', color: '#0b0c0e', textTransform: 'uppercase' }}>
                      {category}
                    </span>
                    <span className="bpm-dot" />
                    <span className="bpm-date" style={{ color: 'rgba(246,241,231,0.7)', fontSize: '13px' }}>{date}</span>
                    <span className="bpm-dot" />
                    <span className="bpm-time" style={{ color: 'rgba(246,241,231,0.7)', fontSize: '13px' }}>{readTime || '5 min read'}</span>
                  </div>
                  <h2 id="bpm-title" style={{ fontFamily: 'var(--serif)', fontSize: '30px', color: '#f6f1e7', margin: 0, lineHeight: 1.2 }}>
                    {title || 'Untitled Article'}
                  </h2>
                </div>
              </div>

              <div className="bpm-body" style={{ padding: '36px 32px' }}>
                {author && (
                  <div className="bpm-author-bar" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
                    <div className="bpm-author-avatar" style={{ backgroundColor: accent, width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#0b0c0e' }}>
                      {author.charAt(0)}
                    </div>
                    <div className="bpm-author-info">
                      <span className="bpm-author-name" style={{ display: 'block', fontWeight: '600', color: '#f6f1e7' }}>{author}</span>
                      <span className="bpm-author-role" style={{ fontSize: '12px', color: 'rgba(246,241,231,0.6)' }}>{authorRole}</span>
                    </div>
                  </div>
                )}

                {excerpt && <p className="bpm-lead" style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(246,241,231,0.9)', marginBottom: '24px', fontWeight: '500' }}>{excerpt}</p>}

                {quote && (
                  <blockquote className="bpm-quote" style={{ borderLeft: `3px solid ${accent}`, paddingLeft: '20px', fontStyle: 'italic', margin: '24px 0', fontSize: '17px', color: '#c6a15b' }}>
                    <p>“{quote}”</p>
                  </blockquote>
                )}

                {paragraphs.filter(p => p.trim()).map((p, idx) => (
                  <p key={idx} className="bpm-paragraph" style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(246,241,231,0.8)', marginBottom: '18px' }}>
                    {p}
                  </p>
                ))}

                {takeaway && (
                  <div className="bpm-takeaway" style={{ '--accent': accent, background: 'rgba(246,241,231,0.04)', padding: '20px', borderRadius: '12px', borderLeft: `3px solid ${accent}`, margin: '28px 0' }}>
                    <div className="bpm-takeaway-header" style={{ marginBottom: '8px' }}>
                      <span className="bpm-takeaway-badge" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: accent, fontWeight: '700' }}>Field Note</span>
                    </div>
                    <div className="bpm-takeaway-text" style={{ fontSize: '14px', color: 'rgba(246,241,231,0.85)' }}>{takeaway}</div>
                  </div>
                )}

                {highlights.filter(h => h.trim()).length > 0 && (
                  <div className="bpm-highlights" style={{ marginTop: '28px' }}>
                    <h4 style={{ fontFamily: 'var(--serif)', fontSize: '18px', color: '#c6a15b', marginBottom: '12px' }}>Essential Tips &amp; Checklist</h4>
                    <ul style={{ paddingLeft: '20px', color: 'rgba(246,241,231,0.8)', lineHeight: 1.7, fontSize: '14px' }}>
                      {highlights.filter(h => h.trim()).map((h, i) => (
                        <li key={i} style={{ marginBottom: '6px' }}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
