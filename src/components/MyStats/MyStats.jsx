import React from 'react';
import GithubStats from '../GithubStats/Github';
import SpotifyStats from '../SpotifyStats/Spotify';
import styles from './MyStats.module.css';

const MyStats = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>More About Me</h1>
                <SpotifyStats />
                {/* <hr />
                <Poetries /> */}
                <hr />
                <GithubStats />
            </div>
        </div>
    )
}

export default MyStats