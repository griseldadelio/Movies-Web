import React from 'react';

const PageButton = ({ value, content, setPage, page }) => {
  return (
    <button
      onClick={() => setPage(value)}
      className={`pagination-button ${page === value ? 'active-page' : ''}`}
      value={value}
    >
      {content}
    </button  >
  );
};

export { PageButton };
