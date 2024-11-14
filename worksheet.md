useEffect(() => {
const menuAnimations = () => {
if (isMenuVisible === true) {
gsap.to(".mobile-menu", {
x: "0%",
ease: "power3.in",
duration: 0.6,
});

        gsap.to(".mobile-link", {
          opacity: 1,
          scale: 0.5,
          filter: "blur(0px)",
          stagger: {
            axis: "x",
            amount: 0.05,
            ease: "sine.out",
          },
          delay: 0.1,
        });
      } else if (onClose === false) {
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
      }
    };

    animate(menuAnimations);

}, [animate]);
