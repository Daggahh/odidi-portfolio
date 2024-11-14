import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { GiSharpSmile, GiEvilEyes } from "react-icons/gi";
import "../styles/Navbar.css";

function Navbar({ showFirstLogo }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleMenuToggle = (e) => {
    // setIsVisible(!isVisible);
    setIsVisible((prev) => !prev);
    e.preventDefault();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isVisible]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, //  60% of the section being visible it triggers
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <ul className="navbar-links">
            <li>
              <a
                href="#home-section"
                className={`nav-link ${
                  activeSection === "home-section" ? "active" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#portfolio-section"
                className={`nav-link ${
                  activeSection === "portfolio-section" ? "active" : ""
                }`}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#about-section"
                className={`nav-link ${
                  activeSection === "about-section" ? "active" : ""
                }`}
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <a className="logo-link" href="/">
          <div className="logo">
            {showFirstLogo ? <GiSharpSmile /> : <GiEvilEyes />}
            Odidi
            <span className="red-dot">.</span>
          </div>
        </a>

        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <a
                href="#soft-skills-section"
                className={`nav-link ${
                  activeSection === "soft-skills-section" ? "active" : ""
                }`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience-section"
                className={`nav-link ${
                  activeSection === "experience-section" ? "active" : ""
                }`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#services-section"
                className={`nav-link ${
                  activeSection === "services-section" ? "active" : ""
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact-section"
                className={`nav-link ${
                  activeSection === "contact-section" ? "active" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="menu-toggle" onClick={handleMenuToggle}>
            <a href="#" className="js-menu-toggle">
              Menu
            </a>
          </div>

          {isVisible && (
            <MobileMenu onClose={handleClose} isMenuVisible={isVisible} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
