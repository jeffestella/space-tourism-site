import React from "react";
import destinationStyles from './Destination.module.css';

import imageMoon from "../assets/destination/image-moon.png";

const Destination = () => {
    return (
        <main className={destinationStyles.destinationMain}>
                <h1 className={destinationStyles.headerPick}>01 Pick Your Destination</h1>
                <figure className={destinationStyles.photoSelect}>
                    <img src={imageMoon} alt="photo of moon" className={destinationStyles.photoSelectImg}/>
                    <figcaption className={destinationStyles.photoSelectCaption}>
                        <ul className={destinationStyles.photoSelectMenu}>
                            <li className={destinationStyles.photoSelectMenuItem}><a href="" className={destinationStyles.photoSelectMenuLink}>Moon</a></li>
                            <li className={destinationStyles.photoSelectMenuItem}><a href="" className={destinationStyles.photoSelectMenuLink}>Mars</a></li>
                            <li className={destinationStyles.photoSelectMenuItem}><a href="" className={destinationStyles.photoSelectMenuLink}>Europa</a></li>
                            <li className={destinationStyles.photoSelectMenuItem}><a href="" className={destinationStyles.photoSelectMenuLink}>Titan</a></li>
                        </ul>
                    </figcaption>
                </figure>
                <section className={destinationStyles.card}>
                    <header className={destinationStyles.cardName}>Moon</header>
                    <p className={destinationStyles.cardBody}>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there.</p>
                </section>
                <hr />
                <section className={destinationStyles.stats}>
                    <h2 className={destinationStyles.statsMetric}>Avg. Distance</h2>
                    <p className={destinationStyles.statsValue}>384,400KM</p>
                    <h2>Est. Travel Time</h2>
                    <p>3 Days</p>
                </section>

        </main>
    );
}

export default Destination;