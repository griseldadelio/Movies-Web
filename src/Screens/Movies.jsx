import React, { useContext } from 'react';

import { CardListPreview, Intro } from '../components';
import MovieContext from '../contexts/Movie/MovieContext';
import './style.css'

const Movies = () => {
  const { movieRandom, movieTop, movieUpcoming, nowPlaying, movie } = useContext(MovieContext);

  return (
    <>
      <div className={`main-container`}>
        <Intro data={movieRandom} year={movieRandom.release_date} voteAverage={movieRandom.vote_average} mediatype='movie' />
        <CardListPreview mediatype='movie' data={movie} sectionTitle='Trending Movies' category='popular' />
        <CardListPreview mediatype='movie' data={movieTop} sectionTitle='Top Rated Movies' category='top_rated' />
        <CardListPreview mediatype='movie' data={movieUpcoming} sectionTitle='Upcoming Movies' category='upcoming' />
        <CardListPreview mediatype='movie' data={nowPlaying} sectionTitle='Now Playing Movies' category='now_playing' />
      </div>

    </>
  );
};

export { Movies };
