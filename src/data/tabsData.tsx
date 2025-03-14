import Certificates from "../containers/resume/certificates/Certificates";
import Education from "../containers/resume/education/Education";
import Experience from "../containers/resume/experience/Experience";

export const tabsData = [
    { id: "experience", label: "Experience", component: <Experience /> },
    { id: "education", label: "Education", component: <Education /> },
    { id: "certificates", label: "Certificates", component: <Certificates /> },
];
