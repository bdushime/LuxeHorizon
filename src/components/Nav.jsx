import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Nav.css'

// Only "/" and "/destinations" open on a full-bleed dark photo hero, so only
// those two should start with light, on-dark nav styling and wait for scroll
// to darken. Every other page (e.g. "/testimonials") has a light background
// from the very top, so the nav needs to be dark and visible immediately.
const DARK_HERO_ROUTES = new Set(['/', '/destinations'])

export default function Nav({ menuOpen, onToggleMenu, onOpenPortal }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'
  const hasDarkHero = DARK_HERO_ROUTES.has(pathname)

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

  const handleBrandClick = () => {
    if (isHome) onOpenPortal()
    else navigate('/')
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${revealed ? 'revealed' : ''}`}>
      <div className="wrap nav-inner">
        <div
          className="brand cursor-pointer transition-transform hover:scale-105"
          onClick={handleBrandClick}
          title={isHome ? 'Switch Brand Division (Portal Gate)' : 'Back to Home'}
        >
          <img
            src="/LuxeHorizon-removebg-preview.png"
            alt="Luxe Horizons Africa"
            className="brand-logo"
          />
        </div>
        <div className="nav-right">
          <a href="#plan" className="nav-plan">
            Plan Your Trip
          </a>
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