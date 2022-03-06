import React from 'react';
import btnNavToggleStyles from './BtnNavToggle.module.css';

import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from '../assets/shared/icon-close.svg';

const BtnNavToggle = ({ navOpen, setNavOpen }) => {
    return (
        <button 
            className={btnNavToggleStyles.btn}
            onClick={() => {setNavOpen(!navOpen)}}
        >
            <img src={`${navOpen ? iconClose : iconHamburger}`} alt="menu toggle button" />
        </button>
    );
}

export default BtnNavToggle;