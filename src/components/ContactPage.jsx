import { useEffect, useState } from 'react'
import { contact } from '../data/content.js'
import Seo from './Seo.jsx'
import { PAGE_SEO, generateBreadcrumbSchema } from '../config/seo.js'
import './ContactPage.css'

const FLAP_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .,—@:/'

function SplitFlap({ text, playToken }) {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    let frame = 0
    const maxFrame = 16 + text.length
    const id = setInterval(() => {
      frame++
      if (frame >= maxFrame) {
        setDisplay(text)
        clearInterval(id)
        return
      }
      setDisplay(
        text
          .split('')
          .map((ch, i) => {
            const settleAt = 6 + i * 1.1
            if (frame < settleAt) return ' '
            if (frame < settleAt + 8) return FLAP_CHARS[Math.floor(Math.random() * FLAP_CHARS.length)]
            return ch
          })
          .join('')
      )
    }, 40)
    return () => clearInterval(id)
  }, [text, playToken])

  return <span className="flap-text">{display}</span>
}

const ROWS = [
  {
    key: 'location',
    gate: '01',
    channel: 'LOCATION',
    detail: contact.address.toUpperCase(),
    status: 'ON MAP',
    href: null
  },
  {
    key: 'whatsapp',
    gate: '02',
    channel: 'WHATSAPP',
    detail: 'MESSAGE US DIRECTLY',
    status: 'ONLINE',
    href: contact.whatsapp,
    external: true
  },
  {
    key: 'email',
    gate: '03',
    channel: 'EMAIL',
    detail: contact.email.toUpperCase(),
    status: 'OPEN',
    href: `mailto:${contact.email}`
  }
]

export default function ContactPage() {
  const [playTokens, setPlayTokens] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const replay = (key) => setPlayTokens((prev) => ({ ...prev, [key]: (prev[key] || 0) + 1 }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' }
  ]

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Luxe Horizons Africa',
    description: PAGE_SEO.contact.description,
    url: PAGE_SEO.contact.canonical
  }

  const schemas = [contactSchema, generateBreadcrumbSchema(breadcrumbs)]

  return (
    <div className="board-page">
      <Seo
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
        image={PAGE_SEO.contact.ogImage}
        schema={schemas}
      />

      <section className="board-hero">
        <div className="wrap">
          <div className="eyebrow on-dark">Departures</div>
          <h1>Your Next Journey Begins Here</h1>
          <p>Pick a channel below, or check in with the full enquiry.</p>
        </div>
      </section>

      <section className="board-panel-section">
        <div className="wrap">
          <div className="board-panel">
            <div className="board-row board-row-header">
              <span>Gate</span>
              <span>Channel</span>
              <span>Detail</span>
              <span>Status</span>
            </div>
            {ROWS.map((row) => {
              const Tag = row.href ? 'a' : 'div'
              return (
                <Tag
                  key={row.key}
                  className="board-row"
                  href={row.href ?? undefined}
                  target={row.external ? '_blank' : undefined}
                  rel={row.external ? 'noopener noreferrer' : undefined}
                  onMouseEnter={() => replay(row.key)}
                >
                  <span className="board-cell-gate">{row.gate}</span>
                  <span>
                    <SplitFlap text={row.channel} playToken={playTokens[row.key]} />
                  </span>
                  <span>
                    <SplitFlap text={row.detail} playToken={playTokens[row.key]} />
                  </span>
                  <span className="board-cell-status">
                    <SplitFlap text={row.status} playToken={playTokens[row.key]} />
                  </span>
                </Tag>
              )
            })}
          </div>
        </div>
      </section>

      <section className="board-form-section">
        <div className="wrap">
          {submitted ? (
            <div className="boarding-pass boarding-pass-success">
              <div className="pass-main">
                <div className="pass-eyebrow">Boarding Confirmed</div>
                <h2>Your enquiry is in.</h2>
                <p>A trip designer will be in touch shortly — usually within a day.</p>
              </div>
            </div>
          ) : (
            <form className="boarding-pass" onSubmit={handleSubmit}>
              <div className="pass-main">
                <div className="pass-eyebrow">Boarding Pass — Full Enquiry</div>
                <div className="pass-grid">
                  <label>
                    <span>Passenger Name</span>
                    <input type="text" name="name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" required />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input type="tel" name="phone" />
                  </label>
                  <label>
                    <span>Country</span>
                    <input type="text" name="country" />
                  </label>
                  <label className="pass-field-wide">
                    <span>Message</span>
                    <textarea name="message" rows={3} />
                  </label>
                </div>
              </div>
              <div className="pass-stub">
                <div className="pass-stub-row">
                  <span>From</span>
                  <strong>You</strong>
                </div>
                <div className="pass-stub-row">
                  <span>To</span>
                  <strong>Luxe Horizons</strong>
                </div>
                <div className="pass-stub-row">
                  <span>Gate</span>
                  <strong>01</strong>
                </div>
                <div className="pass-stub-row">
                  <span>Seat</span>
                  <strong>Tailor-made</strong>
                </div>
                <button type="submit" className="pass-submit">
                  Board Now
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
