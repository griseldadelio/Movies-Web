import React, { useContext } from "react";
import { Lightbulb as LightOn } from 'react-bootstrap-icons';
import { Lightbulb as LightOff } from 'react-bootstrap-icons';

import ThemeContext from "../contexts/ThemeContext";

const ThemeToggle = ({ ...props }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container mb-2" tabIndex="0" {...props}>
      {theme === "dark" ? (
        <>
          <LightOn className={`nav-icon ${theme}`} title={"Change the theme"} aria-hidden="true" />
          <p className={`nav-text ${theme}`}>Light Mode</p>
        </>
      ) : (
          <>
            <LightOff className={`nav-icon ${theme}`} title={"Change the theme"} aria-hidden="true" />
            <p className={`nav-text ${theme}`}>Dark Mode</p>
          </>
        )}
    </div>
  );
};

export { ThemeToggle };