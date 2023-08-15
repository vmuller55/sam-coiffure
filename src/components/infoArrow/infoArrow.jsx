import React, { useEffect, useState } from 'react';
import './arrow.css'; // Import CSS for styling

const DescendingArrow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 30; // Set a suitable threshold
      const progress = Math.min(1, scrollPosition / threshold);

      setIsVisible(scrollPosition <= threshold);
      setScrollProgress(progress);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Call the handleScroll function once on component mount to set the initial visibility
    handleScroll();

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`arrow-container ${isVisible ? 'visible' : ''}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="40"
        height="60"
        className="arrow-svg"
      >
        <path
          fill="none"
          className="arrow-background"
          strokeWidth="3"
          stroke="var(--secondary)" // Background color
          d={`M50,10 L80,50 L65,50 L65,90 L35,90 L35,50 L20,50 L50,10 Z`}
        />
        <path
          className="arrow-path"
          fill="none"
          stroke="var(--main)"
          strokeWidth="3"
          d={`M50,10 L80,50 L65,50 L65,90 L35,90 L35,50 L20,50 L50,10`}
          style={{
            strokeDasharray: '100',
            strokeDashoffset: `${scrollProgress * 100}`,
            transition: 'stroke-dashoffset 0.5s ease, opacity 0.5s ease',
            animation: 'turnOn 3s ease-in-out infinite', // Adding the animation
          }}
        />
      </svg>
      <div className={`info-text ${isVisible ? 'visible' : ''}`}>Plus d'informations</div>
    </div>
  );
};

export default DescendingArrow;
