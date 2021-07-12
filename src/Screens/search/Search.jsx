import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { api } from '../../utils';
import { Card } from '../../components';

import './search.css'

export const Search = () => {
    const [results, setResults] = useState([]);
    const history = useHistory()

    const params = new URLSearchParams(window.location.search)
    const search = params.get('s');

    useEffect(() => {
        (async () => {
            api.get((`/search/movie?query=${search ?? ' '}`)).then(response => setResults(response.data.results))
        })()
    }, [search]);

    const handleInputChange = (event) => {
        params.set('s', `${event.target.value}`)
        history.push({
            pathname: '/search',
            search: `?${params.toString()}`,
        })
        // window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
    }


    return (
        <div className={'main-container'}>
            <Form className={'container mt-5'}>
                <Form.Group >
                    <Form.Label className={'search-title mt-5'}>
                        <h2><strong>Find your next Movie</strong></h2>
                    </Form.Label>
                    <Form.Control type='text' placeholder='Search...' name='s' onChange={handleInputChange} />
                </Form.Group>
            </Form>
            <div className={'main-category-container p-3'}>
                {results && results.map((result) => (
                    <Card
                        key={result.id}
                        cardInfo={{
                            id: result.id,
                            src: result.poster_path,
                            title: result.title,
                            votes: result.vote_average,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}