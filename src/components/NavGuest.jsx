import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { ThemeToggle } from "./ThemeToggle";
import '../styles/nav.css';
import { LogoNav } from "./LogoNav";
import ThemeContext from "../contexts/ThemeContext";
import SearchContext from "../contexts/SearchContext";

const NavGuest = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { handleSearchBarVisible } = useContext(SearchContext);
  const [noShow, setNoShow] = useState(true);

  const handleToggle = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      setNoShow(!noShow);
    }
  };

  return (
    <>
      <nav className={`responsive-nav ${theme}`}>
        <Link className="responsive-nav-link"
          onClick={(event) => handleToggle(event)}
          onKeyDown={(event) => handleToggle(event)} >
          <Icon.List className={`nav-icon ${theme}`} aria-hidden="true" />
        </Link>
        <Link
          className={`responsive-nav-link nav-close-icon ${
            noShow && "set-show-close"
            }`}
          onClick={(event) => handleToggle(event)}
          onKeyDown={(event) => handleToggle(event)}>
          <Icon.X className={`nav-icon ${theme}`} aria-hidden="true" />
        </Link>
      </nav>
      <nav className={`aside ${theme} ${noShow && "set-show-nav"}`}>
        <div className="nav-links">
          <LogoNav />
          <NavLink to="/" className="container" active ClassName="selected exact" >
            <Icon.HouseDoorFill className={`nav-icon ${theme}`} title={"Home"} onClick={handleToggle} aria-hidden="true" />
            <p className={`nav-text ${theme}`}>Home</p>
          </NavLink>
          <NavLink to="/movie" exact className="container" activeClassName="selected" >
            <Icon.Film className={`nav-icon ${theme}`} title={"Movie"} onClick={handleToggle} aria-hidden="true" />
            <p className={`nav-text ${theme}`}>Movies</p>
          </NavLink>
          <NavLink to="/tv" exact className="container" activeClassName="selected">
            <Icon.TvFill className={`nav-icon ${theme}`} title={"Tv Series"} onClick={handleToggle} aria-hidden="true" />
            <p className={`nav-text ${theme}`}>TV Shows</p>
          </NavLink>
          <div className="container"
            onClick={(event) => {
              handleSearchBarVisible(event);
              handleToggle(event);
            }}
            onKeyDown={(event) => {
              handleSearchBarVisible(event);
              handleToggle(event);
            }}
          >
            <Icon.Search className={`nav-icon ${theme}`} title={"Search"} aria-hidden="true" />
            <p className={`nav-text ${theme}`}>Search</p>
          </div>
        </div>
        <div className="user-options">
          <NavLink to="/login" exact className="container" activeClassName="selected">
            <Icon.BoxArrowRight className={`nav-icon ${theme}`} title={"LogIn"} aria-hidden="true" />
            <p className={`nav-text ${theme}`}>LogIn</p>
          </NavLink>
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

export { NavGuest };
