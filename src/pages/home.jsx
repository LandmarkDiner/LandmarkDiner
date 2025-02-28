import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container text-center">
            <span className="badge">A Rome, GA Tradition</span>
            <h1 className="hero-title">Landmark Diner</h1>
            <p className="hero-subtitle">Where every meal feels like home</p>
            <div className="hero-buttons">
              <Link to="/menu" className="button button-primary">
                View Our Menu
              </Link>
              <Link to="/contact" className="button button-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="info-bar">
        <div className="container">
          <div className="info-grid">
            <div className="info-item">
              <svg className="info-icon" /* Add your location icon SVG here */ />
              <span>2740 Martha Berry Hwy, Rome, GA 30165</span>
            </div>
            <div className="info-item">
              <svg className="info-icon" /* Add your clock icon SVG here */ />
              <span>Open Today: 6:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="about-content">
              <h2 className="section-title">A Local Favorite in Rome</h2>
              <p className="section-text">
                Landmark Diner has been serving the Rome community with love and dedication. Our commitment to quality
                food and friendly service has made us a beloved destination for locals and visitors alike.
              </p>
              <Link to="/about" className="button button-primary">
                Read Our Story
              </Link>
            </div>
            <div className="about-image">
              <img src="/path-to-your-image.jpg" alt="Inside Landmark Diner" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="section section-gray">
        <div className="container text-center">
          <span className="badge">Our Specialties</span>
          <h2 className="section-title">Family Favorites</h2>
          <p className="section-text">
            From breakfast classics to dinner specialties, our menu has something for everyone.
          </p>

          <div className="grid grid-cols-3">
            {[
              {
                title: "Breakfast Classics",
                description: "Start your day with our famous breakfast platters",
                image: "/path-to-breakfast-image.jpg",
              },
              {
                title: "Lunch Favorites",
                description: "Sandwiches, salads, and daily lunch specials",
                image: "/path-to-lunch-image.jpg",
              },
              {
                title: "Home-Style Dinners",
                description: "Comfort food just like mom used to make",
                image: "/path-to-dinner-image.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="menu-card">
                <img src={item.image || "/placeholder.svg"} alt={item.title} />
                <div className="menu-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
            <br></br>
          <Link to="/menu" className="button button-primary">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container text-center">
          <span className="badge">Customer Reviews</span>
          <h2 className="section-title">What Our Guests Say</h2>

          <div className="grid grid-cols-3">
            {[
              {
                quote: "Best diner in Rome! The breakfast is amazing and the staff treats you like family.",
                author: "John D.",
              },
              {
                quote: "Love their home-style cooking. It's our family's favorite spot for Sunday lunch.",
                author: "Patricia M.",
              },
              {
                quote: "Great food, friendly service, and cozy atmosphere. A true Rome gem!",
                author: "Robert W.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="quote">"{testimonial.quote}"</p>
                <p className="author">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <span className="badge badge-light">Visit Us Today</span>
          <h2 className="section-title text-white">Join Us for a Meal</h2>
          <p className="section-text text-white">Whether it's breakfast, lunch, or dinner, we're here to serve you.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="button button-white">
              Make a Reservation
            </Link>
            <Link to="/menu" className="button button-outline-white">
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

