import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, delay }) => {
    const linkTo = project.link || `/projects#${project.id}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Link to={linkTo} className="project-card-link">
                <div className="project-card-interactive">
                    {project.type && (
                        <span className="card-type-badge">{project.type}</span>
                    )}
                    <div className="card-header">
                        {project.icon && (
                            <span className="card-icon">{project.icon}</span>
                        )}
                        <h4>{project.title}</h4>
                        <span className="card-arrow">→</span>
                    </div>
                    <p className="card-desc">{project.description}</p>

                    {project.impact && (
                        <div className="card-impact">
                            <span className="impact-label">Impact</span>
                            <span className="impact-value">{project.impact}</span>
                        </div>
                    )}
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
