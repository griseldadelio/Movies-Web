import React, { useEffect, useState } from 'react';
import { useParams, } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { api } from '../utils';

import { GoBackButton } from '../components';
import img from '../assets/img/error-video.jpeg';

const Video = () => {
  const [url, setUrl] = useState([]);
  const { media, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);


  useEffect(() => {
    const getVideo = async () => {
      setIsLoading(true);
      setIsError(false);
      const response = await api.get(`/${media}/${id}/videos?`, {
        media,
        id
      })

      const dataJson = await response.json();
      const getKey = await dataJson.results.filter((i) => i.type === 'Trailer');

      setUrl(getKey);
      setIsError(getKey.length === 0);
      setIsLoading(false);
    };
    getVideo();
  }, [id, media]);

  return (
    <>
      <GoBackButton />
      {!isLoading && isError && (
        <div className={`container`}>
          <img src={img} alt='error' />
          <h1 id='error-trailer-heading'>
            ...Ups, this {media === 'movie' ? media : 'TV show'} doesn't have a
            trailer.
          </h1>
        </div>
      )}
      {!isLoading && !isError && (
        <div>
          <h3>Trailer</h3>
          <div >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${url[0].key}`} width='100%' height='100%' controls onReady volume='0.5' />
          </div>
        </div>
      )}
    </>
  );
};

export { Video };
