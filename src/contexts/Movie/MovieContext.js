import React, { createContext, useEffect, useState } from 'react';
import { api } from '../../utils'

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [movieRandom, setMovieRandom] = useState([]);
  const [movieTop, setMovieTop] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  const dataMovies = async () => {
    const { data } = await api.get(`/movie/popular`);
    return data.results
  }

  const dataMovieRandom = async () => {
    const { data } = await api.get(`/movie/popular`, {
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

  const indexRandom = Math.floor(Math.random() * 20);

  useEffect(() => {
    dataMovies()
      .then((response) =>
        setMovie(response),
      )
  }, []);

  useEffect(() => {
    dataMovieTop()
      .then((response) =>
        setMovieTop(response),
      )
    dataNow()
      .then((response) =>
        setNowPlaying(response),
      )
    dataUpcoming()
      .then((response) =>
        setMovieUpcoming(response),
      )
    dataMovieRandom()
      .then((response) =>
        setMovieRandom(response[indexRandom]),
      )
  }, []);

  return (
    <MovieContext.Provider value={{ movie, movieRandom, movieTop, movieUpcoming, nowPlaying }} >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
export { MovieProvider };
