import React from "react";
 
const Welcome = () => {
    return (
        <div id="welcome">Joshua Everett</div>
    );
};
 
const Projects = () => {
    return <div id="projects">Here are some of the projects I have completed</div>;
};

const Contact = () => {
    return <div id="contact">Get in touch</div>;
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