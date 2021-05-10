import React, { createContext } from 'react';
import { api } from '../../utils';

const TvShowContext = createContext();

const TvShowProvider = ({ children }) => {
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

  return (
    <TvShowContext.Provider
      value={{ dataTVShows, dataTVRandom, dataTvToday, dataTvTop, tvCurrent }}>
      {children}
    </TvShowContext.Provider>
  );
};

export default TvShowContext;
export { TvShowProvider };
