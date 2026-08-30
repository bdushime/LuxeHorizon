import { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav({ menuOpen, onToggleMenu }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <div className="brand">
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