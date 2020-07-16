import React from "react";
import styles from "./Wrapper.module.css"
import Directions from "../Directions/Directions"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import ImageCard from "../Images/ImageCard"


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
      <ul>
        <Header />
        <Directions /> 
      </ul>
      {coolImages}
      <Footer />
      </div>
    )
}

export default Wrapper;