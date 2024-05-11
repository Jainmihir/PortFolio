import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Overlay.module.css";

const Overlay = (props) => {
    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={props.hideOverlay}>{props.children}</div>,
        document.getElementById('overlay')
    )
}

export default Overlay;