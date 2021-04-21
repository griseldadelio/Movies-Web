import React, { useContext } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { PageButton } from './PageButton';

import ThemeContext from '../contexts/ThemeContext';
import '../styles/pagination.css';

const Pagination = ({ page, maxPage, setPage }) => {
  const { theme } = useContext(ThemeContext);
  const amountOfPages = maxPage > 6 ? 6 : maxPage;

  const toPreviousPage = () => (page !== 1 ? setPage(page - 1) : setPage(page));
  const toNextPage = () => {
    page !== maxPage ? setPage(page + 1) : setPage(page);
  };

  const getPagination = (amountOfPages, page, setPage) => {
    let pagination = [];

    if (amountOfPages >= 6 && page < 5) {
      pagination = [...Array(5)].map((i) => (
        <button setPage={setPage} page={page} key={i + 1} value={i + 1} content={i + 1} />
      ));
      pagination.push(
        <button setPage={setPage} page={page} key={maxPage - 3} value={maxPage - 3} content={'...'} />,
        <button setPage={setPage} page={page} key={maxPage} value={maxPage} content={maxPage} />)
    } else if (amountOfPages >= 6 && page >= 5 && page < maxPage - 4) {
      pagination.push(
        <PageButton setPage={setPage} page={page} key={1} value={1} content={1} />,
        <PageButton setPage={setPage} page={page} key={3} value={3} content={'...'} />,
        <PageButton setPage={setPage} page={page} key={page - 1} value={page - 1} content={page - 1} />,
        <PageButton setPage={setPage} page={page} key={page} value={page} content={page} />,
        <PageButton setPage={setPage} page={page} key={page + 1} value={page + 1} content={page + 1} />,
        <PageButton setPage={setPage} page={page} key={maxPage - 3} value={maxPage - 3} content={'...'} />,
        <PageButton setPage={setPage} page={page} key={maxPage} value={maxPage} content={maxPage} />)
    } else if (amountOfPages >= 6 && page >= maxPage - 4) {
      pagination.push(
        <PageButton setPage={setPage} page={page} key={1} value={1} content={1} />,
        <PageButton setPage={setPage} page={page} key={4} value={4} content={'...'} />,
        <PageButton setPage={setPage} page={page} key={maxPage - 4} value={maxPage - 4} content={maxPage - 4} />,
        <PageButton setPage={setPage} page={page} key={maxPage - 3} value={maxPage - 3} content={maxPage - 3} />,
        <PageButton setPage={setPage} page={page} key={maxPage - 2} value={maxPage - 2} content={maxPage - 2} />,
        <PageButton setPage={setPage} page={page} key={maxPage - 1} value={maxPage - 1} content={maxPage - 1} />,
        <PageButton setPage={setPage} page={page} key={maxPage} value={maxPage} content={maxPage} />)
    } else if (amountOfPages < 6) {
      pagination = [...Array(amountOfPages - 1)].map((i) => (
        <PageButton setPage={setPage} page={page} key={i + 1} value={i + 1} content={i + 1} />
      ))
      pagination.push(
        <PageButton setPage={setPage} page={page} key={maxPage} value={maxPage} content={maxPage} />
      )
    }
    return [...pagination]
  }

  return (
    <>
      {amountOfPages > 1 && (
        <div className={`pagination-container ${theme}`}>
          {page > 1 && (
            <button className={`pagination-arrow`} onClick={() => toPreviousPage()} >
              <Icon.ArrowLeftCircle className={'arrows'} />
            </button>
          )}
          {getPagination(amountOfPages, page, setPage)}
          {page < maxPage && (
            <button className={`pagination-arrow`} onClick={() => toNextPage()} >
              <Icon.ArrowRightCircle className={'arrows'} />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export { Pagination };
