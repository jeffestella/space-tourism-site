import React from "react";
import navbarStyles from "./Navbar.module.css";

import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";

const Navbar = () => {
    return (
        <header className={navbarStyles.navBarContainer}>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Destination</a></li>
                    <li><a href="">Crew</a></li>
                    <li><a href="">Technology</a></li>
                </ul>
            </nav>
            <button>
                <img src={hamburger} alt="menu toggle button" />
            </button>
        </header>
    );
}

export default Navbar;