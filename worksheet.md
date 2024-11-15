import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { GoTriangleUp } from "react-icons/go";
import "../styles/Portfolio.css";

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
const [isOpen, setIsOpen] = useState(false);
const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

useEffect(() => {
const handleResize = () => setIsLargeScreen(window.innerWidth >= 992);
window.addEventListener("resize", handleResize);
return () => window.removeEventListener("resize", handleResize);
}, []);

const toggleDropdown = (e) => {
e.preventDefault();
setIsOpen((prev) => !prev);
};

const handleFilterClick = (event, filter) => {
event.preventDefault();
setActiveFilter(filter);
setIsOpen(false); // Close dropdown after selection
};

const filteredProjects = projects.filter(
(project) => activeFilter === "all" || project.category === activeFilter
);

return (
<section
      className="portfolio-section"
      id="portfolio-section"
      ref={sectionRef}
    >
<div className="portfolio-container">
<div className="portfolio-text">
<h2>Portfolio</h2>

          <div className="filter-container">
            {/* Show filter button only on small screens */}
            {!isLargeScreen && (
              <motion.a
                href="#"
                className="js-filter"
                onClick={toggleDropdown}
                initial={false}
                animate={isOpen ? "open" : "closed"}
              >
                Filter
                <motion.div
                  variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0.85, height: "16px" }}
                >
                  <GoTriangleUp style={{ margin: "8px 0 0 0px" }} />
                </motion.div>
              </motion.a>
            )}

            {/* Conditionally render filter options: always show on large screens or toggle on smaller */}
            <AnimatePresence>
              {(isOpen || isLargeScreen) && (
                <motion.div
                  className={`filter-wrap ${
                    isOpen || isLargeScreen ? "open" : ""
                  }`}
                  variants={{
                    open: {
                      clipPath: "inset(0% 0% 0% 0% round 10px)",
                      transition: { type: "spring", bounce: 0, duration: 0.7 },
                    },
                    closed: {
                      clipPath: "inset(10% 50% 90% 50% round 10px)",
                      transition: { type: "spring", bounce: 0, duration: 0.3 },
                    },
                  }}
                  style={{
                    pointerEvents: isOpen || isLargeScreen ? "auto" : "none",
                  }}
                >
                  <div className="filter">
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
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="portfolio-wrapper">
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

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { GoTriangleUp } from "react-icons/go";
import "../styles/Portfolio.css";

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
              onClick={toggleDropdown}
              style={{ display: window.innerWidth < 992 ? "block" : "none" }}
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
              {(isOpen || window.innerWidth >= 992) && (
                <motion.div
                  className={`filter-wrap ${isOpen ? "open" : ""}`}
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
