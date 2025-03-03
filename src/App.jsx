"use client"

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import landmarkLogo from './assets/landmarkLogo.png'
import { useState } from "react"
import Home from "./pages/home"
import About from "./pages/about"
import Menu from "./pages/menu"
import Contact from "./pages/contact"
import "./navbar.css"
import "./App.css"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <header className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-brand">
              <img src={landmarkLogo || "/placeholder.svg"} alt="Landmark Diner Logo" className="navbar-logo"/>
            </Link>

            {/* Mobile menu button */}
            <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <svg className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
              <ul className="navList">
                <li>
                  <Link to="/" className="navItem" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="navItem" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="navItem" onClick={() => setIsMenuOpen(true)}>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="navItem" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Page Routes */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
