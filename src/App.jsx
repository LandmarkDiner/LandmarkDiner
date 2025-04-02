"use client"

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import landmarkLogo from './assets/landmarkLogo.png'
import { useState } from "react"
import Home from "./pages/home"
import About from "./pages/about"
import Menu from "./pages/menu"
import Contact from "./pages/contact"
import Admin from "./pages/admin.jsx"
import useCustomLocation from "./location.jsx"
import "./navbar.css"
import "./App.css"

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useCustomLocation();

  return (
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
        <nav className="nav-menu">
          <ul className="navList">
            <li>
              <Link to="/" className={`navItem ${location.pathname === "" || location.pathname === "/" ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`navItem ${location.pathname === "/about" ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className={`navItem ${location.pathname === "/menu" ? "active" : ""}`} onClick={() => setIsMenuOpen(true)}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`navItem ${location.pathname === "/contact" ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
            {/* <li>
              <Link to="/admin" className={`navItem ${location.pathname === "/admin" ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
                Admin
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation /> {/* Now the Navigation component handles the routing logic */}
        
        {/* Page Routes */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>Created by Dylan Bloch and Bernny Velaszquez</p>
          <p> Copyright © 2025. All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  )
}

export default App