import Reveal from './Reveal.jsx'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section className="intro" id="about">
      <div className="wrap intro-grid">
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            Our Approach
          </div>
          <h2>
            A journey,
            <br />
            considered.
          </h2>
        </Reveal>
        <Reveal className="intro-copy">
          <p>
            We are a small team based in Kigali, working exclusively across Rwanda,
            Uganda and Tanzania. That focus means we know which lodge has the better
            view of the volcanoes, which guide reads gorilla behaviour best, and which
            road to avoid after rain — details a wider itinerary can't afford to chase.
          </p>
          <p>
            Every trip we build is designed around one traveller's version of luxury,
            whether that's silence at altitude, a private vehicle, or a community
            project worth detouring for. Nothing is templated; nothing is rushed.
          </p>
          <div className="intro-stats">
            <div className="stat">
              <div className="num">03</div>
              <div className="label">Countries Covered</div>
            </div>
            <div className="stat">
              <div className="num">100%</div>
              <div className="label">Bespoke Itineraries</div>
            </div>
            <div className="stat">
              <div className="num">1:1</div>
              <div className="label">Dedicated Trip Designer</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
