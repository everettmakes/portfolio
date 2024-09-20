import React from "react";
import "./projects.css";

const projectData = [
  {
    id: 1,
    title: "Scotland Yard",
    description: "I completed this coursework in Java",
    url: "https://github.com/everettmakes/ScotlandYard/blob/main/report.pdf",
  },
  {
    id: 2,
    title: "Marine Conservation App",
    description: "My team came top in the year for our project",
    url: "https://marineconservationapp.com/",
  },
  {
    id: 3,
    title: "Game of Life",
    description: "I completed this coursework in C",
    url: "https://github.com/everettmakes/GameOfLife/blob/main/report%20.pdf",
  },
  {
    id: 4,
    title: "Kaggle",
    description: "Here you can see my data science activities on Kaggle",
    url: "https://www.kaggle.com/jevrett",
  },
];

const Project = ({ project }) => {
  const handleClick = () => {
    if (project.url === "private") {
      alert("This project is private and cannot be accessed.");
    } else {
      window.open(project.url, "_blank"); // Open the project link in a new tab
    }
  };

  return (
    <div
      className={`project-item ${project.url === "private" ? "private" : ""}`}
      onClick={handleClick}
      aria-label={`View details of ${project.title}`}
    >
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </div>
  );
};

const ProjectsGrid = () => {
  return (
    <div className="projects-grid">
      {projectData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;