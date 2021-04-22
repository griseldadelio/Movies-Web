import React, { useEffect, useState, useContext } from 'react';
import { useParams, } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { DotLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { API_KEY } from '../utils/API_KEY';

import { GoBackButton } from '../components';
import img from '../assets/img/error-video.jpeg';

import ThemeContext from "../contexts/ThemeContext";

const overrideDark = css`
  & div {
    background-color: #2196f3;
  }
`;

const overrideLight = css`
  & div {
    background-color: #992e2e;
  }
`;

const Video = () => {
  const [url, setUrl] = useState([]);
  const { media, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const { theme } = useContext(ThemeContext);


  useEffect(() => {
    const getVideo = async () => {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch(
        `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const dataJson = await response.json();

      const getKey = await dataJson.results.filter((i) => i.type === 'Trailer');

      setUrl(getKey);
      setIsError(getKey.length === 0);
      setIsLoading(false);
    };
    getVideo();
  }, []);

  return (
    <>
      <GoBackButton />
      {isLoading && url.length === 0 && (
        <div className={`container ${theme}`}>
          {theme === 'dark' ? (
            <DotLoader css={overrideDark} size="100px" />
          ) : (
              <DotLoader css={overrideLight} size="100px" />
            )}
        </div>
      )}
      {!isLoading && isError && (
        <div className={`container ${theme}`}>
          <img src={img} />
          <h1 className={`${theme}`} id='error-trailer-heading'>
            ...Ups, this {media === 'movie' ? media : 'TV show'} doesn't have a
            trailer.
          </h1>
        </div>
      )}
      {!isLoading && !isError && (
        <div className={`${theme}`}>
          <h3 className={`${theme}`}>Trailer</h3>
          <div >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${url[0].key}`} width='100%' height='100%' controls onReady volume='0.5' />
          </div>
        </div>
      )}
    </>
  );
};

export { Video };
