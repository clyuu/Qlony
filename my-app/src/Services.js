import React, { useEffect, useRef } from "react";
import "./Services.css"; // Import the CSS file for styling
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const section = servicesRef.current;
    const serviceItems = section.querySelectorAll(".service-item");

    gsap.fromTo(
      serviceItems,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 75%", // Start animation when the section is in view
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={servicesRef} className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">
          We offer a wide range of digital marketing and software automation
          solutions tailored to meet your business needs.
        </p>
        <div className="services-list">
          <div className="service-item">
            <h3>SEO Optimization</h3>
            <p>Boost your website's search engine rankings and visibility.</p>
          </div>
          <div className="service-item">
            <h3>Software Automation</h3>
            <p>Automate repetitive tasks and improve operational efficiency.</p>
          </div>
          <div className="service-item">
            <h3>Social Media Marketing</h3>
            <p>Enhance your online presence with targeted social media campaigns.</p>
          </div>
          <div className="service-item">
            <h3>Email Marketing</h3>
            <p>Reach your audience with engaging and personalized email campaigns.</p>
          </div>
          <div className="service-item">
            <h3>Pay-Per-Click Advertising</h3>
            <p>Drive instant traffic to your website with PPC strategies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;