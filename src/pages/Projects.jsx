import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Restaurant App (Group Project)",
      description:
        "Collaborated on a full-stack restaurant app featuring menu management, order processing, and real-time updates. Focused on frontend development and API integration.",
      tech: ["JavaScript", "React", "HTML", "CSS"],
      demoLink: "https://biomorph-bistro.vercel.app",
      codeLink: "https://github.com/detollly/restaurant-app",
    },
    {
      name: "Random Password",
      description:
        "A webapp password generator that allows users to generate random passwords with customizable options.",
      tech: ["JavaScript", "HTML", "CSS", "AWS"],
      demoLink: "https://thoria-subahi.github.io/random-password/",
      codeLink: "https://github.com/thoria-subahi/random-password",
    },
    {
      name: "Riddler",
      description:
        "A webapp that fetches random riddles from an API and displays the answer when requested.",
      tech: ["JavaScript", "HTML", "CSS"],
      demoLink: "https://thoria-subahi.github.io/riddler/",
      codeLink: "https://github.com/thoria-subahi/riddler",
    },
    {
      name: "The Noteriser",
      description:
        "A webapp to manage notes, developed through Docker and designed through Tailwind.",
      tech: [
        "JavaScript",
        "HTML",
        "CSS",
        "Node.js",
        "ExpressJS",
        "MongoDB",
        "Docker",
        "Tailwind",
      ],
      codeLink: "https://github.com/thoria-subahi/noteriser",
    },
    {
      name: "Text-Based Adventure Game",
      description:
        "Python command-line fantasy adventure game featuring choices that affect the storyline and character progression.",
      tech: ["Python"],
      demoLink: "#",
      codeLink: "https://github.com/thoria-subahi/game_tbag",
    },
  ];

  return (
    <div className="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoLink && project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
