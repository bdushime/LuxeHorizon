import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import PortalGate from './components/PortalGate.jsx'
import Nav from './components/Nav.jsx'
import MenuOverlay from './components/MenuOverlay.jsx'
import ScrollToHash from './components/ScrollToHash.jsx'
import HomePage from './components/HomePage.jsx'
import DestinationsPage from './components/DestinationsPage.jsx'
import DestinationDetailPage from './components/DestinationDetailPage.jsx'
import BlogPage from './components/BlogPage.jsx'
import FaqPage from './components/FaqPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import TestimonialsPage from './components/TestimonialsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ExperiencesPage from './pages/ExperiencesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Footer from './components/Footer.jsx'

function AppRoutes() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [portalOpen, setPortalOpen] = useState(true)
  const location = useLocation()
  const isDestinations = location.pathname === '/destinations'
  const isNotFound = ['/destinations', '/about', '/contact', '/faq', '/testimonials', '/blog', '/experiences', '/'].includes(location.pathname) === false && !location.pathname.startsWith('/destinations/')

  return (
    <>
      <ScrollToHash />
      {!isNotFound && (
        <PortalGate
          isOpen={portalOpen}
          onSelectTourism={() => setPortalOpen(false)}
          onSelectConsultancy={() => {
            setPortalOpen(false)
            // Scroll smoothly to contact section for corporate advisory
            const el = document.getElementById('contact')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      )}
      {!isNotFound && (
        <Nav
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((v) => !v)}
          onOpenPortal={() => setPortalOpen(true)}
        />
      )}
      {!isNotFound && <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />}
      <Routes>
        <Route path="/" element={<HomePage heroRevealed={!portalOpen} />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:key" element={<DestinationDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!isDestinations && !isNotFound && <Footer />}
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

