import React from "react";
import "./About.scss";
import photo from "/public/images/photo.png";
import { contactData } from "../../data/contactData";


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

                        <div className="about__social">
                            {contactData.map((item, index) => (
                                <div key={index} className="about__social-contact">
                                    <span className="about__social-contact-icon">{item.icon}</span>
                                    {item.link ? (
                                        <a href={item.link} className="about__social-contact-link" target="_blank" rel="noopener noreferrer">
                                            {item.text}
                                        </a>
                                    ) : (
                                        <p className="about__social-contact-text">{item.text}</p>
                                    )}
                                </div>
                            ))}
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