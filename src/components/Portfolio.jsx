import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import "../styles/Portfolio.css";

function Portfolio() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer to trigger animations when the section enters view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible state to true when in view
          observer.disconnect(); // Stop observing after triggering once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Trigger the cover effect when the section is visible
    if (isVisible) {
      const covers = document.querySelectorAll(".cover");
      covers.forEach((cover, index) => {
        setTimeout(() => {
          cover.style.transform = "translateX(101%)"; // Run the cover effect
        }, index * 300);
      });
    }
  }, [isVisible]); // Only runs when `isVisible` changes

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
      <div className="portfolio-container">
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
