import { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
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

  const categories = useMemo(() => Array.from(new Set(itineraries.map((item) => item.category))), [itineraries])

  // Open modal if URL has ?itinerary=slug
  useEffect(() => {
    const itineraryKey = searchParams.get('itinerary')
    if (itineraryKey) {
      const match = itineraries.find((item) => item.key === itineraryKey)
      if (match) setSelectedItinerary(match)
    }
  }, [searchParams, itineraries])

  // Lock scroll when viewing PDF modal
  useEffect(() => {
    if (selectedItinerary) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedItinerary])

  // ESC key listener to close PDF modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const openItinerary = (itinerary, e) => {
    if (e) e.preventDefault()
    setSelectedItinerary(itinerary)
    setSearchParams({ itinerary: itinerary.key }, { replace: true })
  }

  const closeModal = () => {
    setSelectedItinerary(null)
    setSearchParams({}, { replace: true })
  }

  const filteredItineraries =
    activeCategory === 'All'
      ? itineraries
      : itineraries.filter((item) => item.category === activeCategory)

  const seoTitle = selectedItinerary
    ? `${selectedItinerary.title} (PDF) — Luxe Horizons Africa`
    : (PAGE_SEO.itineraries?.title || 'Bespoke Safari Itineraries & PDF Guides | Luxe Horizons Africa')

  const seoDescription = selectedItinerary
    ? selectedItinerary.summary
    : (PAGE_SEO.itineraries?.description || 'Browse & view detailed luxury safari itineraries for Rwanda, Uganda, and Tanzania.')

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
            Explore tailor-made travel plans across Rwanda, Uganda, and Tanzania.
            Click any itinerary card below to preview the complete PDF document directly online.
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
                    <span className="itin-card-format">PDF Document</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>

                  <span className="itin-card-link" style={{ color: item.accent }}>
                    View Itinerary PDF &rarr;
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* PDF Document Viewer Modal */}
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
                      onClick={closeModal}
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
    </section>
  )
}
