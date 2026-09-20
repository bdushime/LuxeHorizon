import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../config/seo.js'

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(schemaData) {
  let el = document.head.querySelector('script#seo-json-ld')
  if (!schemaData) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.setAttribute('id', 'seo-json-ld')
    el.setAttribute('type', 'application/ld+json')
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(schemaData)
}

export default function Seo({ title, description, image, ogType = 'website', schema }) {
  const { pathname } = useLocation()
  const currentCanonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_OG_IMAGE

  useEffect(() => {
    const pageTitle = title || `${SITE_NAME} | Luxury Safaris & Gorilla Trekking East Africa`

    // Title
    document.title = pageTitle

    // Standard Meta Tags
    if (description) setMeta('name', 'description', description)
    setMeta('name', 'robots', 'index, follow')

    // Open Graph Tags
    setMeta('property', 'og:title', pageTitle)
    if (description) setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', currentCanonical)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:image', ogImage)

    // Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', pageTitle)
    if (description) setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)

    // Canonical
    setCanonical(currentCanonical)

    // JSON-LD Structured Data
    setJsonLd(schema)
  }, [title, description, image, ogType, schema, currentCanonical, ogImage])

  return null
}
