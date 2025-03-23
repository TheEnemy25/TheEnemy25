import { Link } from "react-router-dom";
import "./Footer.scss";
import {
    FaAt,
    FaTelegramPlane,
    FaGithub,
    FaLinkedinIn,
    FaRegFilePdf,
} from "react-icons/fa";

const socialLinks = [
    { id: "pdf", icon: <FaRegFilePdf />, url: "#" },
    { id: "email", icon: <FaAt />, url: "mailto:andrikkobrin@gmail.com" },
    { id: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/andrian-kobryn/" },
    { id: "telegram", icon: <FaTelegramPlane />, url: "https://t.me/ENEMY_25" },
    { id: "github", icon: <FaGithub />, url: "https://github.com/TheEnemy25" },
];

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <h2 className="footer__container-title">Portfolio</h2>

                    <p className="footer__container-text">
                        © <time>{new Date().getFullYear()}</time> &nbsp;
                        Andrian Kobryn  |
                        All rights reserved
                    </p>

                    <div className="footer__container-icons">
                        {socialLinks.map(({ id, icon, url }) => (
                            <Link key={id} to={url} className={`footer__container-icon footer__container-icon--${id}`} target="_blank" rel="noopener noreferrer">
                                {icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
