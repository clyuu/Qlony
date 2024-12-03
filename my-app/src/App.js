// App.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services'; // Import the Services component
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
      </main>
    </div>
  );
}

export default App;