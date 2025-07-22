import React from "react";

import "./ProjectCard.css";
import sampleProject from "../../assets/images/payroll management system.png";

const ProjectCard = () => {
    return (
        <div className="project">
            <img src={sampleProject} alt="" />
            <h2>Project 1: Portfolio Website</h2>
            <p>
                A personal portfolio website showcasing my skills and projects.
                Built with React.js and styled-components.
            </p>
            <a href="#" className="project-link" />
            <p className="project-link">View Project</p>
        </div>
    );
};

export default ProjectCard;
