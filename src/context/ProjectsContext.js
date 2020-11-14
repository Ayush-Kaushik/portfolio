import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

export const ProjectsContext = createContext();
export const ProjectsProvider = ({children}) => {
    const [projects, setProjects] = useState([]);

    useEffect(async () => {
        const response = await axios.get("https://api.github.com/users/Ayush-Kaushik/repos");
        console.log(response.data);

        setProjects(response.data);
    }, []);

    return (
        <ProjectsContext.Provider value={{
            projects: projects
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}