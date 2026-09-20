import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import MenuOverlay from '../components/MenuOverlay.jsx'
import Footer from '../components/Footer.jsx'
import Seo from '../components/Seo.jsx'
import { PAGE_SEO } from '../config/seo.js'
import './NotFoundPage.css'

export default function NotFoundPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="not-found-page">
      <Seo
        title={PAGE_SEO.notFound.title}
        description={PAGE_SEO.notFound.description}
        image={PAGE_SEO.notFound.ogImage}
      />

      <Nav
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onOpenPortal={() => {}}
      />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="nf-main">
        <div className="wrap nf-content text-center">
          <div className="eyebrow gold-text">404 — Destination Not Found</div>
          <h1 className="nf-title">
            The path you sought <br className="hidden sm:inline" />
            <span className="gold-text">has moved beyond the horizon</span>
          </h1>
          <p className="nf-lead">
            The page or route you requested does not exist in our current portfolio.
            Explore our curated luxury safaris, destination guides, or contact our Kigali team to design a custom journey.
          </p>

          <div className="nf-links-grid">
            <Link to="/" className="nf-card">
              <span className="nf-card-eyebrow">01</span>
              <h3>Return Home</h3>
              <p>Explore the full Luxe Horizons sanctuary</p>
            </Link>
            <Link to="/destinations" className="nf-card">
              <span className="nf-card-eyebrow">02</span>
              <h3>Destinations</h3>
              <p>Rwanda, Uganda, Tanzania &amp; Kenya</p>
            </Link>
            <Link to="/experiences" className="nf-card">
              <span className="nf-card-eyebrow">03</span>
              <h3>Experiences</h3>
              <p>Gorilla treks &amp; bespoke safaris</p>
            </Link>
            <Link to="/contact" className="nf-card">
              <span className="nf-card-eyebrow">04</span>
              <h3>Get In Touch</h3>
              <p>Speak to our trip design team</p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
