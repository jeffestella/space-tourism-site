import React, { useState } from "react";
import destinationStyles from './Destination.module.css';

import imageMoon from "../assets/destination/image-moon.png";

const Destination = () => {
    const destList = {
        moon: {
            name: "MOON",
            blurb: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 KM",
            travelTime: "3 DAYS"
        },
        mars: {
            name: "MARS",
            blurb: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
            distance: "225 MIL. KM",
            travelTime: "9 MONTHS"
        },
        europa: {
            name: "EUROPA",
            blurb: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 MIL. KM",
            travelTime: "3 YEARS"
        },
        titan: {
            name: "TITAN",
            blurb: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn",
            distance: "1.6 BIL. KM",
            travelTime: "7 YEARS"
        }
    }

    const [currentDest, setCurrentDest] = useState(destList.moon);

    return (
        <main className={destinationStyles.destinationMain}>
                <h1 className={destinationStyles.headerPick}><span className={destinationStyles.headerPickIndex}>01</span> PICK YOUR DESTINATION</h1>
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