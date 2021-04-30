import React from 'react';
import { imageBaseUrl } from '../../utils/ImageBaseUrl';
import './detail.css'
import noImageFound from '../../assets/img/image-not-found-scaled-1150x647.png';

const CardEpisodes = ({ src, title, overview, date }) => {

  return (
    <article className={'card-episode'}>
      <div className={'img-episode-container'}>
        <img className={'img-episode'} src={src ? `${imageBaseUrl}${src}` : noImageFound} alt='not found' />
      </div>
      <div className={'card-episode-title '}>
        <h4> {title} </h4>
      </div>
      <span className={`card-episode-date pt-3`}>{date}</span>
      <span className={`card-episode-overview pt-3`}>{overview}</span>
    </article>
  );
};

export { CardEpisodes };
