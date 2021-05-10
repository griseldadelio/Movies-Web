import React, { useContext, useState, useEffect } from 'react';
import { CardListPreview, Intro } from '../components';

import TvShowContext from '../contexts/TvShow/TvShowContext';
import './style.css'

const Series = () => {
  const [tvShow, setTvShow] = useState([]);
  const [tvShowRandom, setTvShowRandom] = useState([]);
  const [tvTop, setTvTop] = useState([]);
  const [year, setYear] = useState(0);
  const [voteAverage, setVoteAverage] = useState(0);
  const [currentTv, setCurrentTv] = useState([]);
  const [todayTv, setTodayTv] = useState([]);

  const { dataTVShows, dataTVRandom, dataTvTop, tvCurrent, dataTvToday } = useContext(TvShowContext);

  useEffect(() => {
    dataTVShows()
      .then(response => setTvShow(response))
  }, [dataTVShows]);

  useEffect(() => {
    const indexRandom = Math.floor(Math.random() * 20);
    dataTVRandom()
      .then(response => {
        setTvShowRandom(response[indexRandom])
        setYear(response[indexRandom].first_air_date.split("-")[0])
        setVoteAverage(response[indexRandom].vote_average)
      })
  }, [dataTVRandom]);

  useEffect(() => {
    dataTvTop()
      .then(response => setTvTop(response));
  }, [dataTvTop]);

  useEffect(() => {
    tvCurrent()
      .then(response => setCurrentTv(response));
  }, [tvCurrent]);

  useEffect(() => {
    dataTvToday()
      .then(response => setTodayTv(response));
  }, [dataTvToday]);

  return (
    <>
      <div className={`main-container`}>
        <Intro data={tvShowRandom} year={year} voteAverage={voteAverage} mediatype="tv" />
        <CardListPreview mediatype='tv' data={tvShow} sectionTitle='Popular TV Shows' category='popular' />
        <CardListPreview mediatype='tv' data={tvTop} sectionTitle='Top Rated TV Shows' category='top_rated' />
        <CardListPreview mediatype='tv' data={currentTv} sectionTitle='Currently Airing TV Shows' category='on_the_air' />
        <CardListPreview mediatype='tv' data={todayTv} sectionTitle='TV Shows Airing Today' category='airing_today' />
      </div>
    </>
  );
};

export { Series };
