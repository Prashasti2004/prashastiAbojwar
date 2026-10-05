import './Resume.css';
import FadeIn from '../components/FadeIn';

import resumePDF from '../assets/Prashasti_Resume.pdf';

const Resume = () => {
    return (
        <div className="page-resume section-padding">
            <div className="container">
                <FadeIn>
                    <div className="resume-header">
                        <div>
                            <h1 className="page-title">Resume</h1>
                            <p className="resume-subtitle">Founder’s Office | Strategy | Execution | Systems</p>
                        </div>
                        <a href={resumePDF} download="Prashasti_Resume.pdf" className="button-primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Download PDF
                        </a>
                    </div>
                </FadeIn>

                <div className="resume-paper">
                    {/* Education */}
                    <FadeIn delay={0.05}>
                        <section className="resume-section">
                            <h2>Education</h2>
                            <div className="resume-item education-item">
                                <div className="resume-item-header">
                                    <h3>Bachelor of Technology (B.Tech) - Aerospace Engineering</h3>
                                    <span>2021 - 2025</span>
                                </div>
                                <p className="company-name">Indian Institute of Technology Bombay (IIT Bombay)</p>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Professional Experience */}
                    <FadeIn delay={0.1}>
                        <section className="resume-section">
                            <h2>Professional Experience</h2>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Product Management</h3>
                                    <span>Jul 2026 - Present</span>
                                </div>
                                <p className="company-name">Epifi (Tetriz)</p>
                                <ul>
                                    <li>Built GTM automation for outbound pipeline (Sales Nav → Apollo → HubSpot) on 6.2K+ ICP leads</li>
                                    <li>Owned 0→1 social media strategy on Instagram, YouTube & TikTok for organic brand growth</li>
                                    <li>Set up & scaled AI content engine turning daily trend signals into fact-checked blog & LinkedIn posts</li>
                                    <li className="resume-impact">
                                        <strong>Impact:</strong> 35K+ organic views on a single reel; ~5x outbound reply rate (0.2% → 1.2%) in a month
                                    </li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Software Dev</h3>
                                    <span>Jun 2025 - Jul 2026</span>
                                </div>
                                <p className="company-name">Geminus Tech (Client: Toshiba)</p>
                                <ul>
                                    <li>Working on frontend firmware layer for NVMe-based SSD drives deployed in production environments</li>
                                    <li>Analyzed firmware logs to diagnose post-launch SSD failures impacting enterprise customer deployments</li>
                                    <li>Implemented root-cause debugging workflows, significantly improving turnaround time for critical issues</li>
                                    <li>Identify NVMe protocol bottlenecks affecting drive stability, reducing recurring performance escalations</li>
                                    <li className="resume-impact">
                                        <strong>Impact:</strong> Reduced recurring firmware issue turnaround time by 25%, strengthening pre-release validation
                                    </li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Software Dev</h3>
                                    <span>Jun - Jul 2024</span>
                                </div>
                                <p className="company-name">Sensorama Technologies</p>
                                <p className="item-tagline">Awarded Letter of Recommendation for delivering production-ready, impact-driven system improvements</p>
                                <ul>
                                    <li>Designed and optimized touch-based interface for HPLC hardware system, enhancing operational usability</li>
                                    <li>Re-architected UI workflows to improve navigation clarity and reduce user interaction friction</li>
                                    <li>Implemented multi-profile storage system enabling personalized configurations and workflow flexibility</li>
                                    <li className="resume-impact">
                                        <strong>Impact:</strong> Improved overall device usability by 35%, accelerating adoption across end users
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Key Projects */}
                    <FadeIn delay={0.2}>
                        <section className="resume-section">
                            <h2>Key Projects</h2>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Founder's Office Shadow Project | Quick-Commerce</h3>
                                    <span>2026</span>
                                </div>
                                <p className="item-tagline">Simulated end-to-end Founder's Office ownership for a high-burn, multi-city quick-commerce startup</p>
                                <ul>
                                    <li>Diagnosed unit economics of 8 dark stores, identifying 18% burn inefficiencies & city-level execution gaps</li>
                                    <li>Authored decision memos outlining trade-offs, SOPs & built KPI dashboards for weekly CEO reviews</li>
                                    <li>Delivered a 30-60-90 day roadmap projecting 12–15% cost optimization & improved store-level CM</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>AI System to Reduce CEO Cognitive Load</h3>
                                    <span>2026</span>
                                </div>
                                <p className="item-tagline">Built an AI-powered executive agent using n8n to reduce decision fatigue and reporting overload</p>
                                <ul>
                                    <li>Converted raw operational metrics across 5+ functions into weekly executive summaries and briefs</li>
                                    <li>Designed risk-scoring & prioritization logic to flag high-impact issues requiring immediate attention</li>
                                    <li className="resume-impact">
                                        <strong>Impact:</strong> Reduced manual reporting effort by 60% while improving decision turnaround speed by 35%
                                    </li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Startup Efficiency Audit | Self-Project</h3>
                                    <span>2026</span>
                                </div>
                                <p className="item-tagline">Conducted structured operational audit to improve unit economics with fleet, inventory & support functions</p>
                                <ul>
                                    <li>Modeled cost leakages across delivery, perishables & refunds, identifying 15–56% efficiency improvement</li>
                                    <li>Designed dynamic batching, markdown pricing & AI refund validation with risk-tier scoring +11pt margins</li>
                                    <li>Built KPI and ownership framework shifting from founder-centric to scalable, city-level accountability</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Image Classifiers</h3>
                                    <span>2024</span>
                                </div>
                                <p className="company-name">Guide: Prof. Biplab Banerjee</p>
                                <p className="item-tagline">Conducted structured deep learning experimentation to optimize image classification model performance</p>
                                <ul>
                                    <li>Benchmarked multiple CNN and hybrid architectures, improving classification accuracy by up to 27%</li>
                                    <li>Applied systematic regularization and model tuning techniques to enhance generalization</li>
                                    <li className="resume-impact">
                                        <strong>Impact:</strong> Achieved 98.5% satellite image classification accuracy through architecture optimization and experiments
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Leadership Roles */}
                    <FadeIn delay={0.3}>
                        <section className="resume-section">
                            <h2>Leadership Roles</h2>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>NCC IIT Bombay</h3>
                                    <span>2022 - 2024</span>
                                </div>
                                <p className="company-name">Media Head (2023-2024) | Web Secretary (2022-2023)</p>
                                <p className="item-tagline">Spearheaded 30+ member 3-tier council | Decorated with Cadet under Officer rank, 2nd highest rank NCC</p>
                                
                                <div className="leadership-subsections">
                                    <div className="leadership-subsection">
                                        <h4>Leadership</h4>
                                        <ul>
                                            <li>Led 70+ cadets as Company Captain, securing First position in overall Championship</li>
                                            <li>Appointed Contingent Commander, leading 70+ cadets on 74th Republic Day Parade</li>
                                        </ul>
                                    </div>
                                    <div className="leadership-subsection">
                                        <h4>Management</h4>
                                        <ul>
                                            <li>Organized 20+ events & Annual Training Camp-410 impacting 500+ cadets and institute</li>
                                            <li>Initiated Media Championship with 5+ genres and workshops for broad exposure</li>
                                            <li>Added Book of Record & FAQ page, increasing visitors by 50% & boosting engagement</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Indian Games Kabaddi Captain</h3>
                                    <span>2022 - 2024</span>
                                </div>
                                <p className="item-tagline">Coordinated with Indian Games Secy for team management, ensuring logistics, training and participation</p>
                                <ul>
                                    <li>Pioneered first-ever girls kabaddi team at IIT Bombay, securing silver at Avhan, IIT Bombay’s Sports Fest</li>
                                    <li>Achieved 1st runner-up position at Udghosh, India’s largest college sports fest with team collaboration</li>
                                </ul>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Accolades & Extra Curriculars */}
                    <FadeIn delay={0.4}>
                        <section className="resume-section">
                            <h2>Accolades & Extra Curriculars</h2>

                            <div className="accolades-grid">
                                <div className="accolade-card">
                                    <h3>Scholastic</h3>
                                    <p>Achieved <strong>99.27 percentile</strong> in MHT CET 2021 – PCM out of over 0.19 million candidates nationwide</p>
                                </div>

                                <div className="accolade-card">
                                    <h3>Skills</h3>
                                    <div className="skills-badge-list">
                                        <div className="skill-group">
                                            <span className="skill-label">Strategy & Ops:</span> unit economics | KPIs | SOPs
                                        </div>
                                        <div className="skill-group">
                                            <span className="skill-label">GTM:</span> outbound | lead gen | ICP | CRM | SEO/AEO
                                        </div>
                                        <div className="skill-group">
                                            <span className="skill-label">Tech:</span> C | C++ | SQL | python | React | Node | Next
                                        </div>
                                        <div className="skill-group">
                                            <span className="skill-label">AI & Tools:</span> n8n | Claude | HubSpot | Apollo
                                        </div>
                                    </div>
                                </div>

                                <div className="accolade-card">
                                    <h3>NCC</h3>
                                    <ul>
                                        <li>Attained ‘A’ grade in the B and C certificate exam</li>
                                        <li>Performed Guard of Honour for all 3 retired chiefs</li>
                                    </ul>
                                </div>

                                <div className="accolade-card">
                                    <h3>Cultural</h3>
                                    <ul>
                                        <li>Special Mention as Cult Person of the year at NCC</li>
                                        <li>Silver in lifestyle General Championship in NCC</li>
                                    </ul>
                                </div>

                                <div className="accolade-card full-width">
                                    <h3>Social</h3>
                                    <ul>
                                        <li>Mentored 200+ students at Navodaya Vidyalaya</li>
                                        <li>Led 30+ team turn 1000+ plastic bottle - ecobricks</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default Resume;

