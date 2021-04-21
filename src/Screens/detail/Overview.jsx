import React, { useContext } from 'react';
import { imageBaseUrl } from '../../utils/ImageBaseUrl';

import ThemeContext from '../../contexts/ThemeContext';

const Overview = ({ data, mediatype }) => {
  const { theme } = useContext(ThemeContext);

  return (
    data && mediatype && (
      <div className={` ${theme}`}>
        <div >
          <img src={`${imageBaseUrl}${data.poster_path}`} />
        </div>
        <div>
          <div>
            <h3 >Storyline</h3>
            <span id="overview-description" >{data.overview}</span>
          </div>
          <div >
            <ul >
              <li>
                <div >Genres:</div>
                <div >
                  {data.genres && data.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}, </span>
                  ))}
                </div>
              </li>
              <li >
                <div>
                  {mediatype === 'tv' ? 'First Aired:' : 'Released:'}
                </div>
                <div>
                  {mediatype === 'tv' ? data.first_air_date : data.release_date}
                </div>
              </li>
              <li>
                <div>
                  {mediatype === 'tv' ? 'Seasons:' : 'Runtime:'}
                </div>
                <div>
                  {mediatype === 'tv' ? data.number_of_seasons : data.runtime + ' min'}
                </div>
              </li>

              <li>
                <div>
                  {mediatype === 'tv' ? 'Episodes:' : 'Budget'}
                </div>
              </li>

              <li>
                {mediatype === 'tv' ? 'Last Aired:' : 'Production'}
                <div>
                  {mediatype === 'tv' ? data.last_air_date : data.production_companies && data.production_companies.map((production) => (
                    <span>{production.name} </span>
                  ))}
                </div>
              </li>

              <li>
                <div>Status:</div>
                <div >  {data.status} </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export { Overview };
