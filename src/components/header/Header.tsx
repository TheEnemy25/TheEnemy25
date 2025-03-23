import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            <header className="header">
                <div className='header__container'>
                    <Link to="/" className='header__logo'>
                        Portfolio
                    </Link>

                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-item">
                                <Link to="" className="header__menu-link">Home</Link>
                            </li>

                            <li className="header__menu-item">
                                <Link to="" className="header__menu-link">Stack</Link>
                            </li>

                            <li className="header__menu-item">
                                <Link to="" className="header__menu-link">Experience</Link>
                            </li>

                            <li className="header__menu-item">
                                <Link to="" className="header__menu-link">Education</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="header__controls">
                    <div className="header__language-switch">
                        <button className="header__language-switch-btn">EN</button>
                        <span className="header__language-switch-stick">|</span>
                        <button className="header__language-switch-btn">UA</button>
                    </div>

                    {/* <div className="header__theme-switch">
                    <button className="header__theme-switch-btn">🌙</button>
                    <button className="header__theme-switch-btn">☀️</button>
                </div> */}
                </div>
            </header>
        </>
    );
};

export default Header;
