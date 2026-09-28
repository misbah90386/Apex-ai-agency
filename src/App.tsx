import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import MissionVisionPage from './pages/MissionVisionPage';
import ContactPage from './pages/ContactPage';

// Component to scroll window to top or target hash and manage page titles
function RouteManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Page title management preserving branding
    if (pathname === '/') {
      document.title = "APEX AI AGENCY | Advanced Technology. Built for Business.";
    } else if (pathname.startsWith('/services')) {
      document.title = "Services | APEX AI AGENCY";
    } else if (pathname.startsWith('/about')) {
      document.title = "About APEX | APEX AI AGENCY";
    } else if (pathname.startsWith('/mission-vision')) {
      document.title = "Mission & Vision | APEX AI AGENCY";
    } else if (pathname.startsWith('/contact')) {
      document.title = "Discuss Your Project | APEX AI AGENCY";
    } else {
      document.title = "APEX AI AGENCY | Advanced Technology. Built for Business.";
    }

    if (hash) {
      const id = hash.substring(1);
      setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <RouteManager />
      <div className="min-h-screen flex flex-col bg-[#02070D] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Routed Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/our-work" element={<Navigate to="/#demo-portfolio" replace />} />
            <Route path="/work" element={<Navigate to="/#demo-portfolio" replace />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission-vision" element={<MissionVisionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}
