import React, { useEffect, useState, useContext } from 'react';
import { useParams, NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import { API_KEY } from '../utils/API_KEY';

import { useFetch } from '../hooks/useFetch';
import { Intro } from '../components';
import { CategorySimilar, Overview, Cast } from '../Screens';
import ThemeContext from '../contexts/ThemeContext';

const Movie = () => {
  const [movieID, setMovieID] = useState([]);
  const [year, setYear] = useState(0);
  const [voteAverage, setVoteAverage] = useState(0);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  const { path, url } = useRouteMatch();
  const { theme } = useContext(ThemeContext);

  const dataJsonMovieId = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    [movieId]
  );
  const jsonSimilarMovies = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    [movieId]
  );
  const jsonMovieCast = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
    [movieId]
  );

  useEffect(() => {
    dataJsonMovieId && setMovieID(dataJsonMovieId);
    dataJsonMovieId && setVoteAverage(dataJsonMovieId.vote_average);
    dataJsonMovieId && setYear(dataJsonMovieId.release_date.split("-")[0]);
    jsonSimilarMovies && setSimilarMovies(jsonSimilarMovies.results);
    jsonMovieCast && setMovieCast(jsonMovieCast.cast);
  }, [dataJsonMovieId, jsonSimilarMovies, jsonMovieCast]);


  return (
    movieID && (
      <div className={`main-container ${theme}`}>
        <Intro data={movieID} year={year} voteAverage={voteAverage} mediatype="movie" />
        <div className={`nav-container ${theme}`}>
          <nav className={`nav-tvShow ${theme}`}>
            <NavLink to={`${url}/info`} className={`${theme}`} activeClassName="selected" >
              OVERVIEW
            </NavLink>
            <NavLink to={`${url}/cast`} className={` ${theme}`} activeClassName="selected" >
              CAST
            </NavLink>
            {similarMovies.length > 0 && (
              <NavLink to={`${url}/similar`} className={` ${theme}`} activeClassName="selected" >
                SIMILAR
              </NavLink>
            )}
          </nav>
        </div>
        <Switch>
          <Route path={`${path}/info`}>
            <Overview data={movieID} mediatype="movie" />
          </Route>
          <Route path={`${path}/cast`}>
            <Cast data={movieCast} mediatype="movie" />
          </Route>
          {similarMovies.length > 0 && (
            <Route path={`${path}/similar`}>
              <CategorySimilar data={similarMovies} mediatype="movie" />
            </Route>
          )}
        </Switch>
      </div>
    )
  );
};

export { Movie };
