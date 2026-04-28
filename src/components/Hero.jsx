import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.hero__animate').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.15}s`
            el.classList.add('hero__animate--visible')
          })
        }
      },
      { threshold: 0.2 }
    )

    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>

      {/* Left — text */}
      <div className="hero__text">
        <p className="hero__pre-label hero__animate">Portfolio 2026</p>

        <h1 className="hero__name hero__animate">
          Anshika<br />Thakral
        </h1>

        <p className="hero__tagline hero__animate">
          Brand Strategy &amp; Design Research
        </p>

        <div className="hero__divider hero__animate" />

        <div className="hero__cta-group hero__animate">

          {/* Primary Button */}
          <a href="#portfolio" className="hero__cta" id="hero-cta-btn">
            View My Work
            <span className="hero__cta-arrow">→</span>
          </a>

          {/* CV Button (same style) */}
          <a
            href="cv.pdf"
            className="hero__cta"
            id="hero-cv-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview CV
            <span className="hero__cta-arrow">→</span>
          </a>

        </div>
      </div>

      {/* Right — portrait */}
      <div className="hero__image-wrap hero__animate">
        <div className="hero__image-frame">
          <img
            src="/images/portrait.PNG
            "
            alt="Anshika Thakral — Brand Strategy & Design Research"
            className="hero__portrait"
          />
        </div>

        <div className="hero__image-label">
          <span>Designer</span>
          <span className="hero__image-dot" />
          <span>Strategist</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  )
}