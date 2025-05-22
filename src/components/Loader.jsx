import React, { useEffect } from "react";
import gsap from "gsap";
import berserk from "/Berserk brand of sacrifice wallpaper.jpg";
import "../styles/Loader.css";

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        // After animation completes, hide loader and allow scroll
        document.body.style.overflowY = "scroll"; // Allow scrolling
        const loader = document.querySelector(".loader");
        if (loader) {
          loader.style.display = "none"; // Hide loader only if it exists
        }
        onComplete(); // Trigger onComplete callback
      },
    });

    // Loader animation: Fade in logo, fade in text, then fade them out
    timeline
      .to(".loader-logo", {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(".texts-container", {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(".loader-logo, .texts-container", {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        delay: 1.5, // Ensure it stays visible for 2 seconds before fading out
      });
  }, [onComplete]);

  return (
    <div className="loader">
      <img src={berserk} alt="Logo" className="loader-logo" />
      <div className="texts-container">
        <span>Odidi.</span>
      </div>
    </div>
  );
};

export default Loader;
