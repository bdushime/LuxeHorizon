import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import MenuOverlay from '../components/MenuOverlay.jsx'
import Reveal from '../components/Reveal.jsx'
import PartnersSection from '../components/PartnersSection.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Footer from '../components/Footer.jsx'
import { experiencesData } from '../data/experiencesData.js'
import '../components/AdventureSection.css'
import './ExperiencesPage.css'

const CATEGORIES = [
  'All',
  'Rwanda',
  'Uganda',
  'Tanzania',
  'Kenya',
  'Special Expeditions'
]

export default function ExperiencesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedExperience, setSelectedExperience] = useState(null)
  const [activeGalleryImg, setActiveGalleryImg] = useState('')
  const [hoveredKey, setHoveredKey] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Check URL search param for deep-linking (e.g. ?exp=slug)
  useEffect(() => {
    const slug = searchParams.get('exp')
    if (slug) {
      const item = experiencesData.find((e) => e.slug === slug || e.id === slug)
      if (item) {
        setSelectedExperience(item)
        setActiveGalleryImg(item.image)
      }
    }
  }, [searchParams])

  // Manage modal open & close, keydown listeners, body scroll locks
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    if (selectedExperience) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedExperience])

  const openExperience = (exp) => {
    setSelectedExperience(exp)
    setActiveGalleryImg(exp.image)
    setSearchParams({ exp: exp.slug }, { replace: true })
  }

  const closeModal = () => {
    setSelectedExperience(null)
    setActiveGalleryImg('')
    setSearchParams({}, { replace: true })
  }

  const filteredExperiences =
    activeCategory === 'All'
      ? experiencesData
      : experiencesData.filter((exp) => exp.category === activeCategory)

  const scrollToGrid = () => {
    const el = document.getElementById('experiences-grid')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Related pages calculation for modal
  const getRelatedExperiences = (current) => {
    if (!current) return []
    // First try explicitly relatedSlugs
    if (current.relatedSlugs && current.relatedSlugs.length > 0) {
      const explicit = experiencesData.filter((e) =>
        current.relatedSlugs.includes(e.slug) && e.id !== current.id
      )
      if (explicit.length >= 3) return explicit.slice(0, 3)
    }
    // Fallback: same category or other items
    const sameCat = experiencesData.filter(
      (e) => e.category === current.category && e.id !== current.id
    )
    if (sameCat.length >= 3) return sameCat.slice(0, 3)
    const others = experiencesData.filter((e) => e.id !== current.id)
    return others.slice(0, 3)
  }

  return (
    <div className="experiences-page">
      <Nav
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onOpenPortal={() => {}}
      />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Fullscreen Hero Header */}
      <section className="exp-hero-section">
        <div className="exp-hero-bg" />
        <div className="exp-hero-overlay" />

        <div className="wrap exp-hero-content text-center">
          <div className="exp-hero-badge">CURATED EXPEDITIONS</div>
          <h1 className="exp-hero-headline">
            Unforgettable African <br className="hero-br" />
            <span className="gold-text">Safaris & Experiences</span>
          </h1>
          <p className="exp-hero-tagline">
            Bespoke wildlife encounters, gorilla treks, and cultural journeys tailored for solo travellers, families, and private groups.
          </p>
        </div>

        <button
          type="button"
          className="exp-hero-scroll-btn"
          onClick={scrollToGrid}
          aria-label="Scroll to experiences"
        >
          <div className="scroll-arrow-wrap">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </section>

      {/* Experiences Grid Section */}
      <section className="exp-grid-section" id="experiences-grid">
        <div className="wrap">
          <Reveal className="exp-section-header text-center">
            <div className="eyebrow">EXPLORE OUR PORTFOLIO</div>
            <h2>Handcrafted Experiences Across East Africa</h2>
            <p className="exp-section-sub">
              Select an article to view full itineraries, high-resolution visual galleries, and related expeditions.
            </p>
          </Reveal>

          {/* Category Filter Tabs */}
          <div className="exp-filter-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`exp-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid using exact Homepage Card Design (.adv-card) */}
          <div className="exp-cards-grid">
            {filteredExperiences.map((exp, i) => (
              <Reveal
                key={exp.id}
                className={`adv-card exp-adv-card ${
                  hoveredKey && hoveredKey !== exp.id ? 'dimmed' : ''
                }`}
                onClick={() => openExperience(exp)}
                onMouseEnter={() => setHoveredKey(exp.id)}
                onMouseLeave={() => setHoveredKey(null)}
              >
                <div className="adv-card-media">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/exp-primates.jpg'
                    }}
                  />
                  <div className="adv-card-index">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="adv-card-overlay" />
                  <div className="adv-card-info">
                    <div className="adv-card-route">
                      {exp.location || exp.category}
                    </div>
                    <h3 className="adv-card-title">{exp.title}</h3>
                    <div className="adv-card-meta">
                      <span>{exp.duration}</span>
                      <span className="adv-card-dot" />
                      <span>{exp.category}</span>
                    </div>
                  </div>
                  <span className="adv-card-arrow" aria-hidden="true">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path
                        d="M1 6H15M15 6L10 1M15 6L10 11"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Experience Article Modal */}
      {selectedExperience && (
        <div className="exp-modal-backdrop" onClick={closeModal}>
          <div className="exp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="exp-modal-close"
              onClick={closeModal}
              aria-label="Close detail view"
            >
              &times;
            </button>

            <div className="exp-modal-header">
              <div className="exp-modal-meta">
                <span className="exp-badge duration">{selectedExperience.duration}</span>
                <span className="exp-badge category">{selectedExperience.category}</span>
                <span className="exp-modal-location-text">{selectedExperience.location}</span>
              </div>
              <h1 className="exp-modal-title">{selectedExperience.title}</h1>
            </div>

            {/* Gallery View */}
            <div className="exp-modal-gallery">
              <div className="exp-modal-hero-img">
                <img
                  src={activeGalleryImg || selectedExperience.image}
                  alt={selectedExperience.title}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '/exp-primates.jpg'
                  }}
                />
              </div>

              {selectedExperience.gallery && selectedExperience.gallery.length > 0 && (
                <div className="exp-gallery-thumbs">
                  <button
                    type="button"
                    className={`exp-thumb-btn ${activeGalleryImg === selectedExperience.image ? 'active' : ''}`}
                    onClick={() => setActiveGalleryImg(selectedExperience.image)}
                  >
                    <img src={selectedExperience.image} alt="Hero thumb" />
                  </button>
                  {selectedExperience.gallery.map((gImg, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`exp-thumb-btn ${activeGalleryImg === gImg ? 'active' : ''}`}
                      onClick={() => setActiveGalleryImg(gImg)}
                    >
                      <img src={gImg} alt={`Gallery thumb ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content & Details */}
            <div className="exp-modal-body">
              <div className="exp-article-overview">
                <h3>Overview</h3>
                <p className="lead-text">{selectedExperience.description || selectedExperience.summary}</p>
              </div>

              {selectedExperience.highlights && selectedExperience.highlights.length > 0 && (
                <div className="exp-highlights-box">
                  <h4>Expedition Highlights</h4>
                  <ul>
                    {selectedExperience.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedExperience.fullStory && selectedExperience.fullStory.length > 0 && (
                <div className="exp-full-story">
                  <h3>Full Itinerary & Details</h3>
                  {selectedExperience.fullStory.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              <div className="exp-modal-cta-row">
                <Link
                  to="/#contact"
                  className="btn-exp-cta"
                  onClick={closeModal}
                >
                  Plan This Trip With Us
                </Link>
                <button
                  type="button"
                  className="btn-exp-outline"
                  onClick={closeModal}
                >
                  Continue Browsing
                </button>
              </div>
            </div>

            {/* Related Pages Section inside Modal */}
            <div className="exp-related-section">
              <div className="exp-related-header">
                <div className="eyebrow">EXPLORE MORE</div>
                <h3>Related Experiences & Pages</h3>
              </div>

              <div className="exp-related-grid">
                {getRelatedExperiences(selectedExperience).map((rel) => (
                  <div
                    key={rel.id}
                    className="exp-related-card"
                    onClick={() => openExperience(rel)}
                  >
                    <div className="exp-related-img">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = '/exp-primates.jpg'
                        }}
                      />
                    </div>
                    <div className="exp-related-info">
                      <span className="exp-related-tag">{rel.category}</span>
                      <h4 className="exp-related-title">{rel.title}</h4>
                      <span className="exp-related-dur">{rel.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <PartnersSection />
      <CtaBand />
      <Footer />
    </div>
  )
}
