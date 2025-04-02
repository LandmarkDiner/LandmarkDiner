import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const reviews = [
  { id: 1, text: "Best diner in Rome! The breakfast is amazing and the staff treats you like family.", author: "John D." },
  { id: 2, text: "Love their home-style cooking. It's our family's favorite spot for Sunday lunch.", author: "Patricia M." },
  { id: 3, text: "Great food, friendly service, and cozy atmosphere. A true Rome gem!", author: "Robert W." },
  { id: 4, text: "The portions are generous, and the flavors are just like home!", author: "Emily T." },
  { id: 5, text: "Fantastic coffee and desserts. Will definitely be back!", author: "James L." },
  { id: 6, text: "Perfect spot for a weekend brunch. Highly recommend!", author: "Sarah K." },
];

const RollingGallery = () => {
  const [offset, setOffset] = useState(0);
  const cardsPerView = 3; // Number of visible cards

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % reviews.length);
    }, 4000); // Moves every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review-carousel">
      <motion.div
        className="carousel-track"
        animate={{ x: `-${(offset * 100) / cardsPerView}%` }}
        transition={{ ease: "linear", duration: 1 }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <div key={index} className="review-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">"{review.text}"</p>
            <h4 className="review-author">— <strong>{review.author}</strong></h4>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RollingGallery;
