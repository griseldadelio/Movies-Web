import axios from "axios";

export const api = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'en_US'
    }
});
