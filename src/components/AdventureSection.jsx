import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { adventureCards } from '../data/content.js'
import './AdventureSection.css'

export default function AdventureSection() {
  const trackRef = useRef(null)
  const [scrollPct, setScrollPct] = useState(0)
  const [hoveredKey, setHoveredKey] = useState(null)

  const activate = (key) => () => setHoveredKey(key)
  const deactivate = () => setHoveredKey(null)
  const hoveredAccent = adventureCards.find((c) => c.key === hoveredKey)?.accent

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const max = track.scrollWidth - track.clientWidth
      setScrollPct(max > 0 ? track.scrollLeft / max : 0)
    }
    onScroll()
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      className="adventure-section"
      id="experiences"
      style={hoveredAccent ? { '--accent': hoveredAccent } : undefined}
    >
      <div className="wrap">
        <div className="adventure-head">
          <Reveal>
            <h2 className="adv-heading">
              <span className="adv-heading-word">Choose</span>{' '}
              <span className="adv-heading-word">Your</span>{' '}
              <span className="adv-heading-word">Journey</span>
            </h2>
            <svg className="adv-heading-line" viewBox="0 0 220 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2,8 C40,2 80,10 120,5 C150,1 180,9 218,4" />
            </svg>
            <p>
              Three starting points across Rwanda, Uganda and Tanzania. Every night, lodge
              and route can be redrawn around you.
            </p>
          </Reveal>
        </div>

        <div className="adventure-track" ref={trackRef}>
          {adventureCards.map((card, i) => (
            <Reveal
              as="a"
              key={card.key}
              href={card.href}
              className={`adv-card ${hoveredKey && hoveredKey !== card.key ? 'dimmed' : ''}`}
              style={{ transitionDelay: `${i * 110}ms` }}
              onMouseEnter={activate(card.key)}
              onMouseLeave={deactivate}
              onFocus={activate(card.key)}
              onBlur={deactivate}
              onTouchStart={activate(card.key)}
            >
              <div className="adv-card-media">
                <img src={card.image} alt={card.title} />
                <div className="adv-card-index">{String(i + 1).padStart(2, '0')}</div>
                <div className="adv-card-overlay" />
                <div className="adv-card-info">
                  <div className="adv-card-route">{card.route}</div>
                  <h3 className="adv-card-title">{card.title}</h3>
                  <div className="adv-card-meta">
                    <span>{card.price}</span>
                    <span className="adv-card-dot" />
                    <span>{card.badge}</span>
                  </div>
                </div>
                <span className="adv-card-arrow" aria-hidden="true">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="adventure-scrollbar">
          <div className="adventure-scrollbar-fill" style={{ width: `${Math.max(12, scrollPct * 100)}%` }} />
        </div>
      </div>
    </section>
  )
}