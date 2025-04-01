import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.scss';
import { useLockScroll } from '../../hooks/header/useLockScroll';
import UkraineIcon from '../../assets/svgs/UkraineIcon';
import GreatBritainIcon from '../../assets/svgs/GreatBritainIcon';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useLockScroll(isMenuOpen);

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                Portfolio
            </Link>

            <div className={`header__container ${isMenuOpen ? 'is-active' : ''}`}>
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item">
                            <Link to="/" className="header__menu-link">Home</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/experience" className="header__menu-link">Experience</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/certificates" className="header__menu-link">Certificates</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/education" className="header__menu-link">Education</Link>
                        </li>
                    </ul>
                </nav>

                <div className="header__controls">
                    <div className="header__language-switch">
                        <button className="header__language-switch-btn">
                            <GreatBritainIcon className="header__language-switch-icon" />
                        </button>
                        <span className="header__language-switch-stick">│</span>
                        <button className="header__language-switch-btn">
                            <UkraineIcon className="header__language-switch-icon" />
                        </button>
                    </div>
                </div>
            </div>

            <button
                className="header__burger-button"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </header >
    );
};

export default Header;