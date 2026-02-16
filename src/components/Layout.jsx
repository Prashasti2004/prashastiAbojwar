import { useState } from 'react';
import './Layout.css';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Resume', path: '/resume' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className={`layout ${isMenuOpen ? 'menu-open' : ''}`}>
            <header className="site-header">
                <div className="container header-inner">
                    <Link to="/" className="site-logo" onClick={closeMenu}>
                        Prashasti Abojwar
                    </Link>

                    <button
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`site-nav ${isMenuOpen ? 'mobile-visible' : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
                </div>
            </header>

            <main className="site-main">
                {children}
            </main>

            <footer className="site-footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} Prashasti Abojwar. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
