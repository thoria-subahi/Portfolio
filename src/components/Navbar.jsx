import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar" ref={navRef}>
      <Link to="/" className="logo" onClick={handleLinkClick}>
        Thoria Subahi
      </Link>

      <ul className={isOpen ? "active" : ""}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={handleLinkClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/experience" onClick={handleLinkClick}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
        <div className="burger"></div>
      </div>
    </nav>
  );
};

export default Navbar;
