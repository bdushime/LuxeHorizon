import { useState } from 'react'
import { destinations, heroBaseGradient } from '../data/content.js'
import DestinationCardGrid from './DestinationCardGrid.jsx'
import Seo from './Seo.jsx'
import './DestinationsPage.css'

export default function DestinationsPage() {
  const [hoveredKey, setHoveredKey] = useState(null)
  const hoveredDest = destinations.find((d) => d.key === hoveredKey)

  return (
    <>
      <Seo
        title="Safari Destinations — Rwanda, Uganda, Tanzania & Kenya | Luxe Horizons Africa"
        description="Explore our East Africa safari destinations: gorilla trekking in Rwanda, wildlife safaris in Uganda and Tanzania, and Kenya's Maasai Mara."
      />
      <section className="dp-hero">
        <div
          className="dp-hero-photo-stack"
          role="img"
          aria-label={hoveredDest ? `Safari scene from ${hoveredDest.name}` : 'Safari landscape across Rwanda, Uganda, Tanzania and Kenya'}
        >
          <div
            className="dp-hero-photo-layer base"
            style={{ backgroundImage: heroBaseGradient, backgroundSize: 'cover', backgroundPosition: 'center 42%' }}
          />
          {destinations.map((dest) => (
            <div
              key={dest.key}
              className={`dp-hero-photo-layer wipe ${hoveredKey === dest.key ? 'wipe-in' : ''}`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(8,16,13,0.15) 0%, rgba(8,16,13,0.5) 100%), url('${dest.image}')`
              }}
            />
          ))}
        </div>

        <div className="dp-hero-content">
          <div className="eyebrow on-dark">Where To</div>
          <h1>{hoveredDest ? hoveredDest.name : 'Our Destinations'}</h1>
          <p>
            {hoveredDest
              ? hoveredDest.eyebrow.replace(/^\d+\s*—\s*/, '')
              : 'Four countries across East Africa — hover a card below to preview each one.'}
          </p>
        </div>
      </section>

      <section className="dp-cards">
        <div className="wrap">
          <div className="dp-cards-head">
            <div className="eyebrow">Choose A Country</div>
            <h2>Explore Every Destination</h2>
          </div>
          {/* No onLeave — the hero keeps showing whichever card was last hovered
              instead of reverting the moment the mouse leaves it (which
              happens involuntarily when scrolling up to look at the hero). */}
          <DestinationCardGrid onHover={setHoveredKey} />
        </div>
      </section>
    </>
  )
}
