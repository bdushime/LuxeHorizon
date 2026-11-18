import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

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

  // The nav now always sits on its own solid parchment bar, so the logo and
  // controls stay legible on every page and never blend into the content
  // scrolling underneath. The dark "on-photo" styling is only used while
  // the full-screen menu overlay is open.
  const revealed = true
  const scrolled = !menuOpen
  const lifted = revealedState && !menuOpen

  // The brand is a real <Link to="/">, so it already navigates home on its
  // own — this only needs to additionally reopen the Portal Gate when we're
  // already on the home page (its original "switch division" purpose).
  const handleBrandClick = () => {
    if (isHome) onOpenPortal()
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${lifted ? 'lifted' : ''} ${revealed ? 'revealed' : ''} ${menuOpen ? 'menu-open' : ''}`}>
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