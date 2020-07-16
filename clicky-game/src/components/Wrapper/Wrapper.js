import React from "react";
import ImageCard from "../Images/ImageCard"
import styles from "./Wrapper.module.css"
import Directions from "../Directions/Directions"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

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
        <Header />
        <Directions />
        <div>
          {coolImages}
        </div>
        <Footer />
      </div>
    )
}

export default Wrapper;