import React from 'react';
import { Star } from './Star';

const AverageVote = ({ voteAverage }) => {
    const rating = Math.round(Math.floor(voteAverage > 0 ? voteAverage / 2 : 0));

    const getAverageVote = (rating) => {
        let stars = [];

        if (rating < 1) {
            stars = [...Array(5)].map(() => 'empty');
        } else {
            stars = [...Array(rating)].map(() => "filled");
            if (rating < 5) {
                stars.push(voteAverage % 2 !== 0 ? 'half' : 'empty')
            }
            if (rating < 4) {
                [...Array(4 - rating)].map(() => stars.push('empty'))
            }
        }
        return stars;
    }
    const stars = getAverageVote(rating);
    return (
        (voteAverage || voteAverage === 0) &&
        <div>
            {stars && stars.map((starType, i) => <Star key={i} type={starType} />)}
        </div>
    )
}

export { AverageVote }
