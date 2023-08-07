import React, { useState, useEffect } from 'react';
import "./header.css"

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header style={{ opacity: visible ? 1 : 0}}>
      <h1>COIFF SAM</h1>
    </header>
  );
};

export default Header