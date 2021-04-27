import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import { LogoNav } from '../LogoNav';
import { ThemeToggle } from '../ThemeToggle';
import { Modal } from '../Modal'

import firebase from '../../configs/firebase';
import '../styles/nav.css'

import ThemeContext from '../../contexts/ThemeContext';
import SearchContext from '../../contexts/Search/SearchContext';


const NavAuth = () => {
    const { theme, handleTheme } = useContext(ThemeContext);
    const { handleSearchBarVisible } = useContext(SearchContext);
    const [noShow, setNoShow] = useState(true);
    const [modal, setModal] = useState(false);

    const handleLogout = (event) => {
        if (event.key === 'Enter' || event.type === 'click') {
            setModal(true);

            setTimeout(() => firebase.auth().signOut(), 1000);
            setTimeout(() => setModal(false), 1000);
        }
    };

    const handleToggle = (event) => {
        if (event.key === 'Enter' || event.type === 'click') {
            setNoShow(!noShow);
        }
    };

    return (
        <>
            {modal && <Modal text='You have logged off successfully!' />}
            <nav className={`responsive-nav ${theme}`}>
                <Link className='responsive-nav-link'
                    onClick={(event) => handleToggle(event)}
                    onKeyDown={(event) => handleToggle(event)} >
                    <Icon.List className={`nav-icon ${theme}`} aria-hidden='true' />
                </Link>
                <Link className={`responsive-nav-link nav-close-icon ${noShow && 'set-show-close'}`}
                    onClick={(event) => handleToggle(event)}
                    onKeyDown={(event) => handleToggle(event)} >
                    <Icon.X className={`nav-icon ${theme}`} aria-hidden='true' />
                </Link>
            </nav>
            <nav className={`aside ${theme} ${noShow && 'set-show-nav'}`}>
                <div className='nav-links'>
                    <LogoNav />
                    <NavLink to='/' className='container' activeClassName='selected' exact >
                        <Icon.HouseDoorFill className={`nav-icon ${theme}`} title={'Home'} onClick={handleToggle} aria-hidden='true' />
                        <p className={`nav-text ${theme}`}>Home</p>
                    </NavLink>
                    <NavLink to='/movie' exact className='container' activeClassName='selected'>
                        <Icon.Film className={`nav-icon ${theme}`} title={'Movie'} onClick={handleToggle} aria-hidden='true' />
                        <p className={`nav-text ${theme}`}>Movies</p>
                    </NavLink>
                    <NavLink to='/tv' exact className='container' activeClassName='selected' >
                        <Icon.TvFill className={`nav-icon ${theme}`} title={'Tv Series'} onClick={handleToggle} aria-hidden='true' />
                        <p className={`nav-text ${theme}`}>TV Shows</p>
                    </NavLink>
                    <div className='container' onClick={(event) => {
                        handleSearchBarVisible(event);
                        handleToggle(event);
                    }}
                        onKeyDown={(event) => {
                            handleSearchBarVisible(event);
                            handleToggle(event);
                        }}>
                        <Icon.Search className={`nav-icon ${theme}`} title={'Search'} aria-hidden='true' />
                        <p className={`nav-text ${theme}`}>Search</p>
                    </div>
                    <NavLink to='/favs' exact className='container' activeClassName='selected'>
                        <Icon.HeartFill className={`nav-icon ${theme}`} onClick={handleToggle} title={'Favs'} aria-hidden='true' />
                        <p className={`nav-text ${theme}`}>Favs</p>
                    </NavLink>
                </div>
                <div className='user-options'>
                    <Link onClick={(event) => {
                        handleLogout(event);
                        handleToggle(event);
                    }}
                        onKeyDown={(event) => {
                            handleLogout(event);
                            handleToggle(event);
                        }}
                        className='container'>
                        <Icon.BoxArrowRight className={`nav-icon ${theme}`} title={'Logout'} aria-hidden='true' />
                        <p className={`nav-text ${theme}`}>Logout</p>
                    </Link>
                    <ThemeToggle
                        onClick={(event) => {
                            handleTheme(event);
                            handleToggle(event);
                        }}
                        onKeyDown={(event) => {
                            handleTheme(event);
                            handleToggle(event);
                        }}
                    />
                </div>
            </nav>
        </>

    );
};

export { NavAuth };