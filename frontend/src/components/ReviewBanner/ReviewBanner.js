import React from 'react';
import './ReviewBanner.css';
// import { useHistory } from 'react-router-dom'; // If using react-router for navigation

export default function ReviewBanner() {
  // const history = useHistory();

  // const handleBannerClick = () => {
  //   history.push('/testimonials'); // Navigates to the testimonials page
  // };

  return (
    <section id="banner" className="section-m1" /*onClick={handleBannerClick}*/>
      <div className="content">
        <h4>What Our Customers Say</h4>
        <h2>Real Reviews from Real Customers</h2>
        <p>Click here to read more testimonials and see why our customers love us!</p>
        <button className="btn">Explore Testimonials</button>
      </div>
    </section>
  );
}
