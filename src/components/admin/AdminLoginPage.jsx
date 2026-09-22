import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../../lib/supabase.js'
import Seo from '../Seo.jsx'
import './AdminLayout.css'

export default function AdminLoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [mode, setMode] = useState('login') // 'login' | 'signup' | 'forgot'
  const [infoMsg, setInfoMsg] = useState('')

  useEffect(() => {
    // Check if user is already authenticated
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate('/admin', { replace: true })
      }
    })
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setInfoMsg('')

    if (mode === 'signup' && password !== confirmPassword) {
      setErrorMsg('Passwords do not match. Please verify your passwords.')
      return
    }

    setLoading(true)

    try {
      if (mode === 'login') {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: password
        })

        if (error) {
          setErrorMsg(error.message)
        } else if (data?.user) {
          navigate('/admin', { replace: true })
        }
      } else if (mode === 'signup') {
        // Sign Up Mode
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password: password
        })

        if (error) {
          setErrorMsg(error.message)
        } else if (data?.user) {
          setInfoMsg('Account created successfully! Check your email to confirm registration or sign in.')
          setMode('login')
          setPassword('')
          setConfirmPassword('')
        }
      } else if (mode === 'forgot') {
        // Forgot Password Mode
        const redirectUrl = `${window.location.origin}/admin/reset-password`
        const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: redirectUrl
        })

        if (error) {
          setErrorMsg(error.message)
        } else {
          setInfoMsg(`Password reset instructions sent to ${email.trim()}. Please check your email inbox.`)
        }
      }
    } catch (err) {
      setErrorMsg(err.message || 'Authentication error occurred.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-layout" style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
      <Seo title="Admin Login — Luxe Horizons Africa" description="Admin portal login for Luxe Horizons Africa." />

      <div className="admin-card" style={{ maxWidth: '440px', width: '100%', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div
            className="admin-brand-logo"
            style={{ margin: '0 auto 16px', width: '54px', height: '54px', fontSize: '26px' }}
          >
            L
          </div>
          <h1 className="admin-heading" style={{ fontSize: '26px' }}>
            {mode === 'login' ? 'Admin Portal' : mode === 'signup' ? 'Create Admin Account' : 'Reset Password'}
          </h1>
          <p className="admin-subheading">
            {mode === 'login'
              ? 'Sign in to manage blog posts and journal content'
              : mode === 'signup'
              ? 'Register administrator credentials for Supabase'
              : 'Enter your account email to receive a password reset link'}
          </p>
        </div>

        {errorMsg && (
          <div className="admin-alert admin-alert-error">
            <span>{errorMsg}</span>
          </div>
        )}

        {infoMsg && (
          <div className="admin-alert admin-alert-success">
            <span>{infoMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label className="admin-label" htmlFor="admin-email">
              Email Address
            </label>
            <input
              id="admin-email"
              type="email"
              required
              className="admin-input"
              placeholder="admin@luxehorizons.africa"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {mode !== 'forgot' && (
            <>
              <div className="admin-form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label className="admin-label" htmlFor="admin-password" style={{ margin: 0 }}>
                    Password
                  </label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => {
                        setMode('forgot')
                        setErrorMsg('')
                        setInfoMsg('')
                      }}
                      style={{ background: 'none', border: 'none', color: '#c6a15b', fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div style={{ position: 'relative' }}>
                  <input
                    id="admin-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    className="admin-input"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ paddingRight: '40px' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
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
                    title={showPassword ? 'Hide password' : 'Show password'}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '👁️' : '🙈'}
                  </button>
                </div>
              </div>

              {mode === 'signup' && (
                <div className="admin-form-group">
                  <label className="admin-label" htmlFor="admin-confirm-password">
                    Confirm Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      id="admin-confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
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
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
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
                      title={showConfirmPassword ? 'Hide password' : 'Show password'}
                      aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                    >
                      {showConfirmPassword ? '👁️' : '🙈'}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="admin-btn-primary"
            style={{ width: '100%', padding: '14px', marginTop: '12px' }}
          >
            {loading
              ? 'Processing...'
              : mode === 'login'
              ? 'Sign In to Dashboard'
              : mode === 'signup'
              ? 'Register Account'
              : 'Send Reset Email'}
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '13px', color: 'rgba(246,241,231,0.6)' }}>
          {mode === 'login' && (
            <p>
              Need an admin account?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('signup')
                  setErrorMsg('')
                  setInfoMsg('')
                }}
                style={{ background: 'none', border: 'none', color: '#c6a15b', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Sign up here
              </button>
            </p>
          )}

          {mode === 'signup' && (
            <p>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('login')
                  setErrorMsg('')
                  setInfoMsg('')
                }}
                style={{ background: 'none', border: 'none', color: '#c6a15b', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Sign in here
              </button>
            </p>
          )}

          {mode === 'forgot' && (
            <p>
              Remembered your password?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('login')
                  setErrorMsg('')
                  setInfoMsg('')
                }}
                style={{ background: 'none', border: 'none', color: '#c6a15b', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Return to Sign In
              </button>
            </p>
          )}
        </div>

        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(246,241,231,0.08)', textAlign: 'center' }}>
          <Link to="/blog" style={{ fontSize: '12px', color: 'rgba(246,241,231,0.4)', textDecoration: 'none' }}>
            ← Return to Luxe Horizons Public Site
          </Link>
        </div>
      </div>
    </div>
  )
}
