import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import './search.css'

import SearchContext from '../../contexts/Search/SearchContext';

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
    <div className={`search-container ${searchVisible && 'visible'}`} >
      <div className={`close-options-container`}>
        <form className={`options-container`} onClick={(event) => handleMediaClick(event)} >
          <p className={'search-title'} >Filter By</p>
          <div className={'col-md-6 ms-5'}>
            <label className={'row'}>
              <input className={'m-2'} type='radio' name='mediatype' value='movie' defaultChecked />
                Movie
              </label>
            <label className={'row'}>
              <input className={'m-2'} type='radio' name='mediatype' value='tv' />
                TV Show
              </label>
          </div>
        </form>
        <Icon.XSquare className={'close-icon'} onClick={() => { handleCloseSearchClick(); }} aria-hidden='true' aria-label='Close' />
      </div>
      <form className={'search-input-container'} type='submit' onSubmit={(event) => handleInputChange(event)} >
        <input className={'search-input'} type='text' placeholder='Search...' name='input' />
        <button className={'search-button'} type='submit' onClick={(event) => handleSearch(event)} onKeyDown={(event) => handleSearch(event)}>
          <Icon.Search className={'search-icon'} aria-hidden='true' aria-label='Search' />
        </button>
      </form>
    </div>
  );
};

export { SearchBar }
