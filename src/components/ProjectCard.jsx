import React, { useEffect } from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ project, itemId }) {
  useEffect(() => {
    const covers = document.querySelectorAll(".cover-red");
    covers.forEach((cover) => {
      setTimeout(() => {
        cover.style.transform = "translateX(200%)";
      }, 300);
    });
  }, []);

  return (
    <div className="project-card" id={itemId}>
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
