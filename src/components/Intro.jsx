import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { imageBaseUrl } from '../utils/ImageBaseUrl';
import * as Icon from 'react-bootstrap-icons';
import { Row } from 'react-bootstrap';
import '../styles/intro.css'

import { Votes } from './Votes';

const Intro = ({ data, year, voteAverage, mediatype }) => {
    const history = useHistory();

    const goToInfo = () => {
        history.push(`/${mediatype}/${data.id}/info`);
    };

    return (
        <>
            {data && (
                <header className='intro-container'>
                    <div className='intro-image-container' id={data.id}>
                        {data.backdrop_path && (
                            <img className='intro-background-image' src={`${imageBaseUrl}${data.backdrop_path}`} alt='Movie background' />
                        )}
                    </div>
                    <div className='intro-info'>
                        <b>
                            <h2 onClick={goToInfo}>
                                {mediatype === 'movie' ? data.title : data.name}
                            </h2>
                        </b>
                        <Row >
                            <Votes className='mb-1' contentName={data.title} voteAverage={voteAverage} />
                            {year && (
                                <b><p className='m-2'>{year}</p></b>
                            )}
                        </Row>
                        <div className='intro-details-container'>
                            <span className='intro-details'>
                                <p className='margin'>Reviews&nbsp;{data.vote_count}</p>
                                <p>Popularity:&nbsp;{data.popularity}</p>
                            </span>
                        </div>
                        <p className='intro-description'>{data.overview}</p>
                        <Link to={`/video/${mediatype}/${data.id}`}>
                            <button className={`button`}>
                                <Icon.PlayCircle className='icon-play' />
                                <h5 className='p-2' >Watch Video</h5>
                            </button>
                        </Link>
                    </div >
                </header >
            )}
        </>
    );
};

export { Intro }