import { contact } from '../data/content.js'
import SiteLink from './SiteLink.jsx'
import './MenuOverlay.css'

const MENU_NAV_LINKS = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Experiences & Itineraries', href: '/experiences' },
  { label: 'Safari Journal', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Guest Reviews', href: '/testimonials' },
  { label: 'Safari FAQ', href: '/faq' },
  { label: 'Consultancy & MICE', href: '/consultancy' },
  { label: 'Contact Us', href: '/contact' }
]

export default function MenuOverlay({ open, onClose }) {
  return (
    <div className={`menu-overlay ${open ? 'open' : ''}`}>
      <div className="wrap menu-overlay-inner">
        {/* 2-Column Unnumbered Navigation Links Grid */}
        <nav className="menu-simple-list">
          {MENU_NAV_LINKS.map((item, index) => (
            <SiteLink
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="menu-simple-item"
              style={{ transitionDelay: `${0.04 + index * 0.03}s` }}
            >
              <span className="msi-label">{item.label}</span>
              <span className="msi-arrow">&rarr;</span>
            </SiteLink>
          ))}
        </nav>

        {/* Footer Bar */}
        <div className="menu-bottom-bar">
          <span className="menu-copy">&copy; {new Date().getFullYear()} Luxe Horizons Africa</span>
          <div className="menu-socials">
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={`mailto:${contact.email}`}>Email Us</a>
            <a href={contact.phoneHref}>WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  )
}
