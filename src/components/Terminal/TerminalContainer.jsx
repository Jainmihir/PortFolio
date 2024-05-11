import React from 'react';
import Terminal from './ReactTerminal';
import styles from './Terminal.module.css';

const TerminalContainer = () => {
    return (
        <div className={styles.container}>
            <div style={{ height: '100%' }}>
                <h1>Terminal</h1>
                <Terminal />
            </div>
        </div>
    )
}

export default TerminalContainer;