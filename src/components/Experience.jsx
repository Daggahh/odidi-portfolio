import React, { useRef } from "react";
import dividerImage from "../assets/divider.png";
import "../styles/Experience.css";
import sailLogo from "../assets/sail logo.jpeg";

function Experience() {
  const sectionRef = useRef(null);

  const experiences = [
    {
      company: "Sails Innovation Lab",
      role: "FullStack Developer (Frontend Development Intern)",
      duration: "Ongoing Internship",
      description: `
        At Sails Innovation Lab, I am gaining hands-on experience in frontend development through a range of exciting projects that focus on building responsive, interactive, and user-centric web applications.

        A significant part of my work has been developing dynamic, responsive landing pages that deliver seamless user experiences across devices. Working closely with my team and colleagues, I help turn visual concepts into live websites, with an emphasis on performance and user interaction. Using advanced CSS techniques and JavaScript, I enhance site interactivity to create smooth navigation and engaging animations.

        Currently, I am also contributing to a capstone project where my role involves optimizing frontend architecture to boost user experience and improve load times. I am currently learning how to actively create interactive UI components that integrate effectively with backend systems, ensuring that our applications are both functional and visually appealing.

        This ongoing experience is allowing me to refine my skills in frontend technologies like React, HTML5, CSS3, and JavaScript. I am also gaining familiarity with version control using Git. Collaborating on these projects is providing valuable lessons in teamwork, problem-solving, and agile development practices, all of which are crucial to my growth as a frontend developer.
      `,
      image: sailLogo,
    },
  ];

  return (
    <section
      className="experience-section"
      id="experience-section"
      ref={sectionRef}
    >
      <div className="experience-container">
        <div className="section-heading-wrap text-center mb-5">
          <h2 className="heading-h2 text-center divider">
            <span className="gsap-reveal">
              My Experience
              <span className="cover"></span>
            </span>
          </h2>
          <span className="gsap-reveal">
            <img src={dividerImage} alt="divider" width="76" />
            <span className="cover"></span>
          </span>
        </div>
      </div>
      <div className="experience-slider">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-inner-bg">
              <blockquote>{exp.description}</blockquote>
            </div>
            <div className="experience-author-info">
              <img src={exp.image} alt={`${exp.company} Logo`} />
              <h3>{exp.company}</h3>
              <span className="position">{exp.role}</span>
              <span className="duration">{exp.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
