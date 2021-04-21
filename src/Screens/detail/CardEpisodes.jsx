import React, { useContext } from 'react';
import { imageBaseUrl } from '../../utils/ImageBaseUrl';

import noImageFound from '../../assets/img/image-not-found-scaled-1150x647.png';

import ThemeContext from '../../contexts/ThemeContext';

const CardEpisodes = ({ src, episode, title, overview, date }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <article >
      <div >
        <img src={src ? `${imageBaseUrl}${src}` : noImageFound} />
      </div>
      <div >
        <span className={`${theme}`}>{episode}</span>
        <h3 className={`${theme}`}> {title} </h3>
      </div>
      <span className={`card-episode-overview ${theme}`}>{overview}</span>
      <span className={`card-episode-date ${theme}`}>{date}</span>
    </article>
  );
};

export { CardEpisodes };
