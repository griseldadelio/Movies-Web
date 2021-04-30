import React, { useContext } from 'react';
import { CardListPreview, Intro } from '../components';

import TvShowContext from '../contexts/TvShow/TvShowContext';
import './style.css'

const Series = () => {
  const { todayTv, currentTv, tvTop, tvShowRandom, tvShow, voteAverage, year } = useContext(TvShowContext);

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
