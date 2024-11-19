import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useCoverAnimations() {
  useEffect(() => {
    // Wait for the loader to finish before starting cover animations
    setTimeout(() => {
      const covers = document.querySelectorAll(".cover");

      // This loop applies animation to each cover
      covers.forEach((cover) => {
        gsap.fromTo(
          cover,
          { x: "0%" }, // Start position
          {
            x: "101%", // End position
            duration: 1,
            ease: "power4.in",
            scrollTrigger: {
              trigger: cover,
              start: "top 80%",
              end: "top 60%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, 2000); // Delay animations by 2 seconds to ensure loader finishes

    // Cleanup ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array to run only once on mount
}

export default useCoverAnimations;
