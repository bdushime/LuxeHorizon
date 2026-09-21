import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

// Module-level, not state — survives across every route change for the
// life of the tab, keyed by each history entry's unique React Router key.
const scrollPositions = new Map()

// Separately, the last scroll position seen while actually on the homepage —
// keyed by path rather than history entry, so any fresh PUSH back to "/"
// (the Home button, the logo, the division switch) can return a visitor to
// the section they were last viewing there instead of always resetting to
// the hero the way a brand new visit does.
let lastHomeScrollY = 0

// Take manual control of scroll restoration — otherwise the browser's own
// native "auto" restoration also fires on popstate and can race ours.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

// Handles two jobs:
//  1. react-router doesn't scroll to a URL's #hash the way a full page load
//     does — this watches for one and scrolls to it once the page has mounted.
//  2. Restores scroll position on browser back/forward ourselves. We can't
//     capture "the position we're leaving" reactively in an unmount/cleanup
//     — by the time that runs, React has already swapped the DOM to the new
//     (often shorter) page, and the browser has already clamped window.scrollY
//     down to fit it, corrupting the very value we're trying to save. Instead
//     we track scroll position live, continuously, while the user is actually
//     on each page, so whenever navigation eventually happens the last-known
//     value is already accurate.
export default function ScrollToHash() {
  const { hash, pathname, key } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    let raf
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        scrollPositions.set(key, window.scrollY)
        if (pathname === '/') lastHomeScrollY = window.scrollY
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [key, pathname])

  useEffect(() => {
    let timers = []

    if (hash) {
      const id = hash.slice(1)
      timers.push(
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 60)
      )
    } else if (navigationType === 'POP' && scrollPositions.has(key)) {
      // A page with several images (like the homepage) can still be growing
      // taller as they load in, clamping an early scroll attempt short of
      // where it should land. Re-apply a couple of times as layout settles
      // instead of trusting a single early attempt.
      const target = scrollPositions.get(key)
      const apply = () => window.scrollTo({ top: target })
      timers.push(setTimeout(apply, 60), setTimeout(apply, 350))
    } else if (pathname === '/' && lastHomeScrollY > 0) {
      const target = lastHomeScrollY
      const apply = () => window.scrollTo({ top: target })
      timers.push(setTimeout(apply, 60), setTimeout(apply, 350))
    } else {
      window.scrollTo({ top: 0 })
    }

    return () => timers.forEach(clearTimeout)
  }, [hash, pathname, key, navigationType])

  return null
}
