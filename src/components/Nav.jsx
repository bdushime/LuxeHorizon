import { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav({ menuOpen, onToggleMenu, onOpenPortal }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <div
          className="brand cursor-pointer transition-transform hover:scale-105"
          onClick={onOpenPortal}
          title="Switch Brand Division (Portal Gate)"
        >
          <img
            src="/LuxeHorizon-removebg-preview.png"
            alt="Luxe Horizons Africa"
            className="brand-logo"
          />
        </div>
        <div className="nav-right">
          <button
            onClick={onOpenPortal}
            className="text-[10px] uppercase tracking-widest text-[#c6a15b] border border-[#c6a15b]/40 px-3 py-1.5 rounded hover:bg-[#c6a15b] hover:text-[#0B0C0E] transition-all hidden sm:inline-block"
          >
            Divisions ⚡
          </button>
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