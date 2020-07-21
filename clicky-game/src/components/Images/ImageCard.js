import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = props => (
  <div className={styles.card} value={props.id} onClick={() => props.handleClick(props.id)}>
    <div className={styles.container}>
      <img className={styles.photo} alt={props.name} src={props.image} />
    </div>
  </div>
)

export default ImageCard

// const ImageCard = (props) => {
//     console.log(props)
//     return (
//       <section>
//         <div className={styles.card}>
//             <img className={styles.photo} alt={props.name} src={props.image}/>
//         </div>
//       </section>    
//     )
// }

// export default ImageCard;