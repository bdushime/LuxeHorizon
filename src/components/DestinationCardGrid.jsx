import Reveal from './Reveal.jsx'
import { destinations } from '../data/content.js'
import './DestinationCardGrid.css'

// The country tiles used by both the homepage Destinations section and the
// standalone Destinations page — kept as one component so the two never drift.
export default function DestinationCardGrid({ onHover, onLeave }) {
  return (
    <div className="dest-grid">
      {destinations.map((dest) => (
        <Reveal
          as="div"
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
