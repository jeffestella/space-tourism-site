import React from 'react';
import btnNavToggle from './BtnNavToggle.module.css';

import iconHamburger from "../assets/shared/icon-hamburger.svg";

const BtnNavToggle = () => {
    return (
        <button className={btnNavToggle}>
            <img src={iconHamburger} alt="menu toggle button" />
        </button>
    );
}

export default BtnNavToggle;