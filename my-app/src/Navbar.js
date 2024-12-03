import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true); // State to control navbar visibility
  let lastScrollY = 0; // Variable to store the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }

      lastScrollY = currentScrollY; // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={require('./Resources/Untitled design (26).png')}
            alt="Logo"
            className="logo-image"
          />
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;