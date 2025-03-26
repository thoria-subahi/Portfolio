import React, { useMemo, Suspense } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the projects.</div>;
    }
    return this.props.children;
  }
}

const ProjectCard = React.memo(({ project }) => (
  <div className="project-card">
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
));

const Projects = () => {
  const projects = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <ErrorBoundary>
      <div className="projects">
        <div className="projects-content">
          <h2>Projects</h2>
          <Suspense fallback={<div>Loading projects...</div>}>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} project={project} />
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default React.memo(Projects);
