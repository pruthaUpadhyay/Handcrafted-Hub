import React from 'react';
import './Banner.css'; 
import landingPage from '../../assets/images/liz-pullan-pattathy-rPtPNAltxYw-unsplash.jpg';

const Banner = () => {
  return (
    <div className="landing-container">
      <img src={landingPage} alt="Landing" className="landing-image" />
      <div className="landing-overlay"></div> {/* Adding an overlay for better text visibility */}
      <div className="landing-content">
        <h1>Welcome to Handcrafted Hub</h1>
        <p>Discover the exquisite beauty of handmade crafts from around India.</p>
        <button className="cta-button">Shop Now</button>
      </div>
    </div>
    
  );
};

export default Banner;
