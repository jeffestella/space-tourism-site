import React from 'react';
import sectionHeroStyles from './SectionHero.module.css';

import BtnCTA from './BtnCTA';

const SectionHero = () => {
    return (
        <section className={sectionHeroStyles.heroContainer}>
            <div className={sectionHeroStyles.heroCopy}>
                <p className={sectionHeroStyles.heroHeadline}>So, you want to travel to</p>
                <p className={sectionHeroStyles.heroHeadlineSpace}>SPACE</p>
                <p className={sectionHeroStyles.heroBodyCopy}>Let's face it; if you want to go to space, you might as well genuinely go to outer space and nt hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <BtnCTA />
        </section>
    );
}

export default SectionHero;