import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import About from "./components/About";
import Services from "./components/Services";
import SoftSkills from "./components/SoftSkills";
import "./index.css";

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [showFirstLogo, setShowFirstLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbar = document.querySelector(".navbar");
      const heroSection = document.getElementById("hero-section");

      const heroSectionHeight = heroSection ? heroSection.offsetHeight : 0;

      if (currentScrollPos < prevScrollPos) {
        navbar.classList.add("scrolled");
        setShowFirstLogo(false);
      } else {
        navbar.classList.remove("scrolled");
        setShowFirstLogo(true);
      }

      if (currentScrollPos <= heroSectionHeight) {
        navbar.classList.remove("scrolled");
        setShowFirstLogo(true);
      }

      if (Math.abs(currentScrollPos - prevScrollPos) > 5) {
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div>
      <MobileMenu />
      <Navbar showFirstLogo={showFirstLogo} />
      <Hero id="hero-section" />
      <Portfolio />
      <Skills />
      <About />
      <Services />
      <SoftSkills />
    </div>
  );
}

export default App;
