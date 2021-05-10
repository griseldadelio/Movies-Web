import React, { useContext, useState, useEffect } from 'react';
import { CardListPreview, Intro } from "../components";

import DataContext from "../contexts/Data/DataContext";
import MovieContext from "../contexts/Movie/MovieContext";
import TvShowContext from "../contexts/TvShow/TvShowContext";
import './style.css'

const Home = () => {
  const [tvShow, setTvShow] = useState([]);
  const [movie, setMovie] = useState([]);
  const [data, setData] = useState([]);
  const [year, setYear] = useState();
  const [voteAverage, setVoteAverage] = useState(0);
  const [mediatype, setMediatype] = useState('');

  const { dataJson } = useContext(DataContext);
  const { dataMovies } = useContext(MovieContext);
  const { dataTVShows } = useContext(TvShowContext);

  useEffect(() => {
    dataTVShows()
      .then(response => setTvShow(response))
  }, [dataTVShows]);

  useEffect(() => {
    dataMovies()
      .then((response) => setMovie(response))
  }, [dataMovies]);

  useEffect(() => {
    const indexRandom = Math.floor(Math.random() * 20);
    dataJson()
      .then(response => {
        setData(response[indexRandom])
        setVoteAverage(response[indexRandom].vote_average)
        setMediatype(response[indexRandom].media_type)
        setYear(response[indexRandom].release_date)
      })
  }, [dataJson]);

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