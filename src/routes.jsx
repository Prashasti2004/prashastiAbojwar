import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Thinking from './pages/Thinking';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ZeptoAudit from './pages/ZeptoAudit';
import ZeptoAI from './pages/ZeptoAI';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/thinking" element={<Thinking />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/zepto-audit" element={<ZeptoAudit />} />
            <Route path="/projects/zepto-ceo-ai" element={<ZeptoAI />} />
        </Routes>
    );
};

export default AppRoutes;
