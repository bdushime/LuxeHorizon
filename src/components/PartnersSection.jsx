import { useEffect, useRef, useState } from 'react'
import { partners } from '../data/content.js'
import './PartnersSection.css'

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

  return (
    <section className="partners" ref={ref}>
      <div className="wrap">
        <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 8 }}>
          Trusted &amp; Affiliated With
        </span>

        <div className={`partner-row ${inView ? 'in' : ''}`}>
          {partners.map((p, i) => (
            <div key={p.name} className="partner-item" style={{ transitionDelay: `${i * 90}ms` }}>
              <img src={p.logo} alt={p.name} title={p.name} loading="lazy" decoding="async" />
              <span className="partner-underline" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
