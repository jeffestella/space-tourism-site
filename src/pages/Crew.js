import React, { useState } from "react";
import crewStyles from './Crew.module.css';

import imageCommander from "../assets/crew/image-douglas-hurley.png";
import imageMissionSpecialist from "../assets/crew/image-mark-shuttleworth.png";
import imagePilot from "../assets/crew/image-victor-glover.png";
import imageFlightEngineer from "../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
    const crewData = [
        {
            name: "DOUGLAS HURLEY",
            title: "COMMANDER",
            blurb: "Douglas Gerald Hurley is an American engineer, former Marine Corp pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            photo: {
                file: imageCommander,
                alt: "Photo of Douglas Hurley, Commander"
            }
        },
        {
            name: "MARK SHUTTLEWORTH",
            title: "MISSION SPECIALIST",
            blurb: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            photo: {
                file: imageMissionSpecialist,
                alt: "Photo of Mark Shuttleworth, Mission Specialist"
            }
        },
        {
            name: "VICTOR GLOVER",
            title: "PILOT",
            blurb: "Pilot on the first operation flight from SPACEX Crew Dragon to the International Space Station. GLover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
            photo: {
                file: imagePilot,
                alt: "Photo of Victor Glover, Pilot"
            }
        },
        {
            name: "ANOUSHEH ANSARI",
            title: "FLIGHT ENGINEER",
            blurb: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            photo: {
                file: imageFlightEngineer,
                alt: "Photo of Anousheh Ansari, Flight Engineer"
            }
        }
    ];

    const [currentMember, setCurrentMember] = useState(crewData[0]);
    return (
        <main className={crewStyles.crewMain}>
            <h1 className={crewStyles.headerPick}><span className={crewStyles.headerPickIndex}>01</span> PICK YOUR DESTINATION</h1>
            <figure className={crewStyles.photoSelect}>
                <img
                    src={currentMember.photo.file}
                    alt={currentMember.photo.alt}
                    className={crewStyles.photoSelectImg}
                />
                <figcaption className={crewStyles.photoSelectCaption}>
                    <ul className={crewStyles.photoSelectMenu}>
                        RADIO BUTTONS HERE
                    </ul>
                </figcaption>
            </figure>
            <section className={crewStyles.card}>
                <header className={crewStyles.cardName}>
                    {currentMember.name}
                </header>
                <p className={crewStyles.cardBody}>
                    {currentMember.blurb}
                </p>
            </section>
            <hr className={crewStyles.hrBreak} />
            <section className={crewStyles.stats}>
                <article className={crewStyles.statsCard}>
                    <h2 className={crewStyles.statsMetric}>AVG. DISTANCE</h2>
                    <p className={crewStyles.statsValue}>{currentMember.distance}</p>
                </article>
                <article className={crewStyles.statsCard}>
                    <h2 className={crewStyles.statsMetric}>EST. TRAVEL TIME</h2>
                    <p className={crewStyles.statsValue}>{currentMember.travelTime}</p>
                </article>
            </section>
        </main>
    );
}

export default Crew;