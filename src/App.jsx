import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import PortalGate from './components/PortalGate.jsx'
import Nav from './components/Nav.jsx'
import MenuOverlay from './components/MenuOverlay.jsx'
import ScrollToHash from './components/ScrollToHash.jsx'
import BackHomeButton from './components/BackHomeButton.jsx'
import HomePage from './components/HomePage.jsx'
import DestinationsPage from './components/DestinationsPage.jsx'
import DestinationDetailPage from './components/DestinationDetailPage.jsx'
import BlogPage from './components/BlogPage.jsx'
import FaqPage from './components/FaqPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import ConsultancyPage from './components/ConsultancyPage.jsx'
import TestimonialsPage from './components/TestimonialsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ExperiencesPage from './pages/ExperiencesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Footer from './components/Footer.jsx'

import AdminLoginPage from './components/admin/AdminLoginPage.jsx'
import AdminProtectedRoute from './components/admin/AdminProtectedRoute.jsx'
import AdminDashboard from './components/admin/AdminDashboard.jsx'
import AdminPostEditor from './components/admin/AdminPostEditor.jsx'

function AppRoutes() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [portalOpen, setPortalOpen] = useState(() => location.pathname === '/')
  const isDestinations = location.pathname === '/destinations'
  const isAdmin = location.pathname.startsWith('/admin')
  const isNotFound =
    ['/destinations', '/about', '/contact', '/consultancy', '/faq', '/testimonials', '/blog', '/experiences', '/'].includes(
      location.pathname
    ) === false &&
    !location.pathname.startsWith('/destinations/') &&
    !isAdmin

  return (
    <>
      <ScrollToHash />
      {!isAdmin && <BackHomeButton />}
      {!isNotFound && !isAdmin && (
        <PortalGate
          isOpen={portalOpen}
          onSelectTourism={() => setPortalOpen(false)}
          onSelectConsultancy={() => {
            setPortalOpen(false)
            navigate('/consultancy')
          }}
        />
      )}
      {!isNotFound && !isAdmin && (
        <Nav
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((v) => !v)}
          onOpenPortal={() => setPortalOpen(true)}
        />
      )}
      {!isNotFound && !isAdmin && <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />}
      <Routes>
        <Route path="/" element={<HomePage heroRevealed={!portalOpen} />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:key" element={<DestinationDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/consultancy" element={<ConsultancyPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />

        {/* Protected Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/posts/new"
          element={
            <AdminProtectedRoute>
              <AdminPostEditor />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/posts/edit/:id"
          element={
            <AdminProtectedRoute>
              <AdminPostEditor />
            </AdminProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!isDestinations && !isNotFound && !isAdmin && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

