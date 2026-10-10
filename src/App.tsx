import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import MissionVisionPage from './pages/MissionVisionPage';
import ContactPage from './pages/ContactPage';

import NotFoundPage from './pages/NotFoundPage';

// Component to scroll window to top or target hash and manage page titles
function RouteManager() {
  const { pathname, hash } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // Page title management preserving branding
    if (language === 'ar') {
      if (pathname === '/') {
        document.title = "APEX AI AGENCY | مواقع إلكترونية وأتمتة بالذكاء الاصطناعي لأعمالك";
      } else if (pathname.startsWith('/services')) {
        document.title = "خدماتنا | APEX AI AGENCY";
      } else if (pathname.startsWith('/about')) {
        document.title = "عن APEX | APEX AI AGENCY";
      } else if (pathname.startsWith('/mission-vision')) {
        document.title = "الرؤية والرسالة | APEX AI AGENCY";
      } else if (pathname.startsWith('/contact')) {
        document.title = "ناقش مشروعك | APEX AI AGENCY";
      } else {
        document.title = "APEX AI AGENCY | مواقع إلكترونية وأتمتة بالذكاء الاصطناعي لأعمالك";
      }
    } else {
      if (pathname === '/') {
        document.title = "APEX AI AGENCY | Websites & AI Automation For Your Business";
      } else if (pathname.startsWith('/services')) {
        document.title = "Services | APEX AI AGENCY";
      } else if (pathname.startsWith('/about')) {
        document.title = "About APEX | APEX AI AGENCY";
      } else if (pathname.startsWith('/mission-vision')) {
        document.title = "Mission & Vision | APEX AI AGENCY";
      } else if (pathname.startsWith('/contact')) {
        document.title = "Discuss Your Project | APEX AI AGENCY";
      } else {
        document.title = "APEX AI AGENCY | Websites & AI Automation For Your Business";
      }
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
  }, [pathname, hash, language]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
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
              {/* Catch-all 404 page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Discreet Floating WhatsApp Button */}
          <FloatingWhatsAppButton />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}
