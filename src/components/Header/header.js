import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div id="scroll-bar">
      <nav className="header-nav">
        <a href="#section1" id="image-link">
          <img src="./logos/logo-sarah.png" alt="Logo Sarah" />
        </a>

        <div
          className={`links-container ${
            isMobileMenuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <a href="#section1" onClick={closeMobileMenu}>
            Accueil
          </a>
          <a href="#section2" onClick={closeMobileMenu}>
            À propos
          </a>
          <a href="#section3" onClick={closeMobileMenu}>
            Portfolio
          </a>
          <a href="#section4" onClick={closeMobileMenu}>
            Contact
          </a>
        </div>

        <div className="reso2">
          <a
            href="https://github.com/Sghandi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./logos/github2.png" alt="Logo Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/sarah-g-6047a3257/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./logos/linkedin2.png" alt="Logo Linkedin" />
          </a>
        </div>

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? "bar1" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "bar2" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "bar3" : ""}`}></div>
        </button>
      </nav>
    </div>
  );
}

export default Header;
