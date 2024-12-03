import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const section = portfolioRef.current;
    const heading = section.querySelector(".portfolio-title");
    const description = section.querySelector(".portfolio-description");
    const portfolioItems = section.querySelectorAll(".portfolio-item");
    const svg = section.querySelector(".portfolio-svg");

    // Heading and description animation
    gsap.fromTo(
      heading,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heading,
          start: "top 75%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      description,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: description,
          start: "top 75%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Portfolio items animation
    gsap.fromTo(
      portfolioItems,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // SVG animation
    gsap.fromTo(
      svg,
      { strokeDasharray: 300, strokeDashoffset: 300 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: svg,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={portfolioRef} className="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <p className="portfolio-description">
          Explore some of the amazing projects we've delivered to our clients.
        </p>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <svg
              className="portfolio-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="purple"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <h3>Project 1</h3>
            <p>Amazing design and development for an e-commerce platform.</p>
          </div>
          <div className="portfolio-item">
            <svg
              className="portfolio-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <rect
                x="10"
                y="10"
                width="80"
                height="80"
                stroke="purple"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <h3>Project 2</h3>
            <p>Automation solutions for a financial services company.</p>
          </div>
          <div className="portfolio-item">
            <svg
              className="portfolio-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path
                d="M10 90 L90 10"
                stroke="purple"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <h3>Project 3</h3>
            <p>Advanced analytics tools for a marketing agency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;