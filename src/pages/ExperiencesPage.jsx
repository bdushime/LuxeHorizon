import { useEffect } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import TourCard from '../components/TourCard.jsx'
import PartnersSection from '../components/PartnersSection.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Seo from '../components/Seo.jsx'
import { PAGE_SEO, generateBreadcrumbSchema } from '../config/seo.js'
import { toursData, experiencesIntro } from '../data/toursData.js'
import './ExperiencesPage.css'

// Experiences list — the same 18 tours, in the same order and with the same
// wording as the client's live site (see src/data/toursData.js). Each card
// opens its own tour page at /experiences/<slug>.
export default function ExperiencesPage() {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Old links used /experiences?exp=<slug>; send those to the tour's own page.
  const legacySlug = searchParams.get('exp') || searchParams.get('itinerary')
  if (legacySlug && toursData.some((t) => t.slug === legacySlug)) {
    return <Navigate to={`/experiences/${legacySlug}`} replace />
  }

  const scrollToGrid = () => {
    document.getElementById('experiences-list')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="experiences-page">
      <Seo
        title={PAGE_SEO.experiences.title}
        description={PAGE_SEO.experiences.description}
        image={PAGE_SEO.experiences.ogImage}
        schema={generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Experiences', url: '/experiences' }
        ])}
      />

      <section className="exp-hero-section">
        <div className="exp-hero-bg" />
        <div className="exp-hero-overlay" />
        <div className="wrap exp-hero-content">
          <h1 className="exp-hero-headline">
            Unforgettable <br />
            <span className="gold-text">Tours &amp; Experiences</span>
          </h1>
        </div>
        <button type="button" className="exp-hero-scroll-btn" onClick={scrollToGrid} aria-label="Scroll to the tours">
          <span className="scroll-arrow-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </section>

      <section className="exp-intro">
        <div className="wrap">
          <Reveal>
            <p>{experiencesIntro}</p>
          </Reveal>
        </div>
      </section>

      <section className="exp-list-section" id="experiences-list">
        <div className="wrap">
          <div className="tour-grid">
            {toursData.map((tour) => (
              <Reveal key={tour.slug} className="tour-grid-item">
                <TourCard tour={tour} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />
      <CtaBand />
    </div>
  )
}
