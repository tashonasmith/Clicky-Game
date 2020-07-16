import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <section className={styles.footer}>
            <a href="https://github.com/tashonasmith/Clicky-Game">
              <img className={styles.image} src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" alt="GitHub Logo"/>
            </a>  
        </section>
    );
};

export default Footer;