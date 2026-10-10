import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Bot, 
  Mic, 
  MessageSquareText, 
  Layout, 
  Cpu, 
  Sparkles, 
  Check, 
  ArrowRight,
  HelpCircle,
  Layers,
  MessageCircle,
  Wrench,
  TrendingUp,
  Info,
  ClipboardList,
  Package
} from 'lucide-react';
import { getServicesData, getServiceWhatsAppUrlWithLang, UI_STRINGS } from '../config/translations';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesPage() {
  const location = useLocation();
  const { language, isRTL } = useLanguage();

  const services = getServicesData(language);
  const strings = UI_STRINGS[language];

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-7 h-7 text-sky-400" />;
      case 'Mic':
        return <Mic className="w-7 h-7 text-sky-400" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-7 h-7 text-sky-400" />;
      case 'Layout':
        return <Layout className="w-7 h-7 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-7 h-7 text-sky-400" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-sky-400" />;
      default:
        return <Bot className="w-7 h-7 text-sky-400" />;
    }
  };

  return (
    <div className="pt-28 pb-20 relative overflow-hidden bg-[#02070D] text-left">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/[0.06] blur-[140px] pointer-events-none rounded-full" />

      {/* Hero Section */}
      <section id="services-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-4">
          {strings.capabilitiesHeader}
        </div>

        <h1 id="services-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
          {strings.ourServices}
        </h1>

        <p id="services-subtitle" className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {strings.servicesSub}
        </p>
      </section>

      {/* Services Detailed List */}
      <section id="services-breakdown" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {services.map((service, index) => {
          const serviceWhatsAppUrl = service.whatsappUrl || getServiceWhatsAppUrlWithLang(service.title, language);

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 rounded-2xl bg-[#070D1A] border border-white/[0.08] p-6 sm:p-10 hover:border-blue-500/35 transition-all duration-300 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Top index indicator */}
              <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} font-mono text-xs text-slate-500 font-semibold`}>
                0{index + 1} / 06
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column (7 cols): Header, What It Includes, Practical Business Use Case */}
                <div className="lg:col-span-7 space-y-7">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-sm text-sky-300/80 font-mono mt-0.5">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* 1. What We Build & How It Helps */}
                  <div className="space-y-4 pt-1">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>{strings.whatWeBuildLabel}</span>
                      </span>
                      <p className="text-sm text-slate-200 leading-relaxed font-normal">
                        {service.whatWeBuild}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{strings.howItHelpsLabel}</span>
                      </span>
                      <p className="text-sm text-slate-200 leading-relaxed font-normal">
                        {service.whatItHelps}
                      </p>
                    </div>
                  </div>

                  {/* 2. What It Includes Section */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2">
                      <Package className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{strings.whatItIncludesLabel}</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.whatItIncludes.map((item, idx) => (
                        <div 
                          key={idx}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-300"
                        >
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Practical Business Use Case Section */}
                  <div className="p-5 rounded-xl bg-blue-950/25 border border-blue-500/30 space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{strings.practicalUseCaseLabel}</span>
                    </span>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {service.practicalUseCase}
                    </p>
                  </div>
                </div>

                {/* Right Column (5 cols): What We Need, Technical Scope, Action */}
                <div className="lg:col-span-5 space-y-6">
                  {/* 4. What Information We Need to Get Started */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/[0.08] space-y-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{strings.whatWeNeedLabel}</span>
                    </span>
                    <ul className="space-y-3">
                      {service.whatWeNeedToGetStarted.map((need, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 text-sky-400 font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 5. Third-Party & Technical Scope Note (Realistic Scope & Subscriptions) */}
                  {service.technicalRequirementsNote && (
                    <div className="p-4 rounded-xl bg-amber-950/15 border border-amber-500/25 space-y-1.5 text-xs text-amber-200/90 leading-relaxed">
                      <span className="font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
                        <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{strings.technicalNoteLabel}</span>
                      </span>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {service.technicalRequirementsNote}
                      </p>
                    </div>
                  )}

                  {/* 6. Core Scope Checklist */}
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      {strings.scopeInclusionsLabel}
                    </span>
                    <ul className="space-y-2">
                      {service.scopeInclusions.map((inclusion, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 7. Action Button: Discuss This Service on WhatsApp */}
                  <div className="pt-2">
                    <a
                      id={`btn-service-discuss-whatsapp-${service.id}`}
                      href={serviceWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.98] cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{strings.discussService}</span>
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
