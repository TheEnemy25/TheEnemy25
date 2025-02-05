import React, { useState } from "react";
import "./SupportPanel.scss";
import { Link } from "react-router-dom";
import { supportIconsData } from "../../data/SupportIconsData";

const SupportPanel = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <nav className="support-panel">
            <div className="support-panel__icon">
                {supportIconsData.map((data, index) => (
                    <Link
                        key={index}
                        to="/"
                        className="support-panel__icon-link"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {React.cloneElement(data.icon, {
                            className: `${data.className} ${hoveredIndex === index ? "hovered" : ""
                                }`,
                        })}
                        {hoveredIndex === index && (
                            <span className="support-panel__tooltip">{data.title}</span>
                        )}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default SupportPanel;
