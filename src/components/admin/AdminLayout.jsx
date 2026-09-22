import { Link, useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase.js'
import './AdminLayout.css'

export default function AdminLayout({ children, user }) {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      navigate('/admin/login')
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  const isPostsPage = location.pathname === '/admin' || location.pathname.startsWith('/admin/posts')

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <Link to="/admin" className="admin-brand">
          <div className="admin-brand-logo">L</div>
          <div className="admin-brand-text">
            <span className="admin-brand-title">Luxe Horizons</span>
            <span className="admin-brand-subtitle">Editorial Portal</span>
          </div>
        </Link>

        <nav className="admin-nav">
          <Link
            to="/admin"
            className={`admin-nav-item ${isPostsPage ? 'active' : ''}`}
          >
            <span>Journal Articles</span>
          </Link>
          <Link
            to="/admin/posts/new"
            className="admin-nav-item"
          >
            <span>New Article</span>
          </Link>
          <Link
            to="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="admin-nav-item"
          >
            <span>View Public Site &rarr;</span>
          </Link>
        </nav>

        <div className="admin-user-bar">
          <div className="admin-user-badge">
            <span className="admin-user-avatar">
              {(user?.email || 'A').charAt(0).toUpperCase()}
            </span>
            <span className="admin-user-email">{user?.email || 'Admin'}</span>
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            className="admin-btn-logout"
            title="Sign out of Admin Dashboard"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="admin-container">{children}</main>
    </div>
  )
}
