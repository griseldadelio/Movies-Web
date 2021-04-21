import React, { useContext } from 'react';
import { CardCast } from '../../components';

import ThemeContext from '../../contexts/ThemeContext';

const Cast = ({ data, mediatype }) => {
  const { theme } = useContext(ThemeContext);

  return (
    data && (
      <div className={`${theme}`}>
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
