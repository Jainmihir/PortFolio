import { fetchSpotifyData } from '../src/utils/fetchers/spotify';

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SPOTIFY_SECRET_ID = process.env.REACT_APP_SPOTIFY_SECRET_ID;
const SPOTIFY_REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const handler = async(_, res) => {
    res.status(200).json(
        await fetchSpotifyData(
            SPOTIFY_CLIENT_ID || '',
            SPOTIFY_SECRET_ID || '',
            SPOTIFY_REFRESH_TOKEN || ''
        )
    );
};

export default handler;