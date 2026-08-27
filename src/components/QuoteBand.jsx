import Reveal from './Reveal.jsx'
import './QuoteBand.css'

export default function QuoteBand() {
  return (
    <section className="quote-band">
      <Reveal as="div" className="wrap">
        <blockquote>
          "They didn't sell us a package. They asked what we actually wanted from the
          trip, then built the whole thing around the answer."
        </blockquote>
        <cite>Guest, Rwanda's Primates Itinerary</cite>
      </Reveal>
    </section>
  )
}
