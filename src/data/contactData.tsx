import { FaMapMarkerAlt, FaAt, FaTelegramPlane, FaSkype, FaGithub, FaLinkedinIn, FaRegFilePdf, FaRegClock } from "react-icons/fa";

export const contactData = [
    { icon: <FaMapMarkerAlt className="contacts-panel__item-icon" />, text: "Ukraine, Lviv" },
    { icon: <FaRegClock className="contacts-panel__item-icon" />, text: "Loading time...", id: "time" },
    { icon: <FaRegFilePdf className="contacts-panel__item-icon contacts-panel__item-icon--pdf" />, link: "https://github.com/TheEnemy25", text: "Curriculum vitae (RESUME)" },
    { icon: <FaAt className="contacts-panel__item-icon contacts-panel__item-icon--email" />, link: "mailto:andrikkobrin@gmail.com", text: "andrikkobrin@gmail.com" },
    { icon: <FaLinkedinIn className="contacts-panel__item-icon contacts-panel__item-icon--linkedin" />, link: "https://www.linkedin.com/in/andrian-kobryn/", text: "LinkedIn" },
    { icon: <FaTelegramPlane className="contacts-panel__item-icon contacts-panel__item-icon--telegram" />, link: "https://t.me/ENEMY_25", text: "Telegram" },
    { icon: <FaSkype className="contacts-panel__item-icon contacts-panel__item-icon--skype" />, link: "skype:live:.cid.1fd26dc3fa8cf2ea?chat", text: "Skype" },
    { icon: <FaGithub className="contacts-panel__item-icon contacts-panel__item-icon--github" />, link: "https://github.com/TheEnemy25", text: "GitHub" }
];
