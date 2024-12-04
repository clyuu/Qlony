// Footer.js
import React from 'react';
import './Footer.css'; // Import Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Qlony. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#services" className="footer-link">Services</a>
          <a href="#portfolio" className="footer-link">Portfolio</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#contacts" className="footer-link">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;