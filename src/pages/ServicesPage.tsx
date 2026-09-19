import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Bot, 
  Mic, 
  MessageSquareText, 
  Layout, 
  Cpu, 
  Sparkles, 
  Check, 
  ArrowRight,
  Workflow
} from 'lucide-react';
import { SERVICES_DATA } from '../config/site';

export default function ServicesPage() {
  const navigate = useNavigate();
  const location = useLocation();

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
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Hero Section */}
      <section id="services-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-4">
          Core Capabilities
        </div>

        <h1 id="services-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
          Our Services
        </h1>

        <p id="services-subtitle" className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Modern digital and AI solutions designed around real requirements.
        </p>
      </section>

      {/* Services Detailed List */}
      <section id="services-breakdown" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="rounded-2xl bg-[#090E1A] border border-white/[0.08] p-8 sm:p-10 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top right indicator */}
            <div className="absolute top-6 right-6 font-mono text-xs text-slate-600">
              0{index + 1} / 06
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                  {getServiceIcon(service.iconName)}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h2>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                {/* Additional Technical Rigor */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Capabilities Checklist */}
              <div className="lg:col-span-6 bg-black/40 rounded-xl border border-white/[0.04] p-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-2">
                  <Workflow className="w-4 h-4" />
                  <span>Key Inclusions & System Features</span>
                </h3>

                <ul className="space-y-3">
                  {service.capabilities.map((capability, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-sm text-slate-200"
                    >
                      <div className="w-5 h-5 rounded-md bg-blue-500/20 text-sky-400 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-medium">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* End of Page Custom Callout */}
      <section id="custom-solutions-callout" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-2xl bg-gradient-to-b from-[#0A1020] to-[#070B14] border border-blue-500/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_0_40px_rgba(0,102,255,0.12)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-4">
            Bespoke Engineering
          </div>

          <h2 id="custom-callout-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Need Something Custom?
          </h2>

          <p id="custom-callout-text" className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us what you're trying to build. We'll explore the requirements and the technology needed.
          </p>

          <button
            id="btn-services-start-project"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_25px_rgba(0,102,255,0.4)] cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
