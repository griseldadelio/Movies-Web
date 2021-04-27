import React from 'react';
import { Image } from 'react-bootstrap';
import { imageBaseUrl } from '../utils/ImageBaseUrl';
import noImageFound from '../assets/img/user.png';

const CardCast = ({ id, mediatype, src, name, character }) => {

  return (
    <article id={id} key={id} mediatype={mediatype} >
      <div>
        <Image src={src ? `${imageBaseUrl}${src}` : noImageFound} alt={`Image showing poster of '${character}/${name}'`} />
      </div>
      <div >
        <h3 id='media-card-name'>
          {name}
        </h3>
        <h3>
          {character}
        </h3>
      </div>
    </article>
  );
};

export { CardCast };
