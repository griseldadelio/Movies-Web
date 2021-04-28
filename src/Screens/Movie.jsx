import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';

import { api } from '../utils';
import { Intro } from '../components';
import { CategorySimilar, Overview, Cast } from '../Screens';

import './style.css'

const Movie = () => {
  const [movieID, setMovieID] = useState([]);
  const [year, setYear] = useState(0);
  const [voteAverage, setVoteAverage] = useState(0);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  const { path, url } = useRouteMatch();

  const dataJsonMovieId = async () => {
    const data = api.get(`/movie/${movieId}?`, {
      params: {
        movieId
      }
    });
    return data
  }

  const jsonSimilarMovies = async () => {
    const data = api.get(`/movie/${movieId}/similar?`, {
      params: {
        movieId
      }
    });
    return data
  }

  const jsonMovieCast = async () => {
    const data = api.get(`/movie/${movieId}/credits?`, {
      params: {
        movieId
      }
    });
    return data
  }


  useEffect(() => {
    dataJsonMovieId()
      .then(response => setMovieID(response.data));
    dataJsonMovieId()
      .then(response => setVoteAverage(response.data.vote_average));
    dataJsonMovieId()
      .then(response => setYear(response.data.release_date.split("-")[0]));

    jsonSimilarMovies()
      .then(response => setSimilarMovies(response.data.results));

    jsonMovieCast()
      .then(response => setMovieCast(response.data.cast));
  }, []);

  return (
    movieID && (
      <div className={`main-container`}>
        <Intro data={movieID} year={year} voteAverage={voteAverage} mediatype="movie" />
        <div className={`nav-container`}>
          <nav className={`nav-tvShow `}>
            <NavLink className='navlink' to={`${url}/info`} activeClassName="selected" >
              OVERVIEW
            </NavLink>
            <NavLink className='navlink' to={`${url}/cast`} activeClassName="selected" >
              CAST
            </NavLink>
            {similarMovies.length > 0 && (
              <NavLink className='navlink' to={`${url}/similar`} activeClassName="selected" >
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
