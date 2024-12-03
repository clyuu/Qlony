import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true); // State to control navbar visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility
  const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img
            src={require('./Resources/Untitled design (26).png')}
            alt="Qlony Logo"
            className="logo-image"
          />
        </div>

        {/* Menu Button */}
        <button className="menu-icon" onClick={toggleMenu}>
          <div className="menu-text">MENU</div>
          <div className="menu-dots">
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="menu-dropdown">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#studio">Studio</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;