import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ scrolled, dark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`navbar 
        ${scrolled ? 'navbar--scrolled' : ''} 
        ${!showNavbar ? 'navbar--hidden' : ''}
        ${menuOpen ? 'navbar--open' : ''}`
      }
    >
      <div className="navbar__container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          <img
            src="/images/logp.png"
            alt="Anshika Thakral"
            className="navbar__logo-img"
          />
        </a>

        {/* Desktop Links */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--mobile' : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="navbar__theme-toggle"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

          {/* Burger */}
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}