import React, { useRef } from "react";
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
import { TbBrandNodejs } from "react-icons/tb";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";

function Skills() {
  const sectionRef = useRef(null);

  return (
    <section className="skills-section" ref={sectionRef}>
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
            <BiLogoMongodb
              style={{ color: "#006648", width: "33px", height: "33px" }}
            />
            <TbBrandNodejs
              style={{ color: "#509941", width: "33px", height: "33px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
