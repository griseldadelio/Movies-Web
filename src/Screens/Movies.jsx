import React, { useContext } from 'react';

import { CardListPreview, Intro } from '../components';
import MovieContext from '../contexts/Movie/MovieContext';

const Movies = () => {
  const { movieRandom, movieTop, movieUpcoming, nowPlaying, movie } = useContext(MovieContext);

  return (
    <>
      <div className={`main-container`}>
        <Intro data={movieRandom} year={movieRandom.release_date} voteAverage={movieRandom.vote_average} mediatype='movie' />
        <CardListPreview mediatype='movie' data={movie} sectionTitle='Trending Movies' category='popular' isFavs={false} />
        <CardListPreview mediatype='movie' data={movieTop} sectionTitle='Top Rated Movies' category='top_rated' isFavs={false} />
        <CardListPreview mediatype='movie' data={movieUpcoming} sectionTitle='Upcoming Movies' category='upcoming' isFavs={false} />
        <CardListPreview mediatype='movie' data={nowPlaying} sectionTitle='Now Playing Movies' category='now_playing' isFavs={false} />
      </div>

    </>
  );
};

export { Movies };
