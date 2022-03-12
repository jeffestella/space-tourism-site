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
                <p>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there.</p>
            </section>
        </main>
    );
}

export default Destination;