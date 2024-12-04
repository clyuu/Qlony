// App.js
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import Contacts from './Contacts';
import Footer from './Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for the Navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > window.innerHeight - 50); // Trigger after scrolling past the hero section
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar and Hero Section */}
      <header className="hero-container">
        {/* Pass the `scrolled` state as a prop to Navbar */}
        <Navbar scrolled={scrolled} />
        <Hero />
      </header>

      {/* Main content area */}
      <main>
        {/* Services Section */}
        <section id="services" className="section services-section">
          <Services />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section portfolio-section">
          <Portfolio />
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <About />
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="section contact-section">
          <Contacts />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;