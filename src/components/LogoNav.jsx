import React from "react";
import { Image } from 'react-bootstrap'
import logo from '../assets/img/logo-cine.png'

const LogoNav = () => {
    return (
        <div className="d-flex justify-content-center mt-1 p-2">
            <Image src={logo} alt="cinema logo" height="65" className='border border-white' />
        </div>
    );
};

export { LogoNav };