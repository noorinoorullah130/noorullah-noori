import React from "react";

import "./ProjectCard.css";

const ProjectCard = (props) => {
    const { title, description, technologies, image, link, github } = props;

    return (
        <div className="project">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
                {technologies.map((tech, i) => (
                    <span key={i}>{tech}&nbsp;&nbsp;&nbsp;</span>
                ))}
            </p>
            <a href={github} className="project-link" target="_blank">
                Github Link
            </a>
            <a href={link} className="project-link" target="_blank">
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;
