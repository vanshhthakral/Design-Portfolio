import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* LEFT — Brand */}
        <div className="footer__brand">
          <span className="footer__logo">Anshika Thakral</span>
          <p className="footer__tagline">
            Brand Strategy &amp; Design Research
          </p>

          <p className="footer__location">
            <span className="footer__location-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s-6-5.4-6-10a6 6 0 1112 0c0 4.6-6 10-6 10z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            Delhi, India
          </p>
        </div>

        {/* CENTER — Navigation */}
        <nav className="footer__nav" aria-label="Footer navigation">
          {['About', 'Skills', 'Work', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="footer__link">
              {item}
            </a>
          ))}
        </nav>

        {/* RIGHT — Copyright */}
        <p className="footer__copy">
          &copy; {year} Anshika Thakral. All rights reserved.
        </p>

      </div>
    </footer>
  )
}