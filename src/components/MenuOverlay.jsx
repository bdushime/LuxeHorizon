import { navLinks, contact } from '../data/content.js'
import SiteLink from './SiteLink.jsx'
import './MenuOverlay.css'

export default function MenuOverlay({ open, onClose }) {
  return (
    <div className={`menu-overlay ${open ? 'open' : ''}`}>
      <div className="wrap menu-overlay-grid">
        <nav className="menu-links">
          {navLinks.map((link) => (
            <SiteLink key={link.key} href={link.href} onClick={onClose}>
              {link.label}
            </SiteLink>
          ))}
        </nav>
        <div className="menu-side">
          <p>
            A Kigali-based studio designing bespoke safaris and gorilla treks across
            Rwanda, Uganda and Tanzania.
          </p>
          <SiteLink href="#plan" className="btn btn-light" onClick={onClose}>
            Plan Your Trip
          </SiteLink>
          <div className="msoc">
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={`mailto:${contact.email}`}>Email</a>
            <a href={contact.phoneHref}>Call</a>
          </div>
        </div>
      </div>
    </div>
  )
}
