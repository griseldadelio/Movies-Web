import React, { useContext, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { Row } from 'react-bootstrap';
// import Flickity from 'react-flickity-component';
import { Card } from './Card';
import '../styles/cardListPreview.css'
import ThemeContext from '../contexts/ThemeContext';
import FavsContext from '../contexts/FavsContext';

const CardListPreview = ({ mediatype, data, sectionTitle, category, isFavs }) => {
    const { theme } = useContext(ThemeContext);
    const { favsArray } = useContext(FavsContext);
    const mediaRef = useRef(null);
    const mediaContainerRef = useRef(null);
    const [showLeftBar, setShowLeftBar] = useState(false);
    const [showRightBar, setShowRightBar] = useState(true);
    const [widthScreen, setWidthScreen] = useState(0);
    const [scrollWidth, setScrollWidth] = useState(0);
    const windowWidth = window.innerWidth;

    const handleResize = () => {
        setWidthScreen(window.innerWidth);
    };

    // useEffect(() => {
    //     setWidthScreen(mediaContainerRef.current.scrollWidth);
    //     setScrollWidth(mediaRef.current.scrollWidth);
    //     window.addEventListener("resize", handleResize);
    //     if (mediaContainerRef.current.scrollWidth > mediaRef.current.scrollWidth)
    //         setShowRightBar(false);
    // }, []);

    const handleLeftChevronClick = (widthScreen) => {
        if (windowWidth > 480) {
            mediaRef.current.scrollLeft -= widthScreen - 20;
            mediaRef.current.scrollLeft <= widthScreen && setShowLeftBar(false);
            setShowRightBar(true);
        }
    };

    const handleRightChevronClick = (widthScreen, scrollWidth) => {
        mediaRef.current.scrollLeft += widthScreen - 120;
        if (windowWidth > 480) {
            mediaRef.current.scrollLeft >= scrollWidth - widthScreen * 2 &&
                setShowRightBar(false);
            setShowLeftBar(true);
        }
    };

    return (
        data && favsArray && (
            <div className={` cardlistpreview-container ${theme} `} ref={mediaContainerRef}>
                {showLeftBar && (
                    <button className={`chevron-container chevron-left ${theme} `} onClick={() => handleLeftChevronClick(widthScreen)}>
                        <Icon.ChevronLeft className={`chevron-icon ${theme} `} />
                    </button>
                )}
                <Row>
                    <h3 className={`${theme} `}>
                        {sectionTitle}
                    </h3>
                    {!isFavs && (
                        <Link to={`${mediatype}/category/${category}`} className={`m-2 text-muted ${theme}`}>
                            Explore All
                        </Link>
                    )}
                </Row>
                {/* <Flickity></Flickity> */}

                <div className={`media-container ${theme}`} id='media-container' forwarderRef={mediaRef} >
                    {data && favsArray && data.map((singleCard) => (
                        <Card key={singleCard.id}
                            cardInfo={{
                                id: singleCard.id,
                                src: !isFavs ? singleCard.poster_path : singleCard.src,
                                title: !isFavs
                                    ? mediatype === 'tv'
                                        ? singleCard.name
                                        : singleCard.title
                                    : singleCard.title,
                                votes: !isFavs ? singleCard.vote_average : singleCard.votes,
                                mediatype: mediatype,
                                like: isFavs ? true : favsArray.includes(singleCard.id),
                            }}
                        />
                    ))}
                </div>


                {showRightBar && (
                    <button className={`chevron-container chevron-right ${theme} `} onClick={() => handleRightChevronClick(widthScreen, scrollWidth)}>
                        <Icon.ChevronRight className={`chevron-icon ${theme} `} />
                    </button>
                )}
            </div>
        )
    );
};

export { CardListPreview };