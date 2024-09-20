import React from 'react';
import './Testimonials.css';
import { FaUserCircle } from 'react-icons/fa'; // Importing the avatar icon
import Footer from '../../components/Footer/Footer';

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
  },
  {
    id: 4,
    name: "Vikram Verma",
    profession: "Boutique Owner",
    feedback: "Handcrafted Hub has helped me find rare and beautiful pieces for my boutique. It’s a platform that truly supports artisans.",
    rating: 5,
    image: "https://via.placeholder.com/100"
  },
  {
    id: 5,
    name: "Pooja Desai",
    profession: "Interior Designer",
    feedback: "The collection of home décor items is fantastic. The handcrafted pieces bring authenticity and warmth to my design projects.",
    rating: 4,
    image: "https://via.placeholder.com/100"
  },
  {
    id: 6,
    name: "Suresh Nair",
    profession: "Artisan",
    feedback: "Selling my handmade products through this platform has been a rewarding experience. It’s easy to use, and I feel part of a larger community.",
    rating: 5,
    image: "https://via.placeholder.com/100"
  }

];

const Testimonials = () => {
  return (
    <>
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>What People Say About Us</h2>
        <p>Your satisfaction is our top priority!</p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-image">
            <FaUserCircle size={50} />
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
    <Footer/>
    </>
  );
};

export default Testimonials;
