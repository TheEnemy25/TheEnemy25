import React from "react";
import "./Anchor.scss";
import useSectionIds from "../../hooks/anchor/useSectionIds";
import useScrollspy from "../../hooks/anchor/useScrollspy";

const Anchor: React.FC = () => {
    const sectionIds = useSectionIds();
    const activeSection = useScrollspy(sectionIds);

    return (
        <>
            <aside className="anchor">
                <nav className="anchor__menu">
                    <ul className="anchor__menu-list">
                        {sectionIds.map((id) => (
                            <li key={id} className="anchor__menu-item">
                                <a
                                    href={`#${id}`}
                                    className={`anchor__menu-link ${activeSection === id ? "anchor__menu-link--active" : ""}`}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Anchor;
