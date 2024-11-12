import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dividerImage from "../assets/divider.png";
import freshboy from "../assets/IMG_3904-removebg-preview.png";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const coverRed = document.querySelector(".cover-red-img");

    // ScrollTrigger for the coverRed element (X position animation)
    gsap.fromTo(
      coverRed,
      { x: "0%" },
      {
        x: "102%",
        duration: 1,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: coverRed,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // GSAP animation template for the image scaling effect with 'beat' animation
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1 },
      {
        opacity: 1,
        scale: 1.05,
        duration: 0.6,
        ease: "ease-in-out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          // After the animation, scale back to 1 for the "beat" effect
          gsap.to(imgRef.current, {
            scale: 1,
            duration: 0.6,
            ease: "ease-out",
          });
        },
      }
    );
  }, []);

  return (
    <section className="about-section" id="about-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-heading-wrap">
          <h2 className="heading-about">
            <span className="gsap-reveal">
              About Me
              <span className="cover"></span>
            </span>
          </h2>
          <span className="gsap-reveal">
            <img src={dividerImage} alt="divider" width="76" />
            <span className="cover"></span>
          </span>
        </div>

        <div className="about-contents">
          <div className="col-lg-7 mb-5 mb-lg-0 about-img">
            <figure className="dotted-bg gsap-reveal-img">
              <div className="reveal-wrap">
                <span className="cover-red-img"></span>
                <div className="reveal-content">
                  <img
                    src={freshboy}
                    alt="About me"
                    className="img-fluid"
                    ref={imgRef} // Assigning the ref here for GSAP
                  />
                </div>
              </div>
            </figure>
          </div>
          <div className="col-lg-4 pr-lg-5 about-text">
            <h3 className="mb-4 heading-h3">
              <span className="gsap-reveal">
                Frontend Developer | Data Analyst Enthusiast | Music Lover
                <span className="cover"></span>
              </span>
            </h3>
            <p className="lead gsap-reveal">
              As a Frontend Developer, I’m passionate about crafting intuitive
              and visually engaging user experiences. I combine a strong
              foundation in web development with a deep interest in data
              analytics, exploring ways to enhance applications with data-driven
              insights. Beyond tech, I'm a dedicated music lover, constantly
              inspired by how creativity flows across both code and melody.
              <span className="cover"></span>
            </p>
            <p className="gsap-reveal">
              <a
                href="/ODIDI HOPE CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn btn-outline-pill btn-custom-light"
              >
                Download my CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
