import React, { useState, useContext } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { AverageVote } from './AverageVote';

import ThemeContext from '../contexts/ThemeContext';

import '../styles/votes.css';

const Votes = ({ contentName, voteAverage, ...props }) => {
  const { theme } = useContext(ThemeContext);
  const [isVotingNumberVisible, setIsVotingNumberVisible] = useState(true);

  const handleClick = () => {
    setIsVotingNumberVisible(!isVotingNumberVisible);
  };

  return (
    <div className={`rating-container ${theme}`} {...props} onClick={handleClick}>
      {isVotingNumberVisible && (voteAverage || voteAverage === 0) && (
        <AverageVote voteAverage={voteAverage > 0 ? voteAverage : 0} />)
      }
      {!isVotingNumberVisible && (<><Icon.EyeFill /><span>&nbsp;Show rating</span></>)}
    </div>
  );
};

export { Votes };
