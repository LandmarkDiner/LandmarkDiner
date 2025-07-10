import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css"
import landmarkSign from '../assets/landmarkSign.jpg'
import dessertImage from '../assets/dessert-image.png'
import dessertImage2 from '../assets/dessert-image2.jpg'
import dessertImage3 from '../assets/dessert-image3.jpg'
import dessertImage4 from '../assets/dessert-image4.jpg'
import lunchImage from '../assets/lunch-image.jpg'
import lunchImage2 from '../assets/lunch-image2.jpg'
import lunchImage5 from '../assets/lunch-image5.jpg'
import breakfastImage2 from '../assets/breakfast-image2.jpg'
import breakfastImage3 from '../assets/breakfast-image3.jpg'
import breakfastImage4 from '../assets/breakfast-image4.jpg'

const menuSections = [
  {
    title: "Breakfast Classics",
    description: "Start your day with one of our famous breakfast platters",
    images: [breakfastImage2, breakfastImage3, breakfastImage4],
  },
  {
    title: "Lunch Favorites",
    description: "Sandwiches, salads, and daily lunch specials",
    images: [lunchImage, lunchImage2, lunchImage5],
  },
  {
    title: "Irresistible Desserts",
    description: "Make sure to save room for one of our famous desserts",
    images: [dessertImage, dessertImage2, dessertImage3, dessertImage4],
  },
];


export default function Home() {
  const [indexes, setIndexes] = useState(Array(menuSections.length).fill(0));

  const handlePrev = (i) => {
    setIndexes((prev) =>
      prev.map((val, idx) => (idx === i ? (val === 0 ? menuSections[i].images.length - 1 : val - 1) : val))
    );
  };

  const handleNext = (i) => {
    setIndexes((prev) =>
      prev.map((val, idx) => (idx === i ? (val === menuSections[i].images.length - 1 ? 0 : val + 1) : val))
    );
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        {/* <img src={landmarkSign || "/placeholder.svg"} alt="Landmark Diner Sign"/> */}
        <div className="hero-content">
          <div className="container text-center">
            <h1 className="hero-title">Landmark Restaurant</h1>
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
              <span>Open Today: 7:00 AM - 8:00 PM</span>
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
              <p className="about-text">
                Landmark Diner has been serving the Rome community with love and dedication. Our commitment to quality
                food and friendly service has made us a beloved destination for locals and visitors alike.
              </p>
              <Link to="/about" className="button button-primary">
                Read Our Story
              </Link>
            </div>
            <div className="about-image">
              <img src={landmarkSign} alt="Inside Landmark Diner"/>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="section section-gray">
        <div className="container text-center">
          <h2 className="section-title">Family Favorites</h2>
          <p className="section-text">
            From breakfast classics to dinner specialties, our menu has something for everyone.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {menuSections.map((item, i) => (
              <div key={i} className="menu-card relative round overflow-hidden">
                <div className="image-wrapper w-full h-[200px] relative">
                  <img
                    src={item.images[indexes[i]]}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover rounded"
                  />
                </div>

                <button
                  onClick={() => handlePrev(i)}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 px-2 py-1 rounded-full"
                >
                  ◀
                </button>
                <button
                  onClick={() => handleNext(i)}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 px-2 py-1 rounded-full"
                >
                  ▶
                </button>
                <div className="menu-card-content mt-4">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <br />
          <Link to="/menu" className="button button-primary">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container text-center">
          {/* <span className="badge">Customer Reviews</span> */}
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="grid grid-cols-3">
            {[
              {
                quote: "Food was excellent waitress was great atmosphere is a little dated. I’m surprised this place has only 4.2 stars.. Should be well above 4.2 stars In my opinion.. I travel for work over 200 days per year so I stop at a lot of different breakfast places. This this place was very good.",
                author: "Rohn Zimmerman",
              },
              {
                quote: "Great breakfast! Nice server and decent service. Not as fast as Waffle House but the food was hot and tasted good. Great breakfast special for 5 bucks. If you want it fast, go to Waffle House. If you want it relaxed and hot food, go to Landmark.",
                author: "Villa Marina",
              },
              {
                quote: "Food and service were great! Garlic grouper was excellent! Desserts are fabulous! Plenty of food! Like stepping back in time to the best diner!!",
                author: "Rachel D.",
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
          {/* <span className="badge badge-light">Visit Us Today</span> */}
          <h2 className="section-title-white">Join Us for a Meal</h2>
          <p className="section-text text-white">Whether it's breakfast, lunch, or dinner, we're here to serve you.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="button button-white">
              Contact Us
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

