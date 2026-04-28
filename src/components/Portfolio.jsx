import { useEffect, useRef } from 'react'
import './Portfolio.css'

const projects = [
  {
    id: 'ritu-kumar',
    title: 'Ritu Kumar',
    subtitle: 'Brand Strategy',
    desc: 'A comprehensive brand strategy study for Ritu Kumar — exploring premium ethnic wear positioning, heritage storytelling, and cultural identity in the luxury fashion space.',
    image: '/images/ritu-kumar.jpg',
    tag: 'Brand Research',
    link: '/projects/ritu-kumar'
  },
  {
    id: 'nift-map',
    title: 'NIFT Delhi Navigation Map',
    subtitle: 'Design Research',
    desc: 'An information design project mapping the NIFT Delhi campus — translating spatial complexity into a clear, accessible, and visually engaging navigation system.',
    image: '/images/nift-map.jpg',
    tag: 'Information Design',
    link: 'https://www.behance.net/gallery/246880085/Navigation-design-of-NIFT-Delhi'
  },
  {
    id: 'masaba-2040',
    title: 'Masaba 2040',
    subtitle: 'Future Brand Vision',
    desc: '"The New Mythology" — a speculative brand vision for Masaba Gupta set in 2040, reimagining cultural symbolism through a bold, future-forward creative direction.',
    image: '/images/masaba.jpg',
    tag: 'Creative Direction',
    link: 'https://www.behance.net/gallery/242860477/Masaba-2040'
  },
]

export default function Portfolio() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.portfolio__animate').forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('portfolio__animate--visible')
            }, i * 120)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      <div className="portfolio__inner">

        {/* Header */}
        <div className="portfolio__header">
          <p className="section-label portfolio__animate">03 — Work</p>
          <h2 className="portfolio__heading portfolio__animate">
            Selected Projects
          </h2>
          <div className="section-divider portfolio__animate" />
          <p className="portfolio__sub portfolio__animate">
            A curated collection of brand strategy and design research projects.
          </p>
        </div>

        {/* Project grid */}
        <div className="portfolio__grid">
          {projects.map((project, idx) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"

              className={`portfolio__card portfolio__animate ${idx === 2 ? 'portfolio__card--wide' : ''

                }`}


              id={`project-${project.id}`}
            >
              <div className="portfolio__card-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio__card-img"
                  loading="lazy"
                />

                <div className="portfolio__card-overlay">
                  <span className="portfolio__overlay-tag">
                    {project.tag}
                  </span>
                  <p className="portfolio__overlay-desc">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="portfolio__card-body">
                <div className="portfolio__card-meta">
                  <span className="portfolio__card-subtitle">
                    {project.subtitle}
                  </span>
                </div>
                <h3 className="portfolio__card-title">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}