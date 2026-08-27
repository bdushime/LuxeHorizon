import { navLinks, contact } from '../data/content.js'
import './MenuOverlay.css'

export default function MenuOverlay({ open, onClose }) {
  return (
    <div className={`menu-overlay ${open ? 'open' : ''}`}>
      <div className="wrap menu-overlay-grid">
        <nav className="menu-links">
          {navLinks.map((link) => (
            <a key={link.key} href={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="menu-side">
          <p>
            A Kigali-based studio designing bespoke safaris and gorilla treks across
            Rwanda, Uganda and Tanzania.
          </p>
          <a href="#plan" className="btn btn-light" onClick={onClose}>
            Plan Your Trip
          </a>
          <div className="msoc">
            <a href={contact.instagram}>Instagram</a>
            <a href={`mailto:${contact.email}`}>Email</a>
            <a href={contact.phoneHref}>Call</a>
          </div>
        </div>
      </div>
    </div>
  )
}
