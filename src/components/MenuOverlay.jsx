import { contact } from '../data/content.js'
import SiteLink from './SiteLink.jsx'
import './MenuOverlay.css'

export default function MenuOverlay({ open, onClose }) {
  return (
    <div className={`menu-overlay ${open ? 'open' : ''}`}>
      <div className="wrap menu-overlay-inner">
        {/* Top Header Bar */}
        <div className="menu-top-bar">
          <span className="menu-eyebrow">Luxe Horizons Africa</span>
          <span className="menu-dot">&bull;</span>
          <span className="menu-tagline">Bespoke Safaris &amp; Primate Expeditions</span>
        </div>

        {/* 3-Column Compact Grid Layout */}
        <div className="menu-columns-grid">
          {/* Column 1: Expeditions */}
          <div className="menu-col">
            <span className="menu-col-heading">Safari Expeditions</span>
            <nav className="menu-link-group">
              <SiteLink href="/destinations" onClick={onClose} className="menu-card-link">
                <span className="mcl-title">Destinations</span>
                <span className="mcl-sub">Rwanda, Uganda, Tanzania &amp; Kenya</span>
              </SiteLink>
              <SiteLink href="/experiences" onClick={onClose} className="menu-card-link">
                <div className="mcl-row">
                  <span className="mcl-title">Experiences &amp; Itineraries</span>
                  <span className="menu-tag-pill">Articles &amp; PDFs</span>
                </div>
                <span className="mcl-sub">Gorilla Treks, Articles &amp; Sample PDF Plans</span>
              </SiteLink>
              <SiteLink href="/blog" onClick={onClose} className="menu-card-link">
                <span className="mcl-title">Safari Journal</span>
                <span className="mcl-sub">Field Notes, Etiquette &amp; Guides</span>
              </SiteLink>
            </nav>
          </div>

          {/* Column 2: Studio & Dispatches */}
          <div className="menu-col">
            <span className="menu-col-heading">The Studio</span>
            <nav className="menu-link-group">
              <SiteLink href="/about" onClick={onClose} className="menu-card-link">
                <span className="mcl-title">About Us</span>
                <span className="mcl-sub">Kigali Travel Specialists</span>
              </SiteLink>
              <SiteLink href="/testimonials" onClick={onClose} className="menu-card-link">
                <span className="mcl-title">Guest Reviews</span>
                <span className="mcl-sub">Dispatches &amp; Client Stories</span>
              </SiteLink>
              <SiteLink href="/faq" onClick={onClose} className="menu-card-link">
                <span className="mcl-title">Safari FAQ</span>
                <span className="mcl-sub">Permits, Packing &amp; Pre-departure</span>
              </SiteLink>
              <SiteLink href="/consultancy" onClick={onClose} className="menu-card-link">
                <span className="mcl-title">Consultancy &amp; MICE</span>
                <span className="mcl-sub">Corporate &amp; Event Logistics</span>
              </SiteLink>
            </nav>
          </div>

          {/* Column 3: Direct Enquiry Box */}
          <div className="menu-col menu-cta-card">
            <span className="menu-col-heading">Plan Your Trip</span>
            <p className="menu-cta-text">
              Let our Kigali trip designers craft a private, considered African expedition tailored to your dates.
            </p>

            <SiteLink href="#plan" className="menu-cta-btn" onClick={onClose}>
              Start Tailor-Made Enquiry &rarr;
            </SiteLink>

            <div className="menu-contact-box">
              <div className="mcb-item">
                <span className="mcb-lbl">Direct Phone / WhatsApp</span>
                <a href={contact.phoneHref} className="mcb-link">{contact.phone}</a>
              </div>
              <div className="mcb-item">
                <span className="mcb-lbl">Email Enquiries</span>
                <a href={`mailto:${contact.email}`} className="mcb-link">{contact.email}</a>
              </div>
              <div className="mcb-item">
                <span className="mcb-lbl">Headquarters</span>
                <span className="mcb-text">{contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
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
