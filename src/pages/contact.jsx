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
                  <a href="https://www.facebook.com/p/Romes-Landmark-Restaurant-100063788716588/" className="social-link" aria-label="Facebook">
                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
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

