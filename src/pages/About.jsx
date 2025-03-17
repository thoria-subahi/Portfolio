import React from "react";
import "./About.css";
import resume from "../assets/Thoria-Subahi-CV.pdf";

const About = () => {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "SQL",
    "Node.js",
    "Django",
    "AWS",
    "Cloud Computing (Azure)",
    "APIs",
    "Pair Programming",
    "Teamwork",
    "Time Management",
  ];

  return (
    <div className="about">
      <div className="cyber-grid">
        {Array(100)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="grid-cell" />
          ))}
      </div>
      <div className="glow-effect"></div>

      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Software Engineer with a biomedical background, passionate about
          creating tech solutions and building communities. Founder of{" "}
          <a
            href="https://www.instagram.com/sudanis.intech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sudanis in Tech
          </a>
          , connecting Sudanese tech professionals. Strong focus on
          problem-solving and inclusive tech development.
        </p>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume
        </a>
        <div className="about-grid">
          <div className="about-card">
            <h3>Education</h3>
            <ul>
              <li>
                <strong>Skills City:</strong> AI Driven Software Engineering
                Bootcamp (2024 - Present)
              </li>
              <li>
                <strong>Kingston University:</strong> BSc Biomedical Science,
                First Class (2018 - 2022)
              </li>
              <li>
                <strong>Fulham Cross Girls School:</strong> GCSE Mathematics
                (B), GCSE English (B) (2011 - 2016)
              </li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
