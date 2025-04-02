import "./ContactsPanel.scss";
import { ContactWithIcon, getContactsData } from "../../types/contactsType";
import { useCurrentTime } from "../../hooks/contacts-panel/useCurrentTime";
import { useTranslation } from "react-i18next";

const ContactsPanel = () => {
    const { t } = useTranslation();
    const currentTime = useCurrentTime("Europe/Kyiv");
    const contactsData = getContactsData();

    const renderItem = (item: ContactWithIcon) => {
        const text = t(`contacts.${item.id}`);

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
                    {text}
                </a>
            );
        }

        return (
            <p className="contacts-panel__menu-text">
                <span className="contacts-panel__menu-icon">{item.icon}</span>
                {text}
            </p>
        );
    };

    return (
        <>
            <aside className="contacts-panel">
                <nav className="contacts-panel__menu">
                    <ul className="contacts-panel__menu-list">
                        {contactsData.map((item) => (
                            <li key={item.id} className="contacts-panel__menu-item" id={item.id}>
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
