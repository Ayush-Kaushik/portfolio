import React from 'react';
import {EXPERIENCE} from "../constants/Experience";
import ExperienceCard from "../components/ExperienceCard";
import {Element} from "react-scroll";

const Experience = () => {
    return (
        <Element name={"experience"}>
            <div className={"layout-page"}>
                <h1>{"Experience"}</h1>
                <div>{EXPERIENCE.map((item, index) => {
                    return (
                        <ExperienceCard key={index} experience={item}/>
                    )
                })}
                </div>
            </div>
        </Element>
    )
};

export default Experience;