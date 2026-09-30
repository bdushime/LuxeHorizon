import { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams, Link } from 'react-router-dom'
import { itinerariesData as initialItineraries } from '../data/itinerariesData.js'
import Seo from '../components/Seo.jsx'
import { PAGE_SEO, generateBreadcrumbSchema } from '../config/seo.js'
import './ItinerariesPage.css'

const ROTATIONS = [-4, 3, -2, 5, -3, 4, -5, 3]

export default function ItinerariesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [itineraries] = useState(initialItineraries)
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItinerary, setSelectedItinerary] = useState(null)
  const [modalMainImage, setModalMainImage] = useState(null)
  const [lightboxImage, setLightboxImage] = useState(null)

  const categories = useMemo(() => {
    const list = Array.from(new Set(itineraries.map((item) => item.category)))
    if (!list.includes('Kenya')) list.splice(3, 0, 'Kenya')
    return list
  }, [itineraries])

  // Open modal if URL has ?itinerary=slug
  useEffect(() => {
    const itineraryKey = searchParams.get('itinerary')
    if (itineraryKey) {
      const match = itineraries.find((item) => item.key === itineraryKey)
      if (match) {
        setSelectedItinerary(match)
        setModalMainImage(match.image)
      }
    }
  }, [searchParams, itineraries])

  // Lock scroll when viewing article modal or lightbox
  useEffect(() => {
    if (selectedItinerary || lightboxImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedItinerary, lightboxImage])

  // ESC key listener to close article modal or lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null)
        } else {
          closeModal()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxImage])

  const openItinerary = (itinerary, e) => {
    if (e) e.preventDefault()
    setSelectedItinerary(itinerary)
    setModalMainImage(itinerary.image)
    setSearchParams({ itinerary: itinerary.key }, { replace: true })
  }

  const closeModal = () => {
    setSelectedItinerary(null)
    setModalMainImage(null)
    setLightboxImage(null)
    setSearchParams({}, { replace: true })
  }

  const filteredItineraries = useMemo(() => {
    if (activeCategory === 'All') return itineraries
    if (activeCategory === 'Kenya') {
      return itineraries.filter(
        (item) => item.category === 'Kenya' || item.title.toLowerCase().includes('kenya') || item.key.includes('kenya')
      )
    }
    return itineraries.filter((item) => item.category === activeCategory)
  }, [itineraries, activeCategory])

  const seoTitle = selectedItinerary
    ? `${selectedItinerary.title} — Luxe Horizons Africa`
    : (PAGE_SEO.itineraries?.title || 'Bespoke Safari Itineraries & Articles | Luxe Horizons Africa')

  const seoDescription = selectedItinerary
    ? selectedItinerary.summary
    : (PAGE_SEO.itineraries?.description || 'Browse & read detailed luxury safari itineraries for Rwanda, Uganda, Tanzania, and Kenya.')

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Itineraries', url: '/itineraries' }
  ]
  if (selectedItinerary) {
    breadcrumbs.push({ name: selectedItinerary.title, url: `/itineraries?itinerary=${selectedItinerary.key}` })
  }

  return (
    <section className="itin-page">
      <Seo
        title={seoTitle}
        description={seoDescription}
        schema={generateBreadcrumbSchema(breadcrumbs)}
      />

      {/* Header */}
      <div className="wrap itin-head">
        <div className="itin-head-copy">
          <div className="eyebrow">Bespoke Journeys</div>
          <h1>Curated Safari Itineraries</h1>
          <p>
            Explore tailor-made travel plans across Rwanda, Uganda, Tanzania, and Kenya.
            Click any itinerary card below to read the complete article and view photos.
          </p>
        </div>
        <div className="itin-head-deck" aria-hidden="true">
          <span className="itin-deck-card back2" />
          <span className="itin-deck-card back1" />
          <span className="itin-deck-card front">{itineraries.length}</span>
        </div>
      </div>

      <div className="wrap itin-layout">
        {/* Category Filter Sidebar */}
        <aside className="itin-sidebar">
          <div className="itin-sidebar-inner">
            <div className="itin-sidebar-label">Filter Destinations</div>
            <button
              type="button"
              className={`itin-filter ${activeCategory === 'All' ? 'active' : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              <span className="itin-filter-dot all" />
              <span className="itin-filter-name">All Itineraries</span>
              <span className="itin-filter-count">{itineraries.length}</span>
            </button>
            {categories.map((cat) => {
              const count = itineraries.filter((item) => item.category === cat).length
              const match = itineraries.find((item) => item.category === cat)
              return (
                <button
                  key={cat}
                  type="button"
                  className={`itin-filter ${activeCategory === cat ? 'active' : ''}`}
                  style={{ '--accent': match?.accent }}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span className="itin-filter-dot" />
                  <span className="itin-filter-name">{cat}</span>
                  <span className="itin-filter-count">{count}</span>
                </button>
              )
            })}
          </div>
        </aside>

        {/* Cards Grid */}
        <div className="itin-grid">
          <AnimatePresence mode="popLayout">
            {filteredItineraries.map((item, i) => (
              <motion.a
                key={item.key}
                href={`?itinerary=${item.key}`}
                onClick={(e) => openItinerary(item, e)}
                layout
                className="itin-card cursor-pointer"
                initial={{ opacity: 0, y: -60, scale: 0.5, rotate: ROTATIONS[i % ROTATIONS.length] }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, y: 40, scale: 0.6, rotate: ROTATIONS[i % ROTATIONS.length] }}
                transition={{ type: 'spring', stiffness: 260, damping: 24, delay: i * 0.045 }}
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
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Article Detail Viewer Modal */}
      <AnimatePresence>
        {selectedItinerary && (
          <div className="ipm-overlay" onClick={closeModal}>
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
                style={{ maxWidth: '1280px', width: '96%', maxHeight: '90vh', overflowY: 'auto', background: '#ffffff', color: '#111827', borderRadius: '16px', border: '1px solid rgba(0, 0, 0, 0.1)', padding: '36px' }}
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
                <div className="ipm-header" style={{ paddingBottom: '20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="ipm-header-info">
                    <div className="ipm-meta" style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                      <span className="ipm-category-badge" style={{ backgroundColor: selectedItinerary.accent, padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#fff' }}>
                        {selectedItinerary.category}
                      </span>
                      <span className="ipm-duration-badge" style={{ background: '#f1f5f9', color: '#334155', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>
                        {selectedItinerary.duration}
                      </span>
                    </div>
                    <h2 id="ipm-title" style={{ fontSize: '26px', margin: 0, color: '#142019', fontWeight: '700' }}>{selectedItinerary.title}</h2>
                  </div>

                  <button
                    type="button"
                    className="ipm-close"
                    onClick={closeModal}
                    aria-label="Close modal"
                    style={{ background: '#f1f5f9', border: 'none', color: '#1e293b', width: '36px', height: '36px', borderRadius: '50%', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    &#10005;
                  </button>
                </div>

                {/* Cover Image & Extracted Photo Gallery */}
                <div style={{ paddingTop: '20px' }}>
                  <div style={{ height: '440px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px', position: 'relative' }}>
                    <img
                      src={modalMainImage || selectedItinerary.image}
                      alt={selectedItinerary.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />

                    {/* View Full Screen Icon Button in Bottom Right Corner */}
                    <button
                      type="button"
                      onClick={() => setLightboxImage(modalMainImage || selectedItinerary.image)}
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

                  {selectedItinerary.gallery && selectedItinerary.gallery.length > 1 && (
                    <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '24px' }}>
                      {selectedItinerary.gallery.map((imgUrl, idx) => (
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

                  {/* Article Overview */}
                  {selectedItinerary.overview && (
                    <div style={{ marginBottom: '32px' }}>
                      <h3 style={{ color: '#8c6b27', fontSize: '20px', marginBottom: '12px', fontWeight: '700' }}>Overview</h3>
                      {selectedItinerary.overview.split('\n\n').map((para, i) => (
                        <p key={i} style={{ marginBottom: '12px', fontSize: '15px', color: '#1e293b', lineHeight: '1.7' }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Day-by-Day Itinerary */}
                  {selectedItinerary.days && selectedItinerary.days.length > 0 && (
                    <div style={{ marginBottom: '32px' }}>
                      <h3 style={{ color: '#8c6b27', fontSize: '20px', marginBottom: '18px', fontWeight: '700' }}>Day-by-Day Itinerary</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {selectedItinerary.days.map((day, dIdx) => (
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

                  {/* Actions Row */}
                  <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
                    <Link
                      to="/contact"
                      onClick={closeModal}
                      style={{
                        background: '#c9a15a',
                        color: '#000',
                        fontWeight: '600',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        display: 'inline-block'
                      }}
                    >
                      Plan This Trip With Us &rarr;
                    </Link>
                    <button
                      type="button"
                      onClick={closeModal}
                      style={{
                        background: '#142019',
                        border: '1px solid #142019',
                        color: '#ffffff',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      Close Article
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
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
    </section>
  )
}
