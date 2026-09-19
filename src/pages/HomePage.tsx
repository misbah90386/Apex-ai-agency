import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Monitor, 
  Settings, 
  Box 
} from 'lucide-react';
import TechGraphic from '../components/TechGraphic';
import DigitalMountain from '../components/DigitalMountain';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../config/site';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative pt-24 pb-16 overflow-hidden bg-[#02070D]">
      {/* Ambient background grid & glow aura */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/[0.07] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-12 right-10 w-[400px] h-[400px] bg-sky-500/[0.05] blur-[120px] pointer-events-none rounded-full" />

      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Badge */}
            <div
              id="hero-label"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-medium text-sky-400 tracking-wider uppercase mb-6"
            >
              <span>APEX AI AGENCY</span>
            </div>

            {/* Large Headline */}
            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
            >
              <span className="text-white block">ADVANCED TECHNOLOGY.</span>
              <span className="text-sky-400 block mt-1 sm:mt-2">BUILT FOR BUSINESS.</span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-9"
            >
              AI solutions, intelligent automation, digital experiences, and custom technology built around real business requirements.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="btn-explore-services"
                onClick={() => navigate('/services')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_25px_rgba(0,102,255,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="btn-start-project-hero"
                onClick={() => navigate('/contact')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-sky-400/40 backdrop-blur-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-sky-300" />
              </button>
            </div>
          </div>

          {/* Right Hero Abstract Tech Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <TechGraphic />
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION STRIP */}
      <section id="introduction-strip" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="rounded-2xl bg-[#040914]/90 border border-blue-500/20 p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Statement */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-3">
                MODERN TECHNOLOGY. PRACTICAL SOLUTIONS.
              </span>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                APEX AI AGENCY combines modern web development, artificial intelligence, automation, and custom technology to create practical digital solutions for businesses.
              </p>
            </div>

            {/* Vertical Divider for desktop */}
            <div className="hidden lg:block lg:col-span-1 h-16 w-px bg-white/10 mx-auto" />

            {/* Right Capability Indicators */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Brain className="w-4 h-4 text-sky-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white">AI & Intelligence</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Monitor className="w-4 h-4 text-sky-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white">Web Development</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Settings className="w-4 h-4 text-sky-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white">Automation</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Box className="w-4 h-4 text-sky-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white">Custom Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2 font-bold">
              WHAT WE BUILD
            </span>
            <h2 id="home-services-heading" className="text-3xl sm:text-4xl font-extrabold text-white">
              Our <span className="text-sky-400">Services</span>
            </h2>
          </div>
          <Link
            to="/services"
            id="link-view-all-services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 x 2 Grid of 6 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} idPrefix="home-service" />
          ))}
        </div>
      </section>

      {/* 4. ABOUT/PURPOSE SECTION */}
      <section id="about-purpose-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2 font-bold">
              BUILT WITH PURPOSE
            </span>
            <h2 id="home-about-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Built With <span className="text-sky-400">Purpose</span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed mb-8">
              APEX AI AGENCY is a technology-focused agency creating modern digital experiences, AI systems, intelligent agents, and automation solutions.
            </p>

            <span className="text-xs font-mono uppercase text-slate-400 block mb-3 font-semibold">
              Our approach is simple:
            </span>

            {/* Horizontal Process Row: 01 Understand -> 02 Plan -> 03 Build -> 04 Improve */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-9">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070D18] border border-blue-500/20 text-xs font-medium text-slate-200">
                <span className="w-5 h-5 rounded-full bg-blue-600/30 text-sky-300 text-[10px] font-mono flex items-center justify-center border border-blue-400/30">01</span>
                <span>Understand</span>
              </div>

              <span className="text-sky-400 text-sm">→</span>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070D18] border border-blue-500/20 text-xs font-medium text-slate-200">
                <span className="w-5 h-5 rounded-full bg-blue-600/30 text-sky-300 text-[10px] font-mono flex items-center justify-center border border-blue-400/30">02</span>
                <span>Plan</span>
              </div>

              <span className="text-sky-400 text-sm">→</span>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070D18] border border-blue-500/20 text-xs font-medium text-slate-200">
                <span className="w-5 h-5 rounded-full bg-blue-600/30 text-sky-300 text-[10px] font-mono flex items-center justify-center border border-blue-400/30">03</span>
                <span>Build</span>
              </div>

              <span className="text-sky-400 text-sm">→</span>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070D18] border border-blue-500/20 text-xs font-medium text-slate-200">
                <span className="w-5 h-5 rounded-full bg-blue-600/30 text-sky-300 text-[10px] font-mono flex items-center justify-center border border-blue-400/30">04</span>
                <span>Improve</span>
              </div>
            </div>

            <button
              id="btn-discover-apex"
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.55)] cursor-pointer"
            >
              <span>Discover APEX</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Side: Glowing Abstract Digital Mountain / Data Landscape */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <DigitalMountain />
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA CARD */}
      <section id="final-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#060D1D] to-[#02070E] border border-blue-500/30 p-8 sm:p-14 md:p-16 text-center overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.15)]">
          {/* Subtle electric blue ambient aura */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/20 blur-3xl pointer-events-none rounded-full" />

          {/* Small Label */}
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-sky-400 font-bold mb-4">
            READY TO START
          </span>

          {/* Heading */}
          <h2 id="final-cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Have a Project in Mind?
          </h2>

          {/* Supporting Text */}
          <p id="final-cta-text" className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's discuss the technology you need and explore what we can build together.
          </p>

          {/* Button */}
          <button
            id="btn-final-start-project"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] active:scale-[0.98] cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
