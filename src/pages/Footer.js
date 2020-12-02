import React from 'react';
import {DEVTO_URL, LINKEDIN_URL, GITHUB_URL} from "../constants/Footer";

const Footer = () => {
    return (
        <div className={"layout-footbar"}>
            <ul>
                <li><a href={GITHUB_URL}>{"Github"}</a></li>
                <li><a href={LINKEDIN_URL}>{"LinkedIn"}</a></li>
                <li><a href={DEVTO_URL}>{"Dev.to"}</a></li>
            </ul>
        </div>
    )
};

export default Footer;