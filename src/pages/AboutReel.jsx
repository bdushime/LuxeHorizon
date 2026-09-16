import { useEffect, useRef, useState } from 'react'
import { aboutMethodology } from '../data/content.js'
import './AboutReel.css'

// Idea #2 — "Cinematic Scroll Reel": hero, philosophy, the three methodology
// stages and the stats all live inside one pinned section. Scrolling down
// advances a horizontal filmstrip instead of stacking panels vertically.

const PHOTO_HERO = '/Mountain Gorilla.jpg.jpeg'
const PHOTO_PHILOSOPHY = '/Bird.jpg.jpeg'
const STAGE_PHOTOS = ['/exp-primates.jpg', '/story-guide.jpg', '/exp-akagera.jpg']

const STATS = [
  { value: 3, display: '03', suffix: '', label: 'Countries Covered' },
  { value: 100, display: '100', suffix: '%', label: 'Bespoke Journeys' },
  { value: null, display: '1:1', suffix: '', label: 'Private Specialist Guide' }
]

const COUNT_DURATION_MS = 1400
// hero + philosophy + one panel per methodology stage + stats
const PANEL_COUNT = 2 + aboutMethodology.stages.length + 1

function CountUpStat({ stat, play, delayMs }) {
  const [shown, setShown] = useState(stat.value === null ? stat.display : '0')

  useEffect(() => {
    if (!play || stat.value === null) return undefined
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
  }, [play])

  return (
    <div className="reel-stat">
      <div className="reel-stat-num">
        {shown}
        {stat.suffix && <span className="reel-stat-suffix">{stat.suffix}</span>}
      </div>
      <div className="reel-stat-label">{stat.label}</div>
    </div>
  )
}

export default function AboutReel() {
  const wrapperRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [statsPlayed, setStatsPlayed] = useState(false)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return undefined
    let raf
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect()
        const total = rect.height - window.innerHeight
        const scrolled = -rect.top
        const next = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0
        setProgress(next)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const activeIndex = Math.round(progress * (PANEL_COUNT - 1))

  useEffect(() => {
    if (activeIndex === PANEL_COUNT - 1) setStatsPlayed(true)
  }, [activeIndex])

  const goToPanel = (index) => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const rect = wrapper.getBoundingClientRect()
    const total = rect.height - window.innerHeight
    const targetY = window.scrollY + rect.top + (index / (PANEL_COUNT - 1)) * total
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  const trackStyle = { transform: `translateX(-${progress * (PANEL_COUNT - 1) * 100}vw)` }

  return (
    <div className="reel-wrapper" ref={wrapperRef} style={{ height: `${PANEL_COUNT * 100}vh` }}>
      <div className="reel-viewport">
        <div className="reel-track" style={trackStyle}>
          <section className="reel-panel">
            <img className="reel-panel-media" src={PHOTO_HERO} alt="Mountain gorilla in Rwanda" />
            <div className="reel-panel-overlay dark" />
            <div className="reel-panel-content center">
              <div className="eyebrow on-dark">About Luxe Horizons</div>
              <h1>
                Architects of <br />
                <span className="gold-text">African Expeditions</span>
              </h1>
              <p className="reel-lead on-dark">
                Privately guided safaris, gorilla treks, and bespoke travel across Rwanda, Uganda &amp;
                Tanzania.
              </p>
            </div>
          </section>

          <section className="reel-panel">
            <img className="reel-panel-media" src={PHOTO_PHILOSOPHY} alt="East African wildlife" />
            <div className="reel-panel-overlay" />
            <div className="reel-panel-content align-left">
              <div className="eyebrow on-dark">Our Philosophy</div>
              <h2>Unhurried. Private. Considered.</h2>
              <p className="reel-lead on-dark">
                We design custom luxury safaris and gorilla treks tailored entirely to your version of
                luxury — with handpicked lodges and dedicated specialist guides throughout.
              </p>
            </div>
          </section>

          {aboutMethodology.stages.map((stage, i) => (
            <section className="reel-panel" key={stage.num}>
              <img className="reel-panel-media" src={STAGE_PHOTOS[i]} alt={stage.title} />
              <div className="reel-panel-overlay" />
              <div className="reel-panel-content align-left">
                <div className="reel-stage-num">{stage.num}</div>
                <h2>{stage.title}</h2>
                <p className="reel-lead on-dark">{stage.description}</p>
              </div>
            </section>
          ))}

          <section className="reel-panel stats-panel">
            <div className="reel-panel-overlay solid" />
            <div className="reel-panel-content center">
              <div className="eyebrow on-dark">By The Numbers</div>
              <div className="reel-stats-row">
                {STATS.map((stat, i) => (
                  <CountUpStat key={stat.label} stat={stat} play={statsPlayed} delayMs={i * 150} />
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="reel-dots">
          {Array.from({ length: PANEL_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`reel-dot ${activeIndex === i ? 'active' : ''}`}
              aria-label={`Go to section ${i + 1}`}
              onClick={() => goToPanel(i)}
            />
          ))}
        </div>

        <div className={`reel-scroll-cue ${activeIndex === 0 ? '' : 'hide'}`}>
          <span>Scroll</span>
          <div className="reel-scroll-line" />
        </div>
      </div>
    </div>
  )
}
