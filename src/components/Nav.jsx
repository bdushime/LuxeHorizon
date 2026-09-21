import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

// Only routes that open on a full-bleed dark photo hero should start with
// light, on-dark nav styling and wait for scroll to darken. Every other page
// (e.g. "/testimonials") has a light background from the very top, so the
// nav needs to be dark and legible immediately.
const DARK_HERO_ROUTES = new Set(['/', '/destinations', '/about', '/contact', '/consultancy'])

export default function Nav({ menuOpen, onToggleMenu, onOpenPortal }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isConsultancy = pathname.startsWith('/consultancy')
  const hasDarkHero = DARK_HERO_ROUTES.has(pathname) || pathname.startsWith('/destinations/')

  const [scrolledState, setScrolledState] = useState(false)
  const [revealedState, setRevealedState] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolledState(window.scrollY > window.innerHeight * 0.85)
      setRevealedState(window.scrollY > 30)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  // Away from the home page there's no other way back — the nav (and its
  // hamburger menu) must be visible and legible immediately, not only after
  // scrolling past the same 30px threshold the home hero uses.
  const revealed = isHome ? revealedState : true
  const scrolled = hasDarkHero ? scrolledState : true

  // The brand is a real <Link to="/">, so it already navigates home on its
  // own — this only needs to additionally reopen the Portal Gate when we're
  // already on the home page (its original "switch division" purpose).
  const handleBrandClick = () => {
    if (isHome) onOpenPortal()
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${revealed ? 'revealed' : ''}`}>
      <div className="wrap nav-inner">
        <Link
          to="/"
          className="brand cursor-pointer transition-transform hover:scale-105"
          onClick={handleBrandClick}
          title={isHome ? 'Switch Brand Division (Portal Gate)' : 'Home - Luxe Horizons Africa'}
        >
          <img
            src="/LuxeHorizon-removebg-preview.png"
            alt="Luxe Horizons Africa"
            className="brand-logo"
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