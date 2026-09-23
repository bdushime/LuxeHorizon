import { useState, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { supabase } from '../../lib/supabase.js'
import AdminLayout from './AdminLayout.jsx'
import './AdminLayout.css'

export default function AdminProtectedRoute({ children }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // 1. Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    // 2. Listen to auth changes
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="admin-layout" style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <div
            className="admin-brand-logo"
            style={{ margin: '0 auto 16px', width: '48px', height: '48px', animation: 'pulse 1.5s infinite ease-in-out' }}
          >
            L
          </div>
          <p style={{ color: '#c6a15b', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Verifying Admin Credentials...
          </p>
        </div>
      </div>
    )
  }

  if (!session?.user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  return <AdminLayout user={session.user}>{children}</AdminLayout>
}
