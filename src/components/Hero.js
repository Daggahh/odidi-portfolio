import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "../styles/Hero.css";

function Hero() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio-section");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="hero-section"
      id="home-section"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL +
          "/images/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall.jpg"
        })`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col text-center">
            <motion.h1
              className="heading"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, duration: 1 }}
            >
              Hi there!
            </motion.h1>
            <motion.h2
              className="subheading"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 50,
                duration: 1,
              }}
            >
              My name is Odidi Hope.
            </motion.h2>
            {/* Typing animation */}
            <h3>
              I'm a{" "}
              <span
                className="typewriter"
                style={{ color: "rgb(184, 68, 68)" }}
              >
                <ReactTyped
                  strings={[
                    "Software developer.",
                    "Logical thinker.",
                    "Data analyst enthusiast.",
                    "Music lover.",
                  ]}
                  typeSpeed={70}
                  backSpeed={50}
                  loop
                />
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div onClick={scrollToPortfolio} className="mouse-wrap">
        <span className="mouse">
          <span className="scroll"></span>
        </span>
        <span className="mouse-label">Scroll</span>
      </div>
    </div>
  );
}

export default Hero;
