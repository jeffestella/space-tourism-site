import React, { useState } from "react";
import navbarStyles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import BtnNavToggle from './BtnNavToggle';
import logo from "../assets/shared/logo.svg";


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <header className={navbarStyles.navbarContainer}>
            <img src={logo} alt="logo" />
            <nav className={`${navOpen ? navbarStyles.navbar : navbarStyles.hidden }`}>
                <ul className={navbarStyles.navList}>
                    <li className={navbarStyles.navListItem}>
                        <Link to="/" className={navbarStyles.navListLink} href="">Home</Link>
                    </li>
                    <li className={navbarStyles.navListItem}>
                        <Link to="/destination" className={navbarStyles.navListLink} href="">Destination</Link>
                    </li>
                    <li className={navbarStyles.navListItem}>
                        <Link to="/crew" className={navbarStyles.navListLink} href="">Crew</Link>
                    </li>
                    <li className={navbarStyles.navListItem}>
                        <Link to="/technology" className={navbarStyles.navListLink} href="">Technology</Link>
                    </li>
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