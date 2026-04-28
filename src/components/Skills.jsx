import { useEffect, useRef } from 'react'
import './Skills.css'

const skillGroups = [
  {
    id: 'strategy',
    label: 'Strategy',

    skills: ['Research', 'Problem Solving'],
    desc: 'Analytical thinking applied to brand challenges — identifying user needs and market gaps to drive meaningful strategy.',
  },
  {
    id: 'creative',
    label: 'Creative',

    skills: ['Visual Storytelling', 'Creative Thinking'],
    desc: 'Transforming complex ideas into compelling visual narratives — from  illustration to brand identity.',
  },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skills__animate').forEach((el, i) => {
            setTimeout(() => el.classList.add('skills__animate--visible'), i * 150)
          })
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills__inner">
        {/* Header */}
        <div className="skills__header">
          <p className="section-label skills__animate">02 — Skills</p>
          <h2 className="skills__heading skills__animate">Capabilities</h2>
          <div className="section-divider skills__animate" />
          <p className="skills__sub skills__animate">
            Where strategic thinking meets creative expression.
          </p>
        </div>

        {/* Cards grid */}
        <div className="skills__grid">
          {skillGroups.map((group, idx) => (
            <div key={group.id} className={`skills__card skills__animate`} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="skills__card-icon">{group.icon}</div>
              <p className="skills__card-label">{group.label}</p>
              <ul className="skills__list">
                {group.skills.map(skill => (
                  <li key={skill} className="skills__item">
                    <span className="skills__item-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
              <p className="skills__card-desc">{group.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom strip — tools / disciplines */}
        <div className="skills__strip skills__animate">
          {['Brand Strategy', 'Design Research', 'Visual Identity', 'Fashion Illustration', 'Consumer understanding', 'Creative Direction'].map(item => (
            <span key={item} className="skills__strip-item">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
