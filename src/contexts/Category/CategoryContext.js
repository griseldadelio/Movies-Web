import React, { createContext, useEffect, useState } from 'react';
import { api } from '../../utils'

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [media, setMedia] = useState('tv');
  const [category, setCategory] = useState('popular');
  const [dataByParams, setDataByParams] = useState([]);

  const dataCategory = async () => {
    const { data } = await api.get(`/${media}/${category}?`, {
      params: {
        media,
        category
      }
    });
    return data.results
  }

  useEffect(() => {
    dataCategory()
      .then(response => {
        setDataByParams(response);
      })
  }, []);

  return (
    <CategoryContext.Provider value={{ setMedia, setCategory, dataByParams }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
export { CategoryProvider };
