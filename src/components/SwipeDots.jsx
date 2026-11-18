import { useEffect, useState } from 'react'

// Dots under a mobile swipe row (a container with className "m-swipe").
// Shows which card is in view and lets visitors tap a dot to jump to a card.
// Hidden by CSS above 980px, where the row uses its normal desktop layout.
export default function SwipeDots({ trackRef, onDark = false, label = 'cards' }) {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return undefined

    const update = () => {
      const kids = Array.from(el.children)
      setCount(kids.length)
      if (!kids.length) return
      // at the far right, the last card counts as active even if it can't snap to the start
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        setActive(kids.length - 1)
        return
      }
      const start = el.getBoundingClientRect().left + parseFloat(getComputedStyle(el).paddingLeft || '0')
      let best = 0
      let bestDist = Infinity
      kids.forEach((k, i) => {
        const d = Math.abs(k.getBoundingClientRect().left - start)
        if (d < bestDist) {
          bestDist = d
          best = i
        }
      })
      setActive(best)
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    // rows whose cards change (e.g. the blog "More Stories" card) keep the dots in sync
    const mo = new MutationObserver(update)
    mo.observe(el, { childList: true })
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      mo.disconnect()
    }
  }, [trackRef])

  const goTo = (i) => {
    const el = trackRef.current
    const kid = el?.children[i]
    if (!kid) return
    const padL = parseFloat(getComputedStyle(el).paddingLeft || '0')
    const left = kid.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft - padL
    el.scrollTo({ left, behavior: 'smooth' })
  }

  if (count < 2) return null

  return (
    <div className={`swipe-dots ${onDark ? 'on-dark' : ''}`} role="tablist" aria-label={`Swipe through ${label}`}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-label={`Go to ${i + 1} of ${count}`}
          className={i === active ? 'active' : ''}
          onClick={() => goTo(i)}
        />
      ))}
    </div>
  )
}
