import { useState } from 'react'
import Nav from './components/Nav.jsx'
import MenuOverlay from './components/MenuOverlay.jsx'
import Hero from './components/Hero.jsx'
import AboutSection from './components/AboutSection.jsx'
import AdventureSection from './components/AdventureSection.jsx'
import DestinationsSection from './components/DestinationsSection.jsx'
import QuoteBand from './components/QuoteBand.jsx'
import PartnersSection from './components/PartnersSection.jsx'
import CtaBand from './components/CtaBand.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Nav menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((v) => !v)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />
      <AboutSection />
      <AdventureSection />
      <DestinationsSection />
      <QuoteBand />
      <PartnersSection />
      <CtaBand />
      <Footer />
    </>
  )
}
