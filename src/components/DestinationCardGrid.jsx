import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { destinations } from '../data/content.js'
import './DestinationCardGrid.css'

// The country tiles used on the homepage Destinations teaser — each links
// through to the full, interactive Destinations page.
export default function DestinationCardGrid({ onHover, onLeave }) {
  return (
    <div className="dest-grid">
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
          <img src={dest.image} alt={dest.name} />
          <div className="dest-label">
            <div className="eyebrow">{dest.eyebrow}</div>
            <h3>{dest.name}</h3>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
