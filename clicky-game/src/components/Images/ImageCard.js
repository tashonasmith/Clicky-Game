import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = (props) => {
    console.log(props)
    return (
        <div className={styles.card}>
            <img className={styles.photo} alt={props.name} src={props.image}/>
        </div>
    )
}

export default ImageCard;