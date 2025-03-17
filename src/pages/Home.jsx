import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../Home.css";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="home">
      <div className="matrix-background">
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
        <a
          href="https://github.com/thoria-subahi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/thoria-subahi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Home;
