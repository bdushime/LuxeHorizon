import { useState } from 'react'
import { destinations } from '../data/content.js'
import Seo from './Seo.jsx'
import './DestinationsPage.css'

// Idea #1 — "Expanding Panels": the whole page is one edge-to-edge photo
// mural. Hovering a country flexes it wide while the others compress to
// narrow strips, so there's no separate hero + grid — the interaction IS
// the page.
export default function DestinationsPage() {
  const [activeKey, setActiveKey] = useState(null)

  return (
    <section className="dpx-page">
      <Seo
        title="Safari Destinations — Rwanda, Uganda, Tanzania & Kenya | Luxe Horizons Africa"
        description="Explore our East Africa safari destinations: gorilla trekking in Rwanda, wildlife safaris in Uganda and Tanzania, and Kenya's Maasai Mara."
      />

      <div className="dpx-head">
        <div className="eyebrow on-dark">Where To</div>
        <h1>Four Countries, One Extraordinary Story</h1>
        <p>Hover a country to step inside it.</p>
      </div>

      <div className={`dpx-panels ${activeKey ? 'has-active' : ''}`}>
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
            >
              <img className="dpx-panel-media" src={dest.image} alt={dest.name} />
              <div className="dpx-panel-overlay" />

              <div className="dpx-panel-index">0{i + 1}</div>

              <div className="dpx-panel-vertical">
                <span>{dest.name}</span>
              </div>

              <div className="dpx-panel-detail">
                <div className="eyebrow on-dark">{dest.eyebrow}</div>
                <h3>{dest.name}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
