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

                {/* ── HEADER ── */}
                <FadeIn>
                    <header className="ai-project-header">
                        <div className="ai-badge">Production AI System</div>
                        <h1 className="ai-project-title">
                            Zepto CEO AI Agent
                        </h1>
                        <p className="ai-project-subtitle">
                            Autonomous Strategic Decision Intelligence System
                        </p>
                        <p className="ai-project-tagline">
                            An end-to-end autonomous AI pipeline that monitors business signals daily, detects strategic deltas, performs LLM-driven analysis, and generates board-level executive decision briefs — fully automated, zero human intervention required.
                        </p>
                        <div className="ai-meta-row">
                            <span className="ai-meta-item">⚡ n8n Automation</span>
                            <span className="ai-meta-divider">·</span>
                            <span className="ai-meta-item">🧠 OpenAI GPT-4</span>
                            <span className="ai-meta-divider">·</span>
                            <span className="ai-meta-item">📊 Google Sheets</span>
                            <span className="ai-meta-divider">·</span>
                            <span className="ai-meta-item">☕ Java Logic</span>
                        </div>
                    </header>
                </FadeIn>

                {/* ── SECTION 1: PROJECT OVERVIEW ── */}
                <FadeIn delay={0.1}>
                    <section className="ai-section">
                        <div className="ai-section-label">01 / Project Overview</div>
                        <h2 className="ai-section-title">What This System Does</h2>
                        <div className="overview-cards">
                            <div className="overview-card">
                                <div className="overview-card-icon">🔄</div>
                                <div className="overview-card-title">Daily Autonomous Monitoring</div>
                                <div className="overview-card-desc">Cron-triggered workflow reads Google Sheets data, detects business metric deltas, and dispatches LLM analysis — every day, automatically.</div>
                            </div>
                            <div className="overview-card">
                                <div className="overview-card-icon">🧠</div>
                                <div className="overview-card-title">AI-Driven Delta Analysis</div>
                                <div className="overview-card-desc">OpenAI Chat Model interprets each metric change, assesses strategic impact, and stores structured intelligence rows in an AI_Analysis sheet.</div>
                            </div>
                            <div className="overview-card">
                                <div className="overview-card-icon">📋</div>
                                <div className="overview-card-title">Weekly Executive Brief</div>
                                <div className="overview-card-desc">A second cron workflow aggregates the week's intelligence, triggers an executive brief via OpenAI, and emails it to stakeholders automatically.</div>
                            </div>
                            <div className="overview-card">
                                <div className="overview-card-icon">🎯</div>
                                <div className="overview-card-title">Decision-Gate Logic</div>
                                <div className="overview-card-desc">Conditional If Nodes determine whether a brief is worth escalating, ensuring executives only see information that requires their attention.</div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* ── SECTION 2: SYSTEM ARCHITECTURE ── */}
                <FadeIn delay={0.15}>
                    <section className="ai-section">
                        <div className="ai-section-label">02 / System Architecture</div>
                        <h2 className="ai-section-title">Two-Workflow Autonomous Pipeline</h2>

                        <div className="workflow-block">
                            <div className="workflow-header">
                                <span className="workflow-badge daily">Daily</span>
                                <h3 className="workflow-title">Workflow 1 — Daily Intelligence Monitoring</h3>
                            </div>

                            <div className="flow-diagram">
                                <div className="flow-node trigger">
                                    <div className="flow-node-icon">⏰</div>
                                    <div className="flow-node-label">Cron Trigger</div>
                                    <div className="flow-node-sub">Daily Schedule</div>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-node data">
                                    <div className="flow-node-icon">📊</div>
                                    <div className="flow-node-label">Google Sheets</div>
                                    <div className="flow-node-sub">Raw Business Data</div>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-node logic">
                                    <div className="flow-node-icon">⚡</div>
                                    <div className="flow-node-label">Delta Detection</div>
                                    <div className="flow-node-sub">Java Logic Layer</div>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-node ai">
                                    <div className="flow-node-icon">🧠</div>
                                    <div className="flow-node-label">OpenAI Analysis</div>
                                    <div className="flow-node-sub">Strategic Interpretation</div>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-node output">
                                    <div className="flow-node-icon">💾</div>
                                    <div className="flow-node-label">AI_Analysis Sheet</div>
                                    <div className="flow-node-sub">Structured Append</div>
                                </div>
                            </div>

                            <div className="workflow-outcomes">
                                <div className="outcome-item">
                                    <span className="outcome-dot blue"></span>
                                    Detects changes in key business indicators across all tracked metrics
                                </div>
                                <div className="outcome-item">
                                    <span className="outcome-dot blue"></span>
                                    Uses GPT-4 to interpret operational impact and root-cause attribution
                                </div>
                                <div className="outcome-item">
                                    <span className="outcome-dot blue"></span>
                                    Java Extraction Layer converts LLM prose into structured, queryable rows
                                </div>
                                <div className="outcome-item">
                                    <span className="outcome-dot blue"></span>
                                    Builds a rolling intelligence history for the weekly synthesis engine
                                </div>
                            </div>
                        </div>

                        <div className="workflow-block">
                            <div className="workflow-header">
                                <span className="workflow-badge weekly">Weekly</span>
                                <h3 className="workflow-title">Workflow 2 — Weekly Executive Decision Engine</h3>
                            </div>

                            <div className="flow-diagram">
                                <div className="flow-node trigger">
                                    <div className="flow-node-icon">📅</div>
                                    <div className="flow-node-label">Cron Trigger</div>
                                    <div className="flow-node-sub">Weekly Schedule</div>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-node data">
                                    <div className="flow-node-icon">📚</div>
                                    <div className="flow-node-label">AI_Analysis Sheet</div>
                                    <div className="flow-node-sub">Read Weekly Log</div>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-node conditional">
                                    <div className="flow-node-icon">🔀</div>
                                    <div className="flow-node-label">If Node</div>
                                    <div className="flow-node-sub">Decision Threshold</div>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-node ai">
                                    <div className="flow-node-icon">🧠</div>
                                    <div className="flow-node-label">OpenAI Brief Gen</div>
                                    <div className="flow-node-sub">Executive Format</div>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-node send">
                                    <div className="flow-node-icon">📧</div>
                                    <div className="flow-node-label">Email Dispatch</div>
                                    <div className="flow-node-sub">To Stakeholders</div>
                                </div>
                                <div className="flow-arrow">→</div>
                                <div className="flow-node output">
                                    <div className="flow-node-icon">🗄️</div>
                                    <div className="flow-node-label">Weekly_Brief Sheet</div>
                                    <div className="flow-node-sub">Archived</div>
                                </div>
                            </div>

                            <div className="workflow-outcomes">
                                <div className="outcome-item">
                                    <span className="outcome-dot purple"></span>
                                    Aggregates 7 days of intelligence into one synthesized strategic view
                                </div>
                                <div className="outcome-item">
                                    <span className="outcome-dot purple"></span>
                                    Conditional gate prevents noise — only significant deltas trigger escalation
                                </div>
                                <div className="outcome-item">
                                    <span className="outcome-dot purple"></span>
                                    Generates boardroom-ready executive brief with risks, opportunities, and decisions
                                </div>
                                <div className="outcome-item">
                                    <span className="outcome-dot purple"></span>
                                    Sends automatically to stakeholders; archives for audit and trend analysis
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* ── SECTION 3: TECH STACK ── */}
                <FadeIn delay={0.2}>
                    <section className="ai-section">
                        <div className="ai-section-label">03 / Technical Stack</div>
                        <h2 className="ai-section-title">Built With Production-Grade Components</h2>
                        <div className="tech-stack-grid">
                            <div className="tech-stack-item">
                                <div className="tech-stack-category">Automation Platform</div>
                                <div className="tech-stack-badge automation">⚡ n8n</div>
                            </div>
                            <div className="tech-stack-item">
                                <div className="tech-stack-category">Language Model</div>
                                <div className="tech-stack-badge llm">🧠 OpenAI GPT-4</div>
                            </div>
                            <div className="tech-stack-item">
                                <div className="tech-stack-category">Logic Processing</div>
                                <div className="tech-stack-badge java">☕ Java Extraction Nodes</div>
                            </div>
                            <div className="tech-stack-item">
                                <div className="tech-stack-category">Data Layer</div>
                                <div className="tech-stack-badge sheets">📊 Google Sheets</div>
                            </div>
                            <div className="tech-stack-item">
                                <div className="tech-stack-category">Scheduling</div>
                                <div className="tech-stack-badge cron">⏰ Cron-Based Triggers</div>
                            </div>
                            <div className="tech-stack-item">
                                <div className="tech-stack-category">Decision Logic</div>
                                <div className="tech-stack-badge conditional">🔀 Conditional If Nodes</div>
                            </div>
                            <div className="tech-stack-item">
                                <div className="tech-stack-category">Output Channel</div>
                                <div className="tech-stack-badge email">📧 Email Automation</div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* ── SECTION 4: SAMPLE OUTPUT ── */}
                <FadeIn delay={0.25}>
                    <section className="ai-section">
                        <div className="ai-section-label">04 / Sample Output</div>
                        <h2 className="ai-section-title">Executive Decision Brief — Proof of Work</h2>
                        <div className="brief-container">
                            <div className="brief-header">
                                <div className="brief-meta">
                                    <span className="brief-logo">ZEPTO<span>AI</span></span>
                                    <div className="brief-info">
                                        <div className="brief-title">Weekly Decision Brief</div>
                                        <div className="brief-period">Week 42 · Oct 14–20, 2024 · Auto-Generated</div>
                                    </div>
                                </div>
                                <div className="brief-confidence">
                                    <span className="confidence-dot"></span>
                                    Confidence: High (94% Data Complete)
                                </div>
                            </div>

                            <div className="brief-body">
                                <div className="brief-section-block">
                                    <div className="brief-section-heading">
                                        <span className="brief-section-num">1.0</span>
                                        Executive Summary
                                    </div>
                                    <p className="brief-text">This week showed strong order volume growth (+18% WoW) in Tier-1 cities, offset by a concerning 12% spike in discount burn in Mumbai, likely driven by competitive pricing pressure from Blinkit. Delivery performance improved following the Bangalore rider incentive restructure. Net contribution margin remains stable but is at risk if the Mumbai discount pattern continues into Week 43.</p>
                                </div>

                                <div className="brief-divider"></div>

                                <div className="brief-two-col">
                                    <div className="brief-section-block risk">
                                        <div className="brief-section-heading risk-heading">
                                            <span className="brief-section-num">2.0</span>
                                            ⚠ Strategic Risks
                                        </div>
                                        <div className="brief-risk-item">
                                            <div className="risk-title">Discount Burn — Mumbai</div>
                                            <div className="brief-text">+12% WoW. Competitors running aggressive CAC campaigns. If uncapped, projected ₹1.4Cr additional burn in Week 43.</div>
                                            <div className="risk-tag">High Impact · Immediate Action Required</div>
                                        </div>
                                        <div className="brief-risk-item">
                                            <div className="risk-title">AOV Compression — Tier-2</div>
                                            <div className="brief-text">Average order value down 7% in Pune and Ahmedabad. Likely correlated with low-margin SKU mix shift.</div>
                                            <div className="risk-tag">Medium Impact · Monitor</div>
                                        </div>
                                    </div>

                                    <div className="brief-section-block opportunity">
                                        <div className="brief-section-heading opp-heading">
                                            <span className="brief-section-num">3.0</span>
                                            ✦ Strategic Opportunities
                                        </div>
                                        <div className="brief-opp-item">
                                            <div className="opp-title">Loyalty Cohort B Retention</div>
                                            <div className="brief-text">Week-4 retention up 22% vs baseline. New loyalty feature showing strongest traction in 34–42 demographic.</div>
                                            <div className="opp-tag">Scale Signal · Review Budget</div>
                                        </div>
                                        <div className="brief-opp-item">
                                            <div className="opp-title">Delivery SLA Improvement</div>
                                            <div className="brief-text">Post-incentive restructure, Bangalore delivery times down from 18 min avg to 13.5 min. Model for national rollout.</div>
                                            <div className="opp-tag">Replicate · High ROI</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="brief-divider"></div>

                                <div className="brief-section-block">
                                    <div className="brief-section-heading">
                                        <span className="brief-section-num">4.0</span>
                                        Decisions to Consider
                                    </div>
                                    <div className="decisions-grid">
                                        <div className="decision-item">
                                            <div className="decision-num">D1</div>
                                            <div className="decision-content">
                                                <div className="decision-title">Cap Mumbai discount rate at 15% ceiling</div>
                                                <div className="decision-meta">Financial Impact: ₹1.2Cr / month · Owner: Growth · Deadline: EOW</div>
                                            </div>
                                        </div>
                                        <div className="decision-item">
                                            <div className="decision-num">D2</div>
                                            <div className="decision-content">
                                                <div className="decision-title">Approve Loyalty Phase 2 — scale nationally</div>
                                                <div className="decision-meta">Cohort B data sufficient for expansion · Owner: Product · Q4 priority</div>
                                            </div>
                                        </div>
                                        <div className="decision-item">
                                            <div className="decision-num">D3</div>
                                            <div className="decision-content">
                                                <div className="decision-title">Replicate Bangalore incentive model — Hyderabad</div>
                                                <div className="decision-meta">Est. 28% SLA improvement · Owner: Ops · 2-week implementation</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="brief-divider"></div>

                                <div className="brief-confidence-footer">
                                    <div className="conf-label">Confidence Level</div>
                                    <div className="conf-bar-wrap">
                                        <div className="conf-bar" style={{ width: '94%' }}></div>
                                    </div>
                                    <div className="conf-value">94%</div>
                                    <div className="conf-note">6% data lag in Pune cluster — accounted for in projections</div>
                                </div>
                            </div>

                            <div className="brief-footer-stamp">
                                AUTO-GENERATED BY ZEPTO CEO AI AGENT · n8n WORKFLOW · CONFIDENTIAL
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* ── SECTION 5: IMPACT ── */}
                <FadeIn delay={0.3}>
                    <section className="ai-section">
                        <div className="ai-section-label">05 / Impact & Value</div>
                        <h2 className="ai-section-title">Measurable Outcomes</h2>
                        <div className="impact-grid">
                            <div className="impact-card">
                                <div className="impact-num">90%</div>
                                <div className="impact-label">Reduction in Manual Monitoring Effort</div>
                                <div className="impact-desc">Replaced daily human review cycles with a fully automated intelligence pipeline.</div>
                            </div>
                            <div className="impact-card">
                                <div className="impact-num">100%</div>
                                <div className="impact-label">Autonomous Delta Detection</div>
                                <div className="impact-desc">Zero human required to identify what changed and why across all tracked business signals.</div>
                            </div>
                            <div className="impact-card">
                                <div className="impact-num">5 min</div>
                                <div className="impact-label">Signal-to-Brief Time</div>
                                <div className="impact-desc">From raw data to executive-ready document — fully automated in under a business sprint.</div>
                            </div>
                            <div className="impact-card">
                                <div className="impact-num">2×</div>
                                <div className="impact-label">Decision Cycle Speed</div>
                                <div className="impact-desc">Executives receive structured briefs with pre-formed decision options, cutting deliberation time in half.</div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* ── SECTION 6: WHAT MAKES THIS UNIQUE ── */}
                <FadeIn delay={0.35}>
                    <section className="ai-section">
                        <div className="ai-section-label">06 / Differentiation</div>
                        <h2 className="ai-section-title">What Makes This System Unique</h2>
                        <div className="unique-box">
                            <div className="unique-item">
                                <div className="unique-icon">🔄</div>
                                <div>
                                    <div className="unique-title">Autonomous Intelligence Loop</div>
                                    <div className="unique-desc">The system runs end-to-end without human initiation — from data reading to email delivery, every step is automated.</div>
                                </div>
                            </div>
                            <div className="unique-item">
                                <div className="unique-icon">△</div>
                                <div>
                                    <div className="unique-title">Delta-Based Reasoning</div>
                                    <div className="unique-desc">Rather than reporting static metrics, the system focuses exclusively on what <em>changed</em>, enabling signal-over-noise intelligence.</div>
                                </div>
                            </div>
                            <div className="unique-item">
                                <div className="unique-icon">⚙</div>
                                <div>
                                    <div className="unique-title">AI + Structured Logic Hybrid</div>
                                    <div className="unique-desc">Combines LLM reasoning power with deterministic Java extraction layers — getting the best of both flexibility and precision.</div>
                                </div>
                            </div>
                            <div className="unique-item">
                                <div className="unique-icon">📊</div>
                                <div>
                                    <div className="unique-title">Executive-Ready Output Format</div>
                                    <div className="unique-desc">Output is structured as a boardroom document — not raw data or dashboards — directly consumable by decision-makers.</div>
                                </div>
                            </div>
                            <div className="unique-item">
                                <div className="unique-icon">🚀</div>
                                <div>
                                    <div className="unique-title">Fully Automated Decision Pipeline</div>
                                    <div className="unique-desc">From cron triggers to email dispatch to archiving — the entire decision pipeline operates without human touchpoints.</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* ── SECTION 7: ARCHITECTURE SNAPSHOT ── */}
                <FadeIn delay={0.4}>
                    <section className="ai-section">
                        <div className="ai-section-label">07 / Architecture Snapshot</div>
                        <h2 className="ai-section-title">System Design at a Glance</h2>
                        <div className="arch-diagram">
                            <div className="arch-layer">
                                <div className="arch-layer-label">Data Layer</div>
                                <div className="arch-layer-nodes">
                                    <div className="arch-node sheets">📊 Google Sheets<br /><span>Raw Metrics</span></div>
                                </div>
                            </div>
                            <div className="arch-connector">
                                <div className="arch-connector-line"></div>
                                <div className="arch-connector-label">Read / Write</div>
                            </div>
                            <div className="arch-layer">
                                <div className="arch-layer-label">Processing Layer</div>
                                <div className="arch-layer-nodes two">
                                    <div className="arch-node java">☕ Java Logic<br /><span>Delta Detection + Extraction</span></div>
                                    <div className="arch-node cond">🔀 If Nodes<br /><span>Decision Gating</span></div>
                                </div>
                            </div>
                            <div className="arch-connector">
                                <div className="arch-connector-line"></div>
                                <div className="arch-connector-label">Structured Prompts</div>
                            </div>
                            <div className="arch-layer">
                                <div className="arch-layer-label">Intelligence Layer</div>
                                <div className="arch-layer-nodes">
                                    <div className="arch-node openai">🧠 OpenAI GPT-4<br /><span>Strategic Analysis + Brief Generation</span></div>
                                </div>
                            </div>
                            <div className="arch-connector">
                                <div className="arch-connector-line"></div>
                                <div className="arch-connector-label">Structured Output</div>
                            </div>
                            <div className="arch-layer">
                                <div className="arch-layer-label">Output Layer</div>
                                <div className="arch-layer-nodes two">
                                    <div className="arch-node email-node">📧 Email<br /><span>Executive Brief</span></div>
                                    <div className="arch-node store-node">🗄️ Sheets Archive<br /><span>Weekly_Brief Log</span></div>
                                </div>
                            </div>

                            <div className="arch-sched">
                                <div className="arch-sched-label">Orchestration</div>
                                <div className="arch-sched-items">
                                    <div className="arch-sched-node">⏰ Daily Cron</div>
                                    <div className="arch-sched-node">📅 Weekly Cron</div>
                                    <div className="arch-sched-node">⚡ n8n Engine</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

            </div>
        </div>
    );
};

export default ZeptoAI;
