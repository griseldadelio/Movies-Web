import React, { useContext, useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';
import { css } from '@emotion/core';

import { CardListPreview, Intro } from '../components';

import MovieContext from '../contexts/Movie/MovieContext';

const overrideDark = css`
  & div {
    background-color: #2196f3;
  }
`;

const Movies = () => {
  const [movieRandom, setMovieRandom] = useState([]);
  const [movieTop, setMovieTop] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [movie, setMovie] = useState([]);

  const { dataMovies, dataMovieTop, dataUpcoming, dataNow, dataMovieRandom } = useContext(MovieContext);

  const indexRandom = Math.floor(Math.random() * 20);


  // useEffect(() => {
  //   dataMovies()
  //     .then((response) =>
  //       setMovie(response),
  //     )
  //   dataMovieTop()
  //     .then((response) =>
  //       setMovieTop(response),
  //     )
  //   dataNow()
  //     .then((response) =>
  //       setNowPlaying(response),
  //     )
  //   dataUpcoming()
  //     .then((response) =>
  //       setMovieUpcoming(response),
  //     )
  //   dataMovieRandom()
  //     .then((response) =>
  //       setMovieRandom(response[indexRandom]),
  //     )
  // }, [dataMovieRandom, dataMovieTop, dataMovies, dataNow, dataUpcoming, indexRandom]);

  return (
    <>
      <div>
        <DotLoader css={overrideDark} size='100px' />
      </div>
      <div className={`main-container`}>
        <Intro data={movieRandom} year={movieRandom.release_date} voteAverage={movieRandom.voteAverageMovie} mediatype='movie' />
        <CardListPreview mediatype='movie' data={movie} sectionTitle='Trending Movies' category='popular' isFavs={false} />
        <CardListPreview mediatype='movie' data={movieTop} sectionTitle='Top Rated Movies' category='top_rated' isFavs={false} />
        <CardListPreview mediatype='movie' data={movieUpcoming} sectionTitle='Upcoming Movies' category='upcoming' isFavs={false} />
        <CardListPreview mediatype='movie' data={nowPlaying} sectionTitle='Now Playing Movies' category='now_playing' isFavs={false} />
      </div>

    </>
  );
};

export { Movies };
