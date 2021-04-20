import React, { useContext } from "react";
import { CardListPreview, Intro, NavAuth, Footer } from "../components";

import DataContext from "../contexts/DataContext";
import MovieContext from "../contexts/MovieContext";
import TvShowContext from "../contexts/TvShowContext";
import ThemeContext from "../contexts/ThemeContext";

import '../styles/main.css';

const Home = () => {
    const { theme } = useContext(ThemeContext);
    const { data, year, voteAverage, mediatype, isLoading } = useContext(DataContext);
    const { movie, isLoadingMovie } = useContext(MovieContext);
    const { tvShow, isLoadingTvShow } = useContext(TvShowContext);

    return (
        <>
            <NavAuth />
            {!isLoading && !isLoadingMovie && !isLoadingTvShow && data && (
                <div className={`main-container ${theme}`}>
                    <Intro data={data} year={year} voteAverage={voteAverage} mediatype={mediatype} />
                    <CardListPreview mediatype="movie" data={movie} sectionTitle="Trending Movies" category="popular" isFavs={false} />
                    <CardListPreview mediatype="tv" data={tvShow} sectionTitle="Trending TV Shows" category="popular" isFavs={false} />
                </div>
            )}
            <Footer />
        </>
    );
};

export { Home };