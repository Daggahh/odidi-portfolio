import React, { useEffect, useRef } from "react";
import "../styles/ProjectCard.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project, itemId }) {
  const cardRef = useRef(null);
  useEffect(() => {
    const coverRed = cardRef.current.querySelector(".cover-red");

    gsap.fromTo(
      coverRed,
      {
        x: "-100%",
        opacity: 1,
      },
      {
        x: "100%",
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div className="project-card" id={itemId} ref={cardRef}>
      <span className="cover-red"></span>
      <a href={project.link} className="portfolio-item">
        <div className="overlay">
          <div className="portfolio-item-content">
            <h3>{project.title}</h3>
            <p>{project.tools}</p>
          </div>
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
      </a>
    </div>
  );
}

export default ProjectCard;
