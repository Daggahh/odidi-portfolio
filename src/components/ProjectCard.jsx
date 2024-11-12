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
      { x: "0%" },
      {
        x: "102%",
        duration: 1,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: coverRed,
          start: "top 80%",
          toggleActions: "play none none none",
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
