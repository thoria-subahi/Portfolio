import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useMousePosition } from "../hooks/useMousePosition";
import "../Home.css";

const ParticleEffect = React.memo(() => (
  <div className="particles">
    {Array(50)
      .fill(null)
      .map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            "--delay": `${Math.random() * 5}s`,
            "--size": `${Math.random() * 3 + 1}px`,
          }}
        />
      ))}
  </div>
));

const Home = () => {
  const mousePosition = useMousePosition();

  const socialLinks = useMemo(
    () => [
      { icon: FaGithub, url: "https://github.com/thoria-subahi" },
      { icon: FaLinkedin, url: "https://linkedin.com/in/thoria-subahi" },
    ],
    []
  );

  return (
    <div className="home">
      <div className="matrix-background">
        <ParticleEffect />
        <div
          className="ambient-light"
          style={{ "--x": `${mousePosition.x}%`, "--y": `${mousePosition.y}%` }}
        ></div>
        <div className="vignette"></div>
      </div>
      <div className="content">
        <h1>
          Software Engineer<span className="accent">.</span>
        </h1>
        <p className="sub-text slide-delay">
          From pipettes to keyboards - transitioning from biomedical science to
          software engineering. Where analytical thinking meets creative coding.
        </p>
        <div className="button-container">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="social-icons">
        {socialLinks.map(({ icon: Icon, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Home);
