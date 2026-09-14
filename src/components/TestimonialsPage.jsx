import Reveal from './Reveal.jsx'
import { testimonials } from '../data/content.js'
import Seo from './Seo.jsx'
import './TestimonialsPage.css'

export default function TestimonialsPage() {
  return (
    <section className="tm-page">
      <Seo
        title="Client Stories & Safari Reviews | Luxe Horizons Africa"
        description="Real stories from travelers who booked bespoke Rwanda, Uganda and Tanzania safaris with Luxe Horizons Africa."
      />
      <div className="wrap">
        <div className="tm-head">
          <div className="eyebrow">Testimonials</div>
          <h1>Stories From The Field</h1>
          <p>Hover a photo to bring it into focus.</p>
        </div>

        <div className="tm-scatter">
          {testimonials.map((t, i) => (
            <Reveal as="div" key={t.key} className="tm-reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="tm-card" style={{ '--rotate': `${t.rotate}deg` }}>
                <div className="tm-card-photo">
                  <img src={t.photo} alt={t.name} />
                </div>
                <div className="tm-card-caption">
                  <div className="tm-card-stars" aria-hidden="true">
                    {'★'.repeat(t.rating)}
                  </div>
                  <p className="tm-card-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="tm-card-name">{t.name}</div>
                  <div className="tm-card-origin">{t.origin}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
