import './Resume.css';
import FadeIn from '../components/FadeIn';

import resumePDF from '../assets/Prashasti_resume.pdf';

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
                                    <h3>Software Developer</h3>
                                    <span>Jun - Jul 2024</span>
                                </div>
                                <p className="company-name">Sensorama Technologies</p>
                                <ul>
                                    <li>Developed UI with data QA for a stand-alone software HPLC system using ESP32 & touch screen display</li>
                                    <li>Enhanced UI using Squareline studio GUI using LVGL and TFT_eSPI libraries in Arduino C language</li>
                                    <li>Implemented SD card for storing and accessing multiple user profiles, improved user experience by 35%</li>
                                    <li>Awarded LOR for commendable contribution in developing enhanced touch user Interface of HPLC System</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Data Analyst</h3>
                                    <span>Jul 2024</span>
                                </div>
                                <p className="company-name">NullClass Edtech</p>
                                <ul>
                                    <li>Reduced search time by 25%, developing precise job search solutions using 30+ Tableau charts & filters</li>
                                    <li>Optimized 1.6M data analysis using NumPy and Pandas, streamlining data visualization with dashboards</li>
                                    <li>Awarded LOR for commendable contribution to build Real-time Job Analytic Portal for optimized search</li>
                                </ul>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Technical Projects */}
                    <FadeIn delay={0.2}>
                        <section className="resume-section">
                            <h2>Technical Projects</h2>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Image Classifiers</h3>
                                    <span>2024</span>
                                </div>
                                <p className="company-name">Guide: Prof. Biplab Banerjee</p>
                                <ul>
                                    <li>Leveraged advanced CNN architectures to credibly enhance & improve image classification accuracy</li>
                                    <li>Resulted in 12% and 19% accuracy gains, refining CIFAR-100 classification using ResNet-18 & DenseNet</li>
                                    <li>Increased classification accuracy by 27% with EfficientNet B7 integrated ViT and multi-head attention</li>
                                    <li>Achieved enhanced accuracy of 98.5% in classifying multiple satellite images using CNN architectures</li>
                                    <li>Increased accuracy by 1.5-2% using 12+ dropping methods: Dropout, Spatial-Drop, mainly Drop-Block</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Founder's Office Shadow Project - Quick-Commerce</h3>
                                    <span>2026</span>
                                </div>
                                <ul>
                                    <li>Simulated end-to-end Founder's Office ownership for a high-burn, high-velocity quick-commerce startup</li>
                                    <li>Diagnosed unit economics, burn drivers and city-level execution bottlenecks across dark-store operations</li>
                                    <li>Authored decision memos with explicit trade-offs and designed SOP, KPIs and CEO-level reporting systems</li>
                                    <li>Delivered a 30-60-90 day execution roadmap aligned to measurable business outcomes with ownership</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>AI System to Reduce CEO Cognitive Load</h3>
                                    <span>2026</span>
                                </div>
                                <ul>
                                    <li>Built an AI-powered internal tool focused on reducing executive decision fatigue, not just automation</li>
                                    <li>Converted raw ops updates and metrics into founder-ready weekly summaries and priority briefs</li>
                                    <li>Designed prioritization and risk-flagging logic to surface critical issues requiring immediate attention</li>
                                    <li>Reduced manual reporting effort while improving speed, clarity and quality of executive decision-making</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Startup Efficiency Audit</h3>
                                    <span>2026</span>
                                </div>
                                <p className="company-name">Self-Project</p>
                                <ul>
                                    <li>Conducted a data-driven internal audit to identify hidden operational and cost inefficiencies</li>
                                    <li>Modeled burn, cost allocation, and output per function for a Zepto-like quick-commerce operating model</li>
                                    <li>Identified highest-impact operational and cost leaks through structured, metrics-back root-cause analysis</li>
                                    <li>Proposed execution-ready fixes across process redesign, adjustments and targeted automation initiatives</li>
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
                                <div className="leadership-subsection">
                                    <h4>Leadership</h4>
                                    <ul>
                                        <li>Spearheaded 30+ member 3-tier council | Decorated with Cadet under Officer rank, 2nd highest rank NCC</li>
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
                        </section>
                    </FadeIn>

                    {/* Skills */}
                    <FadeIn delay={0.4}>
                        <section className="resume-section">
                            <h2>Skills</h2>
                            <div className="skills-grid">
                                <div>
                                    <h3>Strategy & Operations</h3>
                                    <p>Problem Structuring, KPIs, SOPs</p>
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
                                    <p>High-Ownership Execution</p>
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
                                    <li>Achieved 99.27 percentile in MHT CET 2021 – PCM out of over 0.19 million candidates nationwide</li>
                                    <li>Earned 3 specialist badges from Coding Ninjas in Array, LinkedList and BST for problem-solving skills</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3>Sports</h3>
                                </div>
                                <ul>
                                    <li>Captain of 1st Girls Kabaddi Team at IIT Bombay</li>
                                    <li>1st Runner up position Udghosh & Avhaan kabaddi</li>
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
                                    <li>Special Mention as Cult Person of the year at NCC</li>
                                    <li>Silver in lifestyle General Championship in NCC</li>
                                    <li>Mentored 200+ students at Navodaya Vidyalaya</li>
                                    <li>Led 30+ team turn 1000+ plastic bottle into ecobricks</li>
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
