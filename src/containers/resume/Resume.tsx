import Certificates from "./certificates/Certificates";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import "./Resume.scss";
import { useState } from "react";

const Resume: React.FC = () => {
    const [activeTab, setActiveTab] = useState("experience");

    const tabsData = [
        { id: "experience", label: "Experience", component: <Experience /> },
        { id: "education", label: "Education", component: <Education /> },
        { id: "certificates", label: "Certificates", component: <Certificates /> },
    ];

    const activeTabComponent = tabsData.find((tab) => tab.id === activeTab)?.component;

    return (
        <>
            <section id="experience & Education" className="resume">
                <nav className="resume__tab" aria-label="Resume sections">
                    <ul className="resume__tab-list" role="tablist">
                        {tabsData.map((tab) => (
                            <li key={tab.id} className="resume__tab-item" role="presentation">
                                <button
                                    className={`resume__tab-button ${activeTab === tab.id ? "resume__tab-button--active" : ""}`}
                                    onClick={() => setActiveTab(tab.id)}
                                    aria-selected={activeTab === tab.id}
                                    aria-controls={`panel-${tab.id}`}
                                    role="tab"
                                    id={`tab-${tab.id}`}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="resume__content" role="tabpanel" id={`panel-${activeTab}`}>
                    {activeTabComponent}
                </div>
            </section >
        </>
    );
}

export default Resume;