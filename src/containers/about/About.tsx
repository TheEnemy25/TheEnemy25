import React from "react";
import "./About.scss";
import photo from "/images/photo.png";

const About: React.FC = () => {

    return (
        <>
            <section className="about">
                <article className="about-container">
                    <header className="about-container__header">
                        <h1 className="about-container__header-title">Andrian Kobryn</h1>
                        <h2 className="about-container__header-subtitle">.NET Developer</h2>
                    </header>

                    <div className="about-container__info">
                        <h2 className="about-container__info-title">Summary</h2>
                        <p className="about-container__info-text">Entry-level back-end developer with practical knowledge of C#, ASP.NET Core, EF
                            Core, MS SQL, and foundational front-end skills in HTML, CSS, React, Next.js, and
                            Tailwind. Passionate about building efficient and scalable solutions that meet modern
                            development standards. Committed to continuous professional growth and eager to
                            apply my knowledge to solve real-world challenges as part of a team of professionals</p>
                    </div>
                </article>

                <figure className="about__photo">
                    <img src={photo} alt="Andrian Kobryn" className="about__photo-img" />
                </figure>
            </section>
        </>
    );
};

export default About;
