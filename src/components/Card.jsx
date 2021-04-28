import React from 'react';
import { imageBaseUrl } from '../utils/ImageBaseUrl';
import { useHistory } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import '../styles/card.css'

import { Votes } from './Votes';
import { FavIconToggle } from './FavIconToggle';
import noPosterFound from '../assets/img/404PosterNotFound.jpg';


const Card = ({ cardInfo }) => {
  const history = useHistory();

  const { id, src, title, votes, mediatype, like } = cardInfo;

  const handleMediaDetails = (event, id, mediatype) => {
    if (event.key === 'Enter' || event.type === 'click') {
      history.push(`/${mediatype}/${id}/info`);
    }
  };

  return (
    <article id={id} key={id} className='media-card' mediatype={mediatype} onClick={(event) => handleMediaDetails(event, id, mediatype)} onKeyDown={(event) => handleMediaDetails(event, id, mediatype)} >
      <Image className='size-img' src={src ? `${imageBaseUrl}${src}` : noPosterFound}
        alt={`Image showing poster of '${title}'`}
        onClick={(event) => handleMediaDetails(event, id, mediatype)}
      />
      <h6 className={`mt-3`} onClick={(event) => handleMediaDetails(event, id, mediatype)}>
        {title}
      </h6>
      {title && <Votes contentName={title} voteAverage={votes} />}
      <FavIconToggle like={like} id={id} src={src} title={title} votes={votes} mediatype={mediatype} />

    </article>
  );
};

export { Card };
