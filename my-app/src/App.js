// App.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services'; // Import the Services component
import Portfolio from './Portfolio'; // Import the Portfolio component
import About from './About'; // Import the About component
import Contacts from './Contacts'; // Import the Contacts component
import './App.css'; // Ensure the CSS file is imported for styles

function App() {
  return (
    <div>
      <Navbar />
      {/* Main content area */}
      <main>
        {/* Hero section with SVG and GSAP animations */}
        <Hero />

        {/* Services section with GSAP animations */}
        <Services />

        {/* Portfolio section with GSAP animations */}
        <Portfolio />

        {/* About section with GSAP animations */}
        <About />

        {/* Contact Us section with GSAP animations */}
        <Contacts />
      </main>
    </div>
  );
}

export default App;