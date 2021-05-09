import React, { createContext, useState, useEffect } from 'react';
import { api } from '../../utils';

const TvShowContext = createContext();

const TvShowProvider = ({ children }) => {
  const [tvShow, setTvShow] = useState([]);
  const [tvShowRandom, setTvShowRandom] = useState([]);
  const [tvTop, setTvTop] = useState([]);
  const [year, setYear] = useState(0);
  const [voteAverage, setVoteAverage] = useState(0);
  const [currentTv, setCurrentTv] = useState([]);
  const [todayTv, setTodayTv] = useState([]);
  const [isLoadingTvShow, setIsLoadingTvShow] = useState(true);
  const [seasonNumber, setSeasonNumber] = useState(1);

  const dataTVShows = async () => {
    const { data } = await api.get(`/tv/popular`);
    return data.results
  }


  const dataTVRandom = async () => {
    const { data } = await api.get(`/tv/popular`, {
      params: {
        page: Math.floor(Math.random() * 100) + 1
      }
    });
    return data.results
  }


  const dataTvTop = async () => {
    const { data } = await api.get(`/tv/top_rated?`);
    return data.results
  }


  const tvCurrent = async () => {
    const { data } = await api.get(`/tv/on_the_air?`);
    return data.results
  }


  const dataTvToday = async () => {
    const { data } = await api.get(`/tv/airing_today?`);
    return data.results
  }

  const indexRandom = Math.floor(Math.random() * 20);

  useEffect(() => {
    setIsLoadingTvShow(true);
    dataTVShows()
      .then(response => setTvShow(response))

    dataTVRandom()
      .then(response => {
        setTvShowRandom(response[indexRandom])
        setYear(response[indexRandom].first_air_date.split("-")[0])
        setVoteAverage(response[indexRandom].vote_average)
      })

    dataTvTop()
      .then(response => setTvTop(response));

    tvCurrent()
      .then(response => setCurrentTv(response));

    dataTvToday()
      .then(response => setTodayTv(response));
    setIsLoadingTvShow(false);
  }, []);


  return (
    <TvShowContext.Provider
      value={{ todayTv, currentTv, tvTop, tvShow, tvShowRandom, year, voteAverage, isLoadingTvShow, seasonNumber, setSeasonNumber }}>
      {children}
    </TvShowContext.Provider>
  );
};

export default TvShowContext;
export { TvShowProvider };
