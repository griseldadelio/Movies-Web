import React from 'react';
import Flickity from 'react-flickity-component';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import { Card } from '../card/Card';
import './cardListPreview.css'

const CardListPreview = ({ mediatype, data, sectionTitle, category, is }) => {
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
        data && (
            <div className={`cardlistpreview-container`} >
                <Row>
                    <h3>
                        {sectionTitle}
                    </h3>
                    <Link to={`${mediatype}/category/${category}`} className={`m-2 text-muted`}>
                        Explore All
                    </Link>
                </Row>
                <Flickity options={flickityOptions} flickityRef={(ref) => (flkty = ref)}>
                    {data && data.map((singleCard) => (
                        <Card key={singleCard.id}
                            cardInfo={{
                                id: singleCard.id,
                                src: !is ? singleCard.poster_path : singleCard.src,
                                title: !is
                                    ? mediatype === 'tv'
                                        ? singleCard.name
                                        : singleCard.title
                                    : singleCard.title,
                                votes: !is ? singleCard.vote_average : singleCard.votes,
                                mediatype: mediatype,
                            }}
                        />
                    ))}
                </Flickity>
            </div >
        )
    );
};

export { CardListPreview };