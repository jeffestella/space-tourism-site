import React from "react";
import destinationStyles from './Destination.module.css';

import imageMoon from "../assets/destination/image-moon.png";

const Destination = () => {
    return (
        <main className={destinationStyles.destinationMain}>
            <section>
                <p>01 Pick Your Destination</p>
                <img src={imageMoon} alt="photo of moon"/>
                <p>Moon</p>
            </section>
        </main>
    );
}

export default Destination;