import React, { useContext } from 'react';
import { Card } from '../components';

import DiscoverContext from "../contexts/Discover/DiscoverContext";
import SearchContext from "../contexts/Search/SearchContext";

import './style.css'

export const Search = () => {
    const { mediaAdvance, discover } = useContext(DiscoverContext);
    const { searchVisible, results, media, showResults } = useContext(SearchContext);

    return (
        <>
            {searchVisible && results && (
                <div className={`results-container`}>
                    <div className={"cards-discover-container"}>
                        {results &&
                            results.map((result) => (
                                <Card
                                    cardInfo={{
                                        id: result.id,
                                        src: result.poster_path,
                                        title: media === "tv" ? result.name : result.title,
                                        votes: result.vote_average,
                                        key: result.id,
                                        mediatype: media,
                                    }}
                                />
                            ))}
                    </div>

                </div>
            )}

            {showResults && discover && (
                <div>
                    {showResults && discover.length === 0 && (
                        <h3 >
                            No results were found
                        </h3>
                    )}
                    <div>
                        {showResults && discover.length > 1 && discover.map((discover) => (
                            <Card
                                cardInfo={{
                                    id: discover.id,
                                    src: discover.poster_path,
                                    title:
                                        mediaAdvance === "tv"
                                            ? discover.name
                                            : discover.original_title,

                                    votes: discover.vote_average,
                                    key: discover.id,
                                    mediatype: mediaAdvance,
                                }}
                            />
                        ))}
                    </div>

                </div>
            )}
        </>
    )
}