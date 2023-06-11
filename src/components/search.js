import React from 'react';
import styles from "./search.module.css"

const search = () => {
    return (
        <div className={styles.container}>
            <h3>Search What You Want</h3>
            <input placeholder="search ..." />
        </div>
    );
};

export default search;