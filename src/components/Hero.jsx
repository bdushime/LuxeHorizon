import { useEffect, useState } from 'react'
import { heroSections, heroBaseGradient } from '../data/content.js'
import './Hero.css'

export default function Hero({ revealed = true }) {
  const [loaded, setLoaded] = useState(false)
  const [activeKey, setActiveKey] = useState(null)
  const [scrolledHero, setScrolledHero] = useState(false)

  // Track page scroll to reveal hero section menu on scroll
  useEffect(() => {
    const onScroll = () => setScrolledHero(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trigger the staggered entrance once the hero is actually visible — it
  // mounts immediately behind the Portal Gate, so firing this on mount would
  // play (and finish) the animation while it's still hidden.
  useEffect(() => {
    if (!revealed) return undefined
    let timeoutId
    const rafId = requestAnimationFrame(() => {
      timeoutId = setTimeout(() => setLoaded(true), 50)
    })
    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timeoutId)
    }
  }, [revealed])

  const activate = (key) => () => setActiveKey(key)
  const deactivate = () => setActiveKey(null)

  return (
    <section className={`hero ${loaded ? 'loaded' : ''} ${scrolledHero ? 'scrolled-hero' : ''}`}>
      <div className="hero-photo-stack">
        <div
          className="hero-photo-layer base"
          style={{
            backgroundImage: heroBaseGradient,
            backgroundSize: 'cover',
            backgroundPosition: 'center 42%'
          }}
        />
        {heroSections.map((section) => {
          const layerStyle = section.image
            ? {
                backgroundImage: `linear-gradient(180deg, rgba(8,16,13,0.12) 0%, rgba(8,16,13,0.28) 100%), url('${section.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 42%'
              }
            : { background: section.gradient }

          return (
            <div
              key={section.key}
              className={`hero-photo-layer wipe ${activeKey === section.key ? 'wipe-in' : ''}`}
              style={layerStyle}
            />
          )
        })}
      </div>

      <svg className="hero-horizon" viewBox="0 0 1600 400" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,260 L90,230 L180,255 L280,205 L360,240 L470,180 L560,225 L660,190 L760,235 L880,195 L980,245 L1090,210 L1180,250 L1300,200 L1400,240 L1600,215 L1600,400 L0,400 Z"
          fill="#8E9760"
          opacity="0.65"
        />
        <path
          d="M0,300 L140,275 L260,305 L400,265 L520,300 L640,255 L760,295 L900,260 L1020,300 L1160,270 L1280,305 L1600,280 L1600,400 L0,400 Z"
          fill="#9BA24A"
          opacity="0.85"
        />
      </svg>

      <div className="hero-social">
        <a href="https://www.instagram.com/luxehorizonsafrica" aria-label="Instagram" title="Instagram">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" />
          </svg>
        </a>
        <a href="https://api.whatsapp.com/send?phone=250788615233" aria-label="WhatsApp" title="WhatsApp">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M20 12a8 8 0 1 1-3.6-6.7M20 12l-1 5-5 1" />
          </svg>
        </a>
      </div>

      <a href="#contact" className="hero-enquire">
        <span className="dot" />
        Enquire
        <span className="stem" />
      </a>

      <div className="hero-word-block">
        <h1 className="hero-giant">
          {'LUXE HORIZONS'.split('').map((ch, i) => (
            <span key={i} className="hero-giant-letter" style={{ transitionDelay: `${0.35 + i * 0.07}s` }}>
              {ch === ' ' ? ' ' : ch}
            </span>
          ))}
        </h1>
      </div>

      <div className="hero-bar">
        {heroSections.map((section) => (
          <a
            key={section.key}
            href={`#${section.key}`}
            className="hero-bar-item"
            onMouseEnter={activate(section.key)}
            onMouseLeave={deactivate}
            onFocus={activate(section.key)}
            onBlur={deactivate}
            onTouchStart={activate(section.key)}
          >
            <span>
              <span className="hbi-eyebrow">{section.eyebrow}</span>
              <span className="hbi-val">{section.label}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}