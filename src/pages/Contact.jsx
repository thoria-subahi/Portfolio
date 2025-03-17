import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "../Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <h2>Contact</h2>
        <div className="contact-grid">
          <a href="mailto:thoria.s@outlook.com" className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3 className="contact-title">Email</h3>
            <div className="contact-info">thoria.s@outlook.com</div>
          </a>

          <a
            href="https://linkedin.com/in/thoria-subahi"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="contact-icon" />
            <h3 className="contact-title">LinkedIn</h3>
            <div className="contact-info">@thoria-subahi</div>
          </a>

          <a
            href="https://github.com/thoria-subahi"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGithub className="contact-icon" />
            <h3 className="contact-title">GitHub</h3>
            <div className="contact-info">@thoria-subahi</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
