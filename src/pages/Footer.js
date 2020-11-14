import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";
import {DEVTO_URL, LINKEDIN_URL, COPYRIGHT} from "../constants/Footer";

const Footer = () => {
    const userContext = useContext(UserContext);

    return (
        <div className={"footer-container"}>
            <p>{COPYRIGHT}</p>
            <ul className={"footer-links"}>
                <li><a href={userContext.userInfo.url}>{"Github"}</a></li>
                <li><a href={LINKEDIN_URL}>{"LinkedIn"}</a></li>
                <li><a href={DEVTO_URL}>{"Dev.to"}</a></li>
            </ul>
        </div>
    )
};

export default Footer;