import React from "react";
import * as Icon from 'react-bootstrap-icons';

const Star = ({ type }) => {
  const STAR = {
    "empty": <Icon.Star className="star" />,
    "half": <Icon.StarHalf className="star" />,
    "filled": <Icon.StarFill className="star" />,
  }

  return (
    <>
      {STAR[type]}
    </>
  );
};

export { Star };
