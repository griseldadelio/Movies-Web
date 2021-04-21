import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import '../styles/search.css'

import SearchContext from '../contexts/SearchContext';
import ThemeContext from '../contexts/ThemeContext';

const SearchBar = () => {
  const { searchVisible, handleMediaClick, handleInputChange, handleCloseSearchClick, setNewSearch, setShowResults } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);
  const history = useHistory();

  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      history.push('/discover');
      setNewSearch(true);
      setShowResults(false)
    }
  };

  return (
    <div className={`main-searchbar-container text-white ${theme}`}>
      <div className={`search-container ${searchVisible && 'visible'} ${theme}`} >
        <div className={`close-options-container ${theme}`}>
          <form className={`options-container ${theme}`} onClick={(event) => handleMediaClick(event)} >
            <p className={`${theme}`}>Filter By</p>
            <div>
              <label className={`${theme}`}>
                <input type='radio' name='mediatype' value='movie' className={`${theme}`} defaultChecked />
                Movie
              </label>
              <label className={`${theme}`}>
                <input type='radio' name='mediatype' value='tv' className={` ${theme}`} />
                TV Show
              </label>
            </div>
          </form>
          <Icon.XSquare onClick={() => { handleCloseSearchClick(); }} className={` ${theme}`} aria-hidden='true' aria-label='Close' />
        </div>
        <form type='submit' onSubmit={(event) => handleInputChange(event)} className={` ${theme}`} >
          <input type='text' placeholder='Search...' name='input' className={` ${theme}`} />
          <button type='submit' onClick={(event) => handleSearch(event)} onKeyDown={(event) => handleSearch(event)}>
            <Icon.Search className={` ${theme}`} aria-hidden='true' aria-label='Search'
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export { SearchBar }
