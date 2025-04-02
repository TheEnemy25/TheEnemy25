import React, { useState } from "react";
import "./About.scss";
import photo from "/images/photo.png";
import ImageModal from "../../components/modals/image-modal/ImageModal";
import useWindowWidth from "../../hooks/about/useWindowWidth";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const windowWidth = useWindowWidth();
    const { t } = useTranslation();

    const Header = () => (
        <header className="about__header">
            <h1 className="about__header-title">{t('about.name')}</h1>
            <h2 className="about__header-subtitle">{t('about.position')}</h2>
        </header>
    );

    const Info = () => (
        <section className="about__info">
            <h2 className="about__info-title">{t('about.summaryTitle')}</h2>
            <p className="about__info-description">
                {t('about.summaryText')}
            </p>
        </section>
    );

    const Photo = () => (
        <figure className="about__photo">
            <img
                src={photo}
                alt={t('about.photoAlt')}
                className="about__photo-img"
                onClick={() => setModalOpen(true)}
            />
        </figure>
    );

    return (
        <>
            <section id="about" className="about">
                {windowWidth >= 1024 ? (
                    <>
                        <div className="about__container">
                            <Header />
                            <Info />
                        </div>
                        <Photo />
                    </>
                ) : (
                    <div className="about__container">
                        <div className="about__inner">
                            <Header />
                            <Photo />
                        </div>
                        <Info />
                    </div>
                )}
                <ImageModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <img src={photo} alt={t('about.photoAltLarge')} className="image-modal__page--about" />
                </ImageModal>
            </section>
        </>
    );
};

export default About;
