import "./contact.css"

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
        </div>
        <div classname="hero-content">
          <p>We look forward to serving you!</p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-info-wrapper">
          <section className="contact-info">
            <div className="info-card">
              <h2>Visit Us</h2>
              <div className="info-section">
                <h3>Address</h3>
                <p>2740 Martha Berry Hwy</p>
                <p>Rome, GA 30165</p>
              </div>

              <div className="info-section">
                <h3>Hours of Operation</h3>
                <div className="hours-grid">
                  <div>
                    <p className="day">Monday - Friday</p>
                    <p className="time">6:00 AM - 9:00 PM</p>
                  </div>
                  <div>
                    <p className="day">Saturday</p>
                    <p className="time">7:00 AM - 10:00 PM</p>
                  </div>
                  <div>
                    <p className="day">Sunday</p>
                    <p className="time">7:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h3>Contact</h3>
                <p>Phone: (706) 555-1234</p>
                <p>Email: info@landmarkdiner.com</p>
              </div>

              <div className="info-section">
                <h3>Connect With Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Map Placeholder */}
          <div className="map-container">
              <div className="map-placeholder">
                <p>Map Loading...</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

