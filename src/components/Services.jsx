import React from "react";
import dividerImage from "../assets/divider.png";
import optionsIcon from "../assets/001-options.svg";
import chatIcon from "../assets/002-chat.svg";
import contactBookIcon from "../assets/003-contact-book.svg";
import lineChartIcon from "../assets/005-line-chart.svg";
import goalIcon from "../assets/006-goal.svg";
import "../styles/Services.css";

function Services() {
  return (
    <section className="services-section" id="services-section">
      <div className="section-container">

        <div className="section-heading-wrap">
          <h2 className="heading-h2">
            <span className="gsap-reveal">My Services</span>
            <span className="cover"></span>
          </h2>
          <span className="gsap-reveal">
            <img src={dividerImage} alt="divider" width="76" />
            <span className="cover"></span>
          </span>
        </div>

        <div className="services-row">
          <div className="service-item" data-aos="fade-up" data-aos-delay="0">
            <div className="wrap-icon">
              <img src={optionsIcon} alt="Backend Development" width="45" />
            </div>
            <h3>Frontend Development</h3>
            <p>As a frontend developer, I specialize in building visually appealing, user-friendly interfaces that elevate user experience. My expertise includes HTML, CSS, JavaScript, and React, allowing me to create interactive and responsive designs. I take pride in crafting intuitive layouts that engage users and bring concepts to life, focusing on seamless performance across all devices and platforms.</p>
          </div>

          <div className="service-item" data-aos="fade-up" data-aos-delay="100">
            <div className="wrap-icon">
              <img src={chatIcon} alt="Database Design and Management" width="45" />
            </div>
            <h3>Database Design and <br /> Management</h3>
            <p>Design, development, and management of databases using SQL and NoSQL, with experience in MySQL, PostgreSQL, SQLite, and MongoDB.</p>
          </div>

          <div className="service-item" data-aos="fade-up" data-aos-delay="200">
            <div className="wrap-icon">
              <img src={contactBookIcon} alt="Frontend Development" width="45" />
            </div>
            <h3>Frontend <br /> Development</h3>
            <p>Frontend development focusing on creating dynamic, responsive web pages that provide a smooth user experience.</p>
          </div>

          <div className="service-item" data-aos="fade-up" data-aos-delay="300">
            <div className="wrap-icon">
              <img src={lineChartIcon} alt="Data Scientist" width="45" />
            </div>
            <h3>Data Scientist and <br /> Machine Learning Noob</h3>
            <p>Aspiring data scientist working with predictive models and AI concepts like supervised and unsupervised learning, with a growing knowledge of statistics and data analysis.</p>
          </div>

          <div className="service-item" data-aos="fade-up" data-aos-delay="400">
            <div className="wrap-icon">
              <img src={goalIcon} alt="Music Lover" width="45" />
            </div>
            <h3>Music <br /> Lover</h3>
            <p>Passionate about music, with interests in various genres and experience playing instruments like the piano and saxophone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
