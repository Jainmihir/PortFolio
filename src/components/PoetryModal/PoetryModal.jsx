import React from 'react';
import ReactPortal from '../shared/ReactPortal/ReactPortal';
import styles from './PoetryModal.module.css';

const PoetryModal = ({ isOpen, setOn, data }) => {


    if (!isOpen) {
        return null;
    }

    return (

        <ReactPortal wrapperId='react-portal-modal-container' hideOverlay={() => setOn(false)}>

            <div className={styles.modalContainer}>
                <div className={styles.page}>
                    <div className={styles.pageHeader}>
                        <div className={styles.pageTitle}>
                            Kalyug ki Mohini
                        </div>
                        <button className={styles.closeModal} onClick={() => { setOn(false); console.log("KKK"); }}>
                            X
                        </button>
                    </div>
                </div>
            </div >
        </ReactPortal >


    );


}

export default PoetryModal;