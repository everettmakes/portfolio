import React from "react";
import "./projects.css";

const projectData = [
  {
    id: 1,
    title: "Scotland Yard",
    description: "I completed this coursework in Java",
    url: "private", // Simulating private link
  },
  {
    id: 2,
    title: "Marine Conservation App",
    description: "My team came top in the year for our project",
    url: "https://example.com/marine-conservation", // Public link
  },
  {
    id: 3,
    title: "Game of Life",
    description: "I completed this coursework in C",
    url: "private", // Simulating private link
  },
  {
    id: 4,
    title: "faysmatta",
    description: "This is a full stack MERN app",
    url: "https://example.com/faysmatta", // Public link
  },
  {
    id: 5,
    title: "Kaggle",
    description: "Here you can see my data science activities on Kaggle",
    url: "https://kaggle.com", // Public link
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
    <div className="project-item" onClick={handleClick}>
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
