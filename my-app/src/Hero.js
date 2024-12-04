import React, { useRef, useEffect } from "react";
import "./App.css"; // Ensure CSS is imported
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backgroundImage from "./Resources/22.jpg"; // Import image

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Fade-in animation for the hero section
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      className="hero"
      ref={heroRef}
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Full viewport height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white", // Adjust text color if needed
        textAlign: "center",
      }}
    >
      
    </section>
  );
};

export default Hero;