import React, { useState } from "react";
import navbarStyles from "./Navbar.module.css";

import BtnNavToggle from './BtnNavToggle';
import logo from "../assets/shared/logo.svg";


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <header className={navbarStyles.navbarContainer}>
            <img src={logo} alt="logo" />
            <nav className={navbarStyles.navbar}>
                <ul className={navbarStyles.navList}>
                    <li className={navbarStyles.navListItem}><a className={navbarStyles.navListLink} href="">Home</a></li>
                    <li className={navbarStyles.navListItem}><a className={navbarStyles.navListLink} href="">Destination</a></li>
                    <li className={navbarStyles.navListItem}><a className={navbarStyles.navListLink} href="">Crew</a></li>
                    <li className={navbarStyles.navListItem}><a className={navbarStyles.navListLink} href="">Technology</a></li>
                </ul>
            </nav>
            <BtnNavToggle 
                navOpen={navOpen}
                setNavOpen={setNavOpen}
            />
        </header>
    );
}

export default Navbar;