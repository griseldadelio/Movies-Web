import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from '../../utils';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [newSearch, setNewSearch] = useState(false);
  const [media, setMedia] = useState('movie');
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);
  const [visibleResults, setVisibleResults] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchPage, setSearchPage] = useState(1);
  const [searchMaxPage, setSearchMaxPage] = useState(1000);

  const history = useHistory();

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

  const handleCloseSearchClick = () => {
    setVisibleResults(false);
    setSearchVisible(false);
  };

  const handleShowResultsClick = (event) => {
    event.preventDefault();
    setShowResults(true);
  };

  const searchData = async () => {
    const { data } = await api.get(`/search/${!media ? "movie" : media}?${inputValue && `&query=${inputValue}`}&page=${searchPage}`, {
      params: {
        query: inputValue,
        page: searchPage
      }
    })
    console.log(data.results)
    return data.results
  }

  useEffect(() => {
    searchData()
      .then(response => setResults(response))
    searchData()
      .then(response => setSearchMaxPage(response.total_pages))
  })

  // useEffect(() => {
  //   searchedData && setResults(searchedData.results);
  //   searchedData && setSearchMaxPage(searchedData.total_pages);
  //   searchedData && setNewSearch(false);
  // }, [searchedData]);

  return (
    <SearchContext.Provider
      value={{
        searchPage,
        searchVisible,
        visibleResults,
        results,
        media,
        inputValue,
        showResults,
        searchMaxPage,
        handleSearchBarVisible,
        handleMediaClick,
        setSearchVisible,
        setVisibleResults,
        handleInputChange,
        handleCloseSearchClick,
        handleShowResultsClick,
        setSearchPage,
        setNewSearch,
        setShowResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
export { SearchProvider };
