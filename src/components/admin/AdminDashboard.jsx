import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  fetchAdminPosts,
  deletePost,
  togglePostPublished,
  seedInitialPosts
} from '../../services/blogService.js'
import Seo from '../Seo.jsx'
import './AdminLayout.css'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [seeding, setSeeding] = useState(false)
  const [deletingId, setDeletingId] = useState(null)

  const loadPosts = async () => {
    setLoading(true)
    setErrorMsg('')
    try {
      const data = await fetchAdminPosts()
      setPosts(data)
    } catch (err) {
      setErrorMsg(err.message || 'Failed to fetch posts from database.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const handleTogglePublished = async (post) => {
    try {
      const updated = await togglePostPublished(post.id, !post.published)
      setPosts((prev) => prev.map((p) => (p.id === post.id ? updated : p)))
      setSuccessMsg(`Post "${post.title}" status updated to ${updated.published ? 'Published' : 'Draft'}.`)
      setTimeout(() => setSuccessMsg(''), 4000)
    } catch (err) {
      setErrorMsg(`Failed to update status: ${err.message}`)
    }
  }

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      return
    }

    setDeletingId(id)
    try {
      await deletePost(id)
      setPosts((prev) => prev.filter((p) => p.id !== id))
      setSuccessMsg(`Article "${title}" deleted successfully.`)
      setTimeout(() => setSuccessMsg(''), 4000)
    } catch (err) {
      setErrorMsg(`Failed to delete post: ${err.message}`)
    } finally {
      setDeletingId(null)
    }
  }

  const handleSeedData = async () => {
    setSeeding(true)
    setErrorMsg('')
    try {
      const seeded = await seedInitialPosts()
      setSuccessMsg(`Successfully seeded ${seeded.length} default journal articles into Supabase!`)
      await loadPosts()
      setTimeout(() => setSuccessMsg(''), 4000)
    } catch (err) {
      setErrorMsg(`Seeding failed: ${err.message}`)
    } finally {
      setSeeding(false)
    }
  }

  // Derived filtered posts & metrics
  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))]
  const filteredPosts = posts.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const totalCount = posts.length
  const publishedCount = posts.filter((p) => p.published).length
  const draftCount = posts.filter((p) => !p.published).length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Seo title="Admin Dashboard — Journal Articles | Luxe Horizons" description="Manage blog articles in Supabase." />

      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 className="admin-heading">Journal Articles</h1>
          <p className="admin-subheading">Manage, edit, publish, and create field notes for Luxe Horizons Africa</p>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {posts.length === 0 && !loading && (
            <button
              type="button"
              disabled={seeding}
              onClick={handleSeedData}
              className="admin-btn-secondary"
            >
              {seeding ? 'Seeding Database...' : 'Seed Default Articles'}
            </button>
          )}

          <Link to="/admin/posts/new" className="admin-btn-primary">
            <span>+ Create New Article</span>
          </Link>
        </div>
      </div>

      {/* Notifications */}
      {errorMsg && (
        <div className="admin-alert admin-alert-error">
          <span>{errorMsg}</span>
          <button
            onClick={() => setErrorMsg('')}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            &times;
          </button>
        </div>
      )}

      {successMsg && (
        <div className="admin-alert admin-alert-success">
          <span>{successMsg}</span>
          <button
            onClick={() => setSuccessMsg('')}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            &times;
          </button>
        </div>
      )}

      {/* Stat Overview Cards */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <span className="admin-stat-label">Total Articles</span>
          <span className="admin-stat-val">{totalCount}</span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-label">Published</span>
          <span className="admin-stat-val" style={{ color: '#75e093' }}>
            {publishedCount}
          </span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-label">Drafts</span>
          <span className="admin-stat-val" style={{ color: '#ffb347' }}>
            {draftCount}
          </span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-label">Categories</span>
          <span className="admin-stat-val">{categories.length - 1}</span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="admin-card" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '240px' }}>
            <input
              type="text"
              className="admin-input"
              placeholder="Search by title, author, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`admin-btn-secondary ${selectedCategory === cat ? 'active' : ''}`}
                style={{
                  padding: '8px 14px',
                  fontSize: '12px',
                  borderColor: selectedCategory === cat ? '#c6a15b' : undefined,
                  color: selectedCategory === cat ? '#c6a15b' : undefined
                }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div className="admin-card" style={{ padding: '0', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center', color: 'rgba(246,241,231,0.6)' }}>
            <p>Loading articles from Supabase...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', color: 'rgba(246,241,231,0.7)', marginBottom: '16px' }}>
              No articles found.
            </p>
            {posts.length === 0 && (
              <button type="button" onClick={handleSeedData} className="admin-btn-primary">
                Seed Initial Journal Content
              </button>
            )}
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: 'rgba(11, 12, 14, 0.6)', borderBottom: '1px solid rgba(246,241,231,0.1)' }}>
                  <th style={{ padding: '16px 20px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c6a15b' }}>Article</th>
                  <th style={{ padding: '16px 20px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c6a15b' }}>Category</th>
                  <th style={{ padding: '16px 20px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c6a15b' }}>Author</th>
                  <th style={{ padding: '16px 20px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c6a15b' }}>Date</th>
                  <th style={{ padding: '16px 20px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c6a15b' }}>Status</th>
                  <th style={{ padding: '16px 20px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c6a15b', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr
                    key={post.id || post.key}
                    style={{ borderBottom: '1px solid rgba(246,241,231,0.06)', transition: 'background 0.2s' }}
                  >
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <img
                          src={post.image}
                          alt={post.title}
                          style={{ width: '56px', height: '42px', borderRadius: '6px', objectFit: 'cover', background: '#141f19' }}
                        />
                        <div>
                          <div style={{ fontWeight: '600', color: '#f6f1e7', marginBottom: '2px' }}>
                            {post.title}
                          </div>
                          <div style={{ fontSize: '12px', color: 'rgba(246,241,231,0.5)' }}>
                            Key: {post.key}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td style={{ padding: '16px 20px' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '11px',
                          fontWeight: '600',
                          background: `${post.accent}20`,
                          color: post.accent || '#c6a15b',
                          border: `1px solid ${post.accent}40`
                        }}
                      >
                        {post.category}
                      </span>
                    </td>

                    <td style={{ padding: '16px 20px', color: 'rgba(246,241,231,0.8)' }}>
                      {post.author}
                    </td>

                    <td style={{ padding: '16px 20px', color: 'rgba(246,241,231,0.6)', fontSize: '13px' }}>
                      {post.date}
                    </td>

                    <td style={{ padding: '16px 20px' }}>
                      <button
                        type="button"
                        onClick={() => handleTogglePublished(post)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '11px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          background: post.published ? 'rgba(40, 167, 69, 0.15)' : 'rgba(255, 179, 71, 0.15)',
                          color: post.published ? '#75e093' : '#ffb347',
                          border: post.published ? '1px solid rgba(40, 167, 69, 0.3)' : '1px solid rgba(255, 179, 71, 0.3)'
                        }}
                        title="Click to toggle publish status"
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: post.published ? '#75e093' : '#ffb347' }} />
                        {post.published ? 'Published' : 'Draft'}
                      </button>
                    </td>

                    <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <Link
                          to={`/blog?story=${post.key}`}
                          target="_blank"
                          className="admin-btn-secondary"
                          style={{ padding: '6px 10px', fontSize: '12px' }}
                          title="Preview Post"
                        >
                          View
                        </Link>
                        <button
                          type="button"
                          onClick={() => navigate(`/admin/posts/edit/${post.id}`)}
                          className="admin-btn-secondary"
                          style={{ padding: '6px 10px', fontSize: '12px' }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          disabled={deletingId === post.id}
                          onClick={() => handleDelete(post.id, post.title)}
                          className="admin-btn-danger"
                        >
                          {deletingId === post.id ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
