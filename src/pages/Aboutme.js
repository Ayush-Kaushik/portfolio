import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";
import Emoji from "../components/Emoji";
import ParticleBackground from "../components/ParticleBackground";

const Aboutme = () => {
    const userContext = useContext(UserContext);

    return (
        <div
            className={"aboutme-background-container"}
        >
            <ParticleBackground/>
            <div
                className={"aboutme-container"}
            >
                <span>
                        <h1>{"Hi!"}<Emoji symbol={"👋"} label={"wave"}/>{"  I'm Ayush Kaushik"}</h1>
                        <h2>{"I'm a DevOps Developer."}</h2>
                </span>
                <img src={userContext.userInfo.avatar_url} alt={"my-image"}/>
            </div>
        </div>

        // <div>{"Test Two"}</div>


    )
};

export default Aboutme;