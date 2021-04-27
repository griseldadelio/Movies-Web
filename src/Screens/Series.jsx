import React, { useContext } from 'react';
import { DotLoader } from 'react-spinners';
import { css } from '@emotion/core';

import { CardListPreview, Intro } from '../components';

import TvShowContext from '../contexts/TvShow/TvShowContext';

const overrideDark = css`
  & div {
    background-color: #2196f3;
  }
`;


const Series = () => {
  const { todayTv, currentTv, tvTop, tvShowRandom, tvShow, voteAverage, year, isLoadingTvShow } = useContext(TvShowContext);

  return (
    <>
      {(isLoadingTvShow || !tvShowRandom || !todayTv || !currentTv || !tvTop || !tvShow || !voteAverage || !year) && (
        <div>
          <DotLoader css={overrideDark} size="100" />
        </div>
      )}
      {!isLoadingTvShow && tvShowRandom && todayTv && currentTv && tvTop && tvShow && voteAverage && year && (
        <div>
          <Intro data={tvShowRandom} year={year} voteAverage={voteAverage} mediatype="tv" />
          <CardListPreview mediatype='tv' data={tvShow} sectionTitle='Popular TV Shows' category='popular' isFavs={false} />
          <CardListPreview mediatype='tv' data={tvTop} sectionTitle='Top Rated TV Shows' category='top_rated' isFavs={false} />
          <CardListPreview mediatype='tv' data={currentTv} sectionTitle='Currently Airing TV Shows' category='on_the_air' isFavs={false} />
          <CardListPreview mediatype='tv' data={todayTv} sectionTitle='TV Shows Airing Today' category='airing_today' isFavs={false} />
        </div>
      )}
    </>
  );
};

export { Series };
