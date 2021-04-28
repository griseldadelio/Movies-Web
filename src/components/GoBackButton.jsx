import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

const GoBackButton = () => {
  const history = useHistory();
  const handleGoBackClick = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={handleGoBackClick}>
        <Icon.ArrowLeft aria-hidden='true' />
        <p>Go Back</p>
      </button>
    </div>
  );
};

export { GoBackButton };
