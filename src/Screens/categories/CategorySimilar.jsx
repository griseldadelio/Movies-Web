import React from 'react';
import { Card } from '../../components';

const CategorySimilar = ({ data, mediatype }) => {

  return (
    data && (
      <div>
        <div>
          <h2>
            {mediatype === 'movie' ? 'Similar Movies' : 'Similar Shows'}
          </h2>
        </div>
        <div>
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
