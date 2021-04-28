import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, GoBackButton } from '../../components';

import CategoryContext from '../../contexts/Category/CategoryContext';
import FavsContext from '../../contexts/Favorite/FavsContext';

import './style.css'

const Categories = () => {
  const { media, category } = useParams();
  const { favsArray } = useContext(FavsContext);
  const { dataByParams, setMedia, setCategory, isLoading } = useContext(CategoryContext);

  const title2 = category.split('_').join(' ');

  useEffect(() => {
    setMedia(media);
    setCategory(category);
  }, [media, category, setCategory, setMedia]);

  return (
    <>
      <GoBackButton />
      {!isLoading && favsArray && (
        <>
          <div className='main-container'>
            <div>
              <h2 className='category-title-container'>
                {media === 'movie' ? `${title2} movies` : `${title2} tv shows`}
              </h2>
            </div>
            <div className='main-category-container'>
              {dataByParams.map((singleCard) =>
                media === 'movie' && singleCard.name ? (
                  <div className='main-category-container'></div>
                ) : (
                    <Card key={singleCard.id}
                      cardInfo={{
                        id: singleCard.id,
                        src: singleCard.poster_path,
                        title:
                          media === 'movie' ? singleCard.title : singleCard.name,
                        votes: singleCard.vote_average,
                        key: singleCard.id,
                        mediatype: media,
                        like: favsArray.includes(singleCard.id),
                      }}
                    />
                  )
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { Categories };
