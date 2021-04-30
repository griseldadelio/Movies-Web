import React from 'react';
import { Card } from '../../components';
import '../style.css'
import './cat.css'

const CategorySimilar = ({ data, mediatype }) => {

  return (
    data && (
      <div className={'category-container'}>
        <h2 className={'px-5'}>
          {mediatype === 'movie' ? 'Similar Movies' : 'Similar Shows'}
        </h2>
        <div className={'main-category-container'}>
          {data && data.map((singleCard) => (
            <Card key={singleCard.id}
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
