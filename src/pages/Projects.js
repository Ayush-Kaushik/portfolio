import React, {useContext} from "react";
import ProjectCard from "../components/ProjectCard";
import {ProjectsContext} from "../context/ProjectsContext";
import {Element} from "react-scroll";

const Projects = () => {
    const projectContext = useContext(ProjectsContext);

    return (
        <Element name={"projects"}>
            <div className={"layout-page project-container"}>
                <h1>{"Projects"}</h1>
                {projectContext.projects.map((project) => {
                    return (<ProjectCard key={project.id} project={project}/>)
                })}
            </div>
        </Element>
    )
};

export default Projects;