import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { API_KEY } from '../../utils/API_KEY';
import { useFetch } from '../../hooks/useFetch';
import { api } from '../../utils'

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [media, setMedia] = useState('movie');
  const [inputValue, setInputValue] = useState();
  const [results, setResults] = useState([]);
  const [visibleResults, setVisibleResults] = useState(false);
  const [searchPage, setSearchPage] = useState(1);

  // const history = useHistory()
  // const params = new URLSearchParams(window.location.search)
  // const queryParam = params.get('s');

  const handleSearchBarVisible = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      setSearchVisible(!searchVisible);
      setVisibleResults(false);
    }
  };

  const handleMediaClick = (event) => {
    setMedia(event.target.value);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.input.value);
    setVisibleResults(true);
  };
  console.log(inputValue)

  const handleCloseSearchClick = () => {
    setVisibleResults(false);
    setSearchVisible(false);
  };

  const searchedData = useFetch(
    `https://api.themoviedb.org/3/search/${!media ? "movie" : media}?api_key=${API_KEY}&language=en-US${
    inputValue && `&query=${inputValue}`}&page=${searchPage}`,
    [inputValue, media, searchPage]
  );

  useEffect(() => {
    searchedData && setResults(searchedData.results);
  }, [searchedData]);

  // const searchedData = async () => {
  //   const { data } = await api.get(`/search/${!media ? "movie" : media}/${
  //     inputValue && `&query=${inputValue}`}&page=${searchPage}`, {
  //     params: {
  //       media,
  //       inputValue,
  //       searchPage
  //     }
  //   });
  //   console.log(data)
  //   return data.results
  // }
  // useEffect(() => {
  //   searchedData()
  //     .then(response => setResults(response.results));
  // }, []);


  return (
    <SearchContext.Provider value={{
      searchPage, searchVisible, visibleResults, results, media, inputValue,
      handleSearchBarVisible, handleMediaClick, setSearchVisible, setVisibleResults,
      handleInputChange, handleCloseSearchClick, setSearchPage
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
export { SearchProvider };
