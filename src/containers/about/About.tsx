import React, { useState } from "react";
import "./About.scss";
import photo from "/images/photo.png";
import ImageModal from "../../components/modals/image-modal/ImageModal";
import useWindowWidth from "../../hooks/about/useWindowWidth";

const About: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const windowWidth = useWindowWidth();

    const Header = () => (
        <header className="about__header">
            <h1 className="about__header-title">Andrian Kobryn</h1>
            <h2 className="about__header-subtitle">.NET Developer</h2>
        </header>
    );

    const Info = () => (
        <section className="about__info">
            <h2 className="about__info-title">Summary</h2>
            <p className="about__info-description">
                Entry-level back-end developer with practical knowledge of C#, ASP.NET Core, EF
                Core, MS SQL, and foundational front-end skills in HTML, CSS, React, Next.js, and
                Tailwind. Passionate about building efficient and scalable solutions that meet modern
                development standards. Committed to continuous professional growth and eager to
                apply my knowledge to solve real-world challenges as part of a team of professionals.
            </p>
        </section>
    );

    const Photo = () => (
        <figure className="about__photo">
            <img
                src={photo}
                alt="Photo of Andrian Kobryn .NET Developer"
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
                    <img src={photo} alt="Enlarged photo" className="image-modal__page--about" />
                </ImageModal>
            </section>
        </>
    );
};

export default About;