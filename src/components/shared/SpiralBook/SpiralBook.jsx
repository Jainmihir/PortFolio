import React, { useState } from 'react';
import PoetryModal from '../../PoetryModal/PoetryModal';

import Spiral from './Spiral';
import styles from './SpiralBook.module.css';


const SpiralBook = ({ title }) => {
    const [openModal, setOpenModal] = useState(false);
    console.log('op', openModal);

    return (
        <div className={styles.spiralBook} onClick={() => setOpenModal(true)}>
            <PoetryModal isOpen={openModal} setOn={setOpenModal} />

            <div className={styles.spiralWinding}>
                {Array.from({ length: 8 }, (_, idx) => (
                    <Spiral key={idx} />
                ))}

            </div>
            <div className={styles.bookTitleWrapper}>
                <p>{title}</p>
            </div>
        </div>
    )
};

export default SpiralBook;