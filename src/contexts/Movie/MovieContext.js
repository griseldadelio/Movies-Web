import React, { createContext } from 'react';
import { api } from '../../utils'

const MovieContext = createContext();

const MovieProvider = ({ children }) => {

  const dataMovies = async () => {
    const { data } = await api.get(`movie/popular`);
    return data.results
  }

  const dataMovieRandom = async () => {
    const { data } = await api.get(`movie/popular`, {
      params: {
        page: Math.floor(Math.random() * 100) + 1
      }
    });
    return data.results
  }

  const dataMovieTop = async () => {
    const { data } = await api.get(`/movie/top_rated`);
    return data.results
  }

  const dataNow = async () => {
    const { data } = await api.get(`/movie/now_playing`);
    return data.results
  }

  const dataUpcoming = async () => {
    const { data } = await api.get(`/movie/upcoming`);
    return data.results
  }

  return (
    <MovieContext.Provider value={{ dataMovies, dataMovieTop, dataUpcoming, dataNow, dataMovieRandom }} >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
export { MovieProvider };
