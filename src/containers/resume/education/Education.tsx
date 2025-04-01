import "./Education.scss";
import { EducationItem } from "../../../types/educationType";
import educationData from "../../../data/education/education.json";

const Education: React.FC = () => {

    return (
        <>
            <article className="education">
                <header className="education__header">
                    <h2 className="education__header-title">Education</h2>
                </header>

                <div className="education__container">
                    <hr className="education__container-hr" />

                    <ul className="education__list">
                        {educationData.map((item: EducationItem) => (
                            <li className="education__list-item" key={item.id}>
                                <figure className="education__list-photo">
                                    <a href={item.link} className="education__list-photo-link" target="_blank" rel="noopener noreferrer">
                                        <img src={item.image} alt={item.title} className="education__list-photo-img" />
                                    </a>
                                </figure>

                                <div className="education__info">
                                    <h3 className="education__info-title">{item.title}</h3>
                                    <time className="education__info-time">{item.time}</time>
                                    <h4 className="education__info-specialization">{item.specialization}</h4>
                                    <p className="education__info-description">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </article >
        </>
    );
};

export default Education;