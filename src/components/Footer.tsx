import { Link } from 'react-router-dom';
import { getNavItems, UI_STRINGS } from '../config/translations';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const navItems = getNavItems(language);
  const strings = UI_STRINGS[language];

  return (
    <footer id="main-footer" className="border-t border-white/[0.08] bg-[#02070D] relative overflow-hidden text-left">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="max-w-md">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group" aria-label="APEX AI AGENCY">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-blue-500/40 shadow-[0_0_15px_rgba(0,102,255,0.4)] flex items-center justify-center bg-black transition-transform group-hover:scale-105 shrink-0">
                <img
                  src="/logo.jpg"
                  alt="APEX AI AGENCY Logo"
                  width="40"
                  height="40"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-extrabold tracking-wider text-white group-hover:text-sky-300 transition-colors font-sans leading-tight">
                  APEX
                </span>
                <span className="text-[10px] tracking-[0.22em] text-slate-400 uppercase font-mono leading-none">
                  AI AGENCY
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {strings.taglineShort}
            </p>
          </div>

          {/* Navigation Links */}
          <nav id="footer-nav" className="flex flex-wrap items-center gap-x-6 gap-y-3" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                id={`footer-link-${item.path.replace(/\//g, '') || 'home'}`}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p id="footer-copyright">
            {strings.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
