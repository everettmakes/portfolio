import React from "react";
import ProjectsGrid from "./projects_grid";

const Welcome = () => {
    return (
        <div id="welcome">
        <div id="welcomeText">
        <div id="keyWord">Welcome!</div>
        <b>I am Joshua Everett, an aspiring Machine Learning Engineer currently studying Computer Science at the University of Bristol. 
        This portfolio highlights my projects and skills, 
        showcasing my dedication to mastering machine learning and more.</b>
        </div>
        <div id="welcomeImage">
        </div>
        </div>
    );
};
 
const Projects = () => {
    return <div id="projects">
        <div id="keyWord">
            Here are some of my projects...
        </div>
        <ProjectsGrid />
        </div>;
};

const Contact = () => {
    return <div id="contact">
        <div id="keyWord">
        Get in touch!
        </div>
        </div>;
};
 
const HomePage = () => {
    return (
        <div>
            <Welcome />
            <Projects />
            <Contact />
        </div>
    );
};
 
export default HomePage;