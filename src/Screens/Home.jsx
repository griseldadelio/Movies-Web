import React from 'react';
import { Nav } from '../components'
import { Footer } from '../components/Footer';
import SearchBar from '../components/SearchBar';

export const Home = () => {
    return (
        <>
            <Nav />
            <SearchBar />
            <Footer />
        </>
    )
}
