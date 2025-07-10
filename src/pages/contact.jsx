import "./contact.css"



const AddressMap = () => {
  return (
      <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.927607492785!2d-85.17813052447207!3d34.30138887306419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888aa46ce999ea71%3A0x64f2dd1f5fc0d8d3!2sLandmark%20Family%20Restaurant!5e0!3m2!1sen!2sus!4v1741032758495!5m2!1sen!2sus" 
          width="650"
          height="430"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          />
      </div>
  );
};

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
                    <p className="day">Monday - Sunday</p>
                    <p className="time">7:00 AM - 8:00 PM</p>
                    <p className="time">Closed on Holidays</p>
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
                  <a
                    href="https://www.facebook.com/p/Romes-Landmark-Restaurant-100063788716588/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.67c0 .733.593 1.326 1.325 1.326h11.497v-9.845H9.692v-3.838h3.13V7.26c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.588l-.467 3.838h-3.121V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.405 0 22.675 0z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/romes_landmarkrestaurant/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.4 1.4.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.4 1.4-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.4-1.4-.3-.5-.5-1.2-.6-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1 1.4-1.4.5-.3 1.2-.5 2.4-.6 1.3-.1 1.7-.1 4.9-.1m0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.6.4 3.8.9c-.8.4-1.5 1.1-2 2-.5.8-.7 1.8-.8 3.2C1 8.3 1 8.7 1 12s0 3.7.1 5.1c.1 1.4.3 2.4.8 3.2.4.9 1.1 1.5 2 2 .8.5 1.8.7 3.2.8C8.3 23.9 8.7 24 12 24s3.7 0 5.1-.1c1.4-.1 2.4-.3 3.2-.8.9-.4 1.5-1.1 2-2 .5-.8.7-1.8.8-3.2.1-1.4.1-1.8.1-5.1s0-3.7-.1-5.1c-.1-1.4-.3-2.4-.8-3.2-.4-.9-1.1-1.5-2-2-.8-.5-1.8-.7-3.2-.8C15.7.1 15.3 0 12 0z"/>
                      <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                      <circle cx="18.4" cy="5.6" r="1.44"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Map Placeholder */}
          <div className="map-container">
                <AddressMap/>
          </div>
        </div>
      </div>
    </div>
  )
}

