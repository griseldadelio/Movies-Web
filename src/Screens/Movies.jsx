import React, { useContext } from 'react';
import { DotLoader } from 'react-spinners';
import { css } from '@emotion/core';

import { CardListPreview, Intro, ScrollToTop } from '../components';

import MovieContext from '../contexts/MovieContext';
import ThemeContext from '../contexts/ThemeContext';

const overrideDark = css`
  & div {
    background-color: #2196f3;
  }
`;

const overrideLight = css`
  & div {
    background-color: #992e2e;
  }
`;


const Movies = () => {
  const { theme } = useContext(ThemeContext);
  const { movieRandom, yearMovie, voteAverageMovie, movie, movieTop, movieUpcoming, nowPlaying, isLoadingMovie, } = useContext(MovieContext);

  return (
    <>
      {(isLoadingMovie || !movieRandom || !yearMovie || !voteAverageMovie || !movie || !movieTop || !movieUpcoming || !nowPlaying) && (
        <div className={` ${theme}`}>
          {theme === 'dark' ? (
            <DotLoader css={overrideDark} size='100px' />
          ) : (
              <DotLoader css={overrideLight} size='100px' />
            )}
        </div>
      )}
      {!isLoadingMovie && movieRandom && yearMovie && voteAverageMovie && movie && movieTop && movieUpcoming && nowPlaying && (
        <div className={`main-container ${theme}`}>
          <ScrollToTop />
          <Intro data={movieRandom} year={yearMovie} voteAverage={voteAverageMovie} mediatype='movie' />
          <CardListPreview mediatype='movie' data={movie} sectionTitle='Trending Movies' category='popular' isFavs={false} />
          <CardListPreview mediatype='movie' data={movieTop} sectionTitle='Top Rated Movies' category='top_rated' isFavs={false} />
          <CardListPreview mediatype='movie' data={movieUpcoming} sectionTitle='Upcoming Movies' category='upcoming' isFavs={false} />
          <CardListPreview mediatype='movie' data={nowPlaying} sectionTitle='Now Playing Movies' category='now_playing' isFavs={false} />
        </div>
      )}
    </>
  );
};

export { Movies };
