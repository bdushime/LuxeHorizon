import { useEffect, useState, useMemo } from 'react'
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

const CATEGORIES = ['All', 'Rwanda', 'Uganda', 'Tanzania', 'Multi-Country']

const DEFAULT_PDF_MAP = {
  'Rwanda': '/itineraries/10DAY-RWANDA-DISCOVERY-EXPERIENCE.docx.pdf',
  'Uganda': '/itineraries/9DAY-UGANDA-ADVENTURE.docx.pdf',
  'Tanzania': '/itineraries/11-DAY-TANZANIA---RWANDA,-PREMIUM.docx.pdf',
  'Multi-Country': '/itineraries/15DAY-RWANDA---KENYA-CLASSIC-TRIP.docx.pdf'
}

export default function ExperiencesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('All')
  
  // Selected experience for short description modal
  const [selectedExperience, setSelectedExperience] = useState(null)
  
  // Selected PDF itinerary for direct inline PDF viewer modal
  const [activePdfViewer, setActivePdfViewer] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Build unified experience items list
  const allExperiences = useMemo(() => {
    const combined = [
      ...itinerariesData.map((item) => ({
        id: item.key,
        key: item.key,
        slug: item.key,
        title: item.title,
        category: item.category,
        duration: item.duration,
        summary: item.summary,
        description: item.summary,
        image: item.image,
        accent: item.accent || '#c6a15b',
        pdfUrl: item.pdfUrl
      })),
      ...experiencesData.map((item) => {
        const cat = item.category === 'Special Expeditions' ? 'Rwanda' : item.category
        return {
          id: item.slug || item.id,
          key: item.slug || item.id,
          slug: item.slug || item.id,
          title: item.title,
          category: cat,
          duration: item.duration || 'Custom Duration',
          summary: item.summary || item.description,
          description: item.description || item.summary,
          image: item.image,
          highlights: item.highlights || [],
          accent: '#c6a15b',
          pdfUrl: item.pdfUrl || DEFAULT_PDF_MAP[cat] || '/itineraries/10DAY-RWANDA-DISCOVERY-EXPERIENCE.docx.pdf'
        }
      })
    ]

    // Deduplicate by title to ensure a clean list
    const seen = new Set()
    return combined.filter((item) => {
      const normalizedTitle = item.title.toLowerCase().trim()
      if (seen.has(normalizedTitle)) return false
      seen.add(normalizedTitle)
      return true
    })
  }, [])

  // URL Deep-linking handling
  useEffect(() => {
    const expSlug = searchParams.get('exp') || searchParams.get('itinerary')
    const pdfFlag = searchParams.get('pdf')

    if (expSlug) {
      const match = allExperiences.find((e) => e.slug === expSlug || e.key === expSlug || e.id === expSlug)
      if (match) {
        if (pdfFlag === 'true') {
          setActivePdfViewer(match)
        } else {
          setSelectedExperience(match)
        }
      }
    }
  }, [searchParams, allExperiences])

  // Body scroll locking and Escape key handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeExpModal()
        closePdfViewer()
      }
    }

    if (selectedExperience || activePdfViewer) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedExperience, activePdfViewer])

  const openExperience = (exp, e) => {
    if (e) e.preventDefault()
    setSelectedExperience(exp)
    setSearchParams({ exp: exp.slug }, { replace: true })
  }

  const closeExpModal = () => {
    setSelectedExperience(null)
    setSearchParams({}, { replace: true })
  }

  const openPdfViewer = (exp, e) => {
    if (e) e.preventDefault()
    setActivePdfViewer(exp)
    setSearchParams({ exp: exp.slug, pdf: 'true' }, { replace: true })
  }

  const closePdfViewer = () => {
    setActivePdfViewer(null)
    if (selectedExperience) {
      setSearchParams({ exp: selectedExperience.slug }, { replace: true })
    } else {
      setSearchParams({}, { replace: true })
    }
  }

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return allExperiences
    return allExperiences.filter((item) => item.category === activeCategory)
  }, [allExperiences, activeCategory])

  const scrollToGrid = () => {
    const el = document.getElementById('experiences-content-section')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // SEO calculation
  const currentViewItem = selectedExperience || activePdfViewer
  const seoTitle = currentViewItem
    ? `${currentViewItem.title} — ${currentViewItem.duration} | Luxe Horizons Africa`
    : PAGE_SEO.experiences.title

  const seoDescription = currentViewItem
    ? (currentViewItem.summary || currentViewItem.description).slice(0, 160)
    : PAGE_SEO.experiences.description

  const seoImage = currentViewItem ? currentViewItem.image : PAGE_SEO.experiences.ogImage

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Experiences', url: '/experiences' }
  ]
  if (currentViewItem) {
    breadcrumbs.push({ name: currentViewItem.title, url: `/experiences?exp=${currentViewItem.slug}` })
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

      {/* Hero Header */}
      <section className="exp-hero-section">
        <div className="exp-hero-bg" />
        <div className="exp-hero-overlay" />

        <div className="wrap exp-hero-content text-center">
          <div className="exp-hero-badge">CURATED EXPERIENCES</div>
          <h1 className="exp-hero-headline">
            Unforgettable Safaris &amp; <br className="hero-br" />
            <span className="gold-text">East African Journeys</span>
          </h1>
          <p className="exp-hero-tagline">
            Explore bespoke gorilla treks, wildlife safaris, and complete day-by-day itinerary PDF documents.
          </p>
        </div>

        <button
          type="button"
          className="exp-hero-scroll-btn"
          onClick={scrollToGrid}
          aria-label="Scroll to experiences portfolio"
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

      {/* Main Single-Page Grid Section */}
      <section className="exp-grid-section" id="experiences-content-section">
        <div className="wrap">
          <Reveal className="exp-section-header text-center">
            <div className="eyebrow">BESPOKE EXPEDITIONS</div>
            <h2>Explore Our Experiences &amp; Itineraries</h2>
            <p className="exp-section-sub">
              Click any card below to view details and read the full itinerary PDF.
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

          {/* Experience Cards Grid */}
          <div className="itin-grid">
            {filteredItems.map((item) => (
              <div
                key={item.key}
                onClick={(e) => openExperience(item, e)}
                className="itin-card cursor-pointer"
              >
                <div className="itin-card-media">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                  <span className="itin-card-badge">{item.duration}</span>
                </div>

                <div className="itin-card-body">
                  <div className="itin-card-meta">
                    <span className="itin-card-category" style={{ color: item.accent }}>
                      {item.category}
                    </span>
                    <span className="itin-card-dot" />
                    <span className="itin-card-format">PDF Itinerary</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>

                  <div className="exp-card-action-row" style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '12px' }}>
                    <button
                      type="button"
                      className="btn-exp-outline"
                      style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '8px', background: '#142019', color: '#c9a15a', borderColor: '#c9a15a' }}
                      onClick={(e) => {
                        e.stopPropagation()
                        openPdfViewer(item, e)
                      }}
                    >
                      View PDF &#8599;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Detail & Description Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <div className="exp-modal-backdrop" onClick={closeExpModal}>
            <motion.div
              className="exp-modal-content"
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="exp-modal-close"
                onClick={closeExpModal}
                aria-label="Close modal"
              >
                &times;
              </button>

              <div className="exp-modal-header">
                <div className="exp-modal-meta">
                  <span className="exp-badge duration">{selectedExperience.duration}</span>
                  <span className="exp-badge category">{selectedExperience.category}</span>
                </div>
                <h1 className="exp-modal-title">{selectedExperience.title}</h1>
              </div>

              {/* Cover Image */}
              <div className="exp-modal-hero-img" style={{ height: '360px', marginBottom: '24px' }}>
                <img
                  src={selectedExperience.image}
                  alt={selectedExperience.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Short Description */}
              <div className="exp-modal-body">
                <div className="exp-article-overview">
                  <h3>Experience Description</h3>
                  <p className="lead-text">{selectedExperience.summary || selectedExperience.description}</p>
                </div>

                {selectedExperience.highlights && selectedExperience.highlights.length > 0 && (
                  <div className="exp-highlights-box">
                    <h4>Highlights</h4>
                    <ul>
                      {selectedExperience.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Primary Action Buttons */}
                <div className="exp-modal-cta-row" style={{ display: 'flex', gap: '16px', marginTop: '28px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn-exp-cta"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      closeExpModal()
                      openPdfViewer(selectedExperience, e)
                    }}
                  >
                    View PDF Document &#8599;
                  </button>

                  <Link
                    to="/contact"
                    className="btn-exp-outline"
                    onClick={closeExpModal}
                  >
                    Plan This Trip With Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Inline PDF Viewer Modal */}
      <AnimatePresence>
        {activePdfViewer && (
          <div className="ipm-overlay" onClick={closePdfViewer}>
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
                {/* Header */}
                <div className="ipm-header">
                  <div className="ipm-header-info">
                    <div className="ipm-meta">
                      <span className="ipm-category-badge" style={{ backgroundColor: activePdfViewer.accent || '#c6a15b' }}>
                        {activePdfViewer.category}
                      </span>
                      <span className="ipm-duration-badge">{activePdfViewer.duration}</span>
                    </div>
                    <h2 id="ipm-title">{activePdfViewer.title}</h2>
                  </div>

                  <div className="ipm-header-actions">
                    <a
                      href={activePdfViewer.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ipm-btn-action"
                      title="Open PDF in new tab"
                    >
                      <span>Open in New Tab &#8599;</span>
                    </a>

                    <button
                      type="button"
                      className="ipm-close"
                      onClick={closePdfViewer}
                      aria-label="Close viewer"
                    >
                      &#10005;
                    </button>
                  </div>
                </div>

                {/* PDF Viewer Body */}
                <div className="ipm-body">
                  <iframe
                    src={`${activePdfViewer.pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                    title={activePdfViewer.title}
                    className="ipm-iframe"
                  >
                    <p>
                      Your browser does not support inline PDF viewing.{' '}
                      <a href={activePdfViewer.pdfUrl} target="_blank" rel="noopener noreferrer">
                        Click here to view the PDF file.
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
