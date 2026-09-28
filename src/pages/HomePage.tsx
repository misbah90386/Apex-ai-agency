import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Monitor, 
  Settings, 
  Box,
  MessageCircle
} from 'lucide-react';
import HeroVisualComposition from '../components/HeroVisualComposition';
import DemoPortfolioCard from '../components/DemoPortfolioCard';
import ServiceCard from '../components/ServiceCard';
import { 
  SERVICES_DATA, 
  DEMO_PROJECTS, 
  PROCESS_STEPS, 
  FAQ_DATA 
} from '../config/site';

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<string | null>(FAQ_DATA[0].id);

  // Smooth scroll to portfolio if hash is present
  useEffect(() => {
    if (location.hash === '#demo-portfolio' || location.hash === '#portfolio' || location.hash === '#work') {
      const el = document.getElementById('demo-portfolio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollToPortfolio = () => {
    const el = document.getElementById('demo-portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => prev === id ? null : id);
  };

  return (
    <div className="relative pt-24 pb-16 overflow-hidden bg-[#02070D]">
      {/* Ambient background grid & glow aura */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/[0.07] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-12 right-10 w-[400px] h-[400px] bg-sky-500/[0.05] blur-[120px] pointer-events-none rounded-full" />

      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10 xl:gap-14">
          {/* Left Hero Content (~48% desktop content width) */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
            {/* Small Badge */}
            <div
              id="hero-label"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-medium text-sky-400 tracking-wider uppercase mb-5"
            >
              <span>APEX AI AGENCY</span>
            </div>

            {/* Exact Headline with responsive typography and balanced line breaks */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[3.1rem] font-extrabold tracking-tight leading-[1.12] mb-5"
            >
              <span className="text-white block">ADVANCED TECHNOLOGY.</span>
              <span className="text-sky-400 block mt-1 sm:mt-1.5">BUILT FOR BUSINESS.</span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-lg mb-8"
            >
              We build professional websites, AI assistants, and automated workflows that help businesses present their services, handle enquiries, and reduce repetitive work.
            </p>

            {/* Hero buttons: “Explore Our Work” (scrolls to portfolio) & “Discuss Your Project” (opens Contact page) */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                id="btn-explore-work"
                onClick={scrollToPortfolio}
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_25px_rgba(0,102,255,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="btn-discuss-project-hero"
                onClick={() => navigate('/contact')}
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-sky-400/40 backdrop-blur-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-sky-300" />
              </button>
            </div>
          </div>

          {/* Right Hero Visual (~52% desktop content width) */}
          <div className="w-full lg:w-[52%] flex items-center justify-center">
            <HeroVisualComposition />
          </div>
        </div>
      </section>

      {/* 2. DEMO PORTFOLIO SECTION */}
      <section id="demo-portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/[0.06] scroll-mt-24">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-3">
            Demo Showcase
          </div>
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Explore What We Can Build
          </h2>
          <p id="portfolio-intro" className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore concept websites showing different ways businesses can present their services online.
          </p>
        </div>

        {/* 3 Columns on desktop, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DEMO_PROJECTS.map((project) => (
            <DemoPortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2 font-bold">
              CAPABILITIES & WORKFLOWS
            </span>
            <h2 id="home-services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Our <span className="text-sky-400">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We design and build practical digital solutions focused on clear communication, everyday usefulness, and reliable operations.
            </p>
          </div>
          <Link
            to="/services"
            id="link-view-all-services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group shrink-0"
          >
            <span>View All Service Inclusions</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Columns on desktop, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} idPrefix="home-service" />
          ))}
        </div>
      </section>

      {/* 4. EXPANDED PROJECT PROCESS SECTION */}
      <section id="process-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-3">
            How We Work
          </div>
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            A Clear Path From Idea to Launch
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every project follows a straightforward four-stage process designed to maintain alignment, clarity, and open communication.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              id={`process-card-${step.step}`}
              className="p-6 sm:p-7 rounded-2xl bg-[#060B16] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 text-sky-400 font-mono font-bold text-sm flex items-center justify-center mb-5 group-hover:border-sky-400/40 group-hover:bg-blue-500/20 transition-colors">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.05] text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Stage {step.step}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOMEPAGE FAQS SECTION */}
      <section id="faq-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/[0.06]">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-3">
            Common Inquiries
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Straightforward answers to the most common questions business owners have about working with APEX.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#090E1C] border-blue-500/40 shadow-[0_0_20px_rgba(0,102,255,0.12)]'
                    : 'bg-[#050A14] border-white/[0.08] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-600/20 border-blue-500/40 text-sky-300 rotate-180'
                        : 'bg-white/[0.04] border-white/10 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CLOSING SECTION (Exact requested text) */}
      <section id="closing-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#060D1E] to-[#02070E] border border-blue-500/35 p-8 sm:p-14 md:p-16 text-center overflow-hidden shadow-[0_0_60px_rgba(0,102,255,0.18)]">
          {/* Subtle electric blue ambient aura */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/20 blur-3xl pointer-events-none rounded-full" />

          {/* Small Top Tag */}
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-sky-400 font-bold mb-4">
            NEXT STEPS
          </span>

          {/* Exact Heading */}
          <h2 id="closing-headline" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            READY TO BUILD YOUR NEXT BUSINESS SOLUTION?
          </h2>

          {/* Exact Supporting Text */}
          <p id="closing-subtext" className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Tell us what you need. Let’s define the right next step.
          </p>

          {/* Button: “Discuss Your Project” */}
          <button
            id="btn-closing-discuss-project"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] active:scale-[0.98] cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
