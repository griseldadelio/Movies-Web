import { api } from './api'

const getPopular = async (page) => {
    const { data } = await api.get(`/movie/popular?page=${page}`)
    return data;
};

const getPopularData = async () => {
    const { data } = await api.get(`/movie/popular`)
    return data;
};


const getTopRated = async () => {
    const { data } = await api.get(`movie/top_rated`)
    return data.results;
};

const getNewMovies = async () => {
    const { data } = await api.get('/movie/now_playing')
    return data.results;
};


const getId = async (id) => {
    const data = await api.get('/movie/' + id)
    return data.data;
};

const getVid = async (id) => {
    const data = await api.get('/movie/' + id + '/videos')
    return data.data;

};

const getSearch = async (query) => {
    const { data } = await api.get('search/movie?query=' + query)
    return data.results;
};

export const movie = { getPopular, getPopularData, getTopRated, getNewMovies, getId, getVid, getSearch };

