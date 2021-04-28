import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import { LogoNav } from './LogoNav';
import { Modal } from './Modal'

import firebase from '../configs/firebase';
import '../styles/nav.css'

import SearchContext from '../contexts/Search/SearchContext';


const NavAuth = () => {
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
            <nav className={`aside ${noShow && 'set-show-nav'}`}>
                <div className='nav-links'>
                    <LogoNav />
                    <NavLink to='/' className='container' activeClassName='selected' exact >
                        <Icon.HouseDoorFill className={`nav-icon `} title={'Home'} onClick={handleToggle} aria-hidden='true' />
                        <p className={`nav-text `}>Home</p>
                    </NavLink>
                    <NavLink to='/movie' exact className='container' activeClassName='selected'>
                        <Icon.Film className={`nav-icon`} title={'Movie'} onClick={handleToggle} aria-hidden='true' />
                        <p className={`nav-text `}>Movies</p>
                    </NavLink>
                    <NavLink to='/tv' exact className='container' activeClassName='selected' >
                        <Icon.TvFill className={`nav-icon`} title={'Tv Series'} onClick={handleToggle} aria-hidden='true' />
                        <p className={`nav-text`}>TV Shows</p>
                    </NavLink>
                    <div className='container' onClick={(event) => {
                        handleSearchBarVisible(event);
                        handleToggle(event);
                    }}
                        onKeyDown={(event) => {
                            handleSearchBarVisible(event);
                            handleToggle(event);
                        }}>
                        <Icon.Search className={`nav-icon `} title={'Search'} aria-hidden='true' />
                        <p className={`nav-text `}>Search</p>
                    </div>
                    <NavLink to='/favs' exact className='container' activeClassName='selected'>
                        <Icon.HeartFill className={`nav-icon `} onClick={handleToggle} title={'Favs'} aria-hidden='true' />
                        <p className={`nav-text `}>Favs</p>
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
                        <Icon.BoxArrowRight className={`nav-icon `} title={'Logout'} aria-hidden='true' />
                        <p className={`nav-text`}>Logout</p>
                    </Link>
                </div>
            </nav>
        </>

    );
};

export { NavAuth };