import Reveal from './Reveal.jsx'
import './CtaBand.css'

export default function CtaBand() {
  return (
    <section
      className="cta-band"
      id="plan"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(198,161,91,0.14), transparent 65%), linear-gradient(165deg, #22362B 0%, #0A130F 100%)'
      }}
    >
      <Reveal as="div" className="wrap cta-inner">
        <div className="eyebrow">Start Planning</div>
        <h2>Your itinerary starts with a conversation, not a form.</h2>
        <a href="https://luxehorizonsafrica.com/plan-trip/" className="btn btn-light">
          Plan Your Trip
        </a>
      </Reveal>
    </section>
  )
}
