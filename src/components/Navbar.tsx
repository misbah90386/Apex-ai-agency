import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getNavItems, UI_STRINGS } from '../config/translations';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, isRTL } = useLanguage();

  const navItems = getNavItems(language);
  const strings = UI_STRINGS[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change and Escape key press
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#02070D]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo (Brand remains LTR directionally) */}
        <Link
          to="/"
          id="nav-logo"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg shrink-0"
          aria-label="APEX AI AGENCY Home"
        >
          {/* APEX AI AGENCY Logo */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-blue-500/40 shadow-[0_0_20px_rgba(0,102,255,0.45)] flex items-center justify-center bg-black transition-transform group-hover:scale-105 shrink-0">
            <img
              src="/logo.jpg"
              alt="APEX AI AGENCY Logo"
              width="44"
              height="44"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white group-hover:text-sky-300 transition-colors leading-tight font-sans">
              APEX
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.22em] text-slate-400 uppercase font-mono leading-none">
              AI AGENCY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                id={`nav-item-${item.path.replace(/\//g, '') || 'home'}`}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  active ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{item.name}</span>
                {/* Active indicator bar */}
                {active && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Language Switcher + CTA Button */}
        <div className="hidden md:flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Visible “EN / العربية” Language Switcher */}
          <div 
            id="desktop-language-switcher"
            role="group"
            aria-label="Language selection"
            className="flex items-center rounded-full bg-white/[0.05] border border-white/10 p-1 backdrop-blur-sm shadow-inner"
          >
            <button
              type="button"
              id="btn-lang-en-desktop"
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                language === 'en'
                  ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(0,102,255,0.6)]'
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={language === 'en'}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              id="btn-lang-ar-desktop"
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1 rounded-full text-xs font-semibold font-sans transition-all duration-200 cursor-pointer ${
                language === 'ar'
                  ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(0,102,255,0.6)]'
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={language === 'ar'}
              aria-label="التبديل إلى العربية"
            >
              العربية
            </button>
          </div>

          {/* Primary Discuss Your Project Button */}
          <button
            id="nav-discuss-project-btn"
            onClick={() => navigate('/contact')}
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_20px_rgba(0,102,255,0.45)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] active:scale-[0.98] cursor-pointer"
          >
            <span>{strings.discussProject}</span>
            <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </button>
        </div>

        {/* Mobile Header Right: Quick Language Switcher & Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Quick Language Toggle */}
          <button
            type="button"
            id="btn-quick-lang-toggle-mobile"
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-medium text-sky-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            aria-label={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-semibold">{language === 'en' ? 'العربية' : 'EN'}</span>
          </button>

          {/* Hamburger Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#02070D]/98 border-b border-white/10 backdrop-blur-xl px-5 pt-4 pb-6 animate-in slide-in-from-top-2 duration-200"
        >
          {/* Mobile Language Switcher Row */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Language / اللغة
            </span>
            <div 
              role="group"
              aria-label="Mobile language selector"
              className="flex items-center rounded-full bg-white/[0.05] border border-white/10 p-0.5"
            >
              <button
                type="button"
                id="btn-lang-en-mobile"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(0,102,255,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                id="btn-lang-ar-mobile"
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 rounded-full text-xs font-semibold font-sans transition-all ${
                  language === 'ar'
                    ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(0,102,255,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 mb-6">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  id={`mobile-nav-item-${item.path.replace(/\//g, '') || 'home'}`}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    active
                      ? 'text-sky-400 bg-blue-500/15 border border-blue-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button in Drawer */}
          <button
            id="mobile-nav-discuss-project-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              navigate('/contact');
            }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_25px_rgba(0,102,255,0.45)] cursor-pointer"
          >
            <span>{strings.discussProject}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
    </header>
  );
}
