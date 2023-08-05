import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchThreshold = 50; // Adjust this value to control the sensitivity of swipe

    if (touchEndX - touchStartX > touchThreshold) {
      handlePrev();
    } else if (touchStartX - touchEndX > touchThreshold) {
      handleNext();
    }
  };

  return (
    <div
      className="image-slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider-container">
        <img src={process.env.PUBLIC_URL + images[currentImage]} alt="Gallery Item" />
        <button className="slider-btn prev-btn" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="slider-btn next-btn" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
