import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dividerImage from "../assets/divider.png";
import "../styles/Services.css";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef(null);
  const serviceRowRef = useRef(null);

  useEffect(() => {
    const serviceItems = gsap.utils.toArray(".service-item");

    // GSAP animation for each service item with fade-up effect and stagger
    gsap.fromTo(
      serviceItems,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2, // Delay between each item's animation
        scrollTrigger: {
          trigger: serviceRowRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      className="services-section"
      id="services-section"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="section-heading-wrap">
          <h2 className="heading-h2">
            <span className="gsap-reveal">
              My Services
              <span className="cover"></span>
            </span>
          </h2>
          <span className="gsap-reveal">
            <img src={dividerImage} alt="divider" width="76" />
            <span className="cover"></span>
          </span>
        </div>

        <div className="services-row" ref={serviceRowRef}>
          <div className="service-item item-0">
            <div className="wrap-icon">
              <img
                src="/icons8-developer-45.png"
                alt="Frontend Development"
                width="45"
              />
            </div>
            <h3>Frontend Development</h3>
            <p>
              As a frontend developer, I specialize in building visually
              appealing, user-friendly interfaces that elevate user experience.
              My expertise includes HTML, CSS, JavaScript, and React, allowing
              me to create interactive and responsive designs. I take pride in
              crafting intuitive layouts that engage users and bring concepts to
              life, focusing on seamless performance across all devices and
              platforms.
            </p>
          </div>

          <div className="service-item item-1">
            <div className="wrap-icon">
              <img
                src="/icons8-data-analyst-45 (1).png"
                alt="Data Analyst Enthusiast"
                width="45"
              />
            </div>
            <h3>Data Analyst Enthusiast</h3>
            <p>
              Data analytics drives my passion for uncovering insights that
              inform strategic decision-making. I excel at collecting, cleaning,
              and analyzing data to reveal trends and patterns. With a strong
              foundation in Excel, SQL, and spreadsheets, I can transform raw
              data into actionable intelligence, helping businesses make
              data-driven choices that optimize processes and outcomes.
            </p>
          </div>

          <div className="service-item item-2">
            <div className="wrap-icon">
              <img
                src="/icons8-typing-45.png"
                alt="Data Entry Specialist"
                width="45"
              />
            </div>
            <h3>Data Entry Specialist</h3>
            <p>
              Precision and efficiency define my approach to data entry. I am
              dedicated to ensuring accuracy in every task, whether it’s
              managing large datasets, updating records, or verifying details.
              My organizational skills and attention to detail ensure data is
              reliably entered, maintained, and readily available, supporting
              operational needs and decision-making processes.
            </p>
          </div>

          <div className="service-item item-3">
            <div className="wrap-icon">
              <img src="/icons8-stargaze-45.png" alt="Astrophile" width="45" />
            </div>
            <h3>Astrophile</h3>
            <p>
              My fascination with the universe drives my love for astronomy. As
              an astrophile, I am captivated by the mysteries of the cosmos—from
              stargazing to studying celestial phenomena. This passion keeps me
              curious and motivated to learn more about our place in the
              universe, adding a sense of wonder to my everyday life.
            </p>
          </div>

          <div className="service-item item-4">
            <div className="wrap-icon">
              <img
                src="/icons8-music-listening-45 (1).png"
                alt="Music Lover"
                width="45"
              />
            </div>
            <h3>Music Lover</h3>
            <p>
              Music has always been a source of inspiration and creativity for
              me. I enjoy exploring various genres, diving into the artistry
              behind each melody, and staying current with the latest in the
              music world. Whether it's discovering new artists or appreciating
              timeless classics, music adds a dynamic dimension to my life that
              fuels my creativity and motivation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
