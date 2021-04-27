import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { API_KEY } from '../../utils/API_KEY';
import { useFetch } from '../../hooks/useFetch';
import { CardEpisodes } from './CardEpisodes';

import TvShowContext from '../../contexts/TvShow/TvShowContext';

const Episodes = ({ seasons }) => {
  const { TVId } = useParams();
  const [episodes, setEpisodes] = useState();
  const [episodesLength, setEpisodesLength] = useState(0);
  const { seasonNumber, setSeasonNumber } = useContext(TvShowContext);
  const history = useHistory();

  const dataJson = useFetch(
    `https://api.themoviedb.org/3/tv/${TVId}/season/${seasonNumber}?api_key=${API_KEY}&language=en-US`,
    [seasonNumber]
  );

  useEffect(() => {
    dataJson && setEpisodes(dataJson.episodes);
    dataJson && setEpisodesLength(dataJson.episodes.length);
  }, [dataJson]);


  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setSeasonNumber(newValue);
    history.push(`/tv/${TVId}/season/${newValue}`);
  };

  return (
    seasons && TVId && (
      <div>
        <div>
          <select onChange={handleChange} >
            {seasons && seasons
              .filter((season) => season.name !== 'Specials')
              .map((season, index) => (
                <option value={index + 1} key={season.id} id={season.id} >
                  Season {index + 1}
                </option>
              ))}
          </select>
          <span className={`episodes-length `}>
            {episodesLength} Episodes
          </span>
        </div>

        <div>
          {seasons && episodes && episodes.map((episode) => (
            <CardEpisodes
              key={episode.id}
              src={episode.still_path}
              episode={episode.episode_number}
              title={episode.name}
              overview={episode.overview}
              date={episode.air_date}
            >
            </CardEpisodes>
          ))}
        </div>
      </div>
    )
  );
};

export { Episodes };
