import React, { useState } from "react";
import navbarStyles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import BtnNavToggle from './BtnNavToggle';
import logo from "../assets/shared/logo.svg";


const Navbar = () => {
    const pages = [
        {
            name: "Home",
            slug:"/"
        },
        {
            name: "Destination",
            slug:"/destination"
        },
        {
            name: "Crew",
            slug:"/crew"
        },
        {
            name: "Technology",
            slug:"/technology"
        },
    ]

    const [currentPage, setCurrentPage] = useState(pages[0])
    const [navOpen, setNavOpen] = useState(false);

    const navLinks = pages.map((page) => {
        return <li className={navbarStyles.navListItem}>
            <Link
                to={page.slug}
                className={`${navbarStyles.navListLink} ${
                    currentPage.name === page.name ?
                    navbarStyles.currentPage : ""}`}
                href=""
                onClick={() => {
                    setCurrentPage(page);
                    setNavOpen(false)}}
            >{page.name}</Link>
        </li>
    })

    return (
        <header className={navbarStyles.navbarContainer}>
            <img src={logo} alt="logo" />
            <nav className={`${navOpen ? navbarStyles.navbar : navbarStyles.hidden }`}>
                <ul className={navbarStyles.navList}>
                    {navLinks}
                    {/* <li className={navbarStyles.navListItem}>
                        <Link 
                            to="/" 
                            className={navbarStyles.navListLink} 
                            href=""
                            onClick={() => {setNavOpen(false)}}>Home
                        </Link>
                    </li>
                    <li className={navbarStyles.navListItem}>
                        <Link 
                            to="/destination" 
                            className={navbarStyles.navListLink} href=""
                            onClick={() => {setNavOpen(false)}}>Destination
                        </Link>
                    </li>
                    <li className={navbarStyles.navListItem}>
                        <Link 
                            to="/crew" 
                            className={navbarStyles.navListLink} 
                            href=""
                            onClick={() => {setNavOpen(false)}}>Crew
                        </Link>
                    </li>
                    <li className={navbarStyles.navListItem}>
                        <Link 
                            to="/technology" 
                            className={navbarStyles.navListLink}
                            href=""
                            onClick={() => {setNavOpen(false)}}>Technology
                        </Link>
                    </li> */}
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