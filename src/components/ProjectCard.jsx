import React, { useState, useRef, useEffect } from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ project, itemId }) {
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
      const covers = document.querySelectorAll(".cover-red");
      covers.forEach((cover, index) => {
        setTimeout(() => {
          cover.style.transform = "translateX(101%)"; // Run the cover effect
        }, index * 300);
      });
    }
  }, [isVisible]); // Only runs when `isVisible` changes

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

        <span className="cover-red"></span>
      </a>
    </div>
  );
}

export default ProjectCard;
