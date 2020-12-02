import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
const ProjectCard = ({project}) => {

    return (
        <div className={"layout-card"}>
            <h1>{project.name}</h1>
            <span className={"layout-card-subtitle"}>{project.created_at}</span>
            {project.description ? <p>{project.description}</p> : ""}

            <span className={"layout-card-links"}>
                {project.html_url ?
                    <a href={project.html_url}> <FontAwesomeIcon className={"project-icon"}
                                                                 icon={faGithub} size={"2x"}/>{"  View Source"}
                    </a> : ""}
                {project.homepage ? <a href={project.homepage}> <FontAwesomeIcon className={"project-icon"}
                                                                                icon={faExternalLinkAlt}
                                                                                size={"2x"}/> {"Live Demo"}</a> : ""}
            </span>
        </div>
    )
};

export default ProjectCard;