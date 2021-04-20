import React, { createContext, useState } from 'react';

const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(100);

  return (
    <PaginationContext.Provider
      value={{
        page,
        setPage,
        setMaxPage,
        maxPage,
      }}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
export { PaginationProvider };
