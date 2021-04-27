import React from 'react';
import { imageBaseUrl } from '../../utils/ImageBaseUrl';

import noImageFound from '../../assets/img/image-not-found-scaled-1150x647.png';

const CardEpisodes = ({ src, episode, title, overview, date }) => {

  return (
    <article >
      <div >
        <img src={src ? `${imageBaseUrl}${src}` : noImageFound} alt='not found' />
      </div>
      <div >
        <span>{episode}</span>
        <h3> {title} </h3>
      </div>
      <span className={`card-episode-overview`}>{overview}</span>
      <span className={`card-episode-date`}>{date}</span>
    </article>
  );
};

export { CardEpisodes };
