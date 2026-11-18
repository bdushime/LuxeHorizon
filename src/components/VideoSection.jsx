import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { videoSection, contact } from '../data/content.js'
import './VideoSection.css'

export default function VideoSection() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  // Once a visitor pauses manually, scrolling back into view shouldn't
  // override their choice and restart playback.
  const userPausedRef = useRef(false)

  // Play the video (muted) once it's mostly in view; pause when scrolled away
  // so it's not silently running in a background tab forever.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (userPausedRef.current) return
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

  // Drive the cinematic scrubber bar under the video frame.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onTimeUpdate = () => {
      setProgress(video.duration ? video.currentTime / video.duration : 0)
    }
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      userPausedRef.current = false
      video.play().catch(() => {})
    } else {
      userPausedRef.current = true
      video.pause()
    }
  }

  const skip = (seconds) => {
    const video = videoRef.current
    if (!video || !video.duration) return
    video.currentTime = Math.min(Math.max(video.currentTime + seconds, 0), video.duration)
  }

  // Click anywhere on the progress bar to jump to that point.
  const seek = (e) => {
    const video = videoRef.current
    if (!video || !video.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1)
    video.currentTime = ratio * video.duration
  }

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <section className="video-section">
      <div className="wrap video-section-inner">
        <Reveal className="video-section-text" as="div">
          <h2>{videoSection.heading}</h2>
          <p>{videoSection.subheading}</p>

          <div className="video-section-actions">
            <a href={contact.youtube} target="_blank" rel="noreferrer" className="btn btn-light video-cta">
              Watch on YouTube
            </a>
          </div>
        </Reveal>

        <Reveal className="video-frame" as="div">
          <video
            ref={videoRef}
            className="video-section-media"
            src={videoSection.src}
            muted
            loop
            playsInline
            preload="metadata"
            onClick={togglePlay}
          />
          <div className="video-frame-tint" />
          <div className="video-controls">
            <button
              type="button"
              className="video-sound-toggle"
              onClick={() => skip(-10)}
              aria-label="Back 10 seconds"
              title="Back 10s"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
              </svg>
            </button>

            <button
              type="button"
              className="video-sound-toggle"
              onClick={togglePlay}
              aria-label={playing ? 'Pause video' : 'Play video'}
              title={playing ? 'Pause' : 'Play'}
            >
              {playing ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              className="video-sound-toggle"
              onClick={() => skip(10)}
              aria-label="Forward 10 seconds"
              title="Forward 10s"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
              </svg>
            </button>

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
          </div>
          <div
            className="video-frame-scrubber"
            onClick={seek}
            role="slider"
            aria-label="Video progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
          >
            <div className="video-frame-scrubber-fill" style={{ width: `${progress * 100}%` }} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}