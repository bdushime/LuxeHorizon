import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../../lib/supabase.js'
import Seo from '../Seo.jsx'
import './AdminLayout.css'

export default function AdminLoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [mode, setMode] = useState('login') // 'login' | 'signup'
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
      } else {
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
            {mode === 'login' ? 'Admin Portal' : 'Create Admin Account'}
          </h1>
          <p className="admin-subheading">
            {mode === 'login'
              ? 'Sign in to manage blog posts and journal content'
              : 'Register administrator credentials for Supabase'}
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

          <div className="admin-form-group">
            <label className="admin-label" htmlFor="admin-password">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              required
              minLength={6}
              className="admin-input"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="admin-btn-primary"
            style={{ width: '100%', padding: '14px', marginTop: '12px' }}
          >
            {loading ? 'Authenticating...' : mode === 'login' ? 'Sign In to Dashboard' : 'Register Account'}
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '13px', color: 'rgba(246,241,231,0.6)' }}>
          {mode === 'login' ? (
            <p>
              Need an admin account?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('signup')
                  setErrorMsg('')
                }}
                style={{ background: 'none', border: 'none', color: '#c6a15b', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Sign up here
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('login')
                  setErrorMsg('')
                }}
                style={{ background: 'none', border: 'none', color: '#c6a15b', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Sign in here
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
