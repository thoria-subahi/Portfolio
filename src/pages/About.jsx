import React, { useMemo } from "react";
import "./About.css";
import resume from "../assets/Thoria-Subahi-CV.pdf";

const SkillTag = React.memo(({ skill }) => (
  <span className="skill-tag">{skill}</span>
));

const CyberGrid = React.memo(() => (
  <div className="cyber-grid">
    {Array(100)
      .fill(null)
      .map((_, i) => (
        <div key={i} className="grid-cell" />
      ))}
  </div>
));

const About = () => {
  const skills = useMemo(
    () => [
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
    ],
    []
  );

  const education = useMemo(
    () => [
      {
        school: "Skills City",
        degree: "AI Driven Software Engineering Bootcamp",
        period: "2024 - Present",
      },
      {
        school: "Kingston University",
        degree: "BSc Biomedical Science, First Class",
        period: "2018 - 2022",
      },
      {
        school: "Fulham Cross Girls School",
        degree: "GCSE Mathematics (B), GCSE English (B)",
        period: "2011 - 2016",
      },
    ],
    []
  );

  return (
    <div className="about">
      <CyberGrid />
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
              {education.map((edu, index) => (
                <li key={index}>
                  <strong>{edu.school}:</strong> {edu.degree} ({edu.period})
                </li>
              ))}
            </ul>
          </div>

          <div className="about-card">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(About);
