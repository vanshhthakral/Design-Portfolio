import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  // 🔥 Navbar scroll effect
  const [scrolled, setScrolled] = useState(false)

  // 🌙 Dark mode state (persistent)
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark'
  )

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Apply dark class to <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  // Toggle function
  const toggleTheme = () => {
    setDark(prev => !prev)
  }

  return (
    <div className="app">
      {/* ✅ Pass toggle to Navbar */}
      <Navbar
        scrolled={scrolled}
        dark={dark}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App