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

const CATEGORIES = ['All', 'Rwanda', 'Uganda', 'Tanzania', 'Kenya', 'Multi-Country']

function formatCardSummary(text, maxLength = 112) {
  if (!text) return ''
  const trimmed = text.trim()
  if (trimmed.length <= maxLength) return trimmed
  const sub = trimmed.slice(0, maxLength)
  const lastSpace = sub.lastIndexOf(' ')
  return (lastSpace > 50 ? sub.slice(0, lastSpace) : sub) + '...'
}

export default function ExperiencesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('All')
  
  // Selected experience article modal
  const [selectedExperience, setSelectedExperience] = useState(null)

  // Currently displayed main gallery image inside modal
  const [modalMainImage, setModalMainImage] = useState(null)

  // Fullscreen image lightbox modal
  const [lightboxImage, setLightboxImage] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Build unified experience article items list with exact PDF content
  const allExperiences = useMemo(() => {
    const combined = [
      ...itinerariesData.map((item) => ({
        id: item.key,
        key: item.key,
        slug: item.key,
        title: item.title,
        category: item.category,
        duration: item.duration,
        summary: formatCardSummary(item.summary),
        overview: item.overview,
        days: item.days || [],
        rawText: item.rawText,
        image: item.image,
        gallery: item.gallery && item.gallery.length > 0 ? item.gallery : [item.image],
        accent: item.accent || '#c6a15b'
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
          summary: formatCardSummary(item.summary || item.description),
          overview: item.description || item.summary,
          fullStory: item.fullStory || [],
          image: item.image,
          gallery: item.gallery || [item.image],
          highlights: item.highlights || [],
          accent: '#c6a15b'
        }
      })
    ]

    // Deduplicate by title to ensure a clean, curated list
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
    if (expSlug) {
      const match = allExperiences.find((e) => e.slug === expSlug || e.key === expSlug || e.id === expSlug)
      if (match) {
        setSelectedExperience(match)
        setModalMainImage(match.image)
      }
    }
  }, [searchParams, allExperiences])

  // Body scroll locking and Escape key handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null)
        } else {
          closeExpModal()
        }
      }
    }

    if (selectedExperience || lightboxImage) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedExperience, lightboxImage])

  const openExperience = (exp, e) => {
    if (e) e.preventDefault()
    setSelectedExperience(exp)
    setModalMainImage(exp.image)
    setSearchParams({ exp: exp.slug }, { replace: true })
  }

  const closeExpModal = () => {
    setSelectedExperience(null)
    setModalMainImage(null)
    setLightboxImage(null)
    setSearchParams({}, { replace: true })
  }

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return allExperiences
    if (activeCategory === 'Kenya') {
      return allExperiences.filter(
        (item) => item.category === 'Kenya' || item.title.toLowerCase().includes('kenya') || item.key.includes('kenya')
      )
    }
    return allExperiences.filter((item) => item.category === activeCategory)
  }, [allExperiences, activeCategory])

  const scrollToGrid = () => {
    const el = document.getElementById('experiences-content-section')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // SEO calculation
  const seoTitle = selectedExperience
    ? `${selectedExperience.title} — ${selectedExperience.duration} | Luxe Horizons Africa`
    : PAGE_SEO.experiences.title

  const seoDescription = selectedExperience
    ? (selectedExperience.summary || selectedExperience.overview || '').slice(0, 160)
    : PAGE_SEO.experiences.description

  const seoImage = selectedExperience ? selectedExperience.image : PAGE_SEO.experiences.ogImage

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Experiences', url: '/experiences' }
  ]
  if (selectedExperience) {
    breadcrumbs.push({ name: selectedExperience.title, url: `/experiences?exp=${selectedExperience.slug}` })
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
            Explore bespoke gorilla treks, wildlife safaris, and complete day-by-day itinerary articles.
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
              Click any card below to read the complete itinerary article and view photos.
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
                    <span className="itin-card-format">Full Article</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Article Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <div className="exp-modal-backdrop" onClick={closeExpModal}>
            <motion.div
              className="exp-modal-content"
              style={{ maxWidth: '1280px', width: '96%' }}
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

              {/* Cover Image & Extracted Photo Gallery */}
              <div className="exp-modal-hero-img" style={{ height: '440px', marginBottom: '16px', overflow: 'hidden', borderRadius: '12px', position: 'relative' }}>
                <img
                  src={modalMainImage || selectedExperience.image}
                  alt={selectedExperience.title}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* View Full Screen Icon Button in Bottom Right Corner */}
                <button
                  type="button"
                  onClick={() => setLightboxImage(modalMainImage || selectedExperience.image)}
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    right: '14px',
                    background: 'rgba(18, 18, 18, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    fontSize: '13px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    zIndex: 5,
                    transition: 'all 0.2s ease'
                  }}
                  title="View image in full screen"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                  <span>Full Screen</span>
                </button>
              </div>

              {selectedExperience.gallery && selectedExperience.gallery.length > 1 && (
                <div className="exp-modal-gallery-row" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '24px' }}>
                  {selectedExperience.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setModalMainImage(imgUrl)}
                      style={{
                        border: modalMainImage === imgUrl ? '2px solid #c9a15a' : '2px solid transparent',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        padding: 0,
                        background: 'none',
                        cursor: 'pointer',
                        flexShrink: 0
                      }}
                    >
                      <img
                        src={imgUrl}
                        alt={`Photo ${idx + 1}`}
                        style={{ width: '80px', height: '60px', objectFit: 'cover', display: 'block' }}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Article Content Body */}
              <div className="exp-modal-body" style={{ color: '#111827', lineHeight: '1.75' }}>
                
                {/* Overview Paragraphs */}
                {selectedExperience.overview && (
                  <div className="exp-article-overview" style={{ marginBottom: '32px' }}>
                    <h3 style={{ color: '#8c6b27', fontSize: '20px', marginBottom: '12px', fontWeight: '700' }}>Overview</h3>
                    {selectedExperience.overview.split('\n\n').map((para, i) => (
                      <p key={i} style={{ marginBottom: '12px', fontSize: '15px', color: '#1e293b', lineHeight: '1.7' }}>
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {/* Day by Day Breakdown */}
                {selectedExperience.days && selectedExperience.days.length > 0 && (
                  <div className="exp-article-days" style={{ marginBottom: '32px' }}>
                    <h3 style={{ color: '#8c6b27', fontSize: '20px', marginBottom: '18px', fontWeight: '700' }}>Day-by-Day Itinerary</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {selectedExperience.days.map((day, dIdx) => (
                        <div
                          key={dIdx}
                          style={{
                            background: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '10px',
                            padding: '20px'
                          }}
                        >
                          <h4 style={{ color: '#142019', margin: '0 0 10px 0', fontSize: '16px', fontWeight: '700' }}>
                            {day.dayTitle}
                          </h4>
                          {day.content && day.content.map((line, lIdx) => (
                            <p key={lIdx} style={{ margin: '4px 0', fontSize: '14px', color: '#1e293b', lineHeight: '1.6' }}>
                              {line}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Full Story Paragraphs (for experiencesData items) */}
                {selectedExperience.fullStory && selectedExperience.fullStory.length > 0 && (
                  <div className="exp-article-story" style={{ marginBottom: '32px' }}>
                    <h3 style={{ color: '#8c6b27', fontSize: '20px', marginBottom: '12px', fontWeight: '700' }}>Full Experience Story</h3>
                    {selectedExperience.fullStory.map((para, i) => (
                      <p key={i} style={{ marginBottom: '10px', fontSize: '14px', color: '#1e293b', lineHeight: '1.7' }}>
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                {selectedExperience.highlights && selectedExperience.highlights.length > 0 && (
                  <div className="exp-highlights-box" style={{ marginBottom: '32px', color: '#1e293b' }}>
                    <h4 style={{ color: '#8c6b27', fontSize: '18px', marginBottom: '10px', fontWeight: '700' }}>Highlights</h4>
                    <ul>
                      {selectedExperience.highlights.map((item, i) => (
                        <li key={i} style={{ color: '#1e293b' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Primary Action Buttons */}
                <div className="exp-modal-cta-row" style={{ display: 'flex', gap: '16px', marginTop: '36px', flexWrap: 'wrap' }}>
                  <Link
                    to="/contact"
                    className="btn-exp-cta"
                    onClick={closeExpModal}
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    Plan This Trip With Us &rarr;
                  </Link>

                  <button
                    type="button"
                    className="btn-exp-outline"
                    onClick={closeExpModal}
                    style={{ padding: '12px 24px', fontSize: '14px', borderRadius: '8px', cursor: 'pointer', background: '#142019', color: '#f8fafc', borderColor: '#142019' }}
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(0, 0, 0, 0.93)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              style={{ position: 'relative', maxWidth: '94vw', maxHeight: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                style={{
                  position: 'absolute',
                  top: '-18px',
                  right: '-18px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  color: '#000000',
                  border: 'none',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
                aria-label="Close fullscreen image"
              >
                &#10005;
              </button>

              <img
                src={lightboxImage}
                alt="Full screen preview"
                style={{
                  maxWidth: '92vw',
                  maxHeight: '88vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <PartnersSection />
      <CtaBand />
      <Footer />
    </div>
  )
}
