import React from 'react';
import { CardCast } from '../../components';
import './detail.css'

const Cast = ({ data, mediatype }) => {

  return (
    data && (
      <div className={'cast-container'}>
        {data &&
          data.map((singleCard) => (
            <CardCast
              key={singleCard.id}
              id={singleCard.id}
              mediatype={mediatype}
              src={singleCard.profile_path}
              name={singleCard.name}
              character={singleCard.character}
            >
            </CardCast>
          ))}
      </div>
    )
  );
};

export { Cast };
