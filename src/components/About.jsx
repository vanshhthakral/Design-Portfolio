import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.about__animate').forEach((el, i) => {
            setTimeout(() => el.classList.add('about__animate--visible'), i * 120)
          })
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__inner">
        {/* Left column */}
        <div className="about__left">
          <p className="section-label about__animate">01 — About</p>
          <h2 className="about__heading about__animate">About Me</h2>
          <div className="section-divider left about__animate" />
          <div className="about__graphic about__animate">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
              <circle cx="60" cy="60" r="59" stroke="#d4a89a" strokeWidth="0.8" strokeDasharray="4 8" />
              <circle cx="60" cy="60" r="40" stroke="#e8dfd0" strokeWidth="0.8" />
              <circle cx="60" cy="60" r="4" fill="#d4a89a" />
              <line x1="60" y1="20" x2="60" y2="100" stroke="#e8dfd0" strokeWidth="0.6" />
              <line x1="20" y1="60" x2="100" y2="60" stroke="#e8dfd0" strokeWidth="0.6" />
            </svg>
          </div>
        </div>

        {/* Right column */}
        <div className="about__right">
          <p className="about__body about__animate">
            I am a designer focused on brand strategy and design research. With a background in Bachelor of Commerce and an interest in fashion illustration, I bring both analytical thinking and creative expression into my work.
          </p>
          <p className="about__body about__animate">
            I enjoy understanding people, identifying problems, and translating insights into meaningful brand experiences. My approach combines creativity with strategic thinking to create work that is not only visually engaging but also purposeful.
          </p>
          <p className="about__body about__animate">
            I aim to build and grow my own fashion brand in the future.
          </p>

          <div className="about__tags about__animate">
            <span className="about__tag">Brand Strategy</span>
            <span className="about__tag">Design Research</span>
            <span className="about__tag">Fashion Illustration</span>
            <span className="about__tag">B.Com Graduate</span>
          </div>
        </div>
      </div>
    </section>
  )
}
