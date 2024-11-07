import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ project, itemId }) {
  return (
    <div className="project-card" id={itemId}>
      <a href={project.link} className="portfolio-item">
        <div className="overlay">
          <span className="wrap-icon icon-photo2"></span>
          <div className="portfolio-item-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </a>
    </div>
  );
}

export default ProjectCard;
