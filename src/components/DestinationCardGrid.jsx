import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import SwipeDots from './SwipeDots.jsx'
import { destinations } from '../data/content.js'
import './DestinationCardGrid.css'

// The country tiles used on the homepage Destinations teaser — each links
// through to the full, interactive Destinations page. On phones and small
// tablets the tiles become a left-to-right swipe row (see .m-swipe).
export default function DestinationCardGrid({ onHover, onLeave }) {
  const trackRef = useRef(null)
  return (
    <>
      <div className="dest-grid m-swipe" ref={trackRef}>
        {destinations.map((dest) => (
          <Reveal
            as={Link}
            to="/destinations"
            key={dest.key}
            className="dest-tile"
            onMouseEnter={() => onHover?.(dest.key)}
            onMouseLeave={() => onLeave?.()}
            onFocus={() => onHover?.(dest.key)}
            onBlur={() => onLeave?.()}
            onTouchStart={() => onHover?.(dest.key)}
          >
            <img src={dest.image} alt={dest.name} loading="lazy" decoding="async" />
            <div className="dest-label">
              <div className="eyebrow">{dest.eyebrow}</div>
              <h3>{dest.name}</h3>
            </div>
          </Reveal>
        ))}
      </div>
      <SwipeDots trackRef={trackRef} label="destinations" />
    </>
  )
}
