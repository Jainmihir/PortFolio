import React from "react";
import styles from "./Spinner.module.css";

const Spinner = ({ text, small }) => (
    <div className={`${styles.container} ${small ? styles.small : ""}`}>
        <div className={styles.loader} />
        {text && small ? <h4>{text}</h4> : <h3>{text}</h3>}
    </div>
);

export default Spinner;
