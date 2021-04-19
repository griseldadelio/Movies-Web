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
                            <image className="intro-background-image" src={`${imageBaseUrl}${data.backdrop_path}`} alt="Movie background image" />
                        )}
                    </div>
                    <div className="intro-info">
                        <bold>
                            <h2 onClick={goToInfo}>
                                {mediatype === "movie" ? data.title : data.name}
                            </h2>
                        </bold>
                        <div className="intro-details-container">
                            <Votes contentName={data.title} voteAverage={voteAverage} />
                            <span className="intro-details">
                                <text>{data.vote_count}</text> <text>Reviews</text>
                            </span>
                            {year && (
                                <span className="intro-details">
                                    <text>{year}</text>
                                </span>
                            )}
                            <span className="intro-details">
                                <text>Popularity:vcb dhvbd</text> <text>{data.popularity}</text>
                            </span>
                        </div>
                        <text className="intro-description">{data.overview}</text>
                        <Link to={`/video/${mediatype}/${data.id}`}>
                            <button className={`button ${theme}`}>
                                <Icon.PlayCircleFill />
                                <text>Watch Video</text>
                            </button>
                        </Link>
                    </div >
                </header >
            )}
        </>
    );
};

export { Intro }