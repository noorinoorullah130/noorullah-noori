import React from "react";

import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
    return (
        <div className="projects">
            <h1>My Projects / Work</h1>

            <div className="projects-container">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
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
