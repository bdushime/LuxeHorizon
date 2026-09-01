import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'
import { destinations } from '../data/content.js'
import './DestinationsSection.css'

export default function DestinationsSection() {
  const [hoveredKey, setHoveredKey] = useState(null)
  const [displayDest, setDisplayDest] = useState(null)

  const activate = (key) => () => setHoveredKey(key)
  const deactivate = () => setHoveredKey(null)

  const hoveredDest = destinations.find((d) => d.key === hoveredKey)

  useEffect(() => {
    if (hoveredDest) setDisplayDest(hoveredDest)
  }, [hoveredDest])

  return (
    <section
      className={`destinations ${hoveredDest ? 'is-hovering' : ''}`}
      id="destinations"
      style={hoveredDest ? { '--accent': hoveredDest.accent } : undefined}
    >
      <div className="dest-bg">
        {destinations.map((dest) => (
          <div
            key={dest.key}
            className={`dest-bg-layer ${hoveredKey === dest.key ? 'active' : ''}`}
            style={{ backgroundImage: `url(${dest.image})` }}
          />
        ))}
      </div>

      <div className="wrap">
        <div className="dest-head">
          <Reveal className="reveal-left">
            <h2>
              Explore <span className="dest-heading-accent">Captivating</span> Destinations
              <span className={`dest-heading-tag ${hoveredKey ? 'is-visible' : ''}`}>
                {displayDest ? `— ${displayDest.name}` : ''}
              </span>
            </h2>
          </Reveal>
          <Reveal className="reveal-right">
            <p>From misted volcanoes to golden plains — three countries, each with its own story to tell.</p>
          </Reveal>
          <Reveal className="reveal-right dest-route">
            <svg viewBox="0 0 320 140" className="dest-route-svg" aria-hidden="true">
              <path className="dest-route-line" d="M20,112 Q90,24 160,34 Q232,20 300,96" />
              {[
                { key: 'rwanda', x: 20, y: 112 },
                { key: 'uganda', x: 160, y: 34 },
                { key: 'tanzania', x: 300, y: 96 }
              ].map((p) => {
                const dest = destinations.find((d) => d.key === p.key)
                return (
                  <circle
                    key={p.key}
                    cx={p.x}
                    cy={p.y}
                    r={hoveredKey === p.key ? 7 : 5}
                    className={`dest-route-dot ${hoveredKey === p.key ? 'active' : ''}`}
                    style={{ '--accent': dest?.accent }}
                  />
                )
              })}
            </svg>
            <div className="dest-route-labels">
              {destinations.map((dest) => (
                <span
                  key={dest.key}
                  className={`dest-route-label ${hoveredKey === dest.key ? 'active' : ''}`}
                  style={{ '--accent': dest.accent }}
                >
                  {dest.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="dest-grid">
          {destinations.map((dest) => (
            <Reveal
              as="div"
              key={dest.key}
              className="dest-tile"
              onMouseEnter={activate(dest.key)}
              onMouseLeave={deactivate}
              onFocus={activate(dest.key)}
              onBlur={deactivate}
              onTouchStart={activate(dest.key)}
            >
              <img src={dest.image} alt={dest.name} />
              <div className="dest-label">
                <div className="eyebrow">{dest.eyebrow}</div>
                <h3>{dest.name}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}