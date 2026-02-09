import './ZeptoAudit.css';
import FadeIn from '../components/FadeIn';

const ZeptoAudit = () => {
    const kpiData = [
        {
            id: 'fleet',
            title: 'Fleet Efficiency',
            icon: '🚚',
            before: '1.2 orders/trip',
            after: '1.8 orders/trip',
            impact: '↓ Cost Per Delivery ~15%',
            direction: 'down'
        },
        {
            id: 'inventory',
            title: 'Inventory Shrinkage',
            icon: '🥬',
            before: '15% wastage',
            after: '4% wastage',
            impact: '↑ Gross Margin +11pts',
            direction: 'up'
        },
        {
            id: 'refunds',
            title: 'Refund Leakage',
            icon: '🔄',
            before: '2.5% refund rate',
            after: '1.1% refund rate',
            impact: '↓ OpEx ~56%',
            direction: 'down'
        }
    ];

    return (
        <div className="page-zepto-audit section-padding">
            <div className="container">
                {/* Header Section */}
                <FadeIn>
                    <header className="audit-header">
                        <h1 className="audit-title">Zepto Efficiency Audit</h1>
                        <p className="audit-subtitle">
                            Operational levers to improve unit economics across fleet, inventory, and support
                        </p>
                        <p className="audit-intent">
                            Focused on reducing cost leakage while preserving customer experience.
                        </p>
                    </header>
                </FadeIn>

                {/* Executive Snapshot */}
                <FadeIn delay={0.1}>
                    <section className="executive-snapshot">
                        <h2 className="section-label">Executive Snapshot</h2>
                        <div className="kpi-grid">
                            {kpiData.map((kpi) => (
                                <div key={kpi.id} className="kpi-card">
                                    <div className="kpi-icon">{kpi.icon}</div>
                                    <h3 className="kpi-title">{kpi.title}</h3>
                                    <div className="kpi-metrics">
                                        <div className="metric before">
                                            <span className="metric-label">Before</span>
                                            <span className="metric-value">{kpi.before}</span>
                                        </div>
                                        <div className="metric-arrow">→</div>
                                        <div className="metric after">
                                            <span className="metric-label">Target</span>
                                            <span className="metric-value">{kpi.after}</span>
                                        </div>
                                    </div>
                                    <div className={`kpi-impact ${kpi.direction}`}>
                                        {kpi.impact}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </FadeIn>

                {/* Section 1: Last-Mile Fleet */}
                <FadeIn delay={0.2}>
                    <section className="audit-section">
                        <h2 className="section-number">1. Last-Mile Fleet Utilization</h2>
                        <p className="section-context">Delivery Cost Optimization</p>
                        <div className="section-grid">
                            <div className="section-content">
                                <div className="content-block">
                                    <h4>Problem</h4>
                                    <p>Low orders per trip driving up per-delivery cost. Fleet underutilized during off-peak windows.</p>
                                </div>
                                <div className="content-block">
                                    <h4>Root Cause</h4>
                                    <p className="callout">Static routing + fixed dispatch intervals regardless of order density.</p>
                                </div>
                                <div className="content-block">
                                    <h4>Proposed Fix</h4>
                                    <ul>
                                        <li>Dynamic batching based on geo-cluster + time window</li>
                                        <li>Surge pricing during low-density periods</li>
                                        <li>Real-time route optimization with live traffic</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="section-visual">
                                <div className="chart-container">
                                    <div className="chart-title">Orders per Trip</div>
                                    <div className="bar-chart">
                                        <div className="bar-group">
                                            <div className="bar before" style={{ height: '40%' }}>
                                                <span className="bar-label">1.2</span>
                                            </div>
                                            <span className="bar-caption">Before</span>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar after" style={{ height: '60%' }}>
                                                <span className="bar-label">1.8</span>
                                            </div>
                                            <span className="bar-caption">Target</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="impact-callout">
                                    <span className="impact-icon">💰</span>
                                    <span>Cost per Delivery ↓ ~15%</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* Section 2: Fresh Produce */}
                <FadeIn delay={0.3}>
                    <section className="audit-section alt">
                        <h2 className="section-number">2. Fresh Produce Shrinkage</h2>
                        <p className="section-context">Inventory Cost Optimization</p>
                        <div className="section-grid reverse">
                            <div className="section-visual">
                                <div className="chart-container">
                                    <div className="chart-title">Wastage Rate</div>
                                    <div className="bar-chart">
                                        <div className="bar-group">
                                            <div className="bar before" style={{ height: '75%' }}>
                                                <span className="bar-label">15%</span>
                                            </div>
                                            <span className="bar-caption">Before</span>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar after" style={{ height: '20%' }}>
                                                <span className="bar-label">4%</span>
                                            </div>
                                            <span className="bar-caption">Target</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="impact-callout green">
                                    <span className="impact-icon">📈</span>
                                    <span>Gross Margin ↑ +11pts</span>
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="content-block">
                                    <h4>Problem</h4>
                                    <p>High shrinkage on perishables due to poor demand forecasting and static pricing near expiry.</p>
                                </div>
                                <div className="content-block">
                                    <h4>Root Cause</h4>
                                    <p className="callout">No dynamic markdown strategy. Fresh items discarded vs. sold at discount.</p>
                                </div>
                                <div className="content-block">
                                    <h4>Proposed Fix</h4>
                                    <ul>
                                        <li>Dynamic pricing triggered 24-48h before expiry</li>
                                        <li>Hyper-local push notifications for "flash deals"</li>
                                        <li>Demand sensing using weather + event data</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* Section 3: Refund Leakage */}
                <FadeIn delay={0.4}>
                    <section className="audit-section">
                        <h2 className="section-number">3. Refund Leakage</h2>
                        <p className="section-context">Support Cost Optimization</p>
                        <div className="section-grid">
                            <div className="section-content">
                                <div className="content-block">
                                    <h4>Problem</h4>
                                    <p>Excessive refunds on "missing/damaged item" claims with no verification. Easy to exploit.</p>
                                </div>
                                <div className="content-block">
                                    <h4>Root Cause</h4>
                                    <p className="callout">No proof-of-packing. Manual claim review creates approval bias.</p>
                                </div>
                                <div className="content-block">
                                    <h4>Proposed Fix</h4>
                                    <ul>
                                        <li>Pack-Cam: CV-based packing verification</li>
                                        <li>Automated claim validation against pack logs</li>
                                        <li>Fraud scoring for repeat claimants</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="section-visual">
                                <div className="chart-container">
                                    <div className="chart-title">Refund Rate</div>
                                    <div className="bar-chart">
                                        <div className="bar-group">
                                            <div className="bar before" style={{ height: '83%' }}>
                                                <span className="bar-label">2.5%</span>
                                            </div>
                                            <span className="bar-caption">Before</span>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar after" style={{ height: '37%' }}>
                                                <span className="bar-label">1.1%</span>
                                            </div>
                                            <span className="bar-caption">Target</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flow-diagram">
                                    <div className="flow-step">Pack-Cam</div>
                                    <div className="flow-arrow">→</div>
                                    <div className="flow-step">AI Validation</div>
                                    <div className="flow-arrow">→</div>
                                    <div className="flow-step">Auto-Reject</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* Summary Table */}
                <FadeIn delay={0.5}>
                    <section className="summary-section">
                        <h2 className="section-label">Impact Summary</h2>
                        <div className="summary-table-wrapper">
                            <table className="summary-table">
                                <thead>
                                    <tr>
                                        <th>Efficiency Vertical</th>
                                        <th>Before</th>
                                        <th>After (Target)</th>
                                        <th>Primary Impact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Fleet (Delivery)</strong></td>
                                        <td className="metric-before">1.2 orders/trip</td>
                                        <td className="metric-after">1.8 orders/trip</td>
                                        <td><span className="impact-tag down">↓ Cost Per Delivery</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Inventory (Fresh)</strong></td>
                                        <td className="metric-before">15% wastage</td>
                                        <td className="metric-after">4% wastage</td>
                                        <td><span className="impact-tag up">↑ Gross Margin</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Support (Refunds)</strong></td>
                                        <td className="metric-before">2.5% refund rate</td>
                                        <td className="metric-after">1.1% refund rate</td>
                                        <td><span className="impact-tag down">↓ OpEx</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </FadeIn>

                {/* Section 4: Org Structure Evolution */}
                <FadeIn delay={0.6}>
                    <section className="audit-section org-section">
                        <h2 className="section-number">4. Org Structure Evolution</h2>
                        <p className="section-context">From Founder-Centric to Scaled Execution</p>

                        <div className="org-comparison">
                            {/* Current State */}
                            <div className="org-diagram">
                                <h4 className="org-diagram-title">Current State</h4>
                                <div className="org-chart">
                                    <div className="org-node ceo bottleneck">
                                        <span>CEO (Founder)</span>
                                        <span className="bottleneck-label">⚠️ Bottleneck</span>
                                    </div>
                                    <div className="org-connector"></div>
                                    <div className="org-row">
                                        <div className="org-node">Central Ops</div>
                                        <div className="org-node">City Ops</div>
                                        <div className="org-node">Tech & Data</div>
                                        <div className="org-node">Supply Chain</div>
                                        <div className="org-node">Finance</div>
                                    </div>
                                    <div className="org-subtext">All decisions flow through founder</div>
                                </div>
                            </div>

                            <div className="org-arrow">→</div>

                            {/* Future State */}
                            <div className="org-diagram future">
                                <h4 className="org-diagram-title">6 Months Forward</h4>
                                <div className="org-chart">
                                    <div className="org-node ceo">CEO (Founder)</div>
                                    <div className="org-connector"></div>
                                    <div className="org-node founders-office highlight">
                                        <span>Founder's Office</span>
                                        <div className="org-responsibilities">
                                            <span>Decision Memos</span>
                                            <span>KPI Filters</span>
                                            <span>Weekly Brief</span>
                                        </div>
                                    </div>
                                    <div className="org-connector"></div>
                                    <div className="org-row">
                                        <div className="org-node cluster">Cluster Heads (4-6 cities)</div>
                                    </div>
                                    <div className="org-connector"></div>
                                    <div className="org-row compact">
                                        <div className="org-node small">Central Ops</div>
                                        <div className="org-node small">City Ops</div>
                                        <div className="org-node small">Tech</div>
                                        <div className="org-node small">Supply</div>
                                        <div className="org-node small">Finance</div>
                                    </div>
                                    <div className="org-subtext success">Reduced founder load via leverage layer</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* Section 5: Decision Ownership */}
                <FadeIn delay={0.7}>
                    <section className="audit-section alt decision-section">
                        <h2 className="section-number">5. Decision Ownership Boundaries</h2>
                        <p className="section-context">Who Decides What</p>

                        <div className="decision-table-wrapper">
                            <table className="decision-table">
                                <thead>
                                    <tr>
                                        <th>Decision Type</th>
                                        <th>Owner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Strategy & Capital Allocation</td>
                                        <td><span className="owner-tag founder">Founder</span></td>
                                    </tr>
                                    <tr>
                                        <td>Speed vs Margin Trade-offs</td>
                                        <td>
                                            <span className="owner-tag founder">Founder</span>
                                            <span className="owner-plus">+</span>
                                            <span className="owner-tag fo">Founder's Office</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>KPI Thresholds & Alerts</td>
                                        <td><span className="owner-tag fo">Founder's Office</span></td>
                                    </tr>
                                    <tr>
                                        <td>SOP Design & Efficiency</td>
                                        <td><span className="owner-tag ops">Central Ops</span></td>
                                    </tr>
                                    <tr>
                                        <td>City-level Execution</td>
                                        <td><span className="owner-tag cluster">Cluster Heads</span></td>
                                    </tr>
                                    <tr className="not-founder-row">
                                        <td>Day-to-day Firefighting</td>
                                        <td><span className="owner-tag not-founder">❌ Not Founder</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </FadeIn>

                {/* Section 6: KPI System */}
                <FadeIn delay={0.8}>
                    <section className="audit-section kpi-system-section">
                        <h2 className="section-number">6. KPI System</h2>
                        <p className="section-context">From Store Metrics to Company Profitability</p>

                        <div className="kpi-system-grid">
                            {/* KPI Pyramid */}
                            <div className="kpi-pyramid-container">
                                <div className="kpi-pyramid">
                                    <div className="pyramid-level north-star">
                                        <span className="pyramid-label">North Star</span>
                                        <span className="pyramid-metric">Contribution Margin / Order</span>
                                    </div>
                                    <div className="pyramid-level mid-tier">
                                        <div className="pyramid-item">Speed</div>
                                        <div className="pyramid-item">Cost</div>
                                        <div className="pyramid-item">Utilization</div>
                                    </div>
                                    <div className="pyramid-level base-tier">
                                        <span>City / Store-level KPIs</span>
                                    </div>
                                </div>

                                {/* Logic Arrows */}
                                <div className="kpi-logic">
                                    <div className="logic-flow bottom-up">
                                        <span className="logic-arrow">↑</span>
                                        <div className="logic-steps">
                                            <span>Fix store issues</span>
                                            <span>→ Improves speed/cost</span>
                                            <span>→ ↑ Margin/order</span>
                                            <span>→ Profitable at scale</span>
                                        </div>
                                    </div>
                                    <div className="logic-flow top-down">
                                        <span className="logic-arrow">↓</span>
                                        <div className="logic-steps">
                                            <span>Margin drops</span>
                                            <span>→ Which lever broke?</span>
                                            <span>→ Drill to city/store</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* KPI Ownership Table */}
                            <div className="kpi-ownership-wrapper">
                                <h4 className="kpi-table-title">Operator KPI View</h4>
                                <table className="kpi-ownership-table">
                                    <thead>
                                        <tr>
                                            <th>KPI</th>
                                            <th>Why It Matters</th>
                                            <th>Owner</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Orders per Day</td>
                                            <td>Demand health</td>
                                            <td><span className="owner-mini ops">City Ops</span></td>
                                        </tr>
                                        <tr>
                                            <td>Contribution Margin / Order</td>
                                            <td>Sustainability</td>
                                            <td><span className="owner-mini finance">Finance</span></td>
                                        </tr>
                                        <tr>
                                            <td>Avg Delivery Time</td>
                                            <td>Brand promise</td>
                                            <td><span className="owner-mini ops">Ops</span></td>
                                        </tr>
                                        <tr>
                                            <td>Cost per Order</td>
                                            <td>Efficiency</td>
                                            <td><span className="owner-mini ops">Ops</span></td>
                                        </tr>
                                        <tr>
                                            <td>Dark Store Utilization</td>
                                            <td>Asset leverage</td>
                                            <td><span className="owner-mini ops">Central Ops</span></td>
                                        </tr>
                                        <tr>
                                            <td>Inventory Turnover</td>
                                            <td>Working capital</td>
                                            <td><span className="owner-mini supply">Supply Chain</span></td>
                                        </tr>
                                        <tr>
                                            <td>Rider Utilization</td>
                                            <td>Labor efficiency</td>
                                            <td><span className="owner-mini ops">City Ops</span></td>
                                        </tr>
                                        <tr className="fo-owned">
                                            <td>City P&L Variance</td>
                                            <td>Accountability</td>
                                            <td><span className="owner-mini fo">Founder's Office</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* Closing */}
                <FadeIn delay={0.9}>
                    <footer className="audit-footer">
                        <p>
                            This audit demonstrates how small operational changes compound into meaningful unit economics improvements.
                        </p>
                    </footer>
                </FadeIn>
            </div>
        </div>
    );
};

export default ZeptoAudit;
