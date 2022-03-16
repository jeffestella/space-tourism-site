import React, { useState } from "react";
import destinationStyles from './Destination.module.css';

import imageMoon from "../assets/destination/image-moon.png";
import imageMars from "../assets/destination/image-mars.png";
import imageEuropa from "../assets/destination/image-europa.png";
import imageTitan from "../assets/destination/image-titan.png";

const Destination = () => {
    const destData = [
        {
            name: "MOON",
            blurb: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 KM",
            travelTime: "3 DAYS",
            photo: {
                file: imageMoon,
                alt: "photo of moon"
            }
        },
        {
            name: "MARS",
            blurb: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
            distance: "225 MIL. KM",
            travelTime: "9 MONTHS",
            photo: {
                file: imageMars,
                alt: "photo of mars"
            }
        },
        {
            name: "EUROPA",
            blurb: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 MIL. KM",
            travelTime: "3 YEARS",
            photo: {
                file: imageEuropa,
                alt: "photo of europa"
            }
        },
        {
            name: "TITAN",
            blurb: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn",
            distance: "1.6 BIL. KM",
            travelTime: "7 YEARS",
            photo: {
                file: imageTitan,
                alt: "photo of titan"
            }
        }
    ]

    const destMenu = destData.map((dest) => {
        return (
            <li 
                className={destinationStyles.photoSelectMenuItem}
                onClick={() => setCurrentDest(dest)}
                key={dest.name}
            >
                {dest.name}
            </li>
        )
    })

    const [currentDest, setCurrentDest] = useState(destData[0]);

    return (
        <main className={destinationStyles.destinationMain}>
                <h1 className={destinationStyles.headerPick}><span className={destinationStyles.headerPickIndex}>01</span> PICK YOUR DESTINATION</h1>
                <figure className={destinationStyles.photoSelect}>
                    <img src={currentDest.photo.file} alt={currentDest.photo.alt} className={destinationStyles.photoSelectImg}/>
                    <figcaption className={destinationStyles.photoSelectCaption}>
                        <ul className={destinationStyles.photoSelectMenu}>
                            {destMenu}
                        </ul>
                    </figcaption>
                </figure>
                <section className={destinationStyles.card}>
                    <header className={destinationStyles.cardName}>
                        {currentDest.name}
                    </header>
                    <p className={destinationStyles.cardBody}>
                        {currentDest.blurb}
                    </p>
                </section>
                <hr />
                <section className={destinationStyles.stats}>
                    <h2 className={destinationStyles.statsMetric}>Avg. Distance</h2>
                    <p className={destinationStyles.statsValue}>{currentDest.distance}</p>
                    <h2>Est. Travel Time</h2>
                    <p>{currentDest.travelTime}</p>
                </section>

        </main>
    );
}

export default Destination;