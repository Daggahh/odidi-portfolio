import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { GoTriangleUp } from "react-icons/go";
// import gsap from "gsap";
import "../styles/Portfolio.css";

// Define the dropdown item animation
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

function Portfolio() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hiddenObj, setHiddenObj] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const handleHover = () => {
  //   gsap.to(".filter-wrap", { opacity: 1, height: "auto", duration: 0.3 });
  // };

  // const handleHoverOut = () => {
  //   gsap.to(".filter-wrap", { opacity: 0, height: 0, duration: 0.3 });
  // };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleFilterClick = (event, filter) => {
    event.preventDefault();
    setActiveFilter(filter);
    setHiddenObj(filter !== "all");
    setIsOpen(false); // Close the dropdown after selecting a filter
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

          <div className="filter-container">
            <span className="cover"></span>

            <motion.a
              href="#"
              className="js-filter"
              whileTap={{ scale: 0.97 }}
              initial={false}
              animate={isOpen ? "open" : "closed"}
              // onMouseEnter={handleHover}
              // onMouseLeave={handleHoverOut}
              onClick={toggleDropdown}
            >
              Filter
              {/* Rotation of arrow icon */}
              <motion.div
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.85, height: "16px" }}
              >
                <GoTriangleUp style={{ margin: "8px 0 0 0px" }} />
              </motion.div>
            </motion.a>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className={`filter-wrap ${isOpen ? "open" : ""}`}
                  // initial={{ opacity: 0, y: -10 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: -10 }}
                  // transition={{ duration: 0.3 }}
                  variants={{
                    open: {
                      clipPath: "inset(0% 0% 0% 0% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05,
                      },
                    },
                    closed: {
                      clipPath: "inset(10% 50% 90% 50% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3,
                      },
                    },
                  }}
                  style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >
                  <motion.div className="filter ml-auto" id="filters">
                    <motion.a
                      href="#"
                      onClick={(e) => handleFilterClick(e, "all")}
                      className={`filter-link ${
                        activeFilter === "all" ? "active" : ""
                      }`}
                      variants={itemVariants}
                    >
                      All
                    </motion.a>
                    <motion.a
                      href="#"
                      onClick={(e) => handleFilterClick(e, "landing-page")}
                      className={`filter-link ${
                        activeFilter === "landing-page" ? "active" : ""
                      }`}
                      variants={itemVariants}
                    >
                      Landing Page
                    </motion.a>
                    <motion.a
                      href="#"
                      onClick={(e) => handleFilterClick(e, "exp-projects")}
                      className={`filter-link ${
                        activeFilter === "exp-projects" ? "active" : ""
                      }`}
                      variants={itemVariants}
                    >
                      Exp-Projects
                    </motion.a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
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
