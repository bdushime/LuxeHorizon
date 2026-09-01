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