import React from "react";
import homeStyles from "./Home.module.css";

import SectionHero from "../components/SectionHero";
import BtnCTA from '../components/BtnCTA';

const Home = () => {
    return (
        <main className={homeStyles.homeMain}>

            <div className={homeStyles.heroCopy}>
                <p className={homeStyles.heroHeadline}>So, you want to travel to</p>
                <p className={homeStyles.heroHeadlineSpace}>SPACE</p>
                <p className={homeStyles.heroBodyCopy}>Let's face it; if you want to go to space, you might as well genuinely go to outer space and nt hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <BtnCTA />

        </main>
    )
}

export default Home;