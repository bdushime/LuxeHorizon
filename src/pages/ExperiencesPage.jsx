import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from '../components/Nav.jsx'
import MenuOverlay from '../components/MenuOverlay.jsx'
import Reveal from '../components/Reveal.jsx'
import PartnersSection from '../components/PartnersSection.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Footer from '../components/Footer.jsx'
import Seo from '../components/Seo.jsx'
import { PAGE_SEO, generateBreadcrumbSchema } from '../config/seo.js'
import { experiencesData } from '../data/experiencesData.js'
import { itinerariesData } from '../data/itinerariesData.js'
import '../components/AdventureSection.css'
import './ExperiencesPage.css'

// Kenya is deliberately left out until there's a real Kenya tour to back it —
// an empty filter tab looks broken to a visitor, not "coming soon". Add it
// back once experiencesData.js has a real Kenya-category entry.
const EXP_CATEGORIES = [
  'All',
  'Rwanda',
  'Uganda',
  'Tanzania',
  'Special Expeditions'
]

const ITIN_CATEGORIES = [
  'All',
  'Rwanda',
  'Uganda',
  'Multi-Country'
]

export default function ExperiencesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  // Primary Tab state: 'experiences' | 'itineraries'
  const [activeTab, setActiveTab] = useState('experiences')

  // Experiences states (Articles)
  const [expCategory, setExpCategory] = useState('All')
  const [selectedExperience, setSelectedExperience] = useState(null)
  const [activeGalleryImg, setActiveGalleryImg] = useState('')
  const [hoveredKey, setHoveredKey] = useState(null)

  // Itineraries states (PDF Documents)
  const [itinCategory, setItinCategory] = useState('All')
  const [selectedItinerary, setSelectedItinerary] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Deep-linking URL params handling
  useEffect(() => {
    const tab = searchParams.get('tab')
    const itinKey = searchParams.get('itinerary')
    const expSlug = searchParams.get('exp')

    if (itinKey || tab === 'itineraries') {
      setActiveTab('itineraries')
      if (itinKey) {
        const match = itinerariesData.find((item) => item.key === itinKey)
        if (match) setSelectedItinerary(match)
      }
    } else if (expSlug || tab === 'experiences') {
      setActiveTab('experiences')
      if (expSlug) {
        const item = experiencesData.find((e) => e.slug === expSlug || e.id === expSlug)
        if (item) {
          setSelectedExperience(item)
          setActiveGalleryImg(item.image)
        }
      }
    }
  }, [searchParams])

  // Manage modals open & close, keydown listeners, body scroll locks
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeExpModal()
        closeItinModal()
      }
    }

    if (selectedExperience || selectedItinerary) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedExperience, selectedItinerary])

  // Handlers for Experience Articles
  const openExperience = (exp) => {
    setSelectedExperience(exp)
    setActiveGalleryImg(exp.image)
    setSearchParams({ tab: 'experiences', exp: exp.slug }, { replace: true })
  }

  const closeExpModal = () => {
    setSelectedExperience(null)
    setActiveGalleryImg('')
    setSearchParams({ tab: 'experiences' }, { replace: true })
  }

  // Handlers for PDF Itineraries
  const openItinerary = (itin, e) => {
    if (e) e.preventDefault()
    setSelectedItinerary(itin)
    setSearchParams({ tab: 'itineraries', itinerary: itin.key }, { replace: true })
  }

  const closeItinModal = () => {
    setSelectedItinerary(null)
    setSearchParams({ tab: 'itineraries' }, { replace: true })
  }

  const switchTab = (tabName) => {
    setActiveTab(tabName)
    setSearchParams({ tab: tabName }, { replace: true })
  }

  // Filtered lists
  const filteredExperiences =
    expCategory === 'All'
      ? experiencesData
      : experiencesData.filter((exp) => exp.category === expCategory)

  const filteredItineraries =
    itinCategory === 'All'
      ? itinerariesData
      : itinerariesData.filter((item) => item.category === itinCategory)

  const scrollToGrid = () => {
    const el = document.getElementById('experiences-content-section')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Related pages calculation for Experience modal
  const getRelatedExperiences = (current) => {
    if (!current) return []
    if (current.relatedSlugs && current.relatedSlugs.length > 0) {
      const explicit = experiencesData.filter((e) =>
        current.relatedSlugs.includes(e.slug) && e.id !== current.id
      )
      if (explicit.length >= 3) return explicit.slice(0, 3)
    }
    const sameCat = experiencesData.filter(
      (e) => e.category === current.category && e.id !== current.id
    )
    if (sameCat.length >= 3) return sameCat.slice(0, 3)
    const others = experiencesData.filter((e) => e.id !== current.id)
    return others.slice(0, 3)
  }

  // Dynamic SEO calculation
  const seoTitle = selectedExperience
    ? `${selectedExperience.title} — ${selectedExperience.duration} | Luxe Horizons Africa`
    : selectedItinerary
    ? `${selectedItinerary.title} (PDF) — Luxe Horizons Africa`
    : PAGE_SEO.experiences.title

  const seoDescription = selectedExperience
    ? (selectedExperience.summary || selectedExperience.description).slice(0, 160)
    : selectedItinerary
    ? selectedItinerary.summary
    : PAGE_SEO.experiences.description

  const seoImage = selectedExperience
    ? selectedExperience.image
    : selectedItinerary
    ? selectedItinerary.image
    : PAGE_SEO.experiences.ogImage

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Experiences & Itineraries', url: '/experiences' }
  ]
  if (selectedExperience) {
    breadcrumbs.push({ name: selectedExperience.title, url: `/experiences?exp=${selectedExperience.slug}` })
  } else if (selectedItinerary) {
    breadcrumbs.push({ name: selectedItinerary.title, url: `/experiences?itinerary=${selectedItinerary.key}` })
  }

  return (
    <div className="experiences-page">
      <Seo
        title={seoTitle}
        description={seoDescription}
        image={seoImage}
        schema={generateBreadcrumbSchema(breadcrumbs)}
      />
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
          <div className="exp-hero-badge">CURATED PORTFOLIO</div>
          <h1 className="exp-hero-headline">
            Unforgettable Safaris, <br className="hero-br" />
            <span className="gold-text">Experiences &amp; Itineraries</span>
          </h1>
          <p className="exp-hero-tagline">
            Discover bespoke wildlife encounters, gorilla trekking articles, and complete day-by-day sample itinerary PDF documents.
          </p>
        </div>

        <button
          type="button"
          className="exp-hero-scroll-btn"
          onClick={scrollToGrid}
          aria-label="Scroll to portfolio"
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

      {/* Main Content Section */}
      <section className="exp-grid-section" id="experiences-content-section">
        <div className="wrap">
          {/* Primary View Switcher: Articles vs PDF Itineraries */}
          <div className="exp-primary-switcher-wrap">
            <div className="exp-primary-switcher">
              <button
                type="button"
                className={`exp-tab-btn ${activeTab === 'experiences' ? 'active' : ''}`}
                onClick={() => switchTab('experiences')}
              >
                <span>Curated Experiences &amp; Articles</span>
                <span className="tab-count">{experiencesData.length}</span>
              </button>

              <button
                type="button"
                className={`exp-tab-btn ${activeTab === 'itineraries' ? 'active' : ''}`}
                onClick={() => switchTab('itineraries')}
              >
                <span>Sample Itineraries (PDF Documents)</span>
                <span className="tab-count">{itinerariesData.length}</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Written Articles & Experiences */}
          {activeTab === 'experiences' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Reveal className="exp-section-header text-center">
                <div className="eyebrow">WRITTEN ARTICLES &amp; ENCOUNTERS</div>
                <h2>Explore Handcrafted East African Experiences</h2>
                <p className="exp-section-sub">
                  Select an article to explore wildlife encounters, detailed itineraries, and high-resolution photo galleries.
                </p>
              </Reveal>

              {/* Category Filter Tabs */}
              <div className="exp-filter-bar">
                {EXP_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`exp-filter-btn ${expCategory === cat ? 'active' : ''}`}
                    onClick={() => setExpCategory(cat)}
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
            </motion.div>
          )}

          {/* TAB 2: Journey Itineraries & PDF Documents */}
          {activeTab === 'itineraries' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Reveal className="exp-section-header text-center">
                <div className="eyebrow">PDF ITINERARY DOCUMENTS</div>
                <h2>Sample Safari Itineraries</h2>
                <p className="exp-section-sub">
                  Browse day-by-day journey proposals. Click any card below to preview the complete PDF document directly online.
                </p>
              </Reveal>

              {/* Itinerary Category Filter Tabs */}
              <div className="exp-filter-bar">
                {ITIN_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`exp-filter-btn ${itinCategory === cat ? 'active' : ''}`}
                    onClick={() => setItinCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Itineraries Card Grid */}
              <div className="itin-grid">
                {filteredItineraries.map((item) => (
                  <a
                    key={item.key}
                    href={`?tab=itineraries&itinerary=${item.key}`}
                    onClick={(e) => openItinerary(item, e)}
                    className="itin-card cursor-pointer"
                  >
                    <div className="itin-card-media">
                      <img src={item.image} alt={item.title} />
                      <span className="itin-card-badge">{item.duration}</span>
                    </div>

                    <div className="itin-card-body">
                      <div className="itin-card-meta">
                        <span className="itin-card-category" style={{ color: item.accent }}>
                          {item.category}
                        </span>
                        <span className="itin-card-dot" />
                        <span className="itin-card-format">PDF Document</span>
                      </div>

                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>

                      <span className="itin-card-link" style={{ color: item.accent }}>
                        View Itinerary PDF &rarr;
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* MODAL 1: Interactive Experience Article Modal */}
      {selectedExperience && (
        <div className="exp-modal-backdrop" onClick={closeExpModal}>
          <div className="exp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="exp-modal-close"
              onClick={closeExpModal}
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
                  <h3>Full Itinerary &amp; Details</h3>
                  {selectedExperience.fullStory.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              <div className="exp-modal-cta-row">
                <Link
                  to="/contact"
                  className="btn-exp-cta"
                  onClick={closeExpModal}
                >
                  Plan This Trip With Us
                </Link>
                <button
                  type="button"
                  className="btn-exp-outline"
                  onClick={closeExpModal}
                >
                  Continue Browsing
                </button>
              </div>
            </div>

            {/* Related Pages Section inside Modal */}
            <div className="exp-related-section">
              <div className="exp-related-header">
                <div className="eyebrow">EXPLORE MORE</div>
                <h3>Related Experiences</h3>
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

      {/* MODAL 2: Inline PDF Document Viewer Modal */}
      <AnimatePresence>
        {selectedItinerary && (
          <div className="ipm-overlay" onClick={closeItinModal}>
            <motion.div
              className="ipm-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            <div className="ipm-wrapper">
              <motion.div
                className="ipm-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="ipm-title"
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 25, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="ipm-header">
                  <div className="ipm-header-info">
                    <div className="ipm-meta">
                      <span className="ipm-category-badge" style={{ backgroundColor: selectedItinerary.accent }}>
                        {selectedItinerary.category}
                      </span>
                      <span className="ipm-duration-badge">{selectedItinerary.duration}</span>
                    </div>
                    <h2 id="ipm-title">{selectedItinerary.title}</h2>
                  </div>

                  <div className="ipm-header-actions">
                    <a
                      href={selectedItinerary.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ipm-btn-action"
                      title="Open PDF in new tab"
                    >
                      <span>Open in New Tab &#8599;</span>
                    </a>

                    <a
                      href={selectedItinerary.pdfUrl}
                      download
                      className="ipm-btn-action secondary"
                      title="Download PDF file"
                    >
                      <span>Download</span>
                    </a>

                    <button
                      type="button"
                      className="ipm-close"
                      onClick={closeItinModal}
                      aria-label="Close modal"
                    >
                      &#10005;
                    </button>
                  </div>
                </div>

                {/* Modal PDF Viewer Body */}
                <div className="ipm-body">
                  <iframe
                    src={`${selectedItinerary.pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                    title={selectedItinerary.title}
                    className="ipm-iframe"
                  >
                    <p>
                      Your browser does not support inline PDF viewing.{' '}
                      <a href={selectedItinerary.pdfUrl} target="_blank" rel="noopener noreferrer">
                        Click here to view or download the PDF file.
                      </a>
                    </p>
                  </iframe>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <PartnersSection />
      <CtaBand />
      <Footer />
    </div>
  )
}
