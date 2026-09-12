import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortalGate from './components/PortalGate.jsx'
import Nav from './components/Nav.jsx'
import MenuOverlay from './components/MenuOverlay.jsx'
import Hero from './components/Hero.jsx'
import AboutSection from './components/AboutSection.jsx'
import AdventureSection from './components/AdventureSection.jsx'
import DestinationsSection from './components/DestinationsSection.jsx'
import VideoSection from './components/VideoSection.jsx'
import QuoteBand from './components/QuoteBand.jsx'
import PartnersSection from './components/PartnersSection.jsx'
import CtaBand from './components/CtaBand.jsx'
import Footer from './components/Footer.jsx'
import AboutPage from './pages/AboutPage.jsx'

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [portalOpen, setPortalOpen] = useState(true)

  return (
    <>
      <PortalGate
        isOpen={portalOpen}
        onSelectTourism={() => setPortalOpen(false)}
        onSelectConsultancy={() => {
          setPortalOpen(false)
          const el = document.getElementById('contact')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
      />
      <Nav
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onOpenPortal={() => setPortalOpen(true)}
      />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero revealed={!portalOpen} />
      <DestinationsSection />
      <AdventureSection />
      <VideoSection />
      <AboutSection />
      <QuoteBand />
      <PartnersSection />
      <CtaBand />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}