import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal.jsx'
import CtaBand from './CtaBand.jsx'
import PartnersSection from './PartnersSection.jsx'
import Seo from './Seo.jsx'
import { consultancyIntro, consultancyPillars } from '../data/content.js'
import { experiencesData } from '../data/experiencesData.js'
import './ConsultancyPage.css'

// The old site's "Get Inspired" grid pointed at these six itineraries —
// they already exist as real tours with real copy and photos, so we pull
// them straight from the Experiences catalog instead of duplicating them.
const INSPIRE_SLUGS = [
  'kigalis-golf-experience-the-safari-the-city',
  'pre-post-conference-gorilla-experience',
  'city-tour-vibrant-hopeful-kigali',
  'pre-post-conference-safari-experience',
  'ancient-history-culture',
  'pre-colonial-era-the-big-5-the-city'
]
const inspireItems = INSPIRE_SLUGS.map((slug) => experiencesData.find((e) => e.slug === slug)).filter(Boolean)

const wordVariant = {
  hidden: { y: 34, opacity: 0, filter: 'blur(10px)', rotateX: 35 },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    rotateX: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
}

// Renders a line as individually-animated WORDS, so the headline writes
// itself into place one word at a time instead of fading in all at once
// or cascading letter by letter.
function KineticLine({ text, className, delay = 0.2 }) {
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: delay } } }
  const words = text.split(' ')
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: 'inline-block', perspective: 500 }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariant} style={{ display: 'inline-block', transformOrigin: 'bottom' }}>
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Ideas #1 + #3 combined - "The Boardroom Horizon" (confident hero + intro
// statement, real copy from the old site) paired with "The Panoramic
// Spotlight": the three offerings sit flush together as one continuous
// scene instead of three boxed cards, with the same hover-torch effect
// used on the Experience cards picking one out of the dark at a time.
export default function ConsultancyPage() {
  const [hovered, setHovered] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const [activeKey, setActiveKey] = useState(null)
  const [inspireOpen, setInspireOpen] = useState(false)
  const [inspireHovered, setInspireHovered] = useState(null)
  const activePillar = consultancyPillars.find((p) => p.key === activeKey) || null

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while any modal is open, and let Escape close it —
  // both expected for any overlay like this.
  useEffect(() => {
    if (!activeKey && !inspireOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setActiveKey(null)
      setInspireOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [activeKey, inspireOpen])

  // "Get Inspired" doesn't describe itself the way the other two pillars
  // do — it opens a separate gallery of real itineraries instead of the
  // single-topic split modal.
  const openPillar = (pillar) => {
    if (pillar.key === 'inspire') {
      setInspireOpen(true)
      return
    }
    setActiveKey(pillar.key)
  }

  return (
    <div className="con-page">
      <Seo
        title="Consultancy & MICE — Corporate Travel Advisory | Luxe Horizons Africa"
        description="Travel management consultancy, MICE and educational trip planning across Rwanda, Uganda and Tanzania — designed by Luxe Horizons Africa."
      />

      <section className="con-hero">
        <div className="con-hero-parallax" style={{ transform: `translateY(${scrollY * 0.22}px)` }}>
          <img className="con-hero-media" src="/Consultancy.jpeg" alt="Luxe Horizons Africa Consultancy" />
        </div>
        <div className="con-hero-overlay" />
        <div className="con-hero-content">
          <Reveal>
            <div className="eyebrow on-dark">Consultancy &amp; MICE</div>
          </Reveal>
          <h1>
            <KineticLine text="Discover Our Unique" delay={0.2} />
            <br />
            <KineticLine text="Travel Management Services" className="con-hero-accent" delay={0.55} />
          </h1>
          <div className="con-divider on-dark" />
        </div>
        <div className="con-hero-scroll-cue">
          <span>Scroll</span>
          <div className="con-hero-scroll-line" />
        </div>
      </section>

      <section className="con-intro">
        <div className="wrap">
          <Reveal>
            <p>{consultancyIntro}</p>
          </Reveal>
          <div className="con-divider" />
        </div>
      </section>

      <section className="con-triptych">
        <div className={`con-triptych-row ${hovered ? 'has-active' : ''}`}>
          {consultancyPillars.map((pillar) => (
            <button
              key={pillar.key}
              type="button"
              className={`con-panel ${hovered === pillar.key ? 'active' : ''}`}
              style={{ '--accent': pillar.accent }}
              onMouseEnter={() => setHovered(pillar.key)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(pillar.key)}
              onBlur={() => setHovered(null)}
              onClick={() => openPillar(pillar)}
            >
              <img className="con-panel-media" src={pillar.image} alt={pillar.title} />
              <div className="con-panel-overlay" />
              <div className="con-panel-content">
                <h3>{pillar.title}</h3>
                <p className="con-panel-tagline">{pillar.tagline}</p>
                <span className="con-panel-cta">{pillar.key === 'inspire' ? 'Explore →' : 'Learn More →'}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activePillar && (
          <motion.div
            className="con-split-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <button
              type="button"
              className="con-split-close"
              aria-label="Close"
              onClick={() => setActiveKey(null)}
            >
              &times;
            </button>
            <motion.div
              className="con-split-image"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={activePillar.image} alt={activePillar.title} />
            </motion.div>
            <motion.div
              className="con-split-panel"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="con-modal-eyebrow on-dark">Consultancy &amp; MICE</div>
              <h2 className="con-split-title">
                <KineticLine text={activePillar.title} delay={0.35} />
              </h2>
              <div className="con-divider on-dark" />
              <p className="con-modal-desc on-dark">{activePillar.description}</p>
              <Link to="/contact" className="btn btn-light con-modal-cta">
                Talk To Us →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {inspireOpen && (
          <motion.div
            className="con-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setInspireOpen(false)}
          >
            <motion.div
              className="con-modal-card con-inspire-card"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="con-modal-close"
                aria-label="Close"
                onClick={() => setInspireOpen(false)}
              >
                &times;
              </button>
              <div className="con-inspire-header">
                <div className="con-modal-eyebrow">Consultancy &amp; MICE</div>
                <h2 className="con-modal-title">Get Inspired</h2>
                <div className="con-divider" />
              </div>
              <div className={`con-inspire-mosaic ${inspireHovered ? 'has-active' : ''}`}>
                {inspireItems.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/experiences?exp=${item.slug}`}
                    className={`con-inspire-tile ${inspireHovered === item.slug ? 'active' : ''}`}
                    onMouseEnter={() => setInspireHovered(item.slug)}
                    onMouseLeave={() => setInspireHovered(null)}
                    onFocus={() => setInspireHovered(item.slug)}
                    onBlur={() => setInspireHovered(null)}
                  >
                    <img className="con-inspire-tile-media" src={item.image} alt={item.title} />
                    <div className="con-inspire-tile-overlay" />
                    <div className="con-inspire-tile-content">
                      <h3>{item.title}</h3>
                      <p className="con-inspire-tile-meta">{item.duration} · {item.category}</p>
                      <span className="con-inspire-tile-cta">View Itinerary →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PartnersSection />
      <CtaBand />
    </div>
  )
}
