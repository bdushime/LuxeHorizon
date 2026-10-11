import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { destinations } from '../data/content.js'
import Seo from './Seo.jsx'
import { PAGE_SEO, generateBreadcrumbSchema } from '../config/seo.js'
import './DestinationsPage.css'

export default function DestinationsPage() {
  const [activeKey, setActiveKey] = useState(null)
  const [mobileIndex, setMobileIndex] = useState(0)
  const navigate = useNavigate()
  const panelsRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Tracks which card is centered in the mobile swipe row so the dot
  // indicator below it stays in sync — desktop ignores this entirely.
  useEffect(() => {
    const el = panelsRef.current
    if (!el) return undefined
    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const step = el.scrollWidth / destinations.length
        const idx = Math.round(el.scrollLeft / step)
        setMobileIndex(Math.min(destinations.length - 1, Math.max(0, idx)))
        raf = null
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Destinations', url: '/destinations' }
  ]

  return (
    <section className="dpx-page">
      <Seo
        title={PAGE_SEO.destinations.title}
        description={PAGE_SEO.destinations.description}
        image={PAGE_SEO.destinations.ogImage}
        schema={generateBreadcrumbSchema(breadcrumbs)}
      />

      <div className="dpx-head">
        <div className="eyebrow on-dark">Where To</div>
        <h1>Four Countries, One Extraordinary Story</h1>
      </div>

      <div className={`dpx-panels ${activeKey ? 'has-active' : ''}`} ref={panelsRef}>
        {destinations.map((dest, i) => {
          const isActive = activeKey === dest.key
          return (
            <div
              key={dest.key}
              className={`dpx-panel ${isActive ? 'active' : ''}`}
              style={{ flexGrow: isActive ? 5 : activeKey ? 0.75 : 1 }}
              tabIndex={0}
              onMouseEnter={() => setActiveKey(dest.key)}
              onMouseLeave={() => setActiveKey(null)}
              onFocus={() => setActiveKey(dest.key)}
              onBlur={() => setActiveKey(null)}
              onTouchStart={() => setActiveKey((k) => (k === dest.key ? null : dest.key))}
              onClick={() => {
                if (isActive) navigate(`/destinations/${dest.key}`)
              }}
            >
              <img className="dpx-panel-media" src={dest.image} alt={dest.name} loading="lazy" decoding="async" />
              <div className="dpx-panel-overlay" />

              <div className="dpx-panel-index">0{i + 1}</div>

              <div className="dpx-panel-vertical">
                <span>{dest.name}</span>
              </div>

              <div className="dpx-panel-detail">
                <div className="eyebrow on-dark">{dest.eyebrow}</div>
                <h3>{dest.name}</h3>
                <span className="dpx-panel-cta">View Full Guide →</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="dpx-mobile-dots" aria-hidden="true">
        {destinations.map((d, i) => (
          <span key={d.key} className={`dpx-dot ${i === mobileIndex ? 'active' : ''}`} />
        ))}
      </div>
    </section>
  )
}

