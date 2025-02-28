"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="//" className="navbar-brand">
          Landmark Diner
        </Link>

        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="desktop-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/menu" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
            <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

