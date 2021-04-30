import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Card, GoBackButton } from '../../components';

import CategoryContext from '../../contexts/Category/CategoryContext';
import '../style.css';
import './cat.css'

const Categories = () => {
  const { media, category } = useParams();
  const { dataByParams, setMedia, setCategory, isLoading } = useContext(CategoryContext);

  const title2 = category.split('_').join(' ');

  useEffect(() => {
    setMedia(media);
    setCategory(category);
  }, [media, category, setCategory, setMedia]);

  return (
    <>
      <GoBackButton />
      {!isLoading && (
        <>
          <div className={'main-container'}>
            <div className={'category-title-container'}>
              <h2>
                {media === 'movie' ? `${title2} movies` : `${title2} tv shows`}
              </h2>
            </div>
            <div className={'main-category-container'}>
              {dataByParams.map((singleCard) =>
                media === 'movie' && singleCard.name ? (
                  <div className={'main-category-container'} key={singleCard.id}></div>
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
                      }}
                    />
                  )
              )}
            </div>
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel={'...'}
              breakClassName={'break-me'}
              // pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              // onPageChange={(actualPage) => {
              //   history.push(`${endpoint}${actualPage.selected + 1}`)
              //   setPage(actualPage.selected + 1)
              // }}
              containerClassName={'pagination'}
              activeClassName={'active'}
              breakLinkClassName="pagination-link"
              pageLinkClassName="pagination-link"
              activeLinkClassName="pagination-link"
              nextLinkClassName="pagination-link"
              previousLinkClassName="pagination-link"
            />
          </div>
        </>
      )}
    </>
  );
};

export { Categories };
