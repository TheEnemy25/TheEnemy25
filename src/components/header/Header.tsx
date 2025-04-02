import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Header.scss';
import { useLockScroll } from '../../hooks/header/useLockScroll';
import UkraineIcon from '../../assets/svgs/UkraineIcon';
import GreatBritainIcon from '../../assets/svgs/GreatBritainIcon';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useLockScroll(isMenuOpen);

    const switchLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <>
            <header className="header">
                <Link to="/" className="header__logo">
                    Portfolio
                </Link>

                <div className={`header__container ${isMenuOpen ? 'is-active' : ''}`}>
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-item">
                                <Link to="/" className="header__menu-link">{t('header.home')}</Link>
                            </li>
                            <li className="header__menu-item">
                                <Link to="/experience" className="header__menu-link">{t('header.experience')}</Link>
                            </li>
                            <li className="header__menu-item">
                                <Link to="/certificates" className="header__menu-link">{t('header.certificates')}</Link>
                            </li>
                            <li className="header__menu-item">
                                <Link to="/education" className="header__menu-link">{t('header.education')}</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__controls">
                        <div className="header__language-switch">
                            <button
                                className={`header__language-switch-btn ${i18n.language === 'en' ? 'active' : ''}`}
                                onClick={() => switchLanguage('en')}
                            >
                                <GreatBritainIcon className="header__language-switch-icon" />
                            </button>
                            <span className="header__language-switch-stick">│</span>
                            <button
                                className={`header__language-switch-btn ${i18n.language === 'ua' ? 'active' : ''}`}
                                onClick={() => switchLanguage('ua')}
                            >
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
            </header>
        </>
    );
};

export default Header;
