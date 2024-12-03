import React, { useEffect, useRef } from "react";
import "./About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const section = aboutRef.current;
    const heading = section.querySelector(".about-title");
    const description = section.querySelector(".about-description");
    const svg = section.querySelector(".about-svg");
    const textBlocks = section.querySelectorAll(".about-text-block");

    // Animate heading
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
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate description
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
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate SVG
    gsap.fromTo(
      svg,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: svg,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate text blocks
    gsap.fromTo(
      textBlocks,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={aboutRef} className="about">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          We are a leading digital marketing and software automation company
          dedicated to delivering exceptional results and innovative solutions.
        </p>
        <div className="about-content">
          <svg
            className="about-svg"
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
          <div className="about-text">
            <div className="about-text-block">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with cutting-edge digital solutions that
                drive growth and efficiency.
              </p>
            </div>
            <div className="about-text-block">
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and innovative provider in the digital
                marketing and automation industry.
              </p>
            </div>
            <div className="about-text-block">
              <h3>Our Values</h3>
              <p>
                Integrity, innovation, and a commitment to delivering the best
                for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;