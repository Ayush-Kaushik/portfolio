import React from 'react';
import {Element} from "react-scroll";
import {TECHNICAL_SKILLS} from "../constants/Skills";

const Skills = () => {

    console.log(TECHNICAL_SKILLS.Languages);

    return (
        <Element name={"skills"}>
            <div className={"layout-page skill-container"}>

                <h1>{"Skills"}</h1>

                <div className={"layout-card"}>
                    <h2>{"Languages"}</h2>
                    <div className={"skill-language"}>
                        {
                            TECHNICAL_SKILLS.languages.map((item, index) => (
                                <span key={index}>
                                <h3>{item.label}</h3>
                                <p>{item.toolTip}</p>
                            </span>
                            ))
                        }
                    </div>
                </div>

                <div className={"layout-card"}>
                    <h2>{"Frameworks"}</h2>
                    <div className={"skill-language"}>
                        {
                            TECHNICAL_SKILLS.frameworks.map((item, index) => (
                                <span key={index}>
                            <h3>{item.label}</h3>
                            <p>{item.toolTip}</p>
                        </span>
                            ))
                        }
                    </div>
                </div>

                <div className={"layout-card"}>
                    <h2>{"Automation"}</h2>
                    <div className={"skill-language"}>
                        {
                            TECHNICAL_SKILLS.automation.map((item, index) => (
                                <span key={index}>
                                <h3>{item.label}</h3>
                                <p>{item.toolTip}</p>
                            </span>
                            ))
                        }
                    </div>
                </div>

                <div className={"layout-card"}>
                    <h2>{"Other Tools"}</h2>
                    <div className={"skill-language"}>
                        {
                            TECHNICAL_SKILLS.other.map((item, index) => (
                                <span key={index}>
                            <h3>{item.label}</h3>
                            <p>{item.toolTip}</p>
                        </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Element>
    )
};

export default Skills;