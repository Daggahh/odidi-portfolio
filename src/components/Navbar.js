import React from "react";
import Logo from "./TempLogo";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <ul className="navbar-links">
            <li>
              <a href="#home-section" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#portfolio-section" className="nav-link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about-section" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#services-section" className="nav-link">
                Services
              </a>
            </li>
          </ul>
        </div>

        <Logo />

        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <a href="#skills-section" className="nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#testimonial-section" className="nav-link">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact-section" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="menu-toggle">
            <a href="#" className="js-menu-toggle">
              Menu
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
