import { Link } from 'react-router-dom'
import { navLinks, contact } from '../data/content.js'
import SiteLink from './SiteLink.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <span className="mark" />
              Luxe Horizons Africa
            </div>
            <p>
              A Kigali-based travel studio designing bespoke safaris and gorilla treks
              across Rwanda, Uganda and Tanzania.
            </p>
          </div>
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
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <SiteLink href="#plan">Plan Your Trip</SiteLink>
              </li>
              <li>
                <Link to="/contact">Consultancy &amp; MICE</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{contact.address}</li>
              <li>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={contact.instagram}>Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Luxe Horizons Africa. All rights reserved.</span>
          <span>Redesign concept</span>
        </div>
      </div>
    </footer>
  )
}
