import React from "react";
import ProjectsGrid from "./projects_grid";
import "./App.css";

const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <nav>
            <ul>
                <li onClick={() => scrollToSection("welcomeSection")}>Welcome</li>
                <li onClick={() => scrollToSection("projectsSection")}>Projects</li>
                <li onClick={() => scrollToSection("contactSection")}>Contact</li>
            </ul>
        </nav>
    );
};

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
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <div>
            <section id="welcomeSection">
                <Welcome />
            </section>
            <section id="projectsSection">
                <Projects />
            </section>
            <section id="contactSection">
                <Contact />
            </section>
            <div className="floating-buttons">
                <button className="myButton" onClick={() => scrollToSection("welcomeSection")}>Welcome</button>
                <button className="myButton" onClick={() => scrollToSection("projectsSection")}>Projects</button>
                <button className="myButton" onClick={() => scrollToSection("contactSection")}>Contact</button>
            </div>
        </div>
    );
};
 
export default HomePage;