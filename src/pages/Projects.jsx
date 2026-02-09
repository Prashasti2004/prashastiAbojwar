import { Link } from 'react-router-dom';
import './Projects.css';
import FadeIn from '../components/FadeIn';

const Projects = () => {
    const projects = [
        {
            id: 'shadow-project',
            title: "Founder's Office Shadow Project",
            problem: 'Series A founder drowning in operational noise; unable to distinguish signal from noise for strategic planning.',
            approach: 'Established weekly execution cadence: Monday priority alignment, Friday retro, and async decision memos for non-blocking items.',
            outcome: 'Reserved founder focus for product & hiring. 30% reduction in ad-hoc focused meetings.',
            deliverable: 'Notion Operating OS + Weekly Sync Template',
            link: null
        },
        {
            id: 'ai-reducer',
            title: 'AI Cognitive Load Reducer',
            problem: 'High-velocity decision fatigue. Founder spending 2 hours/day catching up on context across Slack and email.',
            approach: 'Built an automated context engine that summarizes trade-offs and surfaces only "blocking" decisions.',
            outcome: 'Reduced "catch-up" time by 80%. Decisions made 2x faster with higher confidence.',
            deliverable: 'Python/LangChain Agent + Slack Bot',
            link: '/projects/zepto-ceo-ai'
        },
        {
            id: 'efficiency-audit',
            title: 'Efficiency Audit + KPI Dashboard',
            problem: 'Team scaling headcount but shipping velocity slowed. "Busy work" masquerading as progress.',
            approach: 'Audited workflows to kill 2 zombie processes. Defined one North Star metric + 3 operating KPIs.',
            outcome: 'Realigned team. Weekly reviews now focus on "why we missed" vs "what did we do".',
            deliverable: 'Live Metabase Dashboard + SQL Data Pipeline',
            link: '/zepto-audit'
        }
    ];

    return (
        <div className="page-projects section-padding">
            <div className="container">
                <FadeIn>
                    <h1 className="page-title">Selected Projects</h1>
                </FadeIn>
                <div className="projects-list">
                    {projects.map((project, i) => (
                        <FadeIn key={project.id} delay={i * 0.1}>
                            {project.link ? (
                                <Link to={project.link} className="project-link">
                                    <article className="project-case-study clickable" id={project.id}>
                                        <h2 className="case-title">
                                            {project.title}
                                            <span className="view-details">View Case Study →</span>
                                        </h2>

                                        <div className="case-section">
                                            <h3>Business Problem</h3>
                                            <p>{project.problem}</p>
                                        </div>

                                        <div className="case-section">
                                            <h3>Approach</h3>
                                            <p>{project.approach}</p>
                                        </div>

                                        <div className="case-section">
                                            <h3>Impact</h3>
                                            <p>{project.outcome}</p>
                                        </div>

                                        <div className="case-section artifact-reveal" style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px dashed var(--border-color)' }}>
                                            <h3 style={{ fontSize: '0.75rem', marginBottom: '4px' }}>Build Artifact</h3>
                                            <p style={{ fontSize: '0.9rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                                                {project.deliverable}
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            ) : (
                                <article className="project-case-study" id={project.id}>
                                    <h2 className="case-title">{project.title}</h2>

                                    <div className="case-section">
                                        <h3>Business Problem</h3>
                                        <p>{project.problem}</p>
                                    </div>

                                    <div className="case-section">
                                        <h3>Approach</h3>
                                        <p>{project.approach}</p>
                                    </div>

                                    <div className="case-section">
                                        <h3>Impact</h3>
                                        <p>{project.outcome}</p>
                                    </div>

                                    <div className="case-section artifact-reveal" style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px dashed var(--border-color)' }}>
                                        <h3 style={{ fontSize: '0.75rem', marginBottom: '4px' }}>Build Artifact</h3>
                                        <p style={{ fontSize: '0.9rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                                            {project.deliverable}
                                        </p>
                                    </div>
                                </article>
                            )}
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
