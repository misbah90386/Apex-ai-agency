import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../config/site';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#02070D]/90 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          id="nav-logo"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          aria-label="APEX AI AGENCY Home"
        >
          {/* APEX AI AGENCY Logo */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-blue-500/40 shadow-[0_0_20px_rgba(0,102,255,0.45)] flex items-center justify-center bg-black transition-transform group-hover:scale-105 shrink-0">
            <img
              src="/logo.jpg"
              alt="APEX AI AGENCY Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white group-hover:text-sky-300 transition-colors leading-tight font-sans">
              APEX
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.22em] text-slate-400 uppercase font-mono leading-none">
              AI AGENCY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                id={`nav-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  active ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{item.name}</span>
                {/* Active indicator bar directly underneath */}
                {active && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            id="nav-start-project-btn"
            onClick={() => navigate('/contact')}
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_20px_rgba(0,102,255,0.45)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] active:scale-[0.98] cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#02070D]/98 border-b border-white/10 backdrop-blur-xl px-5 pt-4 pb-6 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-2 mb-6">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  id={`mobile-nav-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
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

          <button
            id="mobile-nav-start-project-btn"
            onClick={() => navigate('/contact')}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_25px_rgba(0,102,255,0.45)] cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
