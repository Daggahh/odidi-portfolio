import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import "../styles/Portfolio.css";

function Portfolio() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hiddenObj, setHiddenObj] = useState(false);

  const handleFilterClick = (event, filter) => {
    event.preventDefault();
    setActiveFilter(filter);
    setHiddenObj(filter !== "all");
  };

  const filteredProjects = projects.filter(
    (project) =>
      (activeFilter === "all" && !project.hidden) ||
      (project.category === activeFilter && (!project.hidden || hiddenObj))
  );

  return (
    <section
      className="portfolio-section"
      id="portfolio-section"
      ref={sectionRef}
    >
      <div className="portfolio-container" id="portfolio-container">
        <div className="portfolio-text">
          <h2 className="portfolio-text-h2">
            <span className="gsap-reveal">
              Portfolio
              <span className="cover"></span>
            </span>
          </h2>

          <div className="filter-wrap">
            <a
              href="#"
              onClick={(e) => handleFilterClick(e, "all")}
              className={`filter-link ${
                activeFilter === "all" ? "active" : ""
              }`}
            >
              All
            </a>
            <a
              href="#"
              onClick={(e) => handleFilterClick(e, "landing-page")}
              className={`filter-link ${
                activeFilter === "landing-page" ? "active" : ""
              }`}
            >
              Landing Page
            </a>
            <a
              href="#"
              onClick={(e) => handleFilterClick(e, "exp-projects")}
              className={`filter-link ${
                activeFilter === "exp-projects" ? "active" : ""
              }`}
            >
              Exp-Projects
            </a>
            <span className="cover"></span>
          </div>
        </div>

        <div
          className={`portfolio-wrapper ${
            activeFilter === "landing-page" ? "landing-grid" : ""
          } ${activeFilter === "exp-projects" ? "exp-grid" : ""}`}
        >
          {filteredProjects.map((project, index) => (
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
