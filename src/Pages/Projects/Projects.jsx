import React from "react";

import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectsData from "../../data/ProjectsData";

const Projects = () => {
    return (
        <div className="projects">
            <h1>My Projects / Work</h1>

            <div className="projects-container">
                {ProjectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        image={project.image}
                        link={project.link}
                        github={project.github}
                    />
                ))}
            </div>

            <footer className="footer" style={{ marginTop: "10rem" }}>
                <p>
                    &copy; {new Date().getFullYear()} Noorullah Noori. All
                    rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Projects;
