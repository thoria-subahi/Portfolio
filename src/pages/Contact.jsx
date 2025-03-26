import React, { useMemo, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import "./Contact.css";

const ContactCard = React.memo(({ icon: Icon, title, info, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Contact via ${title}`}
    >
      <Icon className={`contact-icon ${isHovered ? "hovered" : ""}`} />
      <h3 className="contact-title">{title}</h3>
      <div className="contact-info">{info}</div>
    </a>
  );
});

ContactCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Contact = () => {
  const contactMethods = useMemo(
    () => [
      {
        icon: FaEnvelope,
        title: "Email",
        info: "thoria.s@outlook.com",
        href: "mailto:thoria.s@outlook.com",
      },
      {
        icon: FaLinkedin,
        title: "LinkedIn",
        info: "@thoria-subahi",
        href: "https://linkedin.com/in/thoria-subahi",
      },
      {
        icon: FaGithub,
        title: "GitHub",
        info: "@thoria-subahi",
        href: "https://github.com/thoria-subahi",
      },
    ],
    []
  );

  return (
    <div className="contact">
      <div className="contact-content">
        <h2>Contact</h2>
        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <ContactCard
              key={index}
              icon={method.icon}
              title={method.title}
              info={method.info}
              href={method.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Contact);
