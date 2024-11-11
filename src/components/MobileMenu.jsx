import React from "react";
import "../styles/MobileMenu.css";

function MobileMenu() {
  return (
    <nav className="mobile-menu">
      <div className="close-wrap">
        <a href="#" className="menu-close">
          <span className="close-label">Close</span>
          <div className="close-icon">
            <span className="bar1"></span>
            <span className="bar2"></span>
          </div>
        </a>
      </div>
      <div className="mobile-menu-inner"></div>
    </nav>
  );
}

export default MobileMenu;
