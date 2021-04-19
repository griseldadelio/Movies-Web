import React, { useContext } from "react";
import { imageBaseUrl } from "../utils/ImageBaseUrl";
import { useHistory } from "react-router-dom";
import { Image } from 'react-bootstrap';
import { Votes } from "./Votes";
import noPosterFound from "../assets/img/404PosterNotFound.jpg";
import { FavIconToggle } from "./FavIconToggle";

import ThemeContext from "../contexts/ThemeContext";

const Card = ({ id, src, title, votes, mediatype, like }) => {
  const history = useHistory();
  const { theme } = useContext(ThemeContext);

  const handleMediaDetails = (event, id, mediatype) => {
    if (event.key === "Enter" || event.type === "click") {
      history.push(`/${mediatype}/${id}/info`);
    }
  };

  return (
    <article id={id} key={id} className="media-card" mediatype={mediatype} onClick={(event) => handleMediaDetails(event, id, mediatype)} onKeyDown={(event) => handleMediaDetails(event, id, mediatype)} >
      <div>
        <Image src={src ? `${imageBaseUrl}${src}` : noPosterFound} className="media-card-img"
          alt={`Image showing poster of "${title}"`}
          onClick={(event) => handleMediaDetails(event, id, mediatype)}
        />
      </div>
      <div className="votes-and-favs-container">
        {title && <Votes contentName={title} voteAverage={votes} />}
        <FavIconToggle like={like} id={id} src={src} title={title} votes={votes} mediatype={mediatype} />
      </div>
      <div>
        <h3 className={`${theme}`} onClick={(event) => handleMediaDetails(event, id, mediatype)}>
          {title}
        </h3>
      </div>
    </article>
  );
};

export { Card };
