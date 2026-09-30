import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PortalGate({ isOpen, onSelectTourism }) {
  const [selected, setSelected] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [flash, setFlash] = useState(false)

  if (!isOpen) return null

  const handleEnter = () => {
    if (selected) return
    setFlash(true)
    setTimeout(() => setFlash(false), 300)
    setSelected(true)
    setTimeout(() => setExiting(true), 400)
    setTimeout(() => {
      onSelectTourism()
    }, 900)
  }

  return (
    <motion.div
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] flex flex-col select-none bg-[#0B0C0E] text-[#F8F6F0] overflow-hidden"
    >
      {/* Shutter flash on selection */}
      {flash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.85, 0] }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute inset-0 z-[205] bg-white"
        />
      )}

      {/* Single Opening Landing Screen — Medium Text Headline */}
      <div
        onClick={handleEnter}
        className="relative z-0 flex-1 cursor-pointer overflow-hidden group flex flex-col justify-between p-8 sm:p-12 md:p-16"
      >
        <motion.img
          src="/Travel.webp"
          alt="Luxe Horizons Africa"
          animate={{
            scale: selected ? 1.08 : [1, 1.05, 1]
          }}
          transition={{
            scale: selected ? { duration: 0.8 } : { duration: 18, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Top Header Logo */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <img
            src="/LuxeHorizon-removebg-preview.webp"
            alt="Luxe Horizons Africa"
            className="h-12 sm:h-16 w-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Center Main Headline - Bigger Size */}
        <div className="relative z-10 my-auto py-12 max-w-4xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#F8F6F0] leading-snug font-normal tracking-wide [text-shadow:_0_2px_12px_rgba(0,0,0,0.8)]"
          >
            Luxury Private Journeys &amp; <br />
            <span className="text-[#c6a15b] italic font-normal drop-shadow">Primate Expeditions</span>
          </motion.h1>
        </div>

        {/* Bottom subtle indicator */}
        <div className="relative z-10 flex w-full items-center justify-end text-xs text-[#F8F6F0] pt-4">
          <span className="flex items-center gap-2 text-[#c6a15b] font-medium tracking-wider text-base drop-shadow-md">
            <span>Explore</span>
            <span className="text-xl">&rarr;</span>
          </span>
        </div>
      </div>
    </motion.div>
  )
}
