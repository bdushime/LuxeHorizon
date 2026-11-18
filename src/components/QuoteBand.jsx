import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import './QuoteBand.css'

export default function QuoteBand() {
  return (
    <section className="quote-band">
      <Reveal as="div" className="wrap">
        <blockquote>
          "An absolute pleasure to travel and discover beautiful Rwanda under Luxe
          Horizons Africa-experienced guides, personalised curated tours, seamless
          travel, vip treatment. The best!"
        </blockquote>
        <cite>Rachel Mbai</cite>
        <Link to="/testimonials" className="quote-band-link">
          Read more Testimonials →
        </Link>
      </Reveal>
    </section>
  )
}
