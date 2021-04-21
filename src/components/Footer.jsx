import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'react-bootstrap-icons';
import '../styles/footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className=' m-3'>
                <div className='text-start pt-2 w-100'>
                    <small>  © {year} Designed and built by De Lio Griselda . All rights reserved. <br />
                        <p>
                            Data provided by{' '}
                            <Link className='color-link' target='_blank' href='https://www.themoviedb.org/'>
                                TMDb.
                            </Link>
                        </p>
                    </small>
                </div>
                <Link className='size' to={'https://github.com/griseldadelio'}>
                    <Github />
                </Link>
                <Link className='size' to={'www.linkedin.com/in/griseldadelio'}>
                    <Linkedin />
                </Link>

            </div>
        </footer>
    )
}

export { Footer }