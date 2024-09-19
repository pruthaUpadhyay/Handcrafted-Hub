import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Aditi Sharma",
    profession: "Handcrafted Artist",
    feedback: "The products on Handcrafted Hub are of amazing quality. As a seller, I feel appreciated and supported.",
    rating: 5,
    image: "https://via.placeholder.com/100"
  },
  {
    id: 2,
    name: "Rohan Mehta",
    profession: "Customer",
    feedback: "The variety of handmade items here is unmatched! I love the unique, handcrafted goods available.",
    rating: 4,
    image: "https://via.placeholder.com/100"
  },
  {
    id: 3,
    name: "Meera Patel",
    profession: "Craft Enthusiast",
    feedback: "A wonderful platform to explore the beauty of Indian craftsmanship. Highly recommended!",
    rating: 5,
    image: "https://via.placeholder.com/100"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>What People Say About Us</h2>
        <p>Your satisfaction is our top priority!</p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <p className="profession">{testimonial.profession}</p>
              <p className="feedback">"{testimonial.feedback}"</p>
              <div className="stars">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <i key={i} className="fas fa-star star"></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
