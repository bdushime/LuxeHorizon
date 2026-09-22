import { Link, useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase.js'
import './AdminLayout.css'

export default function AdminLayout({ children, user }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [pwLoading, setPwLoading] = useState(false)
  const [pwError, setPwError] = useState('')
  const [pwSuccess, setPwSuccess] = useState('')

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      navigate('/admin/login')
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  const handleUpdatePassword = async (e) => {
    e.preventDefault()
    setPwError('')
    setPwSuccess('')

    if (newPassword.length < 6) {
      setPwError('Password must be at least 6 characters long.')
      return
    }

    if (newPassword !== confirmPassword) {
      setPwError('Passwords do not match.')
      return
    }

    setPwLoading(true)

    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword })
      if (error) {
        setPwError(error.message)
      } else {
        setPwSuccess('Password updated successfully!')
        setNewPassword('')
        setConfirmPassword('')
        setTimeout(() => {
          setShowPasswordModal(false)
          setPwSuccess('')
        }, 1800)
      }
    } catch (err) {
      setPwError(err.message || 'Failed to update password.')
    } finally {
      setPwLoading(false)
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
            onClick={() => {
              setShowPasswordModal(true)
              setPwError('')
              setPwSuccess('')
            }}
            className="admin-btn-logout"
            style={{ color: '#c6a15b', borderColor: 'rgba(198, 161, 91, 0.3)' }}
            title="Reset or Change Password"
          >
            Password Reset
          </button>
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

      {/* Change Password Modal Overlay */}
      {showPasswordModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setShowPasswordModal(false)}
        >
          <div
            className="admin-card"
            style={{ maxWidth: '420px', width: '100%', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 className="admin-heading" style={{ fontSize: '20px' }}>Reset Admin Password</h3>
              <button
                type="button"
                onClick={() => setShowPasswordModal(false)}
                style={{ background: 'none', border: 'none', color: '#f6f1e7', fontSize: '18px', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            {pwError && (
              <div className="admin-alert admin-alert-error">
                <span>{pwError}</span>
              </div>
            )}
            {pwSuccess && (
              <div className="admin-alert admin-alert-success">
                <span>{pwSuccess}</span>
              </div>
            )}

            <form onSubmit={handleUpdatePassword}>
              <div className="admin-form-group">
                <label className="admin-label">New Password</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  className="admin-input"
                  placeholder="••••••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Confirm New Password</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  className="admin-input"
                  placeholder="••••••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="admin-btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={pwLoading}
                  className="admin-btn-primary"
                >
                  {pwLoading ? 'Saving...' : 'Update Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <main className="admin-container">{children}</main>
    </div>
  )
}
