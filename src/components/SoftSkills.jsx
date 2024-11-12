import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dividerImage from "../assets/divider.png";
import "../styles/SoftSkills.css";
import SkillCard from "./SkillCard";

gsap.registerPlugin(ScrollTrigger);

function SoftSkills() {
  const sectionRef = useRef(null);
  const rowRef = useRef(null); // Add a ref for the row

  useEffect(() => {
    // GSAP animation for cover, row slide-up fade and skill increment
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        // Row slide-up fade animation
        gsap.fromTo(
          rowRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          }
        );

        // Skill increment animation for each card
        gsap.fromTo(
          ".number-counter",
          { textContent: 0 },
          {
            textContent: (index) => [99, 97, 99, 99][index],
            duration: 1.5, // All skill cards now have the same duration (1.5 seconds)
            snap: { textContent: 1 },
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      },
    });
  }, []);

  return (
    <section
      className="soft-skills-section"
      id="soft-skills-section"
      ref={sectionRef}
    >
      <div className="soft-skills-container">
        <div className="section-heading-wrap text-center mb-5">
          <h2 className="heading-h2 text-center divider">
            <span className="gsap-reveal">
              Soft Skills
              <span className="cover"></span>
            </span>
          </h2>
          <span className="gsap-reveal">
            <img src={dividerImage} alt="divider" width="76" />
            <span className="cover"></span>
          </span>
        </div>

        <div className="skill-row pt-5" ref={rowRef}>
          <SkillCard delay="0" percentage={99} skillName="Creative Thinking" />
          <SkillCard
            delay="100"
            percentage={97}
            skillName="Critical Thinking"
          />
          <SkillCard delay="200" percentage={99} skillName="Team Work" />
          <SkillCard delay="300" percentage={99} skillName="Communication" />
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
