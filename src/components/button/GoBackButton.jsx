import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

import './button.css'

const GoBackButton = () => {
  const history = useHistory();
  const handleGoBackClick = () => {
    history.goBack();
  };

  return (
    <div className={'button-container'}>
      <button className={'button-back'} onClick={handleGoBackClick}>
        <Icon.ArrowLeft aria-hidden='true' />
        <p className={'p-3 mt-3'}>Go Back</p>
      </button>
    </div>
  );
};

export { GoBackButton };
