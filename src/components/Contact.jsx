import { useEffect, useRef, useState } from 'react'
import './Contact.css'

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'anshikathakral.design@gmail.com',
    href: 'mailto:anshikathakral.design@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="1" y="3.5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M1 5.5l8 5.5 8-5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 92540 28000',
    href: 'tel:+919254028000',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 2h3.5l1.5 4-2 1.5a10 10 0 004.5 4.5L12 10l4 1.5V15a1.5 1.5 0 01-1.5 1.5C6.5 16.5 1.5 11.5 1.5 4.5A1.5 1.5 0 013 3V2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/anshikathakral',
    href: 'https://www.linkedin.com/in/anshika-thakral-a904133a8?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="1.5" y="1.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5.5 8v5M5.5 5.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M8.5 13V10a2 2 0 014 0v3M8.5 10v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'behance',
    label: 'Behance',
    value: 'behance.net/anshikathakral',
    href: 'https://www.behance.net/anshikathakral1',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2 4h5.5a3 3 0 010 6H2V4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 10h6a3 3 0 010 6H2v-6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 4.5h4M11 9.5a3 3 0 106 0 3 3 0 00-6 0z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.contact__animate').forEach((el, i) => {
            setTimeout(() => el.classList.add('contact__animate--visible'), i * 110)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate send — replace with real email API (EmailJS, Formspree, etc.)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact__inner">

        {/* Left — info */}
        <div className="contact__left">
          <p className="section-label contact__animate">04 — Contact</p>
          <h2 className="contact__heading contact__animate">Get in Touch</h2>
          <div className="section-divider left contact__animate" />
          <p className="contact__body contact__animate">
            I'm open to opportunities, collaborations, and creative conversations.
          </p>

          {/* Contact links */}
          <ul className="contact__list contact__animate">
            {contactLinks.map((link) => (
              <li key={link.id} className="contact__item">
                <a
                  href={link.href}
                  id={`contact-${link.id}`}
                  className="contact__link"
                  target={link.id === 'linkedin' || link.id === 'behance' ? '_blank' : undefined}
                  rel={link.id === 'linkedin' || link.id === 'behance' ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact__link-icon">{link.icon}</div>
                  <div className="contact__link-text">
                    <span className="contact__link-label">{link.label}</span>
                    <span className="contact__link-value">{link.value}</span>
                  </div>
                  <span className="contact__link-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — message form */}
        <div className="contact__right contact__animate">
          <div className="contact__form-header">
            <p className="section-label">Send a Message</p>
            <p className="contact__form-sub">Drop me a note — I usually respond within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="contact__success" role="alert">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" stroke="#d4a89a" strokeWidth="1.2" />
                <path d="M10 16.5l4 4 8-8" stroke="#d4a89a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="contact__success-title">Message sent!</h3>
              <p className="contact__success-body">Thank you for reaching out. I'll get back to you soon.</p>
              <button className="contact__success-reset" onClick={() => setSubmitted(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
              id="contact-message-form"
            >
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__field-label">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="contact__input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-email" className="contact__field-label">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="contact__input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__textarea"
                  placeholder="Tell me about your project, collaboration idea, or just say hello..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className={`contact__submit ${sending ? 'contact__submit--sending' : ''}`}
                disabled={sending}
              >
                {sending ? (
                  <>
                    <span className="contact__spinner" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="contact__submit-arrow">→</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
