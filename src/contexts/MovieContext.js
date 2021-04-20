import React, { createContext, useState, useEffect } from 'react';
import { API_KEY } from '../utils/APY_KEY';
import { useFetch } from '../hooks/useFetch';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movieRandom, setMovieRandom] = useState([]);
  const [movieTop, setMovieTop] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [yearMovie, setYearMovie] = useState();
  const [voteAverageMovie, setVoteAverageMovie] = useState(0);
  const [movie, setMovie] = useState([]);
  const [isLoadingMovie, setIsLoadingMovie] = useState(true);

  const dataMovies = useFetch(
    `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${API_KEY}`,
    []
  );

  const dataMovieRandom = useFetch(
    `https://api.themoviedb.org/3/movie/popular?page=${
    Math.floor(Math.random() * 100) + 1
    }&api_key=${API_KEY}`,
    []
  );

  const dataMovieTop = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    []
  );

  const dataNow = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    []
  );

  const dataUpcoming = useFetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    []
  );

  useEffect(() => {
    (!dataMovies || !dataMovieRandom || !dataMovieTop || dataNow || dataUpcoming) && setIsLoadingMovie(true);

    dataMovies && setMovie(dataMovies.results);

    const indexRandom = Math.floor(Math.random() * 20);

    dataMovieRandom && setMovieRandom(dataMovieRandom.results[indexRandom]);
    dataMovieRandom && setYearMovie(dataMovieRandom.results[indexRandom].release_date.split("-")[0]);
    dataMovieRandom && setVoteAverageMovie(dataMovieRandom.results[indexRandom].vote_average);
    dataMovieTop && setMovieTop(dataMovieTop.results);
    dataNow && setNowPlaying(dataNow.results);
    dataUpcoming && setMovieUpcoming(dataUpcoming.results);
    dataMovies && dataMovieRandom && dataUpcoming && dataMovieRandom && dataMovieTop && dataNow && setIsLoadingMovie(false);
  }, [dataMovies, dataMovieRandom, dataMovieTop, dataNow, dataUpcoming]);


  return (
    <MovieContext.Provider value={{ movieRandom, yearMovie, voteAverageMovie, movie, movieTop, movieUpcoming, nowPlaying, isLoadingMovie }} >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
export { MovieProvider };
