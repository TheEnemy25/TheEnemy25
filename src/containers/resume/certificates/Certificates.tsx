import "./Certificates.scss";
import certificatesData from "../../../data/certificates/certificates.json";

const Certificates: React.FC = () => {

    return (
        <>
            <article className="certificates">
                <header className="certificates__header">
                    <h2 className="certificates__header-title">Certificates</h2>
                </header>

                <ul className="certificates__list">
                    {certificatesData.map((cert) => (
                        <li key={cert.id} className="certificates__list-item">
                            <a href={cert.pdf} className="certificates__list-link" target="_blank" rel="noopener noreferrer">
                                <figure className="certificates__list-photo">
                                    <img
                                        src={cert.image}
                                        alt={`Certificate: ${cert.caption}`}
                                        className="certificates__list-photo-img"
                                    />

                                    <figcaption className="certificates__list-caption">{cert.caption}</figcaption>
                                </figure>
                            </a>
                        </li>
                    ))}
                </ul>
            </article>
        </>
    );
};

export default Certificates;