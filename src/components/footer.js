import React from 'react';
import styles from "./footer.module.css";

import Applelogo from "../images/applelogo.png";
import Samsung from "../images/Samsung-Logo.png";
import Xiaomi from "../images/Xiaomi.png";

const footer = () => {
    return (
        <div className={styles.container}>
            <h3>Who work with us?</h3>
            <div>
               <img src={Applelogo} alt="applelogo"/>
               <img src={Samsung} alt="Samsung"/>
               <img src={Xiaomi} alt="Xiaomi"/>
            </div>
        </div>
    );
};

export default footer;