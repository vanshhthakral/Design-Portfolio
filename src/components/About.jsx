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
