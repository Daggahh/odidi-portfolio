import React, { useEffect } from "react";
import { GiEvilEyes } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { gsap } from "gsap/gsap-core";
import { useAnimate, stagger, easeOut } from "framer-motion";
import "../styles/MobileMenu.css";

function MobileMenu({ onClose, isMenuVisible }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isMenuVisible
      ? [
          [
            ".mobile-menu",
            { x: "0%" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            ".mobile-link",
            { opacity: 1, transform: "scale(1)", filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            ".mobile-link",
            { opacity: 0, transform: "scale(0.5)", filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          [".mobile-menu", { x: "-100%" }, { at: "-0.1" }],
        ];

    animate(menuAnimations);
  }, [isMenuVisible, animate]);

  // useEffect(() => {
  //   const menuAnimations = () => {
  //     if (isMenuVisible === true) {
  //       gsap.to(".mobile-menu", {
  //         x: "0%",
  //         ease: "power3.in",
  //         duration: 0.6,
  //       });

  //       gsap.to(".mobile-link", {
  //         opacity: 1,
  //         scale: 0.5,
  //         filter: "blur(0px)",
  //         stagger: {
  //           axis: "x",
  //           amount: 0.05,
  //           ease: "sine.out",
  //         },
  //         delay: 0.1,
  //       });
  //     } else if (onClose === false) {
  //       gsap.to(".mobile-menu", {
  //         x: "-100%",
  //         ease: "power3.out",
  //         duration: 0.6,
  //       });

  //       gsap.to(".mobile-link", {
  //         opacity: 0,
  //         scale: 0.5,
  //         filter: "blur(10px)",
  //         stagger: {
  //           axis: "x",
  //           amount: 0.05,
  //           ease: "sine.out",
  //         },
  //         delay: 0.1,
  //       });
  //     }
  //   };

  //   animate(menuAnimations);
  // }, [animate]);

  const close = () => {
    gsap.to(".mobile-menu", {
      x: "-100%",
      ease: "power3.out",
      duration: 0.6,
    });

    gsap.to(".mobile-link", {
      opacity: 0,
      scale: 0.5,
      filter: "blur(10px)",
      stagger: {
        axis: "x",
        amount: 0.05,
        ease: "sine.out",
      },
      delay: 0.1,
    });

    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`mobile-menu-overlay ${isMenuVisible ? "active" : ""}`}
      onClick={close}
    >
      <nav
        ref={scope}
        className="mobile-menu"
        // initial={{ x: "0%" }} // Starting state (off-screen)
        // animate={{ x: isMenuVisible ? "-100%" : "0%" }} // Animate to visible or off-screen
        // transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }}
        onClick={(e) => e.stopPropagation()} // to prevent closing from inside the menu
      >
        <div className="close-wrap">
          <a href="#" className="menu-close" onClick={close}>
            <span className="close-label">Close</span>
            <div className="close-icon">
              <IoMdClose />
            </div>
          </a>
        </div>
        <div className="mobile-menu-inner">
          <ul className="mobile-links">
            <a className="mobile-logo-link" href="/" onClick={close}>
              <div className="mobile-logo">
                <GiEvilEyes />
                Odidi
                <span className="red-dot">.</span>
              </div>
            </a>

            <li>
              <a href="#home-section" className="mobile-link" onClick={close}>
                Home
              </a>
            </li>

            <li>
              <a
                href="#portfolio-section"
                className="mobile-link"
                onClick={onClose}
              >
                Portfolio
              </a>
            </li>

            <li>
              <a href="#about-section" className="mobile-link" onClick={close}>
                About
              </a>
            </li>

            <li>
              <a
                href="#soft-skills-section"
                className="mobile-link"
                onClick={close}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#experience-section"
                className="mobile-link"
                onClick={close}
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#services-section"
                className="mobile-link"
                onClick={close}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact-section"
                className="mobile-link"
                onClick={close}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;
