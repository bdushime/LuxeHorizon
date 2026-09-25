import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import PartnersSection from '../components/PartnersSection.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Seo from '../components/Seo.jsx'
import { PAGE_SEO, generateBreadcrumbSchema } from '../config/seo.js'
import AboutReel from './AboutReel.jsx'
import { teamMembers } from '../data/content.js'
import './AboutPage.css'

export default function AboutPage() {
  const [activeBio, setActiveBio] = useState(null)
  const [isBioExpanded, setIsBioExpanded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveBio(null)
    }
    if (activeBio) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeBio])

  const openBioModal = (member) => {
    setActiveBio(member)
    setIsBioExpanded(false)
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' }
  ]

  return (
    <div className="about-page">
      <Seo
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        image={PAGE_SEO.about.ogImage}
        schema={generateBreadcrumbSchema(breadcrumbs)}
      />

      <AboutReel />

      {/* Minimal Team Section */}
      <section className="about-team-section">
        <div className="wrap">
          <Reveal className="about-section-header text-center">
            <div className="eyebrow">Our Team</div>
            <h2>The Minds Behind Your Journey</h2>
            <p className="about-section-sub">
              Our Kigali-based team managing your expedition logistics.
            </p>
          </Reveal>

          <div className="about-team-grid">
            {teamMembers.map((member) => (
              <Reveal key={member.id} className="about-team-card">
                <div className="about-team-media">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=2E4A38&color=D4AF37&size=256`
                    }}
                  />
                </div>

                <div className="about-team-body">
                  <h3 className="about-team-name">{member.name}</h3>
                  <div className="about-team-role">{member.title}</div>
                  <p className="about-team-summary">{member.summary}</p>
                  <button
                    type="button"
                    className="about-bio-btn"
                    onClick={() => openBioModal(member)}
                  >
                    Read Bio
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Team Bio Modal */}
      {activeBio && (
        <div className="about-modal-backdrop" onClick={() => setActiveBio(null)}>
          <div className={`about-modal-content ${isBioExpanded ? 'is-expanded' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="about-modal-close"
              onClick={() => setActiveBio(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="about-modal-grid">
              <div className="about-modal-img-wrap">
                <img
                  src={activeBio.image}
                  alt={activeBio.name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(activeBio.name)}&background=2E4A38&color=D4AF37&size=256`
                  }}
                />
              </div>
              <div className="about-modal-info">
                <h2>{activeBio.name}</h2>
                <div className="about-modal-role">{activeBio.title}</div>
                
                <div className="about-modal-text-wrap">
                  {!isBioExpanded ? (
                    <p className="about-modal-bio">{activeBio.bio}</p>
                  ) : (
                    <div className="about-modal-fullbio">
                      {activeBio.fullBio ? (
                        activeBio.fullBio.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))
                      ) : (
                        <p>{activeBio.bio}</p>
                      )}
                    </div>
                  )}
                </div>

                <div className="about-modal-controls">
                  <button
                    type="button"
                    className="about-modal-expand-btn"
                    onClick={() => setIsBioExpanded(!isBioExpanded)}
                  >
                    <span>{isBioExpanded ? 'Read Less' : 'Read More'}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{
                        transform: isBioExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>

                <div className="about-modal-actions">
                  <Link to="/contact" className="btn-about-cta" onClick={() => setActiveBio(null)}>
                    Plan Your Journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <PartnersSection />
      <CtaBand />
    </div>
  )
}

