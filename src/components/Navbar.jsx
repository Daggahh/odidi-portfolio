import React from "react";
import { GiSharpSmile, GiEvilEyes } from "react-icons/gi";
import "../styles/Navbar.css";

function Navbar({ showFirstLogo }) {
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
              <a href="#skills-section" className="nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#services-section" className="nav-link">
                Services
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
