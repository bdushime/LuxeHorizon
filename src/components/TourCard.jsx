import { Link } from 'react-router-dom'

// One tour in the Experiences grid / Related Experiences row.
// Same content as the live site's cards: photo, title, card text and a
// "View this itinerary" link — styled in the new site's design.
export default function TourCard({ tour }) {
  return (
    <Link to={`/experiences/${tour.slug}`} className="tour-card">
      <div className="tour-card-media">
        <img src={tour.cardImage} alt={tour.title} loading="lazy" decoding="async" />
      </div>
      <div className="tour-card-body">
        <h3>{tour.title}</h3>
        {tour.cardText && <p>{tour.cardText}</p>}
        <span className="tour-card-link">
          View this itinerary <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
