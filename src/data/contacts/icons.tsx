import {
    FaMapMarkerAlt,
    FaAt,
    FaTelegramPlane,
    FaGithub,
    FaLinkedinIn,
    FaRegFilePdf,
    FaRegClock
} from "react-icons/fa";

export type IconKey = "pdf" | "location" | "clock" | "email" | "linkedin" | "telegram" | "github";

export const iconsMap: Record<IconKey, JSX.Element> = {
    pdf: <FaRegFilePdf className="contacts-panel__menu-icon contacts-panel__menu-icon--pdf" />,
    location: <FaMapMarkerAlt className="contacts-panel__menu-icon" />,
    clock: <FaRegClock className="contacts-panel__menu-icon" />,
    email: <FaAt className="contacts-panel__menu-icon contacts-panel__menu-icon--email" />,
    linkedin: <FaLinkedinIn className="contacts-panel__menu-icon contacts-panel__menu-icon--linkedin" />,
    telegram: <FaTelegramPlane className="contacts-panel__menu-icon contacts-panel__menu-icon--telegram" />,
    github: <FaGithub className="contacts-panel__menu-icon contacts-panel__menu-icon--github" />
};