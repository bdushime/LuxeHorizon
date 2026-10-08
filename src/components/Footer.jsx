import { Link } from 'react-router-dom'
import { navLinks, contact } from '../data/content.js'
import SiteLink from './SiteLink.jsx'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact">
      {/* Top Gold Accent Gradient Border */}
      <div className="footer-top-border" />

      <div className="wrap">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="brand">
              <span className="mark" />
              Luxe Horizons Africa
            </div>
            <p>
              Your Expert Local DMC &amp; Award-Winning Travel Logistics Ground Handler across Rwanda, Uganda, Tanzania &amp; Kenya.
            </p>
            <div className="footer-social-pills">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="YouTube"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="social-pill"
                title="Email Us"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div>
            <h4>Explore</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.key}>
                  <SiteLink href={link.href}>{link.label}</SiteLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <SiteLink href="#plan">Plan Your Trip</SiteLink>
              </li>
              <li>
                <Link to="/consultancy">Consultancy &amp; Incentive Travel</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4>Contact</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="footer-icon">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{contact.address}</span>
              </li>
              <li className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="footer-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="footer-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="footer-icon">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp Direct</a>
              </li>
              <li className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="footer-icon">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="fb-left">
            <span>&copy; {new Date().getFullYear()} Luxe Horizons Africa. All rights reserved.</span>
            <span className="fb-divider">•</span>
            <span>Licensed DMC Ground Handler (Kigali, Rwanda)</span>
          </div>
          <button type="button" className="footer-back-to-top" onClick={scrollToTop}>
            Back to top <span className="arrow">&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
