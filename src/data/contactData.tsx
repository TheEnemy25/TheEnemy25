import { FaMapMarkerAlt, FaAt, FaTelegramPlane, FaSkype, FaGithub, FaLinkedinIn, FaRegFilePdf, FaRegClock } from "react-icons/fa";

export const contactData = [
    { icon: <FaMapMarkerAlt className="about__social-contact-icon" />, text: "Ukraine, Lviv" },
    { icon: <FaRegClock className="about__social-contact-icon" />, text: "Loading time...", id: "time" },
    { icon: <FaRegFilePdf className="about__social-contact-icon about__social-contact-icon--pdf" />, link: "https://github.com/TheEnemy25", text: "Curriculum vitae (RESUME)" },
    { icon: <FaAt className="about__social-contact-icon about__social-contact-icon--email" />, link: "mailto:andrikkobrin@gmail.com", text: "andrikkobrin@gmail.com" },
    { icon: <FaLinkedinIn className="about__social-contact-icon about__social-contact-icon--linkedin" />, link: "https://www.linkedin.com/in/andrian-kobryn/", text: "LinkedIn" },
    { icon: <FaTelegramPlane className="about__social-contact-icon about__social-contact-icon--telegram" />, link: "https://t.me/ENEMY_25", text: "Telegram" },
    { icon: <FaSkype className="about__social-contact-icon about__social-contact-icon--skype" />, link: "skype:live:.cid.1fd26dc3fa8cf2ea?chat", text: "Skype" },
    { icon: <FaGithub className="about__social-contact-icon about__social-contact-icon--github" />, link: "https://github.com/TheEnemy25", text: "GitHub" }
];