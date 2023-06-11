import React from 'react';
import myBanner from "../images/apple.jpg"
import Styles from "./Banner.module.css"

const Banner = () => {
    return (
        <div className={Styles.banner}>
            <img src={myBanner} alt="banner"/>
            <h1>Apple Company</h1>
            <p>we bring <span>happiness</span> to your home </p>
        </div>
    );
};

export default Banner;