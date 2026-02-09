import './Contact.css';
import FadeIn from '../components/FadeIn';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleEmailClick = async (e) => {
        e.preventDefault();
        const email = 'prashastiabojwar@gmail.com';

        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <div className="page-contact section-padding">
            <div className="container">
                <FadeIn>
                    <h1 className="page-title">Contact</h1>
                </FadeIn>

                <div className="contact-content">
                    <FadeIn delay={0.1}>
                        <p className="contact-intro">
                            I treat interviews like working sessions. Reach out with a problem you're trying to solve, and let's see if I'm the right person to fix it.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="contact-links">
                            <a href="https://www.linkedin.com/in/prashastiabojwar" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
                            <a href="#" onClick={handleEmailClick} className="contact-link email-copy">
                                {copied ? 'Copied!' : 'prashastiabojwar@gmail.com'}
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default Contact;
