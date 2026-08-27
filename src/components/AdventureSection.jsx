import { useRef } from 'react'
import Reveal from './Reveal.jsx'
import { adventureCards } from '../data/content.js'
import './AdventureSection.css'

export default function AdventureSection() {
  const trackRef = useRef(null)

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.adventure-card')
    const step = card ? card.getBoundingClientRect().width + 22 : 320
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="adventure-section" id="experiences">
      <div className="wrap">
        <div className="adventure-head">
          <Reveal>
            <h2>Choose Your Journey</h2>
            <p>
              Three starting points across Rwanda, Uganda and Tanzania. Every night, lodge
              and route can be redrawn around you.
            </p>
          </Reveal>
          <div className="adventure-nav">
            <button className="adventure-arrow" aria-label="Previous" onClick={() => scrollByCard(-1)}>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M15 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button className="adventure-arrow" aria-label="Next" onClick={() => scrollByCard(1)}>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="adventure-track" ref={trackRef}>
          {adventureCards.map((card) => (
            <Reveal as="a" key={card.key} href={card.href} className="adventure-card">
              <div className="adventure-media">
                <img src={card.image} alt={card.title} />
                <span className="adventure-badge">
                  <span className="dot" />
                  {card.badge}
                </span>
              </div>
              <div className="adventure-body">
                <div className="adventure-title">{card.title}</div>
                <div className="adventure-route">{card.route}</div>
                <div className="adventure-foot">
                  <span className="adventure-price">{card.price}</span>
                  <span className="adventure-link">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
