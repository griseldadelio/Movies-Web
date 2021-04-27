import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import '../styles/search.css'

import SearchContext from '../contexts/Search/SearchContext';

const SearchBar = () => {
  const { searchVisible, handleMediaClick, handleInputChange, handleCloseSearchClick, setNewSearch, setShowResults } = useContext(SearchContext);
  const history = useHistory();



  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      history.push('/search');
      setNewSearch(true);
      setShowResults(false)
    }
  };

  return (
    <div className={`main-searchbar-container text-white`}>
      <div className={`search-container ${searchVisible && 'visible'}`} >
        <div className={`close-options-container`}>
          <form className={`options-container`} onClick={(event) => handleMediaClick(event)} >
            <p >Filter By</p>
            <div>
              <label>
                <input type='radio' name='mediatype' value='movie' defaultChecked />
                Movie
              </label>
              <label>
                <input type='radio' name='mediatype' value='tv' />
                TV Show
              </label>
            </div>
          </form>
          <Icon.XSquare onClick={() => { handleCloseSearchClick(); }} aria-hidden='true' aria-label='Close' />
        </div>
        <form type='submit' onSubmit={(event) => handleInputChange(event)} >
          <input type='text' placeholder='Search...' name='input' />
          <button type='submit' onClick={(event) => handleSearch(event)} onKeyDown={(event) => handleSearch(event)}>
            <Icon.Search aria-hidden='true' aria-label='Search' />
          </button>
        </form>
      </div>
    </div>
  );
};

export { SearchBar }
