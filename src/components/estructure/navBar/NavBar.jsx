import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './nav.css';
import { LogoNav } from '.';
import SearchContext from '../../../contexts/Search/SearchContext';

const NavBar = () => {
  const { handleSearchBarVisible } = useContext(SearchContext);
  const [noShow, setNoShow] = useState(true);

  const handleToggle = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      setNoShow(!noShow);
    }
  };

  return (
    <>
      <nav className={`responsive-nav`} >
        <a className={'responsive-nav-link'}
          onClick={(event) => handleToggle(event)}
          onKeyDown={(event) => handleToggle(event)} >
          <Icon.List className={`nav-icon`} aria-hidden='true' />
        </a>
        <a
          className={`responsive-nav-link nav-close-icon ${noShow && 'set-show-close'}`}
          onClick={(event) => handleToggle(event)}
          onKeyDown={(event) => handleToggle(event)}>
          <Icon.X className={`nav-icon`} aria-hidden='true' />
        </a>
      </nav>
      <nav className={`aside ${noShow && 'set-show-nav'}`}>
        <div className='nav-links'>
          <LogoNav />
          <NavLink to='/' className={'container'} activeClassName='selected exact' >
            <Icon.HouseDoorFill className={`nav-icon `} title={"Home"} onClick={handleToggle} aria-hidden='true' />
            <p className={`nav-text`}>Home</p>
          </NavLink>
          <NavLink to='/movie' exact className={'container'} activeClassName='selected' >
            <Icon.Film className={`nav-icon `} title={'Movie'} onClick={handleToggle} aria-hidden='true' />
            <p className={`nav-text `}>Movies</p>
          </NavLink>
          <NavLink to='/tv' exact className={'container'} activeClassName='selected'>
            <Icon.TvFill className={`nav-icon `} title={'Tv Series'} onClick={handleToggle} aria-hidden='true' />
            <p className={`nav-text `}>TV Shows</p>
          </NavLink>
          <div className={'container'}
            onClick={(event) => {
              handleSearchBarVisible(event);
              handleToggle(event);
            }}
            onKeyDown={(event) => {
              handleSearchBarVisible(event);
              handleToggle(event);
            }}
          >
            <Icon.Search className={`nav-icon`} title={'Search'} aria-hidden='true' />
            <p className={`nav-text `}>Search</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export { NavBar };
