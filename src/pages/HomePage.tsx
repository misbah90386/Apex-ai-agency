import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  MessageCircle,
  Layout,
  Bot,
  Cpu
} from 'lucide-react';
import HeroVisualComposition from '../components/HeroVisualComposition';
import DemoPortfolioCard from '../components/DemoPortfolioCard';
import ServiceCard from '../components/ServiceCard';
import SolutionAdvisor from '../components/SolutionAdvisor';
import { 
  getServicesData, 
  getDemoProjects, 
  getProcessSteps, 
  getFaqData,
  getGeneralWhatsAppUrl,
  UI_STRINGS
} from '../config/translations';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, isRTL } = useLanguage();

  const services = getServicesData(language);
  const demoProjects = getDemoProjects(language);
  const processSteps = getProcessSteps(language);
  const faqData = getFaqData(language);
  const strings = UI_STRINGS[language];

  const [openFaq, setOpenFaq] = useState<string | null>(faqData[0]?.id || 'faq-project-scope');

  // Smooth scroll to portfolio or solution section if hash is present
  useEffect(() => {
    if (location.hash === '#demo-portfolio' || location.hash === '#portfolio' || location.hash === '#work') {
      const el = document.getElementById('demo-portfolio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#find-right-solution' || location.hash === '#solution') {
      const el = document.getElementById('find-right-solution');
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

  const whatsappGeneralUrl = getGeneralWhatsAppUrl(language);

  return (
    <div className="relative pt-24 pb-16 overflow-hidden bg-[#02070D]">
      {/* Ambient background grid & glow aura */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/[0.07] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-12 right-10 w-[400px] h-[400px] bg-sky-500/[0.05] blur-[120px] pointer-events-none rounded-full" />

      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-20 text-left">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10 xl:gap-14">
          {/* Left Hero Content (~48% desktop content width) */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
            {/* Small Badge / Tagline */}
            <div
              id="hero-label"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-medium text-sky-400 tracking-wider uppercase mb-5"
            >
              <span>{language === 'ar' ? "APEX AI AGENCY • تقنيات متقدمة. مصممة لأعمالك." : "APEX AI AGENCY • Advanced Technology. Built for Business."}</span>
            </div>

            {/* Customer-Focused Headline in English and Arabic */}
            {language === 'ar' ? (
              <h1
                id="hero-headline"
                className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3.2rem] font-extrabold tracking-tight leading-[1.25] mb-5 text-balance font-heading"
              >
                <span className="text-white block">مواقع إلكترونية وأتمتة بالذكاء الاصطناعي</span>
                <span className="text-sky-400 block mt-1 sm:mt-1.5">لأعمالك</span>
              </h1>
            ) : (
              <h1
                id="hero-headline"
                className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[3.1rem] font-extrabold tracking-tight leading-[1.15] mb-5 text-balance"
              >
                <span className="text-white block">Websites & AI Automation</span>
                <span className="text-sky-400 block mt-1 sm:mt-1.5">For Your Business.</span>
              </h1>
            )}

            {/* Exact Supporting Text in English and Arabic */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-lg mb-6"
            >
              {language === 'ar'
                ? "نطوّر مواقع إلكترونية احترافية، ومساعدين بالذكاء الاصطناعي للرد على استفسارات العملاء، وحلول أتمتة لإنجاز المهام المتكررة."
                : "We build professional websites, AI assistants that answer customer enquiries, and automation that handles repetitive tasks."}
            </p>

            {/* Three Easy-to-Understand Benefits */}
            <div 
              id="hero-key-benefits"
              className="w-full max-w-lg mb-8 space-y-2.5 sm:space-y-2 pt-1 border-t border-white/[0.08]"
            >
              <div className="flex items-start gap-2.5 text-sm">
                <div className="p-1 rounded bg-blue-500/10 text-sky-400 shrink-0 mt-0.5">
                  <Layout className="w-4 h-4" />
                </div>
                <div className="text-slate-200">
                  <strong className="text-white font-semibold">
                    {language === 'ar' ? "المواقع الإلكترونية" : "Websites"}
                  </strong>
                  <span className="text-slate-400 mx-1.5">—</span>
                  <span className="text-slate-300">
                    {language === 'ar' ? "اعرض نشاطك التجاري وخدماتك باحترافية." : "Showcase your business and services."}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-sm">
                <div className="p-1 rounded bg-blue-500/10 text-sky-400 shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="text-slate-200">
                  <strong className="text-white font-semibold">
                    {language === 'ar' ? "المساعدون بالذكاء الاصطناعي" : "AI Assistants"}
                  </strong>
                  <span className="text-slate-400 mx-1.5">—</span>
                  <span className="text-slate-300">
                    {language === 'ar' ? "ساعد في الرد على استفسارات وأسئلة العملاء." : "Help answer customer questions."}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-sm">
                <div className="p-1 rounded bg-blue-500/10 text-sky-400 shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-slate-200">
                  <strong className="text-white font-semibold">
                    {language === 'ar' ? "الأتمتة" : "Automation"}
                  </strong>
                  <span className="text-slate-400 mx-1.5">—</span>
                  <span className="text-slate-300">
                    {language === 'ar' ? "قلل العمل اليدوي المتكرر واختصر الوقت." : "Reduce repetitive manual work."}
                  </span>
                </div>
              </div>
            </div>

            {/* Hero buttons: Primary “Discuss Your Project” (WhatsApp) & Secondary “View Demo Websites” */}
            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  id="btn-discuss-project-hero"
                  href={whatsappGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_25px_rgba(0,102,255,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-sky-200" />
                  <span>{strings.discussProject}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </a>

                <button
                  id="btn-view-demo-websites"
                  onClick={scrollToPortfolio}
                  className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-sky-400/40 backdrop-blur-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <span>{strings.viewDemoWebsites}</span>
                  <ArrowRight className={`w-4 h-4 text-slate-400 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} group-hover:text-sky-300`} />
                </button>
              </div>

              {/* Small "Chat with us on WhatsApp" helper label beneath primary button */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1 ps-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{strings.chatWithUsOnWhatsApp}</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual (~52% desktop content width) */}
          <div className="w-full lg:w-[52%] flex items-center justify-center">
            <HeroVisualComposition />
          </div>
        </div>
      </section>

      {/* 2. FIND THE RIGHT SOLUTION (INTERACTIVE SOLUTION ADVISOR) */}
      <SolutionAdvisor />

      {/* 3. DEMO PORTFOLIO SECTION */}
      <section id="demo-portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/[0.06] scroll-mt-24 text-left">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-3">
            {strings.interactiveDemonstrations}
          </div>
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {strings.exploreWhatWeBuild}
          </h2>
          <p id="portfolio-intro" className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {strings.exploreWhatWeBuildDesc}
          </p>
        </div>

        {/* 3 Columns on desktop, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {demoProjects.map((project) => (
            <DemoPortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 4. CORE SERVICES SECTION */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/[0.06] text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2 font-bold">
              {strings.capabilitiesHeader}
            </span>
            <h2 id="home-services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              {strings.ourServices}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {strings.servicesSub}
            </p>
          </div>
          <Link
            to="/services"
            id="link-view-all-services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group shrink-0"
          >
            <span>{strings.viewAllServices}</span>
            <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </Link>
        </div>

        {/* 3 Columns on desktop, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} idPrefix="home-service" />
          ))}
        </div>
      </section>

      {/* 5. PROJECT PROCESS SECTION (Discuss → Design → Build → Launch) */}
      <section id="process-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/[0.06] text-left">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-3">
            {strings.projectLifecycle}
          </div>
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {strings.projectLifecycle}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {strings.projectLifecycleSub}
          </p>
        </div>

        {/* 4 Process Cards: Discuss → Design → Build → Launch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
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
                {language === 'ar' ? `المرحلة ${step.step}` : `Stage ${step.step}`}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HOMEPAGE FAQS SECTION */}
      <section id="faq-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/[0.06] text-left">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-3">
            {strings.commonInquiries}
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {strings.commonInquiries}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {strings.commonInquiriesSub}
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => {
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

      {/* 7. STRONG FINAL WHATSAPP CALL TO ACTION */}
      <section id="closing-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#060D1E] to-[#02070E] border border-blue-500/35 p-8 sm:p-14 md:p-16 text-center overflow-hidden shadow-[0_0_60px_rgba(0,102,255,0.18)]">
          {/* Subtle electric blue ambient aura */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/20 blur-3xl pointer-events-none rounded-full" />

          {/* Small Top Tag */}
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-sky-400 font-bold mb-4">
            {strings.directCommunication}
          </span>

          {/* Heading */}
          <h2 id="closing-headline" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {strings.readyToBuild}
          </h2>

          {/* Supporting Text */}
          <p id="closing-subtext" className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {strings.readySubtext}
          </p>

          {/* Strong WhatsApp CTA Button */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              id="btn-closing-discuss-whatsapp"
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{strings.discussOnWhatsApp}</span>
            </a>

            <button
              id="btn-closing-view-contact"
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-sky-400/40 backdrop-blur-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>{strings.viewBothLines}</span>
              <ArrowRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
