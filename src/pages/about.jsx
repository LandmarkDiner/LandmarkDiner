import './about.css';
import landmarkBW from '../assets/landmarkBW.jpg'

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
        </div>
        <div classname="hero-content">
          <p>Serving Rome's community since 1998</p>
        </div>
      </section>

      {/* History Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="history-grid">
            <div className="history-content">
              <h2 className="section-title">A Rome Tradition</h2>
              <p>
                Landmark Diner has been a cornerstone of the Rome, Georgia community 
                for over half a century. What started as a small family-owned 
                establishment in 1998 has grown into one of Rome's most beloved 
                dining destinations.
              </p>
              <p>
                Through the years, we've maintained our commitment to serving 
                quality home-style meals while creating a warm, welcoming 
                atmosphere where families and friends can gather to share a meal 
                and make memories.
              </p>
            </div>
            <div className="history-image">
              <img 
                src={landmarkBW} 
                alt="Historic photo of Landmark Diner"
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="about-container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Traditional Values</h3>
              <p>
                We believe in preserving the traditions of home-style cooking while 
                providing friendly, attentive service to every guest who walks 
                through our doors.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3>Family First</h3>
              <p>
                Our restaurant is more than just a business – it's a family 
                tradition. We treat our customers like family and serve food 
                made with love.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3>Quality Food</h3>
              <p>
                We take pride in serving fresh, quality ingredients in every dish. 
                Our recipes have been perfected over generations to bring you the 
                best home-style cooking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="about-container">
          <div className="community-content">
            <h2>Part of the Community</h2>
            <p>
              For over 25 years, we've been proud to be more than just a 
              restaurant – we're a part of the Rome community. From hosting local 
              events to supporting community initiatives, we believe in giving 
              back to the community that has given us so much.
            </p>
            <p>
              We're grateful for all of our customers who have made 
              Landmark Diner their go-to spot for family meals, celebrations, 
              and everyday dining.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
