import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import resume from "../assets/Thoria-Subahi-CV.pdf";
import "../Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-email">
            <FaEnvelope />
            <span>thoria.s@outlook.com</span>
          </div>
          <div className="footer-social">
            <a
              href="https://github.com/thoria-subahi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/thoria-subahi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-info">
          <span>© {new Date().getFullYear()} Thoria Subahi</span>
          <span className="footer-separator">|</span>
          <span>Software Engineer</span>
          <span className="footer-separator">|</span>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="download-cv"
            title="View CV"
          >
            <FaExternalLinkAlt /> CV
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
