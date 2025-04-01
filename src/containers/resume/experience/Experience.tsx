import experienceData from "../../../data/experience/experience.json";
import "./Experience.scss";
import { ExperienceItem } from "../../../types/experienceType";

const Experience: React.FC = () => {

    return (
        <>
            <article className="experience">
                <header className="experience__header">
                    <h2 className="experience__header-title">Experience</h2>
                </header>

                <div className="experience__container">
                    <hr className="experience__container-hr" />

                    <ul className="experience__list">
                        {experienceData.map((item: ExperienceItem) => (
                            <li className="experience__list-item" key={item.id}>
                                <figure className="experience__list-photo">
                                    <a href={item.link} className="experience__list-photo-link" target="_blank" rel="noopener noreferrer">
                                        <img src={item.image} alt={item.title} className="experience__list-photo-img" />
                                    </a>
                                </figure>

                                <div className="experience__info">
                                    <h3 className="experience__info-title">{item.title}</h3>
                                    <time className="experience__info-time">{item.time}</time>
                                    <h4 className="experience__info-specialization">{item.specialization}</h4>
                                    <p className="experience__info-description">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </article >
        </>
    );
};

export default Experience;