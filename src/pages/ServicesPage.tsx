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
  HelpCircle,
  Layers,
  PhoneCall
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
    <div className="pt-28 pb-20 relative overflow-hidden bg-[#02070D]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/[0.06] blur-[140px] pointer-events-none rounded-full" />

      {/* Hero Section */}
      <section id="services-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-4">
          Core Capabilities
        </div>

        <h1 id="services-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
          Our Services
        </h1>

        <p id="services-subtitle" className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Clear, practical technology solutions planned and built around your business requirements.
        </p>
      </section>

      {/* Services Detailed List */}
      <section id="services-breakdown" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="scroll-mt-28 rounded-2xl bg-[#070D1A] border border-white/[0.08] p-6 sm:p-10 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
          >
            {/* Top right index indicator */}
            <div className="absolute top-6 right-6 font-mono text-xs text-slate-500 font-semibold">
              0{index + 1} / 06
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: What it helps do & Practical example */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {service.title}
                    </h2>
                    <span className="text-xs font-mono text-sky-400 tracking-wider uppercase">
                      Tailored Business Solution
                    </span>
                  </div>
                </div>

                {/* What it helps a business do */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                    What It Helps a Business Do
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {service.whatItHelps}
                  </p>
                </div>

                {/* One Practical Example */}
                <div className="rounded-xl bg-black/40 border border-blue-500/20 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                    <HelpCircle className="w-4 h-4" />
                    <span>Practical Example</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.practicalExample}
                  </p>
                </div>

                {/* Clear Next Step */}
                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-blue-600/[0.08] border border-blue-500/25">
                    <div>
                      <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-bold block mb-0.5">
                        Next Step
                      </span>
                      <p className="text-xs text-slate-300">
                        {service.nextStep}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate('/contact')}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shrink-0 shadow-[0_0_15px_rgba(0,102,255,0.35)] cursor-pointer"
                    >
                      <span>Discuss Requirements</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: What can be included depending on agreed scope */}
              <div className="lg:col-span-5 bg-black/50 rounded-xl border border-white/[0.06] p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-sky-400" />
                  <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
                    What Can Be Included
                  </h3>
                </div>
                <p className="text-[11px] text-slate-400 mb-5 font-mono">
                  Depending on your agreed project scope:
                </p>

                <ul className="space-y-3">
                  {service.scopeInclusions.map((inclusion, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs sm:text-sm text-slate-200 leading-snug"
                    >
                      <div className="w-5 h-5 rounded-md bg-blue-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-normal">{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Closing section */}
      <section id="services-closing-cta" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#060D1E] to-[#02070E] border border-blue-500/35 p-8 sm:p-12 md:p-14 text-center overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.18)]">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-sky-400 font-bold mb-3">
            NEXT STEPS
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            READY TO BUILD YOUR NEXT BUSINESS SOLUTION?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us what you need. Let’s define the right next step.
          </p>

          <button
            id="btn-services-discuss-project"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_25px_rgba(0,102,255,0.45)] cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
