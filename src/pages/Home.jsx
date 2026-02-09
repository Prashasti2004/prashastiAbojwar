import './Home.css';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import ProjectCard from '../components/ProjectCard';
import profileImage from '../assets/profile.png';
import resumePDF from '../assets/Prashasti_resume.pdf';

const Home = () => {
    const featuredProjects = [
        {
            id: 'shadow-project',
            title: "Founder's Office Shadow Project",
            description: 'Simulated executive execution: Priority management, decision memos, & operating cadence.',
            type: 'Operations',
            impact: '30% fewer ad-hoc meetings',
            icon: '🎯',
            link: '/projects#shadow-project'
        },
        {
            id: 'zepto-ceo-ai',
            title: 'CEO Cognitive Load Reduction',
            description: 'Compressing 50+ operational metrics into 5 founder-level insights.',
            type: 'AI System',
            impact: 'View Project →',
            icon: '🧠',
            link: '/projects/zepto-ceo-ai'
        },
        {
            id: 'efficiency-audit',
            title: 'Efficiency Audit + KPI Dashboard',
            description: 'End-to-end business audit identifying bottlenecks + live KPI dashboard implementation.',
            type: 'Analytics',
            impact: 'View Full Case Study →',
            icon: '📊',
            link: '/zepto-audit'
        }
    ];

    const focusAreas = [
        {
            icon: '👔',
            title: 'Chief of Staff Level Execution',
            description: 'Strategic planning & cross-functional coordination'
        },
        {
            icon: '🚀',
            title: '0 to 1 Technical Launches',
            description: 'Product development & go-to-market execution'
        },
        {
            icon: '⚙️',
            title: 'Operational Systems Design',
            description: 'Process optimization & workflow automation'
        },
        {
            icon: '📈',
            title: 'Data & Metrics Infrastructure',
            description: 'Analytics dashboards & KPI tracking systems'
        }
    ];

    const stats = [
        { label: 'IIT Bombay', value: '🎓' },
        { label: 'NCC Leader', value: '⭐' },
        { label: '99.27%ile', value: '📊' }
    ];

    return (
        <div className="page-home">
            {/* Hero / Profile Section */}
            <section className="section-padding hero-section">
                <div className="container">
                    <div className="profile-section">
                        {/* Profile Image */}
                        <FadeIn delay={0.1}>
                            <div className="profile-image-container">
                                <div className="profile-image-wrapper">
                                    <img
                                        src={profileImage}
                                        alt="Prashasti Abojwar"
                                        className="profile-image"
                                    />
                                    <div className="profile-image-glow"></div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Profile Content */}
                        <div className="profile-content">
                            <FadeIn delay={0.15}>
                                <h1 className="profile-name">Prashasti Abojwar</h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="profile-role">
                                    <span>Founder's Office</span>
                                    <span className="role-divider">|</span>
                                    <span>Strategy</span>
                                    <span className="role-divider">|</span>
                                    <span>Execution</span>
                                    <span className="role-divider">|</span>
                                    <span>Systems</span>
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.25}>
                                <p className="profile-intro">
                                    I work closely with founders to turn ambiguity into execution.
                                    When chaos shows up, I build the systems that make it manageable —
                                    so you can focus on what only you can do.
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <div className="profile-stats">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="stat-item">
                                            <span className="stat-icon">{stat.value}</span>
                                            <span className="stat-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.35}>
                                <div className="profile-actions">
                                    <Link to="/contact" className="button-primary">Start a Conversation</Link>
                                    <a href={resumePDF} download="Prashasti_Resume.pdf" className="button-secondary">
                                        Download Resume
                                    </a>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* What I Do Section */}
            <section className="section-padding what-i-do-section bg-surface-subtle">
                <div className="container">
                    <FadeIn>
                        <h3 className="section-title">Focus Areas</h3>
                    </FadeIn>
                    <div className="focus-areas-grid">
                        {focusAreas.map((area, i) => (
                            <FadeIn key={i} delay={0.1 + i * 0.05}>
                                <div className="focus-area-card">
                                    <div className="focus-icon">{area.icon}</div>
                                    <h4 className="focus-title">{area.title}</h4>
                                    <p className="focus-description">{area.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selected Projects Section */}
            <section className="section-padding selected-projects-section">
                <div className="container">
                    <FadeIn>
                        <h3 className="section-title">Selected Projects</h3>
                    </FadeIn>
                    <div className="projects-grid">
                        {featuredProjects.map((p, i) => (
                            <ProjectCard key={p.id} project={p} delay={i * 0.1} />
                        ))}
                    </div>
                    <FadeIn delay={0.4}>
                        <div className="view-all-projects">
                            <Link to="/projects" className="link-arrow">
                                View All Projects <span>→</span>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding cta-section bg-surface-subtle">
                <div className="container">
                    <FadeIn>
                        <div className="cta-content">
                            <h3 className="cta-heading">Scaling is painful. Hiring shouldn't be.</h3>
                            <p className="cta-description">
                                Skip the HR screen. If you need someone who can step in and execute from Day 1, let's have a real conversation.
                            </p>
                            <div className="cta-actions">
                                <Link to="/contact" className="button-primary">Start a Conversation</Link>
                                <Link to="/resume" className="button-secondary">View Resume</Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Home;
