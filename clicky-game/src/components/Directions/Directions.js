import React from "react";
import styles from "./Directions.module.css"

const Directions = () => {
    return (
        <section className={styles.directions}>
            <h1>Clicky Game!</h1>
            <h4>
                Click on an image to earn points, but don't click on any more than once!
            </h4>
        </section>
    )
}

export default Directions;