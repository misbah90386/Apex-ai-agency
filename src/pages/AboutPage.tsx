import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  Wrench, 
  Sliders, 
  CheckCircle2 
} from 'lucide-react';
import { PROCESS_STEPS, CORE_VALUES } from '../config/site';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 relative overflow-hidden bg-[#02070D]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-600/[0.06] blur-[140px] pointer-events-none rounded-full" />

      {/* Hero */}
      <section id="about-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-4">
          Agency Approach
        </div>

        <h1 id="about-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
          About APEX
        </h1>

        <p id="about-subtitle" className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Building practical digital solutions through clear communication and work tailored to business requirements.
        </p>
      </section>

      {/* Main Narrative: Clear Communication, Practical Solutions, Tailored Requirements */}
      <section id="about-narrative" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-2xl bg-[#070D1A] border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <div className="max-w-3xl mx-auto space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-white font-semibold">APEX AI AGENCY</strong> builds professional websites, AI assistants, chatbots, and automated workflows designed to help businesses present their services, handle enquiries, and reduce repetitive work.
            </p>
            <p>
              We believe technology is most valuable when it solves concrete operational challenges without adding unnecessary friction. Rather than relying on confusing technical buzzwords or making unsupported promises, we focus on understanding what your business actually requires to run efficiently.
            </p>
          </div>

          {/* 3 Pillars of Our Approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/[0.08]">
            <div className="p-5 rounded-xl bg-black/40 border border-white/[0.04]">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sky-400 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Clear Communication</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We speak in plain language, keep discussions transparent, and define deliverables and expectations together before work starts.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/[0.04]">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Practical Solutions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We build tools that work reliably for everyday tasks—connecting your apps, presenting your offerings, and automating repetitive data entry.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/[0.04]">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Tailored Requirements</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every business has different operational realities. We adapt the architecture and scope to your existing tools and team workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process: A Clear Path From Idea to Launch */}
      <section id="about-approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2 font-bold">
            Project Lifecycle
          </span>
          <h2 id="approach-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            A Clear Path From Idea to Launch
          </h2>
          <p className="text-slate-400 text-base">
            How we partner with you to turn requirements into working software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              id={`about-process-${step.step}`}
              className="p-6 sm:p-7 rounded-xl bg-[#070D18] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sky-400 font-mono font-bold text-sm flex items-center justify-center mb-5">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] font-mono text-slate-500">
                STAGE {step.step}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Principles */}
      <section id="about-values" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2 font-bold">
            Standards
          </span>
          <h2 id="values-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            What We Care About
          </h2>
          <p className="text-slate-400 text-base">
            The foundational priorities guiding every project we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              id={`value-card-${idx}`}
              className="p-6 rounded-xl bg-[#070D18] border border-white/[0.08] flex items-center gap-4 hover:border-blue-500/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-base font-semibold text-white">
                {val}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section id="about-closing-cta" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#060D1E] to-[#02070E] border border-blue-500/35 text-center shadow-[0_0_50px_rgba(0,102,255,0.18)]">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-sky-400 font-bold mb-3">
            NEXT STEPS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            READY TO BUILD YOUR NEXT BUSINESS SOLUTION?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us what you need. Let’s define the right next step.
          </p>
          <button
            id="btn-about-discuss-project"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all cursor-pointer shadow-[0_0_25px_rgba(0,102,255,0.45)]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
