import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <Link to="/" className='header__logo'>
                        Portfolio
                    </Link>

                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li>
                                <Link to="/movie/movies-list">Stack</Link>
                            </li>
                            <li>
                                <Link to="/cinema-theater/CinemaTheater">Experience</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__controls">
                        <div className="language-switch">
                            <button className="language-switch__btn">EN</button>
                            <span className='language-switch__stick'>|</span>
                            <button className="language-switch__btn">UA</button>
                        </div>

                        {/* <div className="theme-switch">
                            <button className="theme-switch__btn">🌙</button>
                            <button className="theme-switch__btn">☀️</button>
                        </div> */}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
