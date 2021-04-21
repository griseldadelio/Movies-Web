import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { DoteLoader } from 'react-spinners';
import { css } from '@emotion/core';

import { Card, Pagination, ScrollToTop, GoBackButton } from '../../components';

import ThemeContext from '../../contexts/ThemeContext';
import CategoryContext from '../../contexts/CategoryContext';
import FavsContext from '../../contexts/FavsContext';

const overrideDark = css`
  & div {
    background-color: #2196f3;
  }
`;

const overrideLight = css`
  & div {
    background-color: #992e2e;
  }
`;

const Categories = () => {
  const { media, category } = useParams();
  const { theme } = useContext(ThemeContext);
  const { favsArray } = useContext(FavsContext);
  const { page, setPage, maxPage, dataByParams, setMedia, setCategory, isLoading } = useContext(CategoryContext);

  const title2 = category.split('_').join(' ');

  useEffect(() => {
    setMedia(media);
    setCategory(category);
  }, [media, category]);

  return (
    <>
      <GoBackButton />
      {isLoading && (
        <div className={` ${theme}`}>
          {theme === 'dark' ? (
            <DoteLoader css={overrideDark} size='100' />
          ) : (
              <DoteLoader css={overrideLight} size='100' />
            )}
        </div>
      )}
      {!isLoading && favsArray && (
        <>
          <ScrollToTop />
          <div className={`${theme}`}>
            <div>
              <h2 className={` ${theme} `} >
                {media === 'movie' ? `${title2} movies` : `${title2} tv shows`}
              </h2>
            </div>
            <div className={`${theme}`}>
              {dataByParams.map((singleCard) =>
                media === 'movie' && singleCard.name ? (
                  <div>hola gri</div>
                ) : (
                    <Card
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
            <Pagination page={page} maxPage={maxPage} setPage={setPage} />
          </div>
        </>
      )}
    </>
  );
};

export { Categories };
