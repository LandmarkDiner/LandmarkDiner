"use client"

import { useEffect, useState } from "react"
import "./menu.css"

const Menu = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://landmarkdiner.onrender.com/menu")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items)
        setLoading(false)
      })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error)
    //     setError("Failed to load menu items. Please try again later.")
    //     setLoading(false)
    //   })
  }, [])

  if (error) {
    return (
      <div className="menu-error">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="hero-content">
          <h1>Our Menu</h1>
        </div>
        <div classname="hero-content">
            <p>Home-style cooking made with love</p>
        </div>
      </section>

      <div className="menu-container">
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading menu items...</p>
            <p>(This could take up to a minute)</p>
          </div>
        ) : (
          <div className="menu-grid">
            {items.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-card-image">
                  <img
                    src={item.image || "/placeholder.svg?height=200&width=300"}
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=200&width=300"
                    }}
                  />
                </div>
                <div className="menu-card-content">
                  <div className="menu-card-header">
                    <h3>{item.name}</h3>
                    <p className="price">${item.price?.toFixed(2) || "Market Price"}</p>
                  </div>
                  <p className="description">{item.description || "A delicious dish from our kitchen"}</p>
                  {item.dietary && (
                    <div className="dietary-tags">
                      {item.dietary.map((tag, index) => (
                        <span key={index} className="dietary-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu

