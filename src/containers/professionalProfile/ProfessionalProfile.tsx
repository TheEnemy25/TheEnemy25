import { useState } from "react";
import { useTranslation } from "react-i18next";
import Certificates from "./certificates/Certificates";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import "./ProfessionalProfile.scss";

const ProfessionalProfile: React.FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState("experience");

    const tabsData = [
        { id: "experience", label: t("resume.experience"), component: <Experience /> },
        { id: "education", label: t("resume.education"), component: <Education /> },
        { id: "certificates", label: t("resume.certificates"), component: <Certificates /> },
    ];

    const activeTabComponent = tabsData.find((tab) => tab.id === activeTab)?.component;

    return (
        <>
            <section id="professional-profile" className="resume">
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

export default ProfessionalProfile;