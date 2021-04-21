import React, { useContext } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

import ThemeContext from '../contexts/ThemeContext';

const GoBackButton = () => {
  const { theme } = useContext(ThemeContext);
  const history = useHistory();
  const handleGoBackClick = () => {
    history.goBack();
  };

  return (
    <div className={` ${theme}`}>
      <button onClick={handleGoBackClick} className={` ${theme}`}>
        <Icon.ArrowLeft className={`${theme}`} aria-hidden='true' />
        <p className={`${theme}`}>Go Back</p>
      </button>
    </div>
  );
};

export { GoBackButton };
