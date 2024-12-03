// Hero.js
import React, { useRef, useEffect } from "react";
import "./App.css"; // Ensure CSS is imported
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    // Animation for the hero section
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1, // Smooth animation
        },
      }
    );

    // Animation for SVG path
    gsap.fromTo(
      svgRef.current,
      { strokeDasharray: 1000, strokeDashoffset: 1000 }, // SVG starts un-drawn
      {
        strokeDashoffset: 0, // Fully drawn SVG
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: 1, // Smooth animation
        },
      }
    );
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-container">
        {/* Animated SVG */}
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 100"
          className="hero-svg"
        >
          <path
            d="M0,50 C150,100 350,0 500,50"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="hero-text">
          <h1>Welcome to Qlony</h1>
          <p>Discover the best solutions tailored for your needs.</p>
          <a href="#services" className="hero-button">
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;