import './Layout.css';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Resume', path: '/resume' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="layout">
            <header className="site-header">
                <div className="container header-inner">
                    <Link to="/" className="site-logo">
                        Prashasti Abojwar
                    </Link>
                    <nav className="site-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
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
