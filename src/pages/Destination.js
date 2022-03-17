import React, { useState } from "react";
import destStyles from './Destination.module.css';

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
    
    const [currentDest, setCurrentDest] = useState(destData[0]);
    
    const destMenu = destData.map((dest) => {
        return (
            <li 
            onClick={() => setCurrentDest(dest)}
            className={`${destStyles.photoSelectMenuItem}
            ${dest === currentDest ?
                destStyles.currentDest : 
                ""}
                `}
                key={dest.name}
                >
                {dest.name}
            </li>
        )
    })

    return (
        <main className={destStyles.destinationMain}>
                <h1 className={destStyles.headerPick}><span className={destStyles.headerPickIndex}>01</span> PICK YOUR DESTINATION</h1>
                <figure className={destStyles.photoSelect}>
                    <img 
                        src={currentDest.photo.file} 
                        alt={currentDest.photo.alt} 
                        className={destStyles.photoSelectImg}
                    />
                    <figcaption className={destStyles.photoSelectCaption}>
                        <ul className={destStyles.photoSelectMenu}>
                            {destMenu}
                        </ul>
                    </figcaption>
                </figure>
                <section className={destStyles.card}>
                    <header className={destStyles.cardName}>
                        {currentDest.name}
                    </header>
                    <p className={destStyles.cardBody}>
                        {currentDest.blurb}
                    </p>
                </section>
                <hr className={destStyles.hrBreak}/>
                <section className={destStyles.stats}>
                    <article className={destStyles.statsCard}>
                        <h2 className={destStyles.statsMetric}>AVG. DISTANCE</h2>
                        <p className={destStyles.statsValue}>{currentDest.distance}</p>
                    </article>
                    <article className={destStyles.statsCard}>
                        <h2 className={destStyles.statsMetric}>EST. TRAVEL TIME</h2>
                        <p className={destStyles.statsValue}>{currentDest.travelTime}</p>
                    </article>
                </section>

        </main>
    );
}

export default Destination;