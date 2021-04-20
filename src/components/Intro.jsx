import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { imageBaseUrl } from "../utils/ImageBaseUrl";
import * as Icon from 'react-bootstrap-icons';
import '../styles/intro.css'

import { Votes } from "./Votes";
import ThemeContext from "../contexts/ThemeContext";

const Intro = ({ data, year, voteAverage, mediatype }) => {
    const { theme } = useContext(ThemeContext);
    const history = useHistory();

    const goToInfo = () => {
        history.push(`/${mediatype}/${data.id}/info`);
    };

    return (
        <>
            {data && (
                <header className="intro-container">
                    <div className="intro-image-container" id={data.id}>
                        {data.backdrop_path && (
                            <img className="intro-background-image" src={`${imageBaseUrl}${data.backdrop_path}`} alt="Movie background image" />
                        )}
                    </div>
                    <div className="intro-info">
                        <b>
                            <h2 onClick={goToInfo}>
                                {mediatype === "movie" ? data.title : data.name}
                            </h2>
                        </b>
                        <Votes contentName={data.title} voteAverage={voteAverage} />
                        <div className="intro-details-container">
                            <span className="intro-details">
                                <p> Reviews</p> <p className='p-1'>{data.vote_count}</p>
                            </span>
                            {year && (
                                <span className="intro-details">
                                    <p>{year}</p>
                                </span>
                            )}
                            <span className="intro-details">
                                <p>Popularity:</p> <p className='p-1'>{data.popularity}</p>
                            </span>
                        </div>
                        <p className="intro-description">{data.overview}</p>
                        <Link to={`/video/${mediatype}/${data.id}`}>
                            <button className={`button ${theme}`}>
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