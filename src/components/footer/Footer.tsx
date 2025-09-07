import { Link } from "react-router-dom";
import "./Footer.scss";
import {
    FaAt,
    FaTelegramPlane,
    FaGithub,
    FaLinkedinIn,
    FaRegFilePdf,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const socialLinks = [
    { id: "pdf", icon: <FaRegFilePdf />, url: "/TheEnemy25/docs/Andrian-Kobryn(Resume).pdf" },
    { id: "email", icon: <FaAt />, url: "mailto:andrikkobrin@gmail.com" },
    { id: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/andrian-kobryn/" },
    { id: "telegram", icon: <FaTelegramPlane />, url: "https://t.me/ENEMY_25" },
    { id: "github", icon: <FaGithub />, url: "https://github.com/TheEnemy25" },
];

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <Link to="/" className="footer__container-title">Portfolio</Link>

                    <p className="footer__container-text">
                        © <time>{new Date().getFullYear()}</time> &nbsp;
                        {t('footer.text')}
                    </p>

                    <div className="footer__container-icons">
                        {socialLinks.map(({ id, icon, url }) => (
                            <a key={id} href={url} className={`footer__container-icon footer__container-icon--${id}`} target="_blank" rel="noopener noreferrer">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
