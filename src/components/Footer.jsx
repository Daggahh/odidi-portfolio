import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="fa-icon">
          <a
            href="https://www.linkedin.com/in/odidihope/"
            className="icon-linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin style={{ color: "#d63447", fill: "#d63447" }} />
          </a>
        </li>
        <li className="fa-icon">
          <a
            href="https://github.com/Daggahh"
            className="icon-github"
            aria-label="GitHub"
          >
            <FaGithub style={{ color: "#d63447", fill: "#d63447" }} />
          </a>
        </li>
        <li className="fa-icon">
          <a
            href="https://x.com/bouffdaddy_"
            className="icon-twitter"
            aria-label="Twitter"
          >
            <FaTwitter style={{ color: "#d63447", fill: "#d63447" }} />
          </a>
        </li>
        <li className="fa-icon">
          <a
            href="https://www.instagram.com/daggahhh/"
            className="icon-instagram"
            aria-label="Instagram"
          >
            <FaInstagram style={{ color: "#d63447", fill: "#d63447" }} />
          </a>
        </li>
      </ul>
      <p>Shootout to Okeh Anthony</p>
    </footer>
  );
};

export default Footer;
