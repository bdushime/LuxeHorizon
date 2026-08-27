import { useEffect, useRef, useState } from 'react'

/**
 * Wraps any element and fades/rises it into view the first time it
 * crosses the viewport threshold. Usage:
 *   <Reveal className="dest-tile">...</Reveal>
 *   <Reveal as="a" href="/foo" className="adventure-card">...</Reveal>
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true)
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
