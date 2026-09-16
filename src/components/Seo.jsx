import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// TODO: replace once the production domain is confirmed — used to build the
// canonical link and Open Graph "og:url" for whichever page is mounted.
export const SITE_URL = 'https://YOUR-DOMAIN-HERE.com'

function setMeta(attr, key, content) {
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

// This app has no server-side rendering, so a crawler that doesn't execute
// JS only ever sees index.html's static <title>/description. This component
// only helps for crawlers/social-share bots that DO run JS (Googlebot does)
// and for what shows in the browser tab — it's a real but partial win, not
// a substitute for proper SSR/prerendering if deeper SEO work is wanted later.
export default function Seo({ title, description }) {
  const { pathname } = useLocation()

  useEffect(() => {
    if (title) document.title = title
    if (description) setMeta('name', 'description', description)
    if (title) setMeta('property', 'og:title', title)
    if (description) setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', `${SITE_URL}${pathname}`)
    setMeta('name', 'twitter:title', title || document.title)
    if (description) setMeta('name', 'twitter:description', description)
    setCanonical(`${SITE_URL}${pathname}`)
  }, [title, description, pathname])

  return null
}
