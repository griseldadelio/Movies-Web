import React, { useEffect, useState } from 'react';
import { useParams, } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { api } from '../utils';

import { GoBackButton } from '../components';
import img from '../assets/img/error-video.jpeg';
import './style.css'

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

      const getKey = await response.data.results.filter((i) => i.type === 'Trailer');

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
        <div className={'main-error-container'} >
          <img className={'mb-4'} src={img} alt='error' />
          <h3>
            ...Ups, this {media === 'movie' ? media : 'TV show'} doesn't have a
            trailer.
          </h3>
        </div>
      )}
      {!isLoading && !isError && (
        <div className={`main-trailer-container`}>
          <h2 className={'mb-5'} ><b>Trailer</b></h2>
          <div className={'player-container'}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${url[0].key}`} width='100%' height='500px' controls onReady volume='0.5' />
          </div>
        </div>
      )}
    </>
  );
};

export { Video };
