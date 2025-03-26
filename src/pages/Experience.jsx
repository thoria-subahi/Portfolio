import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "../Experience.css";

const TimelineCard = React.memo(({ experience }) => (
  <div className="timeline-card">
    <div className="timeline-header">
      <div>
        <h3 className="timeline-title">{experience.title}</h3>
        <div className="timeline-company">{experience.company}</div>
      </div>
      <div className="timeline-date">{experience.period}</div>
    </div>
    <div className="timeline-description">{experience.description}</div>
  </div>
));

TimelineCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const Experience = () => {
  const experiences = useMemo(
    () => [
      {
        title: "Medical Lab Assistant",
        company: "TDL – The Halo",
        period: "2021 - Present",
        description:
          "Processing laboratory samples, maintaining records, and ensuring compliance with health and safety regulations. Developed skills in attention to detail and operating under pressure.",
      },
      {
        title: "Student Ambassador",
        company: "Kingston University",
        period: "2018 - 2022",
        description:
          "Represented the university at various events, provided guidance to prospective students, and assisted with campus tours. Enhanced communication and leadership skills.",
      },
      {
        title: "Student Administration",
        company: "Kingston University",
        period: "2020",
        description:
          "Managed administrative tasks, maintained student records, and provided support to the administrative team. Improved organizational and data management skills.",
      },
      {
        title: "Telephone Interviewer",
        company: "IFF Research, London",
        period: "2020",
        description:
          "Achieved high response rates by managing graduate survey participation. Helped gather data from graduates, supporting IFF Research in providing valuable insights for regulatory decisions.",
      },
      {
        title: "Sales Associate",
        company: "Gap",
        period: "2017 - 2020",
        description:
          "Provided customer service, managed inventory, and contributed to sales targets. Developed strong interpersonal and problem-solving skills in a fast-paced retail environment.",
      },
    ],
    []
  );

  if (!experiences.length) {
    return <div className="experience">No experience data available.</div>;
  }

  return (
    <div className="experience">
      <div className="experience-content">
        <h2>Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={`exp-${index}`} className="timeline-item">
              <TimelineCard experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Experience);
