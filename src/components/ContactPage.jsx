import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
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
  const formRef = useRef(null)
  const [playTokens, setPlayTokens] = useState({})
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const replay = (key) => setPlayTokens((prev) => ({ ...prev, [key]: (prev[key] || 0) + 1 }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_iz2y3de'
    const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID || 'template_hr433rf'
    const clientTemplateId = import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID || 'template_eujwlvn'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'mGQF_7nmKeQBnP0vK'

    if (!publicKey || !serviceId) {
      console.warn('EmailJS environment variables are not populated. Simulating submission.')
      setSending(true)
      setTimeout(() => {
        setSending(false)
        setSubmitted(true)
      }, 700)
      return
    }

    setSending(true)
    try {
      const formData = new FormData(formRef.current)
      const userEmail = formData.get('email')
      const userName = formData.get('name')
      const userPhone = formData.get('phone')
      const userCountry = formData.get('country')
      const userMessage = formData.get('message')

      const baseParams = {
        name: userName,
        email: userEmail,
        to_email: userEmail,
        reply_to: userEmail,
        phone: userPhone || 'Not provided',
        country: userCountry || 'Not provided',
        message: userMessage || 'No message provided',
        admin_email: 'gasana.shema.250@gmail.com'
      }

      const adminParams = {
        ...baseParams,
        subject: `New Boarding Pass Enquiry from ${userName} - Luxe Horizons Africa`,
        email_subject: `New Boarding Pass Enquiry from ${userName} - Luxe Horizons Africa`
      }

      const clientParams = {
        ...baseParams,
        subject: `Message Received - Luxe Horizons Africa`,
        email_subject: `Message Received - Luxe Horizons Africa`
      }

      // Dispatch admin notification email (template_hr433rf)
      const adminPromise = emailjs.send(serviceId, adminTemplateId, adminParams, publicKey)

      // Dispatch client auto-reply confirmation email (template_eujwlvn)
      const clientPromise = emailjs.send(serviceId, clientTemplateId, clientParams, publicKey)

      const results = await Promise.allSettled([adminPromise, clientPromise])

      const hasSuccess = results.some((r) => r.status === 'fulfilled')
      if (hasSuccess) {
        setSubmitted(true)
      } else {
        const rejected = results.find((r) => r.status === 'rejected')
        throw rejected?.reason || new Error('EmailJS submission failed.')
      }
    } catch (err) {
      console.error('EmailJS submission error:', err)
      setErrorMessage(
        err?.text || err?.message || 'Could not send message via EmailJS. Please try again.'
      )
    } finally {
      setSending(false)
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setErrorMessage('')
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
                <p>A trip designer will be in touch shortly - usually within a day.</p>
                <button type="button" onClick={handleReset} className="pass-reset-btn">
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form ref={formRef} className="boarding-pass" onSubmit={handleSubmit}>
              <div className="pass-main">
                <div className="pass-eyebrow">Boarding Pass - Full Enquiry</div>
                {errorMessage && <div className="pass-error-alert">{errorMessage}</div>}
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
                <button type="submit" className="pass-submit" disabled={sending}>
                  {sending ? 'Boarding...' : 'Board Now'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
