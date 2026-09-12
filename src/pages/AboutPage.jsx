import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import MenuOverlay from '../components/MenuOverlay.jsx'
import Reveal from '../components/Reveal.jsx'
import PartnersSection from '../components/PartnersSection.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Footer from '../components/Footer.jsx'
import { aboutMethodology, teamMembers } from '../data/content.js'
import './AboutPage.css'

const PHOTO_MAIN = '/Mountain Gorilla.jpg.jpeg'
const PHOTO_SECONDARY = '/Bird.jpg.jpeg'

const STATS = [
  { value: 3, display: '03', suffix: '', label: 'Countries Covered' },
  { value: 100, display: '100', suffix: '%', label: 'Bespoke Journeys' },
  { value: null, display: '1:1', suffix: '', label: 'Private Specialist Guide' }
]

const COUNT_DURATION_MS = 1400

function CountUpStat({ stat, playToken, delayMs }) {
  const [shown, setShown] = useState(stat.value === null ? stat.display : '0')

  useEffect(() => {
    if (playToken === 0 || stat.value === null) return
    let raf
    let start

    const zeroPadded =
      stat.display.length > String(stat.value).length ? '0'.repeat(stat.display.length) : '0'
    setShown(zeroPadded)

    const startDelay = setTimeout(() => {
      const tick = (t) => {
        if (start === undefined) start = t
        const progress = Math.min(1, (t - start) / COUNT_DURATION_MS)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.round(eased * stat.value)
        const padded =
          stat.display.length > String(stat.value).length
            ? String(current).padStart(stat.display.length, '0')
            : String(current)
        setShown(padded)
        if (progress < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delayMs)
    return () => {
      clearTimeout(startDelay)
      cancelAnimationFrame(raf)
    }
  }, [playToken])

  return (
    <div className="about-stat">
      <div className="about-stat-num">
        {shown}
        {stat.suffix && <span className="about-stat-suffix">{stat.suffix}</span>}
      </div>
      <div className="about-stat-label">{stat.label}</div>
    </div>
  )
}

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const statsRef = useRef(null)
  const [playToken, setPlayToken] = useState(0)
  const [activeBio, setActiveBio] = useState(null)

  const replay = () => setPlayToken((t) => t + 1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setPlayToken((t) => (t === 0 ? 1 : t))),
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveBio(null)
    }
    if (activeBio) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeBio])

  const scrollToStory = () => {
    const el = document.getElementById('story')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="about-page">
      <Nav
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onOpenPortal={() => { }}
      />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Full-Screen Immersive Hero Header */}
      <section className="about-fullscreen-hero">
        <div className="about-hero-bg-visible" />
        <div className="about-hero-overlay-gradient" />

        <div className="wrap about-hero-center-content text-center">
          <div className="about-hero-badge">
            ABOUT LUXE HORIZONS
          </div>
          <h1 className="about-hero-headline">
            Architects of <br className="hero-br" />
            <span className="gold-text">African Expeditions</span>
          </h1>
          <p className="about-hero-tagline">
            Privately guided safaris, gorilla treks, and bespoke travel across Rwanda, Uganda & Tanzania.
          </p>
        </div>

        {/* Floating Scroll Prompt */}
        <button
          type="button"
          className="about-hero-scroll-btn"
          onClick={scrollToStory}
          aria-label="Scroll to discover"
        >
          <div className="scroll-arrow-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </section>

      {/* Minimal Ethos & Story Section */}
      <section className="about-story-section" id="story">
        <div className="wrap about-story-grid">
          <Reveal className="about-story-copy">
            <div className="eyebrow">Our Philosophy</div>
            <h2>Unhurried. Private. Considered.</h2>
            <p className="about-story-lead">
              We design custom luxury safaris and gorilla treks tailored entirely to your version of luxury — with handpicked lodges and dedicated specialist guides throughout.
            </p>
          </Reveal>

          <div className="about-story-visual">
            <div className="about-photo-card photo-card-1">
              <img src={PHOTO_MAIN} alt="Mountain Gorilla, Rwanda" />
            </div>
            <div className="about-photo-card photo-card-2">
              <img src={PHOTO_SECONDARY} alt="East African Wildlife" />
            </div>
          </div>
        </div>

        {/* Animated Statistics */}
        <div className="wrap">
          <div className="about-stats-row" ref={statsRef} onMouseEnter={replay}>
            {STATS.map((stat, i) => (
              <CountUpStat key={stat.label} stat={stat} playToken={playToken} delayMs={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Methodology Section */}
      <section className="about-methodology-section">
        <div className="wrap">
          <Reveal className="about-section-header text-center">
            <div className="eyebrow">{aboutMethodology.eyebrow}</div>
            <h2>{aboutMethodology.heading}</h2>
            <p className="about-section-sub">{aboutMethodology.subheading}</p>
          </Reveal>

          <div className="about-methodology-grid">
            {aboutMethodology.stages.map((stage) => (
              <Reveal key={stage.num} className="about-methodology-card">
                <div className="about-stage-num">{stage.num}</div>
                <h3 className="about-stage-title">{stage.title}</h3>
                <p className="about-stage-desc">{stage.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Team Section */}
      <section className="about-team-section">
        <div className="wrap">
          <Reveal className="about-section-header text-center">
            <div className="eyebrow">Our Team</div>
            <h2>The Minds Behind Your Journey</h2>
            <p className="about-section-sub">
              Our Kigali-based team managing your expedition logistics.
            </p>
          </Reveal>

          <div className="about-team-grid">
            {teamMembers.map((member) => (
              <Reveal key={member.id} className="about-team-card">
                <div className="about-team-media">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=2E4A38&color=D4AF37&size=256`
                    }}
                  />
                  <span className="about-team-badge">{member.badge}</span>
                </div>

                <div className="about-team-body">
                  <h3 className="about-team-name">{member.name}</h3>
                  <div className="about-team-role">{member.title}</div>
                  <p className="about-team-summary">{member.summary}</p>
                  <button
                    type="button"
                    className="about-bio-btn"
                    onClick={() => setActiveBio(member)}
                  >
                    Read Bio
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Team Bio Modal */}
      {activeBio && (
        <div className="about-modal-backdrop" onClick={() => setActiveBio(null)}>
          <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="about-modal-close"
              onClick={() => setActiveBio(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="about-modal-grid">
              <div className="about-modal-img-wrap">
                <img
                  src={activeBio.image}
                  alt={activeBio.name}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(activeBio.name)}&background=2E4A38&color=D4AF37&size=256`
                  }}
                />
              </div>
              <div className="about-modal-info">
                <span className="about-team-badge modal-badge">{activeBio.badge}</span>
                <h2>{activeBio.name}</h2>
                <div className="about-modal-role">{activeBio.title}</div>
                <p className="about-modal-bio">{activeBio.bio}</p>
                <div className="about-modal-actions">
                  <Link to="/#contact" className="btn-about-cta" onClick={() => setActiveBio(null)}>
                    Plan Your Journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <PartnersSection />
      <CtaBand />
      <Footer />
    </div>
  )
}
