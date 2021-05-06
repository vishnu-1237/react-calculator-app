import React from 'react';
import styles from './index.module.css';

const DisplayOutput = ({output}) => {
    return (
        <div className={styles.container }>
            <p className={styles.box}>{output}</p>
        </div>
    )
}

export default DisplayOutput;