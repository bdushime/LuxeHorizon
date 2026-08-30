import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { destinations } from '../data/content.js'
import './DestinationsSection.css'

export default function DestinationsSection() {
  const [hoveredKey, setHoveredKey] = useState(null)

  const activate = (key) => () => setHoveredKey(key)
  const deactivate = () => setHoveredKey(null)

  return (
    <section className="destinations" id="destinations">
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
            <h2>Explore Captivating Destinations</h2>
          </Reveal>
          <Reveal className="reveal-right">
            <p>
              Discover a world of remarkable places and diverse landscapes that beckon
              adventurers and travelers alike. From exotic paradises to cultural gems, let
              your imagination roam as we unveil an array of unforgettable destinations
              waiting to be explored.
            </p>
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