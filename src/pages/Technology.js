import React, { useState } from "react";
import technologyStyles from './Destination.module.css';

import imageLaunchVehicleL from '../assets/technology/image-launch-vehicle-landscape.jpg';
import imageLaunchVehicleP from '../assets/technology/image-launch-vehicle-portrait.jpg';
import imageCapsuleL from '../assets/technology/image-space-capsule-landscape.jpg';
import imageCapsuleP from '../assets/technology/image-space-capsule-portrait.jpg';
import imageSpaceportL from '../assets/technology/image-spaceport-landscape.jpg';
import imageSpaceportP from '../assets/technology/image-spaceport-portrait.jpg';

const Technology = () => {
    const techData = [
        {
            name: "LAUNCH VEHICLE",
            num: 1,
            blurb: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sigh on the launch",
            photo: {
                landscape: imageLaunchVehicleL,
                portrait: imageLaunchVehicleP,
                alt: "A rocket taking off"
            }
        },
        {
            name: "SPACEPORT",
            num: 2,
            blurb: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
            photo: {
                landscape: imageSpaceportL,
                portrait: imageSpaceportP,
                alt: "A rocket taking off"
            }
        },
        {
            name: "SPACE CAPSULE",
            num: 3,
            blurb: "A space spasule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmostphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you tentertained.",
            photo: {
                landscape: imageCapsuleL,
                portrait: imageCapsuleP,
                alt: "A space capsule in orbit"
            }
        },
    ]

    const [currentTech, setCurrentTech] = useState(techData[0]);

    return (
        <main className={technologyStyles.main}>
            <h1 className={technologyStyles.headerSpace}><span className={technologyStyles.headerSpaceIndex}>03</span> SPACE LAUNCH 101</h1>
            <figure className={technologyStyles.photoSelect}>
                <img 
                    src={currentTech.photo.landscape} 
                    alt={currentTech.photo.alt}
                    className={technologyStyles.photoSelectImg}
                />
                <figcaption className={technologyStyles.photoSelectCaption}>
                    <ul className={technologyStyles.photoSelectMenu}>
                        TechButtons
                    </ul>
                </figcaption>
            </figure>
            <section className={technologyStyles.card}>
                <header>
                    <p className={technologyStyles.cardTerminology}>THE TERMINOLOGY...</p>
                    <p className={technologyStyles.cardName}>{currentTech.name}</p>
                </header>
                <p>{currentTech.blurb}</p>
            </section>
        </main>
    );
}

export default Technology;