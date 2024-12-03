import React, { useEffect, useRef } from "react";
import "./Contacts.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
  const contactsRef = useRef(null);

  useEffect(() => {
    const section = contactsRef.current;
    const heading = section.querySelector(".contacts-title");
    const description = section.querySelector(".contacts-description");
    const svg = section.querySelector(".contacts-svg");
    const form = section.querySelector(".contacts-form");

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

    // Animate form
    gsap.fromTo(
      form,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: form,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={contactsRef} className="contacts">
      <div className="contacts-container">
        <h2 className="contacts-title">Contact Us</h2>
        <p className="contacts-description">
          We'd love to hear from you. Get in touch with us for any queries,
          feedback, or project discussions.
        </p>
        <div className="contacts-content">
          <svg
            className="contacts-svg"
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
          <form className="contacts-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="contacts-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;