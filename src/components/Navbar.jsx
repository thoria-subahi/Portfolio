import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

const NavLink = memo(({ to, children, onClick }) => (
  <li>
    <Link to={to} onClick={onClick}>
      {children}
    </Link>
  </li>
));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const { isScrolled, handleScroll } = useTheme();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} ref={navRef}>
      <Link to="/" className="logo" onClick={handleLinkClick}>
        Thoria Subahi
      </Link>

      <ul className={isOpen ? "active" : ""}>
        <NavLink to="/" onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={handleLinkClick}>
          About
        </NavLink>
        <NavLink to="/projects" onClick={handleLinkClick}>
          Projects
        </NavLink>
        <NavLink to="/experience" onClick={handleLinkClick}>
          Experience
        </NavLink>
        <NavLink to="/contact" onClick={handleLinkClick}>
          Contact
        </NavLink>
      </ul>

      <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
        <div className="burger"></div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
