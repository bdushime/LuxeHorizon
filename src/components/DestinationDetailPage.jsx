import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Seo from './Seo.jsx'
import { destinations, destinationDetails, adventureCards } from '../data/content.js'
import './DestinationDetailPage.css'

// Idea #2 — "The Explorer's Dossier": a sticky column of quick-fact stamps
// beside the long-form story, with a pinned second photo, closing in a
// "Continue The Journey" strip pointing at that country's real itinerary.
export default function DestinationDetailPage() {
  const { key } = useParams()
  const dest = destinations.find((d) => d.key === key)
  const detail = destinationDetails[key]

  if (!dest || !detail) return <Navigate to="/destinations" replace />

  const relatedCard = adventureCards.find((c) => c.key === key) || adventureCards.find((c) => c.key === 'custom')

  return (
    <div className="ddp-page">
      <Seo
        title={`${dest.name} Safari Guide — Luxe Horizons Africa`}
        description={detail.paragraphs[0].slice(0, 155)}
      />

      <section className="ddp-hero">
        <img className="ddp-hero-media" src={dest.image} alt={dest.name} />
        <div className="ddp-hero-overlay" />
        <div className="ddp-hero-content">
          <div className="eyebrow on-dark">{dest.eyebrow}</div>
          <h1>{dest.name}</h1>
        </div>
      </section>

      <div className="wrap ddp-layout">
        <aside className="ddp-facts">
          <div className="ddp-facts-inner">
            <div className="ddp-facts-label">At A Glance</div>
            {detail.facts.map((fact) => (
              <div className="ddp-stamp" key={fact.label} style={{ '--accent': dest.accent }}>
                <div className="ddp-stamp-label">{fact.label}</div>
                <div className="ddp-stamp-value">{fact.value}</div>
              </div>
            ))}
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
            <img src={detail.secondaryPhoto} alt={`${dest.name} scenery`} />
          </Reveal>
        </div>
      </div>

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
              <img src={relatedCard.image} alt={relatedCard.title} />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
