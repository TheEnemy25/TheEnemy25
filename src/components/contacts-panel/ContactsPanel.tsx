import "./ContactsPanel.scss";
import { useCurrentTime } from "../../hooks/useCurrentTime";
import { ContactTypes } from "../../types/contactTypes";
import { contactsData } from "../../data/contactsData";

const ContactsPanel = () => {
    const currentTime = useCurrentTime("Europe/Kyiv");

    const renderItem = (item: ContactTypes) => {
        if (item.id === "time") {
            return (
                <time className="contacts-panel__menu-time">
                    <span className="contacts-panel__menu-icon">{item.icon}</span>
                    {currentTime}
                </time>
            );
        }

        if (item.link) {
            return (
                <a
                    href={item.link}
                    className="contacts-panel__menu-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="contacts-panel__menu-icon">{item.icon}</span>
                    {item.text}
                </a>
            );
        }

        return (
            <p className="contacts-panel__menu-text">
                <span className="contacts-panel__menu-icon">{item.icon}</span>
                {item.text}
            </p>
        );
    };

    return (
        <>
            <aside className="contacts-panel">
                <nav className="contacts-panel__menu">
                    <ul className="contacts-panel__menu-list">
                        {contactsData.map((item, index) => (
                            <li key={index} className="contacts-panel__menu-item" id={item.id || undefined}>
                                {renderItem(item)}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default ContactsPanel;
