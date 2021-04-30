import React from 'react';
import { Image } from 'react-bootstrap';
import { imageBaseUrl } from '../../../utils/ImageBaseUrl';
import noImageFound from '../../../assets/img/user.png';

import './cardCast.css'

const CardCast = ({ id, mediatype, src, name, character }) => {

  return (
    <article className={'media-card-cast'} id={id} key={id} mediatype={mediatype} >
      <div className={'img-container'}>
        <Image className={'card-img border border-white'} src={src ? `${imageBaseUrl}${src}` : noImageFound} alt={`Image showing poster of '${character}/${name}'`} />
      </div>
      <div className={'cast-text-container'} >
        <h4 className={'pt-2'}>
          {name}
        </h4>
        <h6 className={'media-card-character'}>
          {character}
        </h6>
      </div>
    </article>
  );
};

export { CardCast };
