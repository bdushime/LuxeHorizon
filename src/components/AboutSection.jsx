import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import './AboutSection.css'

const PHOTO_MAIN = '/Mountain Gorilla.jpg.jpeg'
const PHOTO_SECONDARY = '/Bird.jpg.jpeg'

// A stat is either non-numeric (value: null — e.g. "1:1", nothing sensible to
// count up) or has a numeric `value` that animates from 0 up to itself once
// the stats row scrolls into view.
const STATS = [
  { value: 3, display: '03', suffix: '', label: 'Countries Covered' },
  { value: 100, display: '100', suffix: '%', label: 'Bespoke Itineraries' },
  { value: null, display: '1:1', suffix: '', label: 'Dedicated Trip Designer' }
]

const COUNT_DURATION_MS = 1400

function CountUpStat({ stat, playToken, delayMs }) {
  const [shown, setShown] = useState(stat.value === null ? stat.display : '0')

  useEffect(() => {
    if (playToken === 0 || stat.value === null) return
    let raf
    let start

    // Reset to zero immediately so replays (e.g. re-hovering) visibly restart
    // the count rather than jumping straight back to the final value.
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
    <div className="stat-v2">
      <div className="stat-v2-num">
        {shown}
        {stat.suffix && <span className="stat-v2-suffix">{stat.suffix}</span>}
      </div>
      <div className="stat-v2-label">{stat.label}</div>
    </div>
  )
}

export default function AboutSection() {
  const statsRef = useRef(null)
  // 0 = not yet played. Any increment (first scroll-into-view, then every
  // re-hover) tells each CountUpStat to reset to zero and count up again.
  const [playToken, setPlayToken] = useState(0)
  const replay = () => setPlayToken((t) => t + 1)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setPlayToken((t) => (t === 0 ? 1 : t))),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="intro" id="about">
      <div className="wrap intro-grid-v2">
        <Reveal className="reveal-left intro-copy-col">
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            Our Approach
          </div>
          <h2>
            A journey,
            <br />
            considered.
          </h2>
          <div className="intro-copy">
            <p>
              We are a small team based in Kigali, working exclusively across Rwanda,
              Uganda and Tanzania. That focus means we know which lodge has the better
              view of the volcanoes, which guide reads gorilla behaviour best, and which
              road to avoid after rain — details a wider itinerary can't afford to chase.
            </p>
            <p>
              Every trip we build is designed around one traveller's version of luxury,
              whether that's silence at altitude, a private vehicle, or a community
              project worth detouring for. Nothing is templated; nothing is rushed.
            </p>
          </div>
          <a href="#experiences" className="intro-cta">
            Discover More
          </a>
        </Reveal>

        <div className="intro-visual">
          <Reveal as="div" className="reveal-photo-main intro-photo intro-photo-main">
            <img src={PHOTO_MAIN} alt="Mountain gorilla, Rwanda" />
          </Reveal>
          <Reveal as="div" className="reveal-photo-secondary intro-photo intro-photo-secondary">
            <img src={PHOTO_SECONDARY} alt="Bird, East Africa" />
          </Reveal>

          <Reveal as="div" className="intro-path-wrap">
            <svg className="intro-path" viewBox="0 0 220 160" fill="none" aria-hidden="true">
              <path
                className="intro-path-line"
                d="M6 150 C 60 170, 90 120, 70 90 S 40 40, 90 30 S 150 10, 170 25"
                stroke="var(--gold)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="1 7"
                pathLength="1"
              />
              <g className="intro-path-plane" transform="translate(170 25) rotate(35)">
                <path d="M0 0 L14 4 L0 8 L3 4 Z" fill="var(--gold)" />
              </g>
            </svg>
          </Reveal>
        </div>
      </div>

      <div className="wrap">
        <div className="intro-stats-v2" ref={statsRef} onMouseEnter={replay}>
          {STATS.map((stat, i) => (
            <CountUpStat key={stat.label} stat={stat} playToken={playToken} delayMs={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}