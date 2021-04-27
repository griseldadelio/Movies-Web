import React, { useEffect, useState, useContext } from 'react';
import { useParams, Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { API_KEY } from '../utils/API_KEY';

import { Intro } from '../components';
import { CategorySimilar, Overview, Episodes, Cast } from '.';

import TvShowContext from '../contexts/TvShow/TvShowContext';

const Shows = () => {
  const [tvShowID, setTvShowID] = useState([]);
  const [year, setYear] = useState(0);
  const [voteAverage, setVoteAverage] = useState(0);
  const [similarShows, setSimilarShows] = useState([]);
  const [seasons, setSeasons] = useState(0);
  const [castTV, setCastTV] = useState([]);
  const { TVId } = useParams();
  const { path, url } = useRouteMatch();
  const { seasonNumber } = useContext(TvShowContext);

  const dataJsonTVID = useFetch(
    `https://api.themoviedb.org/3/tv/${TVId}?api_key=${API_KEY}`,
    [TVId]
  );

  const dataJsonSimilarShows = useFetch(
    `https://api.themoviedb.org/3/tv/${TVId}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    [TVId]
  );

  const dataCastTv = useFetch(
    `https://api.themoviedb.org/3/tv/${TVId}/credits?api_key=${API_KEY}&language=en-US`,
    [TVId]
  );

  useEffect(() => {
    dataJsonTVID && setTvShowID(dataJsonTVID);
    dataJsonTVID && setVoteAverage(dataJsonTVID.vote_average);
    dataJsonTVID && setYear(dataJsonTVID.first_air_date.split('-')[0]);
    dataJsonTVID && setSeasons(dataJsonTVID.seasons);
    dataJsonSimilarShows && setSimilarShows(dataJsonSimilarShows.results);
    dataCastTv && setCastTV(dataCastTv.cast);
  }, [dataJsonTVID, dataJsonSimilarShows, dataCastTv]);


  return (
    tvShowID && (
      <div className={`main-container`}>
        <Intro data={tvShowID} year={year} voteAverage={voteAverage} mediatype='tv' />
        <div className={`nav-container`}>
          {' '}
          <nav>
            <NavLink to={`${url}/info`} activeClassName='selected' >
              OVERVIEW
            </NavLink>
            <NavLink to={`${url}/season/${seasonNumber}`} activeClassName='selected' >
              EPISODES
            </NavLink>
            {similarShows.length > 0 && (
              <NavLink to={`${url}/similar`} activeClassName='selected'>
                SIMILAR
              </NavLink>
            )}
            <NavLink to={`${url}/cast`} activeClassName='selected' >
              CAST
            </NavLink>
          </nav>
        </div>

        <Switch>
          <Route path={`${path}/info`}>
            <Overview data={tvShowID} mediatype='tv' />
          </Route>
          <Route path={`${path}/season/:seasonNumber`}>
            <Episodes seasons={seasons} />
          </Route>
          {similarShows.length > 0 && (
            <Route path={`${path}/similar`}>
              <CategorySimilar data={similarShows} mediatype='tv' />
            </Route>
          )}
          <Route path={`${path}/cast`}>
            <Cast data={castTV} mediatype='tv' />
          </Route>
        </Switch>
      </div>
    )
  );
};

export { Shows };
