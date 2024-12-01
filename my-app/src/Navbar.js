import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
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