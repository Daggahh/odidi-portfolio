import React, { useEffect } from "react";
import "../styles/Skills.css";
import dividerImage from "../assets/divider.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faGithub,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { BiLogoTypescript } from "react-icons/bi";

function Skills() {
  useEffect(() => {
    const covers = document.querySelectorAll(".cover");
    covers.forEach((cover) => {
      setTimeout(() => {
        cover.style.transform = "translateX(101%)";
      }, 300);
    });
  }, []);

  return (
    <div className="skills-section">
    <div className="skills-container">
      <div className="section-heading-wrap">
        <h2 className="heading-h2">
          <span className="gsap-reveal">
            My Skills
            <span className="cover"></span>
          </span>
        </h2>
        <span className="gsap-reveal">
          <img src={dividerImage} alt="divider" width="76" />
          <span className="cover"></span>
        </span>
        <div className="skills-row">
          <FontAwesomeIcon
            className="skill-icon"
            icon={faHtml5}
            style={{ color: "#E34F26" }}
          />
          <FontAwesomeIcon
            className="skill-icon"
            icon={faCss3Alt}
            style={{ color: "#1572B6" }}
          />
          <FontAwesomeIcon
            className="skill-icon"
            icon={faSquareJs}
            style={{ color: "#F7DF1E" }}
          />
          <BiLogoTypescript
            className="skill-icon"
            style={{ color: "#3178C6", fill: "#3178C6" }}
          />
          <FontAwesomeIcon
            className="skill-icon"
            icon={faGitAlt}
            style={{ color: "#F05032" }}
          />
          <FontAwesomeIcon
            className="skill-icon"
            icon={faGithub}
            style={{ color: "#ddd" }}
          />
          <FontAwesomeIcon
            className="skill-icon"
            icon={faReact}
            style={{ color: "#61DAFB" }}
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Skills;
