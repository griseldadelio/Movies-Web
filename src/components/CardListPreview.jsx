import React, { useContext } from 'react';
import Flickity from 'react-flickity-component';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import { Card } from './Card';

import '../styles/cardListPreview.css'

import FavsContext from '../contexts/Favorite/FavsContext';

const CardListPreview = ({ mediatype, data, sectionTitle, category, isFavs }) => {
    const { favsArray } = useContext(FavsContext);

    const flickityOptions = {
        freeScroll: true,
        contain: true,
        cellAlign: 'left',
        prevNextButtons: true,
        pageDots: false,
        freeScrollFriction: 0.2,
        selectedAttraction: 0.01,
        friction: 0.15,
        groupCells: '100%',
        resize: true,
    };

    let flkty = null;

    return (
        data && favsArray && (
            <div className={` cardlistpreview-container `} >
                <Row>
                    <h3>
                        {sectionTitle}
                    </h3>
                    {!isFavs && (
                        <Link to={`${mediatype}/category/${category}`} className={`m-2 text-muted`}>
                            Explore All
                        </Link>
                    )}
                </Row>
                <Flickity classNam={`media-container`} options={flickityOptions} flickityRef={(ref) => (flkty = ref)}>
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
                </Flickity>
            </div >
        )
    );
};

export { CardListPreview };