import {
    FaMapMarkerAlt,
    FaAt,
    FaTelegramPlane,
    FaSkype,
    FaGithub,
    FaLinkedinIn,
    FaRegFilePdf,
    FaRegClock,
} from "react-icons/fa";
import { ContactTypes } from "../types/contactTypes";

export const contactsData: ContactTypes[] = [
    {
        id: "resume",
        icon: <FaRegFilePdf className="contacts-panel__menu-icon contacts-panel__menu-icon--pdf" />,
        text: "Curriculum vitae (RESUME)",
        link: "https://github.com/TheEnemy25",
    },
    {
        id: "location",
        icon: <FaMapMarkerAlt className="contacts-panel__menu-icon" />,
        text: "Ukraine, Lviv",
    },
    {
        id: "time",
        icon: <FaRegClock className="contacts-panel__menu-icon" />,
        text: "Loading time...",
    },
    {
        id: "email",
        icon: <FaAt className="contacts-panel__menu-icon contacts-panel__menu-icon--email" />,
        text: "andrikkobrin@gmail.com",
        link: "mailto:andrikkobrin@gmail.com",
    },
    {
        id: "linkedin",
        icon: <FaLinkedinIn className="contacts-panel__menu-icon contacts-panel__menu-icon--linkedin" />,
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/andrian-kobryn/",
    },
    {
        id: "telegram",
        icon: <FaTelegramPlane className="contacts-panel__menu-icon contacts-panel__menu-icon--telegram" />,
        text: "Telegram",
        link: "https://t.me/ENEMY_25",
    },
    {
        id: "skype",
        icon: <FaSkype className="contacts-panel__menu-icon contacts-panel__menu-icon--skype" />,
        text: "Skype",
        link: "skype:live:.cid.1fd26dc3fa8cf2ea?chat",
    },
    {
        id: "github",
        icon: <FaGithub className="contacts-panel__menu-icon contacts-panel__menu-icon--github" />,
        text: "GitHub",
        link: "https://github.com/TheEnemy25",
    },
];