import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// react-router doesn't scroll to a URL's #hash on navigation the way a full
// page load does. This watches for one and scrolls to it once the target
// page has mounted; a no-op if the id isn't on the current page.
export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return undefined
    }
    const id = hash.slice(1)
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 60)
    return () => clearTimeout(timer)
  }, [hash, pathname])

  return null
}
