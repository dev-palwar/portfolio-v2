import { FiExternalLink, FiGithub } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import ReactMarkdown from "react-markdown";
import styles from "./project-sidebar.module.scss";

const ProjectSidebar = ({ isOpen, project, onClose }) => {
  if (!project) return null;

  return (
    <>
      <div
        className={`${styles.projectSidebarOverlay} ${
          isOpen ? styles.active : ""
        }`}
        onClick={onClose}
      />
      <div
        className={`${styles.projectSidebar} ${isOpen ? styles.active : ""}`}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <RxCross2 size={15} />
        </button>

        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <img
              src={project.img || "/placeholder.svg?height=200&width=400"}
              alt={project.heading}
            />
          </div>

          <div className={styles.projectTechnologies}>
            <div className={styles.techTags}>
              {project.tech_Stack.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <h2 className={styles.projectTitle}>{project.heading}</h2>

          {/* Use ReactMarkdown to render the Markdown properly */}
          <div className={styles.projectDescription}>
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </div>

          {project.features && project.features.length > 0 && (
            <div className={styles.projectFeatures}>
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.projectLinks}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FiGithub size={20} />
                <span>View Code</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FiExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSidebar;
