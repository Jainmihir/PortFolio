import React from 'react';
import styles from './SpiralBook.module.css';

const Spiral = () => {
    return (
        <div className='spiral'>
            <div className={styles.hole}>
                <div className={styles.wire}></div>
            </div>
        </div>
    );
};

export default Spiral;