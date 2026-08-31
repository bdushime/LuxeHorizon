import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PortalGate({ isOpen, onSelectTourism, onSelectConsultancy }) {
  const [hovered, setHovered] = useState(null)

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed inset-0 z-[200] flex flex-col md:flex-row bg-[#0B0C0E] text-[#F8F6F0] overflow-hidden"
      >
        {/* DIVISION 01: TOURISM */}
        <motion.div
          onMouseEnter={() => setHovered('tourism')}
          onMouseLeave={() => setHovered(null)}
          onClick={onSelectTourism}
          animate={{
            flex: hovered === 'tourism' ? 1.5 : hovered === 'consultancy' ? 0.7 : 1
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 cursor-pointer overflow-hidden border-b border-[#F8F6F0]/15 md:border-b-0 md:border-r border-[#c6a15b]/30 group"
        >
          {/* Background Image */}
          <motion.img
            src="/texp-akagera.jpg"
            alt="Luxe Horizons Tourism"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/70 to-[#0B0C0E]/40 transition-opacity duration-500 group-hover:opacity-75" />

          {/* Content Box */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-14">

            <div className="my-auto py-8">
              
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F8F6F0] group-hover:text-[#c6a15b] transition-colors duration-500">
                Tourism
              </h2>
              <p className="mt-3 font-serif text-xl sm:text-2xl text-[#F8F6F0]/90 italic font-light">
                Private Journeys & Primate Expeditions
              </p>
              <p className="mt-4 max-w-md text-sm text-[#F8F6F0]/70 leading-relaxed font-sans">
                Tailor-made luxury safaris across Rwanda, Uganda, Tanzania, Kenya, and Zanzibar. Mountain gorilla trekking and savanna game drives.
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

            <div className="flex items-center justify-between text-xs text-[#F8F6F0]/50 border-t border-[#F8F6F0]/15 pt-4">
              <span>Rwanda · Uganda · Tanzania · Kenya</span>
              <span className="text-[#c6a15b]">Explore Safaris</span>
            </div>
          </div>
        </motion.div>

        {/* DIVISION 02: CONSULTANCY */}
        <motion.div
          onMouseEnter={() => setHovered('consultancy')}
          onMouseLeave={() => setHovered(null)}
          onClick={onSelectConsultancy}
          animate={{
            flex: hovered === 'consultancy' ? 1.5 : hovered === 'tourism' ? 0.7 : 1
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 cursor-pointer overflow-hidden group"
        >
          {/* Background Image */}
          <motion.img
            src="/exp-tanzania.jpg"
            alt="Luxe Horizons Consultancy & MICE"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/70 to-[#0B0C0E]/40 transition-opacity duration-500 group-hover:opacity-75" />

          {/* Content Box */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-14">

            <div className="my-auto py-8">
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F8F6F0] group-hover:text-[#c6a15b] transition-colors duration-500">
                Consultancy
              </h2>
              <p className="mt-3 font-serif text-xl sm:text-2xl text-[#F8F6F0]/90 italic font-light">
                Travel Advisory & MICE Management
              </p>
              <p className="mt-4 max-w-md text-sm text-[#F8F6F0]/70 leading-relaxed font-sans">
                Unique Travel Management Services for diplomats, corporate conferences, executive delegates, and MICE incentive trips in Kigali.
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

            <div className="flex items-center justify-between text-xs text-[#F8F6F0]/50 border-t border-[#F8F6F0]/15 pt-4">
              <span>Corporate · MICE · Conferences</span>
              <span className="text-[#c6a15b]">Explore Advisory</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
