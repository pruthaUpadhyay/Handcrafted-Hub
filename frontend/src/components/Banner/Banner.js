import React from 'react';
import './Banner.css'; 
import landingPage from '../../assets/images/banner.jpg';

const Banner = () => {
  return (
    <div className="landing-container">
      <img src={landingPage} alt="Landing" className="landing-image" />
      <div className="landing-content">
        <h1>Welcome to Handcrafted Hub</h1>
        <p>Discover the exquisite beauty of handmade crafts from around India.</p>
        
      </div>

    </div>
    
  );
};

export default Banner;
