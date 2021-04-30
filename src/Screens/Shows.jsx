import React, { useEffect, useState, useContext } from 'react';
import { useParams, Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import { api } from '../utils';

import { Intro } from '../components';
import { CategorySimilar, Overview, Episodes, Cast } from '.';

import TvShowContext from '../contexts/TvShow/TvShowContext';
import './style.css'

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

  const dataJsonTVID = async () => {
    const { data } = await api.get(`/tv/${TVId}?`, {
      params: {
        TVId
      }
    });
    return data
  }

  const dataJsonSimilarShows = async () => {
    const { data } = await api.get(`/tv/${TVId}/similar?`, {
      params: {
        TVId
      }
    });
    return data.results
  }

  const dataCastTv = async () => {
    const { data } = await api.get(`/tv/${TVId}/credits?`, {
      params: {
        TVId
      }
    });
    console.log(data)
    return data.cast
  }

  useEffect(() => {
    dataJsonTVID()
      .then(response => setTvShowID(response));
    dataJsonTVID()
      .then(response => setVoteAverage(response.vote_average));
    dataJsonTVID()
      .then(response => setYear(response.release_date));
    dataJsonTVID()
      .then((response) =>
        setSeasons(response.seasons));
  }, []);

  useEffect(() => {
    dataJsonSimilarShows()
      .then(response => {
        setSimilarShows(response)
      })
  }, []);

  useEffect(() => {
    dataCastTv()
      .then(response => {
        setCastTV(response)
      })
  }, []);

  return (
    tvShowID && (
      <div className={`main-container`}>
        <Intro data={tvShowID} year={year} voteAverage={voteAverage} mediatype='tv' />
        <div className={`nav-container`}>
          {' '}
          <nav className={`nav-tvShow `}>
            <NavLink className={'navlink'} to={`${url}/info`} activeClassName='selected' >
              OVERVIEW
            </NavLink>
            <NavLink className={'navlink'} to={`${url}/season/${seasonNumber}`} activeClassName='selected' >
              EPISODES
            </NavLink>
            {similarShows.length > 0 && (
              <NavLink className={'navlink'} to={`${url}/similar`} activeClassName='selected'>
                SIMILAR
              </NavLink>
            )}
            <NavLink className={'navlink'} to={`${url}/cast`} activeClassName='selected' >
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