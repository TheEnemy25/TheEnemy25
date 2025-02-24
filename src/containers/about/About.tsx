import React from "react";
import "./About.scss";
import photo from "/images/photo.png";

const About: React.FC = () => {

    return (
        <>
            <section className="about">
                <article className="about__wrapper">

                    <div className="about__info">
                        <div className="about__header">
                            <h1 className="about__header-title">Andrian Kobryn</h1>
                            <h2 className="about__header-subtitle">.NET Developer</h2>
                        </div>
                    </div>

                    <div className="about__photo">
                        <img src={photo} alt="Andrian Kobryn" className="about__photo-img" />
                    </div>

                </article>
            </section>
        </>
    );
};

export default About;
