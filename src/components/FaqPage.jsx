import { useMemo, useState } from 'react'
import { faqCategories, faqs } from '../data/content.js'
import Seo from './Seo.jsx'
import CtaBand from './CtaBand.jsx'
import './FaqPage.css'

// Ideas #1 + #4 — "Field Guide Index" (sticky category sidebar) combined
// with "Search & Suggest" (live text search) — the sidebar and the search
// box filter the same accordion list together.
export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [openKeys, setOpenKeys] = useState(() => new Set([faqs[0]?.key]))

  const toggle = (key) => {
    setOpenKeys((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faqs.filter((f) => {
      const matchesCategory = activeCategory === 'all' || f.category === activeCategory
      const matchesQuery = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <div className="faq-page">
      <Seo
        title="Travel Tips & FAQ — Planning Your Safari | Luxe Horizons Africa"
        description="Answers to common questions about planning a bespoke safari with Luxe Horizons Africa — best time to travel, packing, families, health and logistics."
      />

      <div className="wrap faq-head">
        <div className="eyebrow">Good To Know</div>
        <h1>Travel Tips &amp; FAQ</h1>
        <p>Everything you need to know before your first day in the field.</p>

        <div className="faq-search">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to know?"
            aria-label="Search travel tips and FAQ"
          />
          {query && (
            <button type="button" className="faq-search-clear" onClick={() => setQuery('')} aria-label="Clear search">
              &times;
            </button>
          )}
        </div>
      </div>

      <div className="wrap faq-layout">
        <aside className="faq-sidebar">
          <div className="faq-sidebar-inner">
            <div className="faq-sidebar-label">Browse By</div>
            <button
              type="button"
              className={`faq-filter ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <span>All Topics</span>
              <span className="faq-filter-count">{faqs.length}</span>
            </button>
            {faqCategories.map((cat) => {
              const count = faqs.filter((f) => f.category === cat.key).length
              return (
                <button
                  key={cat.key}
                  type="button"
                  className={`faq-filter ${activeCategory === cat.key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  <span>{cat.label}</span>
                  <span className="faq-filter-count">{count}</span>
                </button>
              )
            })}
          </div>
        </aside>

        <div className="faq-list">
          {filtered.length === 0 ? (
            <div className="faq-empty">
              <p>No answers match “{query}” yet.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setActiveCategory('all')
                }}
              >
                Clear search
              </button>
            </div>
          ) : (
            filtered.map((f) => {
              const isOpen = openKeys.has(f.key)
              return (
                <div key={f.key} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-item-question"
                    onClick={() => toggle(f.key)}
                    aria-expanded={isOpen}
                  >
                    <span>{f.question}</span>
                    <svg
                      className="faq-item-chevron"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className="faq-item-answer-wrap">
                    <div className="faq-item-answer">
                      {f.answer.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>

      <CtaBand />
    </div>
  )
}
