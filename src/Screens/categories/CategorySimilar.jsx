import React, { useContext } from 'react';
import { Card } from '../../components';

import ThemeContext from '../../contexts/ThemeContext';

const CategorySimilar = ({ data, mediatype }) => {
  const { theme } = useContext(ThemeContext);

  return (
    data && (
      <div className={` ${theme}`}>
        <div>
          <h2 className={`${theme} `}>
            {mediatype === 'movie' ? 'Similar Movies' : 'Similar Shows'}
          </h2>
        </div>
        <div className={`${theme}`}>
          {data &&
            data.map((singleCard) => (
              <Card
                cardInfo={{
                  id: singleCard.id,
                  src: singleCard.poster_path,
                  title:
                    mediatype === 'movie'
                      ? singleCard.title
                      : singleCard.original_name,
                  votes: singleCard.vote_average,
                  key: singleCard.id,
                  mediatype: mediatype,
                }}
              />
            ))}
        </div>
      </div>
    )
  );
};

export { CategorySimilar };
