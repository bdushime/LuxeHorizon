/*
 * ARCHIVED — "Get Inspired" itinerary gallery from the Consultancy page.
 * Removed on 2026-11-18 at the client's request: the Get Inspired card now
 * links straight to /experiences instead of opening this gallery.
 *
 * This file is NOT imported anywhere, so it isn't bundled into the site.
 * The six itineraries themselves still live (and are still shown) in
 * src/data/experiencesData.js — only the Consultancy-page gallery and its
 * story-reader popup were removed. The matching styles (.con-inspire-*,
 * .con-modal-*) were left in src/components/ConsultancyPage.css.
 *
 * HOW TO RESTORE in src/components/ConsultancyPage.jsx:
 *   1. Add back the imports:
 *        import { experiencesData } from '../data/experiencesData.js'
 *   2. Paste INSPIRE_SLUGS + inspireItems (below) above the component.
 *   3. Add back the three useState hooks (inspireOpen, inspireHovered,
 *      selectedInspireStory) and include inspireOpen / selectedInspireStory
 *      in the scroll-lock + Escape-key useEffect.
 *   4. In openPillar(), replace the navigate('/experiences') call with
 *      setInspireOpen(true).
 *   5. Paste the two <AnimatePresence> blocks from GetInspiredModals below
 *      into the JSX, just after the pillar split-modal <AnimatePresence>.
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { experiencesData } from '../data/experiencesData.js'

// The old site's "Get Inspired" grid pointed at these six itineraries —
// they already exist as real tours with real copy and photos, so we pull
// them straight from the Experiences catalog instead of duplicating them.
export const INSPIRE_SLUGS = [
  'kigalis-golf-experience-the-safari-the-city',
  'pre-post-conference-gorilla-experience',
  'city-tour-vibrant-hopeful-kigali',
  'pre-post-conference-safari-experience',
  'ancient-history-culture',
  'pre-colonial-era-the-big-5-the-city'
]
export const inspireItems = INSPIRE_SLUGS.map((slug) => experiencesData.find((e) => e.slug === slug)).filter(Boolean)

// Self-contained version of the removed JSX, kept runnable for reference.
export function GetInspiredModals({ inspireOpen, setInspireOpen }) {
  const [inspireHovered, setInspireHovered] = useState(null)
  const [selectedInspireStory, setSelectedInspireStory] = useState(null)

  return (
    <>
      <AnimatePresence>
        {inspireOpen && (
          <motion.div
            className="con-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setInspireOpen(false)}
          >
            <motion.div
              className="con-modal-card con-inspire-card"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="con-modal-close"
                aria-label="Close"
                onClick={() => setInspireOpen(false)}
              >
                &times;
              </button>
              <div className="con-inspire-header">
                <div className="con-modal-eyebrow">Consultancy &amp; Incentive Travel</div>
                <h2 className="con-modal-title">Get Inspired</h2>
                <div className="con-divider" />
              </div>
              <div className={`con-inspire-mosaic ${inspireHovered ? 'has-active' : ''}`}>
                {inspireItems.map((item) => (
                  <div
                    key={item.slug}
                    className={`con-inspire-tile ${inspireHovered === item.slug ? 'active' : ''}`}
                    onMouseEnter={() => setInspireHovered(item.slug)}
                    onMouseLeave={() => setInspireHovered(null)}
                    onFocus={() => setInspireHovered(item.slug)}
                    onBlur={() => setInspireHovered(null)}
                    onClick={() => setSelectedInspireStory(item)}
                  >
                    <img className="con-inspire-tile-media" src={item.image} alt={item.title} loading="lazy" decoding="async" />
                    <div className="con-inspire-tile-overlay" />
                    <div className="con-inspire-tile-content">
                      <h3>{item.title}</h3>
                      <p className="con-inspire-tile-meta">{item.duration} · {item.category}</p>
                      <span className="con-inspire-tile-cta">Read Story →</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline Article Reader Modal for Consultancy Inspired Stories */}
      <AnimatePresence>
        {selectedInspireStory && (
          <motion.div
            className="con-modal-backdrop con-story-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedInspireStory(null)}
          >
            <motion.div
              className="con-modal-card con-story-card"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="con-modal-close con-story-close"
                aria-label="Close story"
                onClick={() => setSelectedInspireStory(null)}
              >
                &times;
              </button>

              <div className="con-story-hero">
                <img src={selectedInspireStory.image} alt={selectedInspireStory.title} className="con-story-hero-media" />
                <div className="con-story-hero-overlay" />
                <div className="con-story-hero-content">
                  <div className="con-modal-eyebrow on-dark">{selectedInspireStory.category || 'MICE & Expeditions'}</div>
                  <h2 className="con-story-title">{selectedInspireStory.title}</h2>
                  <div className="con-story-meta">{selectedInspireStory.duration || 'Custom Expedition'}</div>
                </div>
              </div>

              <div className="con-story-body">
                <p className="con-story-lead">
                  {selectedInspireStory.description || selectedInspireStory.summary}
                </p>

                {selectedInspireStory.fullStory && selectedInspireStory.fullStory.length > 0 && (
                  <div className="con-story-paragraphs">
                    {selectedInspireStory.fullStory.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}

                {selectedInspireStory.highlights && selectedInspireStory.highlights.length > 0 && (
                  <div className="con-story-highlights">
                    <h4>Key Highlights &amp; Inclusions</h4>
                    <ul>
                      {selectedInspireStory.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="con-divider" />

                <div className="con-story-cta-box">
                  <div>
                    <h4>Interested in this itinerary for your group or organization?</h4>
                    <p>Our travel management &amp; consultancy specialists can tailor every detail for your conference, retreat, or executive delegation.</p>
                  </div>
                  <Link
                    to="/contact"
                    className="btn btn-dark con-story-cta-btn"
                    onClick={() => {
                      setSelectedInspireStory(null)
                      setInspireOpen(false)
                    }}
                  >
                    Plan With Our Consultancy Team &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
