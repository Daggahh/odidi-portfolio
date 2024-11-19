import React, { useEffect, useState } from "react";
import useCoverAnimations from "./hooks/useCoverAnimations";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import About from "./components/About";
import Services from "./components/Services";
import SoftSkills from "./components/SoftSkills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; // Ensure you import the loader
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [showFirstLogo, setShowFirstLogo] = useState(true);

  // Wait for the loader to finish before enabling other animations
  const handleLoaderComplete = () => {
    setIsLoading(false);
    document.body.style.overflowY = "scroll"; // Reset the overflow for the body
  };

  useCoverAnimations(); // Apply the cover animations

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
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <MobileMenu />
      <Navbar showFirstLogo={showFirstLogo} />
      <Hero id="hero-section" />
      <Portfolio />
      <Skills />
      <About />
      <Services />
      <SoftSkills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
