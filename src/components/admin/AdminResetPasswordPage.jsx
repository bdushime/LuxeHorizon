import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../../lib/supabase.js'
import Seo from '../Seo.jsx'
import './AdminLayout.css'

export default function AdminResetPasswordPage() {
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const [showNewPw, setShowNewPw] = useState(false)
  const [showConfirmPw, setShowConfirmPw] = useState(false)

  useEffect(() => {
    // Listen for auth state change or recovery token from Supabase URL hash
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        console.log('[Auth] Password recovery event triggered.')
      }
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  const handlePasswordReset = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setSuccessMsg('')

    if (newPassword.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.')
      return
    }

    if (newPassword !== confirmPassword) {
      setErrorMsg('Passwords do not match.')
      return
    }

    setLoading(true)

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      })

      if (error) {
        setErrorMsg(error.message)
      } else {
        setSuccessMsg('Your password has been updated successfully! Redirecting to admin dashboard...')
        setTimeout(() => {
          navigate('/admin', { replace: true })
        }, 2000)
      }
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred while resetting your password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-layout" style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
      <Seo title="Reset Password — Luxe Horizons Admin" description="Set a new password for your admin account." />

      <div className="admin-card" style={{ maxWidth: '440px', width: '100%', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div
            className="admin-brand-logo"
            style={{ margin: '0 auto 16px', width: '54px', height: '54px', fontSize: '26px' }}
          >
            L
          </div>
          <h1 className="admin-heading" style={{ fontSize: '24px' }}>
            Set New Password
          </h1>
          <p className="admin-subheading">
            Enter your new password below to regain access to the admin portal.
          </p>
        </div>

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

        <form onSubmit={handlePasswordReset}>
          <div className="admin-form-group">
            <label className="admin-label" htmlFor="new-password">
              New Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="new-password"
                type={showNewPw ? 'text' : 'password'}
                required
                minLength={6}
                className="admin-input"
                placeholder="••••••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{ paddingRight: '40px' }}
              />
              <button
                type="button"
                onClick={() => setShowNewPw((prev) => !prev)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(246, 241, 231, 0.6)',
                  cursor: 'pointer',
                  padding: '4px',
                  fontSize: '15px'
                }}
                title={showNewPw ? 'Hide password' : 'Show password'}
              >
                {showNewPw ? '👁️' : '🙈'}
              </button>
            </div>
          </div>

          <div className="admin-form-group">
            <label className="admin-label" htmlFor="confirm-password">
              Confirm New Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="confirm-password"
                type={showConfirmPw ? 'text' : 'password'}
                required
                minLength={6}
                className="admin-input"
                placeholder="••••••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ paddingRight: '40px' }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPw((prev) => !prev)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(246, 241, 231, 0.6)',
                  cursor: 'pointer',
                  padding: '4px',
                  fontSize: '15px'
                }}
                title={showConfirmPw ? 'Hide password' : 'Show password'}
              >
                {showConfirmPw ? '👁️' : '🙈'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="admin-btn-primary"
            style={{ width: '100%', padding: '14px', marginTop: '12px' }}
          >
            {loading ? 'Updating Password...' : 'Update Password'}
          </button>
        </form>

        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(246,241,231,0.08)', textAlign: 'center' }}>
          <Link to="/admin/login" style={{ fontSize: '13px', color: '#c6a15b', textDecoration: 'none' }}>
            ← Back to Admin Login
          </Link>
        </div>
      </div>
    </div>
  )
}
