import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useCoverAnimations() {
  useEffect(() => {
    const covers = document.querySelectorAll(".cover");

    // This Loop through each cover and apply the animation
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
            toggleActions: "play none none none",
          },
        }
      );
    });

    // this bit cleans up any ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array to run only once on mount
}

export default useCoverAnimations;
