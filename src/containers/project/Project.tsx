import "./Project.scss";
import projectData from "../../data/project/projects.json";
import { useTranslation } from "react-i18next";
import GitHubIcon from "../../assets/svgs/skill/GitHubIcon";

const ProjectContent: React.FC<{ projectId: string }> = ({ projectId }) => {
    const { t } = useTranslation();
    const project = projectData.find((p) => p.id === projectId);

    if (!project) {
        return null;
    }

    const { titleKey, descriptionKey } = project;

    return (
        <article className="project__container">
            <div className="project__repository">
                <ul className="project__repository-list">
                    <li className="project__repository-list-item">
                        <a href={project.repository.repositoryLink} className="project__repository-list-link" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className="project__repository-list-icon" />
                            <span className="project__repository-list-label">Source</span>
                        </a>
                    </li>
                </ul>
            </div>

            <figure className="project__container-photo">
                <img src={project.photo} className="project__container-photo-img" alt={t(titleKey)} />
            </figure>

            <h3 className="project__container-title">{t(titleKey)}</h3>

            <p className="project__container-description">{t(descriptionKey)}</p>

            <ul className="project__container-list">
                {project.technologies.map((tech) => (
                    <li key={tech} className="project__container-list-item">
                        <span className="project__container-list-label">{tech}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
};

const Project: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="project" className="project">
            <header className="project__header">
                <h2 className="project__header-title">{t("project.title")}</h2>
            </header>
            <div className="project__grid">
                {projectData.map((project) => (
                    <ProjectContent key={project.id} projectId={project.id} />
                ))}
            </div>
        </section>
    );
};

export default Project;
