import React from 'react';
import { CardCast } from '../../components';

const Cast = ({ data, mediatype }) => {

  return (
    data && (
      <div>
        {data &&
          data.map((singleCard) => (
            <CardCast
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
