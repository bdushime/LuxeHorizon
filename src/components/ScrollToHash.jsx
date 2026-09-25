import { useEffect, useRef } from 'react'
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

export default function ScrollToHash() {
  const { hash, pathname, key } = useLocation()
  const navigationType = useNavigationType()
  const prevPathname = useRef(pathname)

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
      const target = scrollPositions.get(key)
      const apply = () => window.scrollTo({ top: target })
      timers.push(setTimeout(apply, 60), setTimeout(apply, 350))
    } else if (pathname === '/' && lastHomeScrollY > 0) {
      const target = lastHomeScrollY
      const apply = () => window.scrollTo({ top: target })
      timers.push(setTimeout(apply, 60), setTimeout(apply, 350))
    } else if (prevPathname.current !== pathname) {
      window.scrollTo({ top: 0 })
    }

    prevPathname.current = pathname
    return () => timers.forEach(clearTimeout)
  }, [hash, pathname, key, navigationType])

  return null
}
