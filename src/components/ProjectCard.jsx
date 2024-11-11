import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ project, itemId }) {
  return (
    <div className="project-card" id={itemId}>
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
