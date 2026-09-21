import { Link, useLocation } from 'react-router-dom'
import './BackHomeButton.css'

// A real, on-page button — not something buried in the nav bar. Sits fixed
// in the corner of every subpage so a visitor never has to go hunting for
// a way back to the homepage.
export default function BackHomeButton() {
  const { pathname } = useLocation()
  if (pathname === '/') return null

  return (
    <Link to="/" className="back-home-btn" title="Back to Home">
      <span className="bhb-arrow">&larr;</span>
      <span className="bhb-label">Home</span>
    </Link>
  )
}
