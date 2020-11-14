import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({project}) => {
    return (
        <div className={"card-container"}>
            <h2 className={"card-title"}>{project.name.toUpperCase()}</h2>
            <span>{project.created_at}</span>
            {project.description ? <p>{project.description}</p> : ""}

            <span>
                {project.html_url ?
                    <a href={project.html_url}> <FontAwesomeIcon className={"project-icon"}
                                                                 icon={faGithub} size={"2x"}/>{"  View Source"}</a> : ""}
                {project.homepage ? <a href={project.homepage}>{"Visit Project"}</a> : ""}
            </span>

            {/*<span>{*/}
            {/*    project.TOOLS.map((tool) => <p>{tool}</p>)*/}
            {/*}</span>*/}
        </div>
    )
};

export default ProjectCard;