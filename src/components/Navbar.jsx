import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

import '../styles/nav.css'
import { LogoNav } from "./LogoNav";

export const Nav = () => {
    const [noShow, setNoShow] = useState(true);

    const handleToggle = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            setNoShow(!noShow);
        }
    };

    return (
        <>
            <nav className={`responsive-nav `}>
                <Link className="responsive-nav-link"
                    onClick={(event) => handleToggle(event)}
                    onKeyDown={(event) => handleToggle(event)} >
                    <Icon.List className={`nav-icon `} aria-hidden="true" />
                </Link>

                <Link className={`responsive-nav-link nav-close-icon ${noShow && "set-show-close"}`}
                    onClick={(event) => handleToggle(event)}
                    onKeyDown={(event) => handleToggle(event)} >
                    <Icon.X className={`nav-icon `} aria-hidden="true" />
                </Link>
            </nav>
            <nav className={`aside  ${noShow && "set-show-nav"}`}>
                <div className="nav-links">
                    <LogoNav />
                    <NavLink to="/" className="container" activeClassName="selected" exact >
                        <Icon.HouseDoorFill className={`nav-icon `} title={"Home"} onClick={handleToggle} aria-hidden="true" />
                        <text className={`nav-text `}>Home</text>
                    </NavLink>
                    <NavLink to="/movie" exact className="container" activeClassName="selected">
                        <Icon.Film className={`nav-icon `} title={"Movie"} onClick={handleToggle} aria-hidden="true" />
                        <text className={`nav-text `}>Movies</text>
                    </NavLink>
                    <NavLink to="/tv" exact className="container" activeClassName="selected" >
                        <Icon.TvFill className={`nav-icon `} title={"Tv Series"} onClick={handleToggle} aria-hidden="true" />
                        <text className={`nav-text `}>TV Shows</text>
                    </NavLink>
                    <div className="container" onClick={(event) => {
                        // handleSearchBarVisible(event);
                        handleToggle(event);
                    }}
                        onKeyDown={(event) => {
                            // handleSearchBarVisible(event);
                            handleToggle(event);
                        }}
                    >
                        <Icon.Search className={`nav-icon `} title={"Search"} aria-hidden="true" />
                        <text className={`nav-text `}>Search</text>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;