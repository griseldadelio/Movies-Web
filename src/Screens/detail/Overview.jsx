import React from 'react';
import { imageBaseUrl } from '../../utils/ImageBaseUrl';
import './detail.css'

const Overview = ({ data, mediatype }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    data && mediatype && (
      <div className='overview-main-container'>
        <div className='container pt-5' >
          <div  >
            <img className='img border border-white ' src={`${imageBaseUrl}${data.poster_path}`} alt='poster' />
          </div>
          <div className=" info-serie-container">
            <div className="title-serie">
              <h3 ><b>Storyline</b></h3>
              <p id="overview-description" >{data.overview}</p>
            </div>
            <div className="details-serie-container" >
              <ul className="details-serie-list" >
                <li className='list-item row'>
                  <div className='col-sm-6' >Genres:</div>
                  <div className='col-sm-6  ' >
                    {data.genres && data.genres.map((genre) => (
                      <span key={genre.id}>{genre.name}, </span>
                    ))}
                  </div>
                </li>
                <li className='list-item row'>
                  <div className='col-sm-6'>
                    {mediatype === 'tv' ? 'First Aired:' : 'Released:'}
                  </div>
                  <div className='col-sm-6'>
                    {mediatype === 'tv' ? data.first_air_date : data.release_date}
                  </div>
                </li>
                <li className='list-item row'>
                  <div className='col-sm-6'>
                    {mediatype === 'tv' ? 'Seasons:' : 'Runtime:'}
                  </div>
                  <div className='col-sm-6' >
                    {mediatype === 'tv' ? data.number_of_seasons : data.runtime + ' min'}
                  </div>
                </li>

                <li className='list-item row'>
                  <div className='col-sm-6'>
                    {mediatype === 'tv' ? 'Episodes:' : 'Budget:'}
                  </div>
                  <div className='col-sm-6'>
                    {mediatype === "tv"
                      ? data.number_of_episodes
                      : data.budget === 0
                        ? "-"
                        : formatter.format(data.budget)}
                  </div>
                </li>

                <li className='list-item row'>
                  <div className='col-sm-6'>
                    {mediatype === 'tv' ? 'Last Aired:' : 'Production:'}
                  </div>
                  <div className='col-sm-6' >
                    {mediatype === 'tv' ? data.last_air_date : data.production_companies && data.production_companies.map((production) => (
                      <span>{production.name}, </span>
                    ))}
                  </div>
                </li>

                <li className='list-item row'>
                  <div className='col-sm-6'>Status:</div>
                  <div className='col-sm-6' >  {data.status} </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export { Overview };
