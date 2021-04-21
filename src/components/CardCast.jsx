import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { imageBaseUrl } from '../utils/ImageBaseUrl';
import noImageFound from '../assets/img/user.png';
import ThemeContext from '../contexts/ThemeContext';

const CardCast = ({ id, mediatype, src, name, character }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <article id={id} key={id} mediatype={mediatype} >
      <div>
        <Image src={src ? `${imageBaseUrl}${src}` : noImageFound} alt={`Image showing poster of '${character}/${name}'`} />
      </div>
      <div >
        <h3 className={`${theme} `} id='media-card-name'>
          {name}
        </h3>
        <h3 className={`${theme} `}>
          {character}
        </h3>
      </div>
    </article>
  );
};

export { CardCast };
