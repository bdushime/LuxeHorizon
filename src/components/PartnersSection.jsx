import { useEffect, useRef, useState } from 'react'
import { partners, partnerRingRadii } from '../data/content.js'
import './PartnersSection.css'

// Converts a { ring, angle } into a pixel offset from the orbit's center mark.
// angle: 0 = right, 90 = straight up, 180 = left — so 0..180 sweeps the top arc.
function orbitPosition(ring, angleDeg) {
  const radius = partnerRingRadii[ring]
  const rad = (angleDeg * Math.PI) / 180
  const dx = Math.cos(rad) * radius
  const dy = -Math.sin(rad) * radius
  return { left: `calc(50% + ${dx}px)`, top: `calc(100% + ${dy}px)` }
}

export default function PartnersSection() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const ringRadii = Object.values(partnerRingRadii)

  return (
    <section className="partners" ref={ref}>
      <div className="wrap">
        <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 8 }}>
          Trusted &amp; Affiliated With
        </span>

        <div className={`orbit ${inView ? 'in' : ''}`}>
          {ringRadii.map((r, i) => (
            <div
              key={r}
              className="orbit-ring"
              style={{
                width: r * 2,
                height: r * 2,
                transitionDelay: `${i * 120}ms`
              }}
            />
          ))}

          <div className="orbit-center" style={{ transitionDelay: '0ms' }}>
            <span>LH</span>
          </div>

          {partners.map((p, i) => (
            <div
              key={p.name}
              className="orbit-logo"
              style={{ ...orbitPosition(p.ring, p.angle), transitionDelay: `${140 + i * 90}ms` }}
            >
              <div className="orbit-logo-bob" style={{ animationDelay: `${i * 0.4}s` }}>
                <img src={p.logo} alt={p.name} title={p.name} />
              </div>
            </div>
          ))}
        </div>

        {/* Simple fallback row for narrow screens where the orbit can't fit */}
        <div className="partner-row-mobile">
          {partners.map((p) => (
            <img key={p.name} src={p.logo} alt={p.name} />
          ))}
        </div>
      </div>
    </section>
  )
}