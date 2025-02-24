import "./ContactsPanel.scss";
import { contactData } from "../../data/contactData";
import { useCurrentTime } from "../../hooks/useCurrentTime";

const ContactsPanel = () => {
    const currentTime = useCurrentTime("Europe/Kyiv");

    return (
        <>
            <aside className="contacts-panel">
                {contactData.map((item, index) => (
                    <div key={index} className="contacts-panel__item">
                        <span className="contacts-panel__item-icon">{item.icon}</span>
                        {item.id === "time" ? (
                            <p className="contacts-panel__item-text">{currentTime}</p>
                        ) : item.link ? (
                            <a
                                href={item.link}
                                className="contacts-panel__item-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.text}
                            </a>
                        ) : (
                            <p className="contacts-panel__item-text">{item.text}</p>
                        )}
                    </div>
                ))}
            </aside>
        </>
    );
};

export default ContactsPanel;
