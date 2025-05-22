import React, { useRef } from "react";
import dividerImage from "../assets/divider.png";
import "../styles/Experience.css";
import sailLogo from "../assets/sail logo.jpeg";
import fitscheck from "../assets/icon.png";
import reconxi from "../assets/reconxilogo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Experience() {
  const sectionRef = useRef(null);

  const experiences = [
    {
      company: "Sails Innovation Lab",
      role: "FullStack Developer (Frontend Development Intern)",
      duration: "Aug 2023 - Jan 2024",
      description: `
        At Sails Innovation Lab, I gained hands-on experience in frontend development through a range of exciting projects that focused on building responsive, interactive, and user-centric web applications.

        A significant part of my work involved developing dynamic, responsive landing pages that delivered seamless user experiences across devices. Working closely with my team and colleagues, I helped turn visual concepts into live websites, with an emphasis on performance and user interaction.

        During my six-month internship, I contributed to a capstone project where my role involved optimizing frontend architecture to boost user experience and improve load times. This experience allowed me to refine my skills in frontend technologies like React, HTML5, CSS3, and JavaScript.
      `,
      image: sailLogo,
    },
    {
      company: "HNG Tech - ReconXi",
      role: "Frontend Team Lead",
      duration: "2025-Current",
      description: `
        At HNG Tech, I led the frontend development team for Reconxi, a sophisticated financial reconciliation tool that revolutionized how businesses handle their financial data. As the Frontend Team Lead, I orchestrated the development process, ensuring high-quality code delivery and optimal user experience.

        My role involved spearheading the implementation of complex financial data visualization features that made intricate financial data easily digestible for users. I worked closely with the backend team to ensure seamless integration of APIs and data flow, while maintaining a focus on performance optimization and responsive design principles.

        This experience at HNG Tech significantly enhanced my leadership skills while deepening my expertise in modern frontend technologies and financial application development. The project's success in improving financial reconciliation processes for businesses stands as a testament to the team's dedication and technical excellence.
      `,
      image: reconxi,
    },
    {
      company: "FitsCheck",
      role: "Full Stack Developer",
      duration: "2025-Current",
      description: `
        At FitsCheck, I developed a comprehensive social fashion platform that transformed how users share and discover fashion inspiration. The application spans multiple platforms, including web and mobile interfaces, creating a seamless experience for fashion enthusiasts worldwide.

        I built the responsive web interface using React and Next.js, while simultaneously developing the mobile application with React Native. The platform's success hinged on its real-time features, which I implemented to enable instant user interactions, likes, comments, and voting systems.

        On the backend, I designed and developed RESTful APIs using Node.js and Express, with MongoDB providing efficient data management. This project enhanced my full-stack development skills while providing valuable experience in building social media features and cross-platform applications.
      `,
      image: fitscheck,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0",
    className: "experience-slider",
  };

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
      <div className="experience-slider-container">
        <Slider {...settings}>
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-inner-bg">
                <span className="quote">"</span>
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
        </Slider>
      </div>
    </section>
  );
}

export default Experience;
