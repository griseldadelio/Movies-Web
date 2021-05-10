import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import './nav.css';
import { LogoNav } from '.';

const NavBar = () => {
  const [noShow, setNoShow] = useState(true);

  const handleToggle = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      setNoShow(!noShow);
    }
  };

  return (
    <>
      <nav className={`responsive-nav`} >
        <div className={'responsive-nav-link'}
          onClick={(event) => handleToggle(event)}
          onKeyDown={(event) => handleToggle(event)} >
          <Icon.List className={`nav-icon`} aria-hidden='true' />
        </div>
        <div
          className={`responsive-nav-link nav-close-icon ${noShow && 'set-show-close'}`}
          onClick={(event) => handleToggle(event)}
          onKeyDown={(event) => handleToggle(event)}>
          <Icon.X className={`nav-icon`} aria-hidden='true' />
        </div>
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
          <NavLink to='/search' exact className={'container'} activeClassName='selected'>
            <Icon.Search className={`nav-icon`} title={'Search'} aria-hidden='true' />
            <p className={`nav-text `}>Search</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export { NavBar };