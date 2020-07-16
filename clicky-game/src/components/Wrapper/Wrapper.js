import React from "react";
import ImageCard from "../Images/ImageCard"
import styles from "./Wrapper.module.css"

const Wrapper = (props) => {
    const coolImages = props.list.map((images) => {
        return (
            <ImageCard
              image={images.image}
            />
        )
    })
    return (
        <div className={styles.wrapper}>
          {coolImages}
        </div>
    )
}

export default Wrapper;