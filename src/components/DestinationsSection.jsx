import Reveal from './Reveal.jsx'
import { destinations } from '../data/content.js'
import './DestinationsSection.css'

export default function DestinationsSection() {
  return (
    <section className="destinations" id="destinations">
      <div className="wrap">
        <Reveal className="dest-head">
          <h2>Where we take you</h2>
          <p>
            Three countries, chosen because we can do them properly — not because a map
            says East Africa should include more.
          </p>
        </Reveal>
        <div className="dest-grid">
          {destinations.map((dest) => (
            <Reveal as="div" key={dest.key} className="dest-tile">
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
