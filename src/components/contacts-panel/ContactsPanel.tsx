import "./ContactsPanel.scss";
import { contactData } from "../../data/contactData";
import { useCurrentTime } from "../../hooks/useCurrentTime";

const ContactsPanel = () => {
    const currentTime = useCurrentTime("Europe/Kyiv");

    return (
        <>
            <aside className="contacts-panel">
                <nav className="contacts-panel__menu">
                    <ul className="contacts-panel__menu-list">
                        {contactData.map((item, index) => (
                            <li key={index} className="contacts-panel__menu-item">
                                {item.id === "time" ? (
                                    <time className="contacts-panel__menu-time">
                                        <span className="contacts-panel__menu-icon">{item.icon}</span>
                                        {currentTime}
                                    </time>
                                ) : item.link ? (
                                    <a
                                        href={item.link}
                                        className="contacts-panel__menu-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="contacts-panel__menu-icon">{item.icon}</span>
                                        {item.text}
                                    </a>
                                ) : (
                                    <p className="contacts-panel__menu-text">
                                        <span className="contacts-panel__menu-icon">{item.icon}</span>
                                        {item.text}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default ContactsPanel;
