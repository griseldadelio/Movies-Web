import React, { useEffect, useContext } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { DotLoader } from "react-spinners";

import { Card, GoBackButton } from '../../components';
import CategoryContext from '../../contexts/Category/CategoryContext';
import './categorie.css'


const Categories = () => {
  const { media, category } = useParams();
  const { setPage, maxPage, dataByParams, setMedia, setCategory, isLoading } = useContext(CategoryContext);
  const title2 = category.split("_").join(" ");

  const params = new URLSearchParams();

  useEffect(() => {
    setMedia(media);
    setCategory(category);
  }, [media, category, setCategory, setMedia]);

  return (
    <>
      <GoBackButton />
      {isLoading && (
        <div className='container-loading' >
          <DotLoader />
        </div>
      )}
      {!isLoading && (
        <>
          <div className={'main-container'}>
            <h2 className={'category-title-container'}>
              {media === "movie" ? `${title2} movies` : `${title2} tv shows`}
            </h2>
            <div className={'main-category-container'}>
              {dataByParams.map((singleCard) =>
                <Card key={singleCard.id}
                  cardInfo={{
                    id: singleCard.id,
                    src: singleCard.poster_path,
                    title:
                      media === "movie" ? singleCard.title : singleCard.name,
                    votes: singleCard.vote_average,
                    key: singleCard.id,
                    mediatype: media,
                  }}
                />
              )}
            </div>
            <div className={'container mt-4'}>
              <ReactPaginate
                previousLabel={<Icon.ArrowLeftCircle />}
                nextLabel={<Icon.ArrowRightCircle />}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={maxPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={(actualPage) => {
                  setPage(actualPage.selected + 1)
                  params.set('page', `${actualPage.selected + 1}`);
                  window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
                }}
                containerClassName={'pagination'}
                activeClassName={'active'}
                breakLinkClassName="pagination-link"
                pageLinkClassName="pagination-link"
                activeLinkClassName="pagination-link"
                nextLinkClassName="arrows"
                previousLinkClassName="arrows"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { Categories };
