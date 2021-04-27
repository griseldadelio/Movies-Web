import React, { useContext, useEffect, useState } from 'react';

import { CardListPreview, Intro } from "../components";

import DataContext from "../contexts/Data/DataContext";
import MovieContext from "../contexts/Movie/MovieContext";
import TvShowContext from "../contexts/TvShow/TvShowContext";

import '../styles/main.css';


const Home = () => {
  const { data, year, voteAverage, mediatype } = useContext(DataContext);
  const { dataMovies } = useContext(MovieContext);
  const { tvShow } = useContext(TvShowContext);

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    dataMovies()
      .then((response) =>
        setMovie(response),
      )
  }, [dataMovies]);

  return (
    <>
      <div className={`main-container`}>
        <Intro data={data} year={year} voteAverage={voteAverage} mediatype={mediatype} />
        <CardListPreview mediatype="movie" data={movie} sectionTitle="Trending Movies" category="popular" isFavs={false} />
        <CardListPreview mediatype="tv" data={tvShow} sectionTitle="Trending TV Shows" category="popular" isFavs={false} />
      </div>
    </>
  );
};

export { Home };