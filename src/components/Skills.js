import React, { useEffect } from "react";
import "../styles/Skills.css";
import dividerImage from "../assets/divider.png";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoGithub,
  IoLogoReact,
} from "react-icons/io5";
import { FaSquareJs } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";

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
          <IoLogoHtml5
            className="skill-icon-1"
            style={{ color: "orange", fill: "orange" }}
          />
          <IoLogoCss3
            className="skill-icon-2"
            style={{ color: "blue", fill: "blue" }}
          />
          <FaSquareJs
            className="skill-icon-3"
            style={{ color: "yellow", fill: "yellow" }}
          />
          <BiLogoTypescript
            className="skill-icon-2"
            style={{ color: "blue", fill: "blue" }}
          />
          <FaGitAlt className="skill-icon" />
          <IoLogoGithub className="skill-icon" />
          <IoLogoReact
            className="skill-icon-2"
            style={{ color: "blue", fill: "blue" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
