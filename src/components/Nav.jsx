import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

// Routes that start with a full-screen photo at the top of the page.
const DARK_HERO_ROUTES = new Set(['/', '/destinations', '/about', '/contact', '/consultancy', '/experiences'])

export default function Nav({ menuOpen, onToggleMenu, onOpenPortal }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isConsultancy = pathname.startsWith('/consultancy')

  const [revealedState, setRevealedState] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setRevealedState(window.scrollY > 30)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  // Pages that open on a full-bleed photo hero: at the very top the nav is
  // see-through (white logo + light controls) so it doesn't sit as a pale
  // band over the photo. As soon as the visitor scrolls, it switches to the
  // solid parchment bar with dark controls, so it never blends into content.
  // Pages without a photo hero always use the solid bar.
  const hasPhotoHero =
    DARK_HERO_ROUTES.has(pathname) || pathname.startsWith('/destinations/') || pathname.startsWith('/experiences/')
  const revealed = true
  const overHero = hasPhotoHero && !revealedState
  const scrolled = !menuOpen && !overHero
  const lifted = revealedState && !menuOpen

  // The brand is a real <Link to="/">, so it already navigates home on its
  // own — this only needs to additionally reopen the Portal Gate when we're
  // already on the home page (its original "switch division" purpose).
  const handleBrandClick = () => {
    if (isHome) onOpenPortal()
  }

  return (
    <header
      className={`nav ${scrolled ? 'scrolled' : ''} ${overHero && !menuOpen ? 'over-hero' : ''} ${lifted ? 'lifted' : ''} ${revealed ? 'revealed' : ''} ${menuOpen ? 'menu-open' : ''}`}
    >
      <div className="wrap nav-inner">
        <Link
          to="/"
          className="brand cursor-pointer transition-transform hover:scale-105"
          onClick={handleBrandClick}
          title={isHome ? 'Switch Brand Division (Portal Gate)' : 'Home - Luxe Horizons Africa'}
        >
          <img
            src="/LuxeHorizon-removebg-preview.webp"
            alt="Luxe Horizons Africa"
            className="brand-logo"
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
        </Link>
        <div className="nav-right">
          <div className={`division-switch ${isConsultancy ? 'is-consultancy' : ''}`}>
            <span className="ds-indicator" />
            <Link to="/" className={`ds-option ${!isConsultancy ? 'active' : ''}`} title="Travel division">
              Travel
            </Link>
            <Link
              to="/consultancy"
              className={`ds-option ${isConsultancy ? 'active' : ''}`}
              title="Consultancy division"
            >
              Consultancy
            </Link>
          </div>
          <Link to="/#plan" className="nav-plan">
            Plan Your Trip
          </Link>
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={onToggleMenu}
          >
            <span className="bars">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}