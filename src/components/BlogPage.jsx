import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { blogPosts } from '../data/content.js'
import Seo from './Seo.jsx'
import './BlogPage.css'

// Deterministic little tilts so the "deal" reads like cards fanning out of a
// hand rather than a perfectly uniform grid snapping into place.
const ROTATIONS = [-7, 5, -3, 8, -5, 4, -8, 6]

export default function BlogPage() {
  const categories = useMemo(() => Array.from(new Set(blogPosts.map((p) => p.category))), [])
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts =
    activeCategory === 'All' ? blogPosts : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <section className="bp-page">
      <Seo
        title="Stories & Field Notes — Safari Blog | Luxe Horizons Africa"
        description="Guides, culture and conservation dispatches from Rwanda, Uganda and Tanzania — from the Luxe Horizons Africa trip design team."
      />

      <div className="wrap bp-head">
        <div className="bp-head-copy">
          <div className="eyebrow">The Journal</div>
          <h1>Stories &amp; Field Notes</h1>
          <p>Guides, culture and conservation dispatches from Rwanda, Uganda and Tanzania.</p>
        </div>
        <div className="bp-head-deck" aria-hidden="true">
          <span className="bp-deck-card back2" />
          <span className="bp-deck-card back1" />
          <span className="bp-deck-card front">{blogPosts.length}</span>
        </div>
      </div>

      <div className="wrap bp-layout">
        <aside className="bp-sidebar">
          <div className="bp-sidebar-inner">
            <div className="bp-sidebar-label">Browse By</div>
            <button
              type="button"
              className={`bp-filter ${activeCategory === 'All' ? 'active' : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              <span className="bp-filter-dot all" />
              <span className="bp-filter-name">All Stories</span>
              <span className="bp-filter-count">{blogPosts.length}</span>
            </button>
            {categories.map((cat) => {
              const match = blogPosts.find((p) => p.category === cat)
              const count = blogPosts.filter((p) => p.category === cat).length
              return (
                <button
                  key={cat}
                  type="button"
                  className={`bp-filter ${activeCategory === cat ? 'active' : ''}`}
                  style={{ '--accent': match?.accent }}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span className="bp-filter-dot" />
                  <span className="bp-filter-name">{cat}</span>
                  <span className="bp-filter-count">{count}</span>
                </button>
              )
            })}
          </div>
        </aside>

        <div className="bp-grid">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <motion.a
                key={post.key}
                href="#"
                layout
                className="bp-card"
                initial={{ opacity: 0, y: -70, scale: 0.4, rotate: ROTATIONS[i % ROTATIONS.length] }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, y: 50, scale: 0.55, rotate: ROTATIONS[i % ROTATIONS.length] }}
                transition={{ type: 'spring', stiffness: 260, damping: 24, delay: i * 0.045 }}
              >
                <div className="bp-card-media">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="bp-card-body">
                  <div className="bp-card-meta">
                    <span className="bp-card-category" style={{ color: post.accent }}>
                      {post.category}
                    </span>
                    <span className="bp-card-dot" />
                    <span className="bp-card-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="bp-card-link" style={{ color: post.accent }}>
                    Read the story →
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
