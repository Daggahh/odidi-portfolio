import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio-section">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="portfolio-wrapper">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              itemId={`item-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
