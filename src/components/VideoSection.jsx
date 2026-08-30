import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { videoSection, contact } from '../data/content.js'
import './VideoSection.css'

export default function VideoSection() {
  const videoRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [muted, setMuted] = useState(true)

  // Play the video (muted) once it's mostly in view; pause when scrolled away
  // so it's not silently running in a background tab forever.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting)
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay can be blocked by the browser — that's fine, the
              // poster frame / first frame just stays visible instead.
            })
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <section className="video-section">
      <video
        ref={videoRef}
        className="video-section-media"
        src={videoSection.src}
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="video-section-overlay" />

      <div className="wrap video-section-content">
        <Reveal className="video-section-text">
          <div className="eyebrow on-dark">{videoSection.eyebrow}</div>
          <h2>{videoSection.heading}</h2>
          <p>{videoSection.subheading}</p>

          <div className="video-section-actions">
            <button
              type="button"
              className="video-sound-toggle"
              onClick={toggleSound}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
            >
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 9v6h4l5 5V4L8 9H4z" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 9v6h4l5 5V4L8 9H4z" />
                  <path d="M16.5 8.5a5 5 0 0 1 0 7" />
                  <path d="M19 6a9 9 0 0 1 0 12" />
                </svg>
              )}
            </button>

            <a href={contact.youtube} target="_blank" rel="noreferrer" className="btn btn-light video-cta">
              Watch Full Story on YouTube
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}