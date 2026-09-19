import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { blogPosts } from '../data/content.js'
import './BlogSection.css'

// Loosely staggered heights so the cards read as sitting along an
// undulating hillside rather than a flat, generic grid.
const PEAK_OFFSETS = [40, 0, 26, 12]

// Demo-only placeholder showing how a freshly published post would slide
// out of the stack and join the lineup — not part of the real blogPosts data.
const DEMO_POST = {
  key: 'demo-new-post',
  category: 'New Story',
  date: 'Coming Soon',
  title: 'Add Your Next Story Here',
  excerpt: 'A preview of how a freshly published post slides out of the stack and into the lineup.',
  image: '/exp-akagera.jpg',
  accent: '#9c4a32'
}

// The homepage teaser only ever features a curated 3 — the full list (which
// has grown to fit the /blog filter page) lives on the dedicated blog page.
const featuredPosts = blogPosts.slice(0, 3)

export default function BlogSection() {
  const [dealt, setDealt] = useState(false)

  const visiblePosts = dealt ? [...featuredPosts, DEMO_POST] : featuredPosts

  return (
    <section className="blog-trail-section" id="blog">
      <div className="wrap blog-head">
        <Reveal className="reveal-left">
          <div className="eyebrow">From The Field</div>
          <h2>Stories &amp; Field Notes</h2>
        </Reveal>
        <Reveal className="reveal-right">
          <p>Guides, culture and conservation dispatches from Rwanda, Uganda and Tanzania.</p>
        </Reveal>
      </div>

      <div className="wrap blog-trail">
        <div className="blog-trail-row">
          <AnimatePresence initial={false}>
            {visiblePosts.map((post, i) => (
              <motion.div
                key={post.key}
                layout
                initial={{ opacity: 0, x: 70, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1, marginTop: PEAK_OFFSETS[i] ?? 0 }}
                exit={{ opacity: 0, x: 70, scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                className="blog-trail-col"
              >
                <Link className="blog-trail-card" to="/blog">
                  <div className="blog-trail-card-media">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-trail-card-body">
                    <div className="blog-card-meta">
                      <span className="blog-card-category" style={{ color: post.accent }}>
                        {post.category}
                      </span>
                      <span className="blog-card-dot" />
                      <span className="blog-card-date">{post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-card-link" style={{ color: post.accent }}>
                      Read the story →
                    </span>
                  </div>
                </Link>
                <div className="blog-trail-stem" style={{ '--accent': post.accent }} />
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.button
            type="button"
            layout
            className="blog-trail-stack"
            onClick={() => setDealt((d) => !d)}
            aria-label={dealt ? 'Return the new story to the stack' : 'Reveal a new story from the stack'}
          >
            <span className="blog-trail-stack-card back2" />
            <span className="blog-trail-stack-card back1" />
            <span className="blog-trail-stack-card front">
              <span className="blog-trail-stack-plus">{dealt ? '↩' : '+'}</span>
              <span className="blog-trail-stack-label">{dealt ? 'Put Back' : 'More Stories'}</span>
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}
