import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import fetchSpotifyData from "../../utils/fetchers/spotify";
import { SubSectionContainer } from "../shared/Container/Container";
import LinkToNewTab from "../shared/LinkToNewTab/LinkToNewTab";
import Spinner from "../shared/Spinner/Spinner";
import styles from "./Spotify.module.css";

const Spotify = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);
    const [type, setType] = useState();
    const [playing, setPlaying] = useState(false);
    const audio = useRef(null);

    const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const SPOTIFY_SECRET_ID = process.env.REACT_APP_SPOTIFY_SECRET_ID;
    const SPOTIFY_REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

    const fetchData = async () => {
        setLoading(true);
        const apiData = await fetchSpotifyData(
            SPOTIFY_CLIENT_ID || '',
            SPOTIFY_SECRET_ID || '',
            SPOTIFY_REFRESH_TOKEN || ''
        );
        setData(apiData.data);
        setType(apiData.type);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (audio.current) audio.current.volume = 0.4;
        if (playing) audio.current?.play();
        else audio.current?.pause();
    }, [playing]);


    console.log(data);
    return (
        <SubSectionContainer>
            <h2>I love 🎵 and I</h2>
            {loading && <Spinner small text="Browsing my playlist" />}
            {!loading && (
                <section>
                    {type === "now"
                        ? "Am currently Vibing to "
                        : "Recently listened to "}
                    <br />
                    <div className="horizontal">
                        <img
                            style={{
                                borderRadius: '50%',
                                border: 'none',
                                boxShadow: '2px 2px 10px black'
                            }}
                            height="80px"
                            width="80px"
                            src={data?.albumArt}
                            alt={data?.name}
                        />
                        {data?.preview && (
                            <button
                                className={styles.controlButton}
                                onClick={() => setPlaying(!playing)}
                            >
                                {playing ? <FaPause /> : <FaPlay />}
                            </button>
                        )}
                        <LinkToNewTab className={styles.song} href={data?.url}>
                            <section>
                                {data?.name}
                                <br />
                                <span>{data?.artist.slice(0, -2)}</span>
                            </section>
                        </LinkToNewTab>
                    </div>
                    {data?.preview && (
                        <audio
                            ref={audio}
                            loop
                            style={{ display: "none" }}
                            src={data?.preview}
                        />
                    )}
                </section>
            )}
        </SubSectionContainer>
    );
};

export default Spotify;



// https://accounts.spotify.com/en/authorize?response_type=code&client_id=3c81f931bebc4b8b922e0c0219ab81fe&scope=user-read-private%20user-read-email%20user-modify-playback-state%20user-read-playback-position%20user-library-read%20streaming%20user-read-playback-state%20user-read-recently-played%20playlist-read-private&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback%2F



// http://localhost:3000/callback/?code=AQAKcUGpY9FHrut3UwNvlVjPkeef3r3pLz_GXfBpYWpsE28Q1dzcdbuqFTj2dznVpHEwuF7VHMq14FFVzUTVJBc3gFZL3inlDZZ1jGoTWkcCrsO3xZkqzzl9DV9FoenKMD3IFioavwZ1vJfrC122L4nA4TYiL6HHovvdlGaUFpjrKIzy_ygVevX_lMAVOdBe1Ads6YgybrKzyIso1cQ21weiurFfaERz90O46P1xh60onoJ5_FxnW1pKBJZs6aAdh5iH-KpyYqvOynz7bE3e7WhQeZIxRHb8RizdLEUc1SHkRJJYdc5e-Y3sF7gGyxKifPSc8DdRqlD4nbZuoh9_CQ-1D8byvdhC_Ka7hma-v5dWBtwrU7f3OoIJpwBhvnwHvPUpq7pTS4MVUOj_XbUJJBxPZPpPJAP-kQ1NNeARSHKAUiI3Hruqsoie


// {
//     "access_token": "BQAFUCWeMdnBEbb9j6BXpP4wV-c9OIeJZjyaLSZDSFPmpDN71ntFVJxRyraq05N4uZgJj0PkZG8TWzkYpxeBQI0GdIoXjM28TZLThYALhHXz5xFWNPuZtTWgiY2xWZVnlb_GUpKiZ-scBkWrB3X6t_BP5orOhgTb-PnSVAbjljcFFLQzLL8hxq1kAGzF2aDeDa6l1009LGTCcPTadSduTZe6SDWYYb5dHBNEMRoH0h1u-5035yAKD6QwTA",
//     "token_type": "Bearer",
//     "expires_in": 3600,
//     "refresh_token": "AQC51PB9t6rwUliQvR_-wxBfh0rUfvWVK1Pq3_pGsG5nq8tEXExPpmVZ4ObaYQJDEL9udE9pzyZa-rg29wbtkgRFfVH8JLYfPFM0nOv-DZARpZWNzPZCGej-qguYEQA9E_E",
//     "scope": "playlist-read-private streaming user-modify-playback-state user-library-read user-read-playback-state user-read-email user-read-recently-played user-read-playback-position user-read-private"
// }