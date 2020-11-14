import React from 'react';
import '../styles/_Navbar.scss'

const Navbar = () => {
    return (
        <div className={"navbar-container"}>
            <nav className={"navbar"}>
                <li>{"About Me"}</li>
                <li>{"Skills"}</li>
                <li>{"Projects"}</li>
                <li>{"Contact Me"}</li>
            </nav>
        </div>
    )
}


export default Navbar;