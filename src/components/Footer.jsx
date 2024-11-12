import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <ul className="social-icon">
        <li>
          <a
            href="https://www.linkedin.com/in/odidihope/"
            className="icon-linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin style={{ color: "#d63447", fill: "#d63447" }} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Daggahh"
            className="icon-github"
            aria-label="GitHub"
          >
            <FaGithub style={{ color: "#d63447", fill: "#d63447" }} />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/bouffdaddy_"
            className="icon-twitter"
            aria-label="Twitter"
          >
            <FaTwitter style={{ color: "#d63447", fill: "#d63447" }} />
          </a>
        </li>
        <li>
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
