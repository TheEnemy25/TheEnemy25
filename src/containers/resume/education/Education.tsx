import "./Education.scss";
import { Link } from "react-router-dom";
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
                    {educationData.map((item: EducationItem) => (
                        <div className="education__container-inner" key={item.id}>
                            <figure className="education__photo">
                                <Link to={item.link} className="education__photo-link" target="_blank" rel="noopener noreferrer">
                                    <img src={item.image} alt={item.title} className="education__photo-img" />
                                </Link>
                            </figure>

                            <div className="education__info">
                                <h3 className="education__info-title">{item.title}</h3>
                                <time className="education__info-time">{item.time}</time>
                                <h4 className="education__info-specialization">{item.specialization}</h4>
                                <p className="education__info-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </article >
        </>
    );
};

export default Education;