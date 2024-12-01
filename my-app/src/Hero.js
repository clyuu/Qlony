// Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
      <img src={require('./Resources/1.jpg')} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Qlony</h1>
          <p>Discover the best solutions tailored for your needs.</p>
          <a href="#services" className="hero-button">Explore Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;