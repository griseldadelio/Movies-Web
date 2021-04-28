import React, { createContext, useState, useEffect } from 'react';
import { api } from '../../utils';


const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [year, setYear] = useState();
  const [voteAverage, setVoteAverage] = useState(0);
  const [mediatype, setMediatype] = useState('');

  const pageRandom = Math.floor(Math.random() * 100) + 1;
  const indexRandom = Math.floor(Math.random() * 20);

  const dataJson = async () => {
    const { data } = await api.get(`/trending/all/day?page=${pageRandom}`, {
      params: {
        pageRandom
      }
    });
    return data.results
  }


  useEffect(() => {
    dataJson()
      .then(response => setData(response[indexRandom]))
    dataJson()
      .then(response => {
        setVoteAverage(response[indexRandom].vote_average)
      })
    dataJson()
      .then(response => {
        setMediatype(response[indexRandom].media_type)
      })
    dataJson()
      .then(response => {
        setYear(response[indexRandom].release_date.split('-')[0])
      })
  }, []);


  return (
    <DataContext.Provider value={{ data, year, voteAverage, mediatype }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
