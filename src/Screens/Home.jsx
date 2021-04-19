import React from 'react';
import { NavAuth } from '../components'
import { Footer } from '../components/Footer';
import { SearchBar } from '../components/SearchBar';
import { Intro } from '../components/Intro';
import { NavGuest } from '../components/NavGuest';

export const Home = () => {
    return (
        <>
            {/* <NavAuth /> */}
            <NavGuest />
            <SearchBar />
            <Intro />
            <Footer />
        </>
    )
}
