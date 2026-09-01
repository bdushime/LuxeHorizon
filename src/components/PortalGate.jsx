import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const letterContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.35 } }
}
const letterVariant = {
  hidden: { y: 26, opacity: 0, filter: 'blur(8px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

// Renders text as individually-animated letters so it can cascade in on mount.
function KineticHeading({ text, className }) {
  return (
    <motion.h2 variants={letterContainer} initial="hidden" animate="visible" className={className}>
      {text.split('').map((ch, i) => (
        <motion.span key={i} variants={letterVariant} style={{ display: 'inline-block' }}>
          {ch === ' ' ? ' ' : ch}
        </motion.span>
      ))}
    </motion.h2>
  )
}

// Jagged ridge silhouette — the same "thousand hills" line language as the Hero
// divider, just rotated to run top-to-bottom instead of left-to-right.
const RIDGE_JITTER_FRONT = [0, -36, 22, -48, 30, -24, 40, 0]
const RIDGE_JITTER_BACK = [0, -18, 12, -26, 16, -14, 22, 0]

function ridgePoints(baseX, h, jitter) {
  const n = jitter.length
  return jitter.map((off, i) => ({ x: baseX + off, y: (h * i) / (n - 1) }))
}

function ridgePathD(baseX, h, jitter) {
  const pts = ridgePoints(baseX, h, jitter)
  return `M${pts[0].x},${pts[0].y} ${pts
    .slice(1)
    .map((p) => `L${p.x},${p.y}`)
    .join(' ')}`
}

// Clip-path polygon covering everything to the RIGHT of the jagged ridge line —
// this is what masks the Consultancy layer so it only shows past the ridge.
function ridgeClipPath(baseX, w, h, jitter) {
  const pts = ridgePoints(baseX, h, jitter)
  const left = pts.map((p) => `${p.x}px ${p.y}px`).join(', ')
  return `polygon(${left}, ${w}px ${h}px, ${w}px 0px)`
}

export default function PortalGate({ isOpen, onSelectTourism, onSelectConsultancy }) {
  const [hovered, setHovered] = useState(null)
  const [dragging, setDragging] = useState(false)
  const [dividerX, setDividerX] = useState(50)
  const [selected, setSelected] = useState(null)
  const [exiting, setExiting] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [size, setSize] = useState({ w: 1440, h: 900 })
  const containerRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight })
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!dragging) return undefined
    const onMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect()
      const pct = ((e.clientX - rect.left) / rect.width) * 100
      setDividerX(Math.min(70, Math.max(30, pct)))
    }
    const onUp = () => setDragging(false)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [dragging])

  useEffect(() => {
    if (dragging || selected) return
    if (hovered === 'tourism') setDividerX(60)
    else if (hovered === 'consultancy') setDividerX(40)
    else setDividerX(50)
  }, [hovered, dragging, selected])

  if (!isOpen) return null

  const startDrag = (e) => {
    e.stopPropagation()
    setDragging(true)
  }

  const handleSelect = (key) => {
    if (dragging || selected) return
    setSelected(key)
    setDividerX(key === 'tourism' ? 100 : 0)
    setTimeout(() => setExiting(true), 1700)
    setTimeout(() => {
      if (key === 'tourism') onSelectTourism()
      else onSelectConsultancy()
    }, 2300)
  }

  const baseX = (dividerX / 100) * size.w
  const clipPath = ridgeClipPath(baseX, size.w, size.h, RIDGE_JITTER_FRONT)
  const frontRidgeD = ridgePathD(baseX, size.h, RIDGE_JITTER_FRONT)
  const backRidgeD = ridgePathD(baseX - 26, size.h, RIDGE_JITTER_BACK)
  const clipTransition = dragging
    ? 'none'
    : `clip-path ${selected ? '1.7s' : '0.6s'} cubic-bezier(0.16,1,0.3,1)`

  return (
    <motion.div
      ref={containerRef}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[200] flex flex-col md:block select-none bg-[#0B0C0E] text-[#F8F6F0] overflow-hidden"
    >
      {/* DIVISION 01: TOURISM — full-bleed base layer (mobile: normal stacked block) */}
      <div
        onMouseEnter={() => isDesktop && !dragging && setHovered('tourism')}
        onMouseLeave={() => isDesktop && setHovered(null)}
        onClick={() => handleSelect('tourism')}
        className="relative z-0 flex-1 md:absolute md:inset-0 cursor-pointer overflow-hidden border-b border-[#F8F6F0]/15 md:border-b-0 group"
      >
        <motion.img
          src="/texp-akagera.jpg"
          alt="Luxe Horizons Tourism"
          animate={{ scale: hovered === 'tourism' ? 1.08 : 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/70 to-[#0B0C0E]/40 transition-opacity duration-500 group-hover:opacity-75" />

        <motion.div
          animate={{ opacity: selected === 'tourism' ? 0 : 1 }}
          transition={{ duration: selected ? 0.9 : 0.45 }}
          className="relative z-10 flex h-full flex-col justify-between p-8 md:p-14"
        >
          <div className="my-auto py-8 max-w-md">
            <KineticHeading
              text="Tourism"
              className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F8F6F0] group-hover:text-[#c6a15b] transition-colors duration-500"
            />
            <p className="mt-3 font-serif text-xl sm:text-2xl text-[#F8F6F0]/90 italic font-light">
              Private Journeys &amp; Primate Expeditions
            </p>
            <p className="mt-4 text-sm text-[#F8F6F0]/70 leading-relaxed font-sans">
              Tailor-made luxury safaris across Rwanda, Uganda, Tanzania, Kenya, and Zanzibar. Mountain gorilla
              trekking and savanna game drives.
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="inline-flex items-center gap-3 border border-[#c6a15b] bg-[#c6a15b] px-7 py-3.5 text-xs font-bold tracking-widest text-[#0B0C0E] uppercase shadow-xl transition-all duration-300 group-hover:bg-[#F8F6F0] group-hover:border-[#F8F6F0]"
              >
                Enter Tourism Website <span>→</span>
              </button>
            </div>
          </div>

          <div className="flex w-full max-w-md items-center justify-between text-xs text-[#F8F6F0]/50 border-t border-[#F8F6F0]/15 pt-4">
            <span>Rwanda · Uganda · Tanzania · Kenya</span>
            <span className="text-[#c6a15b]">Explore Safaris</span>
          </div>
        </motion.div>
      </div>

      {/* DIVISION 02: CONSULTANCY — clipped by the jagged ridge on desktop, plain stacked block on mobile */}
      <div
        onMouseEnter={() => isDesktop && !dragging && setHovered('consultancy')}
        onMouseLeave={() => isDesktop && setHovered(null)}
        onClick={() => handleSelect('consultancy')}
        style={isDesktop ? { clipPath, transition: clipTransition } : undefined}
        className="relative z-10 flex-1 md:absolute md:inset-0 cursor-pointer overflow-hidden group"
      >
        <motion.img
          src="/exp-tanzania.jpg"
          alt="Luxe Horizons Consultancy & MICE"
          animate={{ scale: hovered === 'consultancy' ? 1.08 : 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/70 to-[#0B0C0E]/40 transition-opacity duration-500 group-hover:opacity-75" />

        <motion.div
          animate={{ opacity: selected === 'consultancy' ? 0 : 1 }}
          transition={{ duration: selected ? 0.9 : 0.45 }}
          className="relative z-10 flex h-full flex-col justify-between p-8 md:p-14 md:items-end md:text-right"
        >
          <div className="my-auto py-8 max-w-md">
            <KineticHeading
              text="Consultancy"
              className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F8F6F0] group-hover:text-[#c6a15b] transition-colors duration-500"
            />
            <p className="mt-3 font-serif text-xl sm:text-2xl text-[#F8F6F0]/90 italic font-light">
              Travel Advisory &amp; MICE Management
            </p>
            <p className="mt-4 text-sm text-[#F8F6F0]/70 leading-relaxed font-sans">
              Unique Travel Management Services for diplomats, corporate conferences, executive delegates, and
              MICE incentive trips in Kigali.
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="inline-flex items-center gap-3 border border-[#F8F6F0]/40 bg-[#0B0C0E]/80 px-7 py-3.5 text-xs font-bold tracking-widest text-[#F8F6F0] uppercase shadow-xl transition-all duration-300 group-hover:bg-[#c6a15b] group-hover:text-[#0B0C0E] group-hover:border-[#c6a15b]"
              >
                Enter Consultancy Website <span>→</span>
              </button>
            </div>
          </div>

          <div className="flex w-full max-w-md items-center justify-between text-xs text-[#F8F6F0]/50 border-t border-[#F8F6F0]/15 pt-4">
            <span>Corporate · MICE · Conferences</span>
            <span className="text-[#c6a15b]">Explore Advisory</span>
          </div>
        </motion.div>
      </div>

      {/* Ridge outline + drag handle (desktop only) */}
      {isDesktop && (
        <svg
          className="pointer-events-none absolute inset-0 z-20"
          width={size.w}
          height={size.h}
          style={{ transition: clipTransition }}
        >
          <path d={backRidgeD} fill="none" stroke="#c6a15b" strokeOpacity="0.25" strokeWidth="2" />
          <path d={frontRidgeD} fill="none" stroke="#c6a15b" strokeOpacity="0.7" strokeWidth="1.5" />
        </svg>
      )}
      {isDesktop && (
        <div
          onPointerDown={startDrag}
          className="absolute inset-y-0 z-30 w-6 cursor-ew-resize"
          style={{
            left: baseX,
            transform: 'translateX(-50%)',
            opacity: selected ? 0 : 1,
            transition: `opacity 0.3s ease, left ${dragging ? '0s' : selected ? '1.7s' : '0.6s'} cubic-bezier(0.16,1,0.3,1)`
          }}
        />
      )}
    </motion.div>
  )
}
