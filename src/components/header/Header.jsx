import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav-container ${sticky ? "dark-nav" : ""}`}>
      <div className="text-logo">
        <span className="company-name">SHREE LAKSHMI</span>
        <span className="company-subtitle">INFRA</span>
      </div>

      {/* Desktop Navigation */}
      <ul className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#models" onClick={closeMenu}>
            Models
          </a>
        </li>
        <li>
          <a href="#outlets" onClick={closeMenu}>
            Outlets
          </a>
        </li>
        <li>
          <a href="#clients" onClick={closeMenu}>
            Clients
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
        </li>
        <li>
          <button className="btn" onClick={closeMenu}>
            Contact Us
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Header;
