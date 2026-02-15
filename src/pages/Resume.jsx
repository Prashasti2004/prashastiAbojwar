import './Resume.css';
import FadeIn from '../components/FadeIn';

import resumePDF from '../assets/Prashasti_Resume.pdf';

const Resume = () => {
    return (
        <div className="page-resume section-padding">
            <div className="container">
                <FadeIn>
                    <div className="resume-header">
                        <h1 className="page-title">Resume</h1>
                        <a href={resumePDF} download="Prashasti_Resume.pdf" className="button-primary">
                            Download PDF
                        </a>
                    </div>
                </FadeIn>

                <div className="resume-paper">
                    {/* Professional Experience */}
                    <FadeIn delay={0.1}>
                        <section className="resume-section">
                            <h2>Professional Experience</h2>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Software Dev</h3>
                                    <span>Jun - Present</span>
                                </div>
                                <p className="company-name">Geminus Tech (Client: Toshiba)</p>
                                <ul>
                                    <li>Working on the frontend firmware layer for NVMe-based SSD drives deployed in production environments</li>
                                    <li>Analyzed firmware logs to diagnose post-launch SSD failures impacting enterprise customer deployments</li>
                                    <li>Implemented root-cause debugging workflows, significantly improving turnaround time for critical issues</li>
                                    <li>Identified NVMe protocol bottlenecks affecting drive stability, reducing recurring performance escalations</li>
                                    <li><strong>Impact:</strong> Reduced recurring firmware issue turnaround time by 25%, strengthening pre-release validation</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Software Dev</h3>
                                    <span>Jun - Jul 2024</span>
                                </div>
                                <p className="company-name">Sensorama Technologies</p>
                                <ul>
                                    <li>Awarded Letter of Recommendation for delivering production-ready, impact-driven system improvements</li>
                                    <li>Designed and optimized touch-based interface for HPLC hardware system, enhancing operational usability</li>
                                    <li>Re-architected UI workflows to improve navigation clarity and reduce user interaction friction</li>
                                    <li>Implemented multi-profile storage system enabling personalized configurations and workflow flexibility</li>
                                    <li><strong>Impact:</strong> Improved overall device usability by 35%, accelerating adoption across end users</li>
                                </ul>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Technical Projects */}
                    <FadeIn delay={0.2}>
                        <section className="resume-section">
                            <h2>Key Projects</h2>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Founder's Office Shadow Project | Quick-Commerce</h3>
                                    <span>2026</span>
                                </div>
                                <ul>
                                    <li>Simulated end-to-end Founder's Office ownership for a high-burn, multi-city quick-commerce startup</li>
                                    <li>Diagnosed unit economics of 8 dark stores, identifying 18% burn inefficiencies & city-level execution gaps</li>
                                    <li>Authored decision memos outlining trade-offs and built KPI dashboards for weekly CEO reviews</li>
                                    <li>Delivered a 30-60-90 day roadmap projecting 12-15% cost optimization and improved store-level CM</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>AI System to Reduce CEO Cognitive Load</h3>
                                    <span>2026</span>
                                </div>
                                <ul>
                                    <li>Built an AI-powered executive agent using <strong>n8n</strong> to reduce decision fatigue and reporting overload</li>
                                    <li>Converted raw operational metrics into weekly executive summaries and briefs</li>
                                    <li>Designed risk-scoring & prioritization logic to flag high-impact issues</li>
                                    <li><strong>Impact:</strong> Reduced manual reporting effort by 60% and improved decision turnaround speed by 35%</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Startup Efficiency Audit | Self-Project</h3>
                                    <span>2026</span>
                                </div>
                                <ul>
                                    <li>Conducted structured operational audit to improve unit economics (fleet, inventory, support)</li>
                                    <li>Modeled cost leakages, identifying 15-56% efficiency improvements</li>
                                    <li>Designed dynamic batching, markdown pricing, and AI refund validation (+11pt margins)</li>
                                    <li>Built a KPI and ownership framework shifting from founder-centric to scalable, city-level accountability</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Image Classifiers</h3>
                                    <span>2024</span>
                                </div>
                                <p className="company-name">Guide: Prof. Biplab Banerjee</p>
                                <ul>
                                    <li>Conducted deep learning experimentation to optimize image classification performance</li>
                                    <li>Benchmarked CNN architectures, improving classification accuracy by up to 27%</li>
                                    <li>Achieved <strong>98.5% satellite image classification accuracy</strong> through architecture optimization</li>
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
                                <ul>
                                    <li>Spearheaded 30+ member 3-tier council; decorated with <strong>Cadet under Officer</strong> rank (2nd highest)</li>
                                    <li>Led 70+ cadets as Company Captain (First position in overall Championship) and Contingent Commander for the 74th Republic Day Parade</li>
                                    <li>Organized 20+ events and Annual Training Camp-410 impacting 500+ cadets</li>
                                    <li>Initiated Media Championship and added "Book of Record" & FAQ page, increasing visitors by 50%</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Indian Games Kabaddi Captain</h3>
                                    <span>2022 - 2024</span>
                                </div>
                                <ul>
                                    <li>Pioneered the first-ever girls' kabaddi team at IIT Bombay, securing silver at Avhan Sports Fest</li>
                                    <li>Achieved 1st runner-up position at <strong>Udghosh</strong>, India's largest college sports fest</li>
                                </ul>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Skills */}
                    <FadeIn delay={0.4}>
                        <section className="resume-section">
                            <h2>Skills</h2>
                            <div className="skills-grid">
                                <div>
                                    <h3>Strategy & Operations</h3>
                                    <p>Problem structuring, KPIs, SOPs</p>
                                </div>
                                <div>
                                    <h3>Tech Stack</h3>
                                    <p>C, C++, SQL, Python, React, Node, Next.js</p>
                                </div>
                                <div>
                                    <h3>Software</h3>
                                    <p>Microsoft Office, Tableau, PowerBI</p>
                                </div>
                                <div>
                                    <h3>Miscellaneous</h3>
                                    <p>n8n, Antigravity, Notion, OpenAI</p>
                                </div>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Accolades & Extra Curriculars */}
                    <FadeIn delay={0.5}>
                        <section className="resume-section">
                            <h2>Accolades & Extra Curriculars</h2>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Scholastic Achievements</h3>
                                </div>
                                <ul>
                                    <li>Achieved <strong>99.27 percentile</strong> in MHT CET 2021 (PCM) out of over 0.19 million candidates nationwide</li>
                                    <li>B.Tech in Aerospace Engineering, IIT Bombay (2021-2025)</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>NCC Achievements</h3>
                                </div>
                                <ul>
                                    <li>Attained 'A' grade in the B and C certificate exam</li>
                                    <li>Performed Guard of Honour for all 3 retired chiefs</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Cultural & Social</h3>
                                </div>
                                <ul>
                                    <li>Special Mention as <strong>Cult Person of the Year</strong> at NCC; Silver in lifestyle General Championship</li>
                                    <li>Mentored 200+ students at Navodaya Vidyalaya</li>
                                    <li>Led 30+ team to create 1000+ plastic bottle ecobricks</li>
                                </ul>
                            </div>
                        </section>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default Resume;
