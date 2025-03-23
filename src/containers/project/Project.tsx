import "./Project.scss";
import projectData from "../../data/project/projects.json";
import { useLastCommitDate } from "../../hooks/project/useLastCommitDate";
import { Link } from "react-router-dom";
import GitHubIcon from "../../assets/svgs/skill/GitHubIcon";

const ProjectContent: React.FC<{ projectId: string }> = ({ projectId }) => {
    const project = projectData.find((p) => p.id === projectId);
    const lastCommitDate = useLastCommitDate(projectId);

    if (!project) {
        return;
    }

    return (
        <article className="project__container">
            <div className="project__repository">
                {lastCommitDate && (
                    <div className="project__repository-commit">
                        <p className="project__repository-text">Last updated:</p>
                        <time className="project__repository-time">{lastCommitDate}</time>
                    </div>
                )}

                <ul className="project__repository-list">
                    <li className="project__repository-list-item">
                        <Link to={project.repository.repositoryLink} className="project__repository-list-link">
                            <GitHubIcon className="project__repository-list-icon" />
                            <span className="project__repository-list-label">Source</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <figure className="project__container-photo">
                <img src={project.photo} className="project__container-photo-img" alt={project.title} />
            </figure>

            <h3 className="project__container-title">{project.title}</h3>

            <p className="project__container-description">{project.description}</p>

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
    return (
        <section id="project" className="project">
            <header className="project__header">
                <h2 className="project__header-title">All project</h2>
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
