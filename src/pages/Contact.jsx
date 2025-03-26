import React, { useMemo } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const ContactCard = React.memo(({ icon: Icon, title, info, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="contact-card"
  >
    <Icon className="contact-icon" />
    <h3 className="contact-title">{title}</h3>
    <div className="contact-info">{info}</div>
  </a>
));

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
