import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import TourCard from '../components/TourCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Seo from '../components/Seo.jsx'
import { generateBreadcrumbSchema } from '../config/seo.js'
import { toursData } from '../data/toursData.js'
import './ExperiencesPage.css'

// Renders the live site's content blocks. Consecutive photos are grouped
// into one row, the way the live site places them side by side.
function Blocks({ blocks, onOpenImage }) {
  const groups = []
  blocks.forEach((b) => {
    const last = groups[groups.length - 1]
    if (b.type === 'img' && last && last.type === 'imgs') last.items.push(b)
    else if (b.type === 'img') groups.push({ type: 'imgs', items: [b] })
    else groups.push(b)
  })
  return groups.map((b, i) => {
    if (b.type === 'imgs') {
      return (
        <div key={i} className="tour-inline-photos">
          {b.items.map((img) => (
            <button key={img.src} type="button" onClick={() => onOpenImage(img.src)} aria-label="View photo">
              <img src={img.src} alt={img.alt || ''} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )
    }
    if (b.type === 'h') return <h4 key={i}>{b.text}</h4>
    if (b.type === 'ul' || b.type === 'ol') {
      const List = b.type
      return (
        <List key={i}>
          {b.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </List>
      )
    }
    return <p key={i}>{b.text}</p>
  })
}

const hasText = (blocks) => blocks.some((b) => b.type !== 'img')

export default function TourDetailPage() {
  const { slug } = useParams()
  const tour = toursData.find((t) => t.slug === slug)
  const [tab, setTab] = useState('overview')
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setTab('overview')
  }, [slug])

  useEffect(() => {
    if (!lightbox) return undefined
    const onKey = (e) => e.key === 'Escape' && setLightbox(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  if (!tour) return <Navigate to="/experiences" replace />

  const tabs = [
    { key: 'overview', label: 'Overview' },
    tour.itinerary.length > 0 && { key: 'itinerary', label: 'Itinerary' },
    (hasText(tour.includes) || hasText(tour.excludes)) && { key: 'includes', label: 'Includes' }
  ].filter(Boolean)

  const related = tour.related.map((s) => toursData.find((t) => t.slug === s)).filter(Boolean)
  const firstText = tour.overview.find((b) => b.type === 'p' || b.type === 'ul')
  const description = (firstText?.text || firstText?.items?.join(' ') || tour.cardText || '').slice(0, 158)

  return (
    <div className="experiences-page tour-page">
      <Seo
        title={`${tour.title} | Luxe Horizons Africa`}
        description={description}
        image={tour.heroImage}
        schema={generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Experiences', url: '/experiences' },
          { name: tour.title, url: `/experiences/${tour.slug}` }
        ])}
      />

      <section className="tour-hero">
        <img className="tour-hero-media" src={tour.heroImage} alt={tour.title} fetchpriority="high" decoding="async" />
        <div className="tour-hero-overlay" />
        <div className="wrap tour-hero-content">
          <Link to="/experiences" className="tour-hero-back">
            ← All Experiences
          </Link>
          <h1>{tour.title}</h1>
          <Link to="/contact" className="btn btn-light tour-hero-cta">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="tour-body">
        <div className="wrap">
          {tabs.length > 1 && (
            <div className="tour-tabs" role="tablist">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.key}
                  className={`tour-tab ${tab === t.key ? 'active' : ''}`}
                  onClick={() => setTab(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}

          {tab === 'overview' && (
            <div className="tour-panel">
              {(tour.days || tour.destination.length > 0) && (
                <div className="tour-fields">
                  {tour.days && (
                    <div className="tour-field">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M3 10h18M8 3v4M16 3v4" />
                      </svg>
                      <div>
                        <span className="tour-field-label">Days</span>
                        <span className="tour-field-value">{tour.days}</span>
                      </div>
                    </div>
                  )}
                  {tour.destination.length > 0 && (
                    <div className="tour-field">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      <div>
                        <span className="tour-field-label">Destination</span>
                        <span className="tour-field-value">{tour.destination.join(', ')}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="tour-overview">
                <div className="tour-gallery">
                  {tour.gallery.map((g) => (
                    <button key={g.src} type="button" onClick={() => setLightbox(g.src)} aria-label={`View photo: ${g.alt}`}>
                      <img src={g.src} alt={g.alt} loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
                <div className="tour-overview-text">
                  <Blocks blocks={tour.overview} onOpenImage={setLightbox} />
                  <Link to="/contact" className="btn btn-dark tour-cta">
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          )}

          {tab === 'itinerary' && (
            <div className="tour-panel tour-days">
              {tour.itinerary.map((d) => (
                <div key={d.day} className="tour-day">
                  <div className="tour-day-num">
                    <span>Day</span>
                    <strong>{d.day}</strong>
                  </div>
                  <div className="tour-day-body">
                    <h3>{d.title}</h3>
                    <Blocks blocks={d.blocks} onOpenImage={setLightbox} />
                  </div>
                </div>
              ))}
              <Link to="/contact" className="btn btn-dark tour-cta">
                Get in touch
              </Link>
            </div>
          )}

          {tab === 'includes' && (
            <div className="tour-panel">
              <div className="tour-incl">
                {hasText(tour.includes) && (
                  <div className="tour-incl-col">
                    <h3>Includes</h3>
                    <Blocks blocks={tour.includes} onOpenImage={setLightbox} />
                  </div>
                )}
                {hasText(tour.excludes) && (
                  <div className="tour-incl-col excludes">
                    <h3>Excludes</h3>
                    <Blocks blocks={tour.excludes} onOpenImage={setLightbox} />
                  </div>
                )}
              </div>
              <Link to="/contact" className="btn btn-dark tour-cta">
                Get in touch
              </Link>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="tour-related">
          <div className="wrap">
            <h2>Related Experiences</h2>
            <div className="tour-grid tour-grid-related">
              {related.map((r) => (
                <TourCard key={r.slug} tour={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="tour-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button type="button" className="tour-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close photo">
              ×
            </button>
            <motion.img
              src={lightbox}
              alt=""
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
