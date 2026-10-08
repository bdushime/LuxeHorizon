import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Seo from './Seo.jsx'
import { destinations, destinationDetails, adventureCards } from '../data/content.js'
import { PAGE_SEO, generateDestinationSchema, generateBreadcrumbSchema } from '../config/seo.js'
import './DestinationDetailPage.css'

export default function DestinationDetailPage() {
  const { key } = useParams()
  const dest = destinations.find((d) => d.key === key)
  const detail = destinationDetails[key]

  if (!dest || !detail) return <Navigate to="/destinations" replace />

  const relatedCard = adventureCards.find((c) => c.key === key) || adventureCards.find((c) => c.key === 'custom')
  const otherDestinations = destinations.filter((d) => d.key !== key)
  const specificSeo = PAGE_SEO.destinationDetail[key] || {}

  const title = specificSeo.title || `${dest.name} Safari Guide — Luxe Horizons Africa`
  const description = specificSeo.description || detail.paragraphs[0].slice(0, 155)
  const image = dest.image

  const schemas = [
    generateDestinationSchema({
      name: dest.name,
      description,
      image,
      url: `/destinations/${dest.key}`
    }),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Destinations', url: '/destinations' },
      { name: dest.name, url: `/destinations/${dest.key}` }
    ])
  ]

  return (
    <div className="ddp-page">
      <Seo
        title={title}
        description={description}
        image={image}
        schema={schemas}
      />

      <section className="ddp-hero">
        <img className="ddp-hero-media" src={dest.image} alt={dest.name} fetchpriority="high" loading="eager" decoding="async" />
        <div className="ddp-hero-overlay" />
        <div className="ddp-hero-content">
          <h1>{dest.name}</h1>
        </div>
        <button
          type="button"
          className="ddp-scroll-indicator"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          aria-label="Scroll down to explore"
        >
          <span className="ddp-scroll-text">Scroll Down</span>
          <span className="ddp-scroll-arrow">&darr;</span>
        </button>
      </section>

      <div className="wrap ddp-layout">
        <aside className="ddp-facts">
          <div className="ddp-facts-inner">
            <div className="ddp-facts-label">At A Glance</div>
            {detail.facts.map((fact) => {
              const isArray = Array.isArray(fact.value)
              const isLong = isArray || (typeof fact.value === 'string' && fact.value.length > 40)
              return (
                <div
                  className={`ddp-stamp ${isLong ? 'ddp-stamp-wide' : ''}`}
                  key={fact.label}
                  style={{ '--accent': dest.accent }}
                >
                  <div className="ddp-stamp-label">{fact.label}</div>
                  <div className="ddp-stamp-value">
                    {isArray ? (
                      <ul className="ddp-stamp-list">
                        {fact.value.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      fact.value
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </aside>

        <div className="ddp-story">
          <Reveal className="ddp-story-text">
            <p>{detail.paragraphs[0]}</p>
            <blockquote className="ddp-pullquote" style={{ color: dest.accent }}>
              &ldquo;{detail.pullQuote}&rdquo;
            </blockquote>
            {detail.paragraphs.slice(1).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          <Reveal className="ddp-pinned-photo">
            <img src={detail.secondaryPhoto} alt={`${dest.name} scenery`} loading="lazy" decoding="async" />
          </Reveal>
        </div>
      </div>

      {otherDestinations.length > 0 && (
        <section className="ddp-other">
          <div className="wrap">
            <div className="eyebrow">Keep Exploring</div>
            <h2>Other Destinations</h2>
            <div className="ddp-other-grid">
              {otherDestinations.map((d) => (
                <Link
                  key={d.key}
                  to={`/destinations/${d.key}`}
                  className="ddp-other-card"
                  style={{ '--accent': d.accent }}
                >
                  <img className="ddp-other-media" src={d.image} alt={d.name} loading="lazy" decoding="async" />
                  <div className="ddp-other-overlay" />
                  <div className="ddp-other-content">
                    <span className="ddp-other-eyebrow">{d.eyebrow}</span>
                    <h3>{d.name}</h3>
                    <span className="ddp-other-cta">View Destination &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedCard && (
        <section className="ddp-continue">
          <div className="wrap ddp-continue-inner">
            <div className="ddp-continue-copy">
              <div className="eyebrow on-dark">Continue The Journey</div>
              <h2>Ready to see {dest.name} for yourself?</h2>
              <div className="ddp-continue-actions">
                <Link to={relatedCard.href} className="btn btn-light">
                  View {relatedCard.title}
                </Link>
                <Link to="/contact" className="ddp-continue-link">
                  Or plan something custom →
                </Link>
              </div>
            </div>
            <div className="ddp-continue-media">
              <img src={relatedCard.image} alt={relatedCard.title} loading="lazy" decoding="async" />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
