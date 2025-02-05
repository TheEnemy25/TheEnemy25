import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            <header className="header">
                <div className="header__logo-nav">
                    <Link to="/" className='header__logo'>
                        <div className="header__logo-link">Portfolio</div>
                    </Link>
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li>
                                <Link to="/movie/movies-list" className="nav__link">Stack</Link>
                            </li>
                            <li>
                                <Link to="/cinema-theater/CinemaTheater" className="nav__link">Experience</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
