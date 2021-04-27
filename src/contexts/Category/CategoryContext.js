import React, { createContext, useEffect, useState } from 'react';
import { api } from '../../utils'

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [maxPage, setMaxPage] = useState(1000);
  const [page, setPage] = useState(1);
  const [media, setMedia] = useState('tv');
  const [category, setCategory] = useState('popular');
  const [dataByParams, setDataByParams] = useState([]);

  const dataCategory = async () => {
    const { data } = await api.get(`${media}/${category}`, {
      params: {
        media,
        category
      }
    });
    return data.results
  }

  useEffect(() => {
    dataCategory && setDataByParams(dataCategory.results);
    dataCategory && setMaxPage(dataCategory.total_pages);
  }, [dataCategory]);

  return (
    <CategoryContext.Provider
      value={{
        maxPage,
        page,
        setMedia,
        setCategory,
        setPage,
        dataByParams,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
export { CategoryProvider };
