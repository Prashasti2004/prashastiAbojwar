import React, { useEffect } from 'react';
import './ZeptoAI.css';
import FadeIn from '../components/FadeIn';

const ZeptoAI = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-zepto-ai section-padding">
            <div className="container">

                {/* Header Section */}
                <FadeIn>
                    <header className="project-header">
                        <h1 className="project-title">AI: CEO Cognitive Load Reduction</h1>
                        <p className="project-subtitle">
                            Compressing 50+ operational metrics into 5 founder-level insights and clear weekly decisions.
                        </p>
                        <p className="project-intent">
                            A system designed to filter signal from noise for executive decision making.
                        </p>
                    </header>
                </FadeIn>

                {/* Design Principles */}
                <FadeIn delay={0.1}>
                    <section>
                        <h2 className="section-label">Design Principles</h2>
                        <div className="principles-grid">
                            <div className="principle-card">
                                <div className="principle-title">Speed to Signal</div>
                                <div className="principle-desc">Founder sees signal in under 5 minutes</div>
                            </div>
                            <div className="principle-card">
                                <div className="principle-title">Direction &gt; Absolutes</div>
                                <div className="principle-desc">Trends matter more than exact numbers</div>
                            </div>
                            <div className="principle-card">
                                <div className="principle-title">Visible Uncertainty</div>
                                <div className="principle-desc">Confidence levels are explicit</div>
                            </div>
                            <div className="principle-card">
                                <div className="principle-title">Decisions &gt; Dashboards</div>
                                <div className="principle-desc">Focus on action over reporting</div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* CORE ARTIFACT: Dashboard Wireframe */}
                <FadeIn delay={0.2}>
                    <h2 className="section-label">Weekly Decision Brief (Wireframe)</h2>
                    <div className="artifact-container">

                        {/* Top Bar */}
                        <div className="dash-topbar">
                            <div className="dash-value">Week 42: Oct 14 - Oct 20</div>
                            <div className="dash-pill">Confidence: High (94% Data Complete)</div>
                        </div>

                        <div className="dash-grid-2">
                            {/* Business Pulse */}
                            <div>
                                <h3 className="dash-section-title">Business Pulse (TL;DR)</h3>
                                <div className="dash-row">
                                    <span className="dash-label">Total Orders</span>
                                    <span className="dash-value trend-up">↗ Strong Growth</span>
                                </div>
                                <div className="dash-row">
                                    <span className="dash-label">Contribution Margin</span>
                                    <span className="dash-value trend-neutral">→ Stable</span>
                                </div>
                                <div className="dash-row">
                                    <span className="dash-label">AOV</span>
                                    <span className="dash-value trend-down">↘ Slight Dip</span>
                                </div>
                                <div className="dash-row">
                                    <span className="dash-label">Delivery Time</span>
                                    <span className="dash-value trend-up">↗ Improved</span>
                                </div>
                            </div>

                            {/* Unit Economics */}
                            <div>
                                <h3 className="dash-section-title">Unit Economics (Tier-1)</h3>
                                <div className="dash-row">
                                    <span className="dash-label">AOV</span>
                                    <span className="dash-value">₹ 420</span>
                                </div>
                                <div className="dash-row">
                                    <span className="dash-label">Delivery Cost</span>
                                    <span className="dash-value">₹ 45</span>
                                </div>
                                <div className="dash-row">
                                    <span className="dash-label">CAC</span>
                                    <span className="dash-value">₹ 120</span>
                                </div>
                            </div>
                        </div>

                        {/* Insight Engine */}
                        <div style={{ marginBottom: '40px' }}>
                            <h3 className="dash-section-title">What Changed & Why (AI Insights)</h3>

                            <div className="insight-card priority">
                                <div className="insight-flow">
                                    <span style={{ color: '#ff5f56' }}>Risk Flag</span>
                                    <span className="insight-arrow">→</span>
                                    <span>Discount Burn Spiked 12% in Mumbai</span>
                                    <span className="insight-arrow">→</span>
                                    <span>Competitor Price War detected</span>
                                </div>
                            </div>

                            <div className="insight-card">
                                <div className="insight-flow">
                                    <span style={{ color: '#27c93f' }}>Opportunity</span>
                                    <span className="insight-arrow">→</span>
                                    <span>Retention Up in Cohort B</span>
                                    <span className="insight-arrow">→</span>
                                    <span>New Loyalty Feature Traction</span>
                                </div>
                            </div>
                        </div>

                        <div className="dash-grid-2">
                            {/* Priorities */}
                            <div>
                                <h3 className="dash-section-title">Priorities (Next 7 Days)</h3>
                                <ul className="dash-list">
                                    <li>
                                        <span>Stabilize Mumbai Discounting</span>
                                        <span>Owner: Growth</span>
                                    </li>
                                    <li>
                                        <span>Fix Rider Shortage (Bangalore)</span>
                                        <span>Owner: Ops</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Decisions Required */}
                            <div>
                                <h3 className="dash-section-title" style={{ color: '#ff5f56' }}>Decisions Required</h3>
                                <div style={{ background: 'rgba(255, 95, 86, 0.1)', padding: '15px', border: '1px solid rgba(255, 95, 86, 0.3)', borderRadius: '4px' }}>
                                    <div style={{ fontWeight: '500', marginBottom: '5px', color: '#ff5f56' }}>Metric: Rider Incentives</div>
                                    <div style={{ fontSize: '0.9rem', color: '#ccc' }}>Impact: ₹1.2Cr / month</div>
                                    <div style={{ fontSize: '0.9rem', marginTop: '10px', color: '#fff' }}>Recommendation: Cap at 15%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* System Thinking Section */}
                <FadeIn delay={0.3}>
                    <section className="system-section">
                        <h2 className="section-label">System Thinking</h2>
                        <div className="system-content">
                            <p>
                                The core challenge was not data availability, but data attention. The AI system is designed to act as a pre-processor for executive attention. It reasons by:
                            </p>
                            <ul>
                                <li><strong>Detecting Deltas:</strong> Ignoring static numbers to focus only on what changed.</li>
                                <li><strong>Linking Causality:</strong> Connecting a metric shift (AOV down) to a root cause (Inventory shortage).</li>
                                <li><strong>Standardization:</strong> Forcing all inputs into a common "Decision" format.</li>
                            </ul>

                            <div className="comparison-grid">
                                <div className="comparison-col">
                                    <h4>Replaces</h4>
                                    <ul className="comparison-list">
                                        <li>❌ Disconnected Dashboards</li>
                                        <li>❌ Weekly 50-slide Ops Decks</li>
                                        <li>❌ Slack/WhatsApp Escalation Noise</li>
                                    </ul>
                                </div>
                                <div className="comparison-col">
                                    <h4>With</h4>
                                    <ul className="comparison-list">
                                        <li>✅ One Weekly Decision Brief</li>
                                        <li>✅ On-demand Drill-down</li>
                                        <li>✅ Calm, structured signals</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Boundaries */}
                        <div className="boundaries-box">
                            <h3 className="boundaries-title">System Boundaries & Reality</h3>
                            <ul className="boundaries-list">
                                <li>It does NOT make decisions automatically.</li>
                                <li>It does NOT override human judgment.</li>
                                <li>It does NOT fake precision where data is noisy.</li>
                            </ul>
                        </div>
                    </section>
                </FadeIn>

            </div>
        </div>
    );
};

export default ZeptoAI;
