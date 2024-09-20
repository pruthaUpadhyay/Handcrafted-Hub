import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ScrollEffect.css'; // Create a CSS file for animations

const ScrollEffect = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 10% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  return (
    <div ref={ref} className={`scroll-effect ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollEffect;
