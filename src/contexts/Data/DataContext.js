import React, { createContext } from 'react';
import { api } from '../../utils';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const pageRandom = Math.floor(Math.random() * 100) + 1;

  const dataJson = async () => {
    const { data } = await api.get(`/trending/all/day?page=${pageRandom}`, {
      params: {
        pageRandom
      }
    });
    return data.results
  }

  return (
    <DataContext.Provider value={{ dataJson }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
