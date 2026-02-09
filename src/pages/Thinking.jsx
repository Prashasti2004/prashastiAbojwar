import './Thinking.css';
import FadeIn from '../components/FadeIn';

const Thinking = () => {
    return (
        <div className="page-thinking section-padding">
            <div className="container">
                <FadeIn>
                    <h1 className="page-title">Why Founder’s Office & How I Think</h1>
                </FadeIn>

                <article className="thinking-content">
                    <ul className="thinking-list">
                        <FadeIn delay={0.1}>
                            <li>
                                <strong>Ambiguity is the default.</strong> I don't need perfect instructions. I value context over control and outcomes over titles.
                            </li>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <li>
                                <strong>Systems &gt; Heroes.</strong> Heroics don't scale. I build simple frameworks to make execution repeatable and boring.
                            </li>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <li>
                                <strong>Tech & Business are one.</strong> I switch between SQL queries and strategy decks because they are just different levers for the same goal.
                            </li>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <li>
                                <strong>Goal: Zero Cognitive Load.</strong> My job is to protect your bandwidth so you can focus on product and vision.
                            </li>
                        </FadeIn>
                    </ul>
                </article>
            </div>
        </div>
    );
};

export default Thinking;
