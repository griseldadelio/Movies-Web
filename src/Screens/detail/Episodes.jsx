import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { api } from '../../utils';
import { CardEpisodes } from './CardEpisodes';

import './detail.css'

const Episodes = ({ seasons }) => {
  const { TVId } = useParams();
  const [episodes, setEpisodes] = useState();
  const [episodesLength, setEpisodesLength] = useState(0);
  const [seasonNumber, setSeasonNumber] = useState(1);
  const history = useHistory();

  useEffect(() => {
    const dataJson = async () => {
      const { data } = await api.get(`/tv/${TVId}/season/${seasonNumber}?`, {
        params: {
          TVId,
          seasonNumber
        }
      });
      return data.episodes
    }
    dataJson()
      .then(response => {
        setEpisodes(response)
        setEpisodesLength(response.length)
      });
  }, [TVId, seasonNumber]);


  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setSeasonNumber(newValue);
    history.push(`/tv/${TVId}/season/${newValue}`);
  };

  return (
    seasons && TVId && (
      <div className={'episodes-main-container'}>
        <div className={'m-5 text-center'}>
          <select onChange={handleChange} >
            {seasons && seasons
              .filter((season) => season.name !== 'Specials')
              .map((season, index) => (
                <option value={index + 1} key={season.id} id={season.id} >
                  Season {index + 1}
                </option>
              ))}
          </select>
          <span className={`px-3`}>
            {episodesLength} Episodes
          </span>
        </div>

        <div className={'cards-episodes-container'}>
          {seasons && episodes && episodes.map((episode) => (
            <CardEpisodes
              key={episode.id}
              src={episode.still_path}
              episode={episode.episode_number}
              title={episode.name}
              date={episode.air_date}
              overview={episode.overview}
            >
            </CardEpisodes>
          ))}
        </div>
      </div>
    )
  );
};

export { Episodes };
