import { useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, Target, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { APPROACH_STEPS, CORE_VALUES } from '../config/site';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Hero */}
      <section id="about-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-4">
          Agency Background
        </div>

        <h1 id="about-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
          About APEX
        </h1>

        <p id="about-subtitle" className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          A technology-focused agency building modern digital solutions.
        </p>
      </section>

      {/* Main Narrative */}
      <section id="about-narrative" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-2xl bg-[#090E1A] border border-white/[0.08] p-8 sm:p-12 relative">
          <div className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-5">
            <p>
              <strong className="text-white font-semibold">APEX AI AGENCY</strong> focuses on combining modern web technologies, artificial intelligence, automation, and creative digital experiences.
            </p>
            <p>
              We believe technology should solve real problems, remain understandable, and be built with purpose.
            </p>
            <p className="text-sm text-slate-400 pt-2 border-t border-white/[0.04]">
              Rather than promoting exaggerated claims or unrealistic shortcuts, we engineer practical, resilient systems centered strictly around what your business needs to execute reliably every day.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="about-approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
            Methodology
          </span>
          <h2 id="approach-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Our Approach
          </h2>
          <p className="text-slate-400 text-base">
            A disciplined engineering process designed for clarity, precision, and longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPROACH_STEPS.map((step) => (
            <div
              key={step.number}
              id={`approach-step-${step.number}`}
              className="p-6 sm:p-7 rounded-xl bg-[#090D16] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-sm font-mono text-sky-400 font-bold block mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] font-mono text-slate-500">
                PHASE {step.number}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Care About Section */}
      <section id="about-values" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
            Principles
          </span>
          <h2 id="values-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            What We Care About
          </h2>
          <p className="text-slate-400 text-base">
            The core priorities that define every project we design and engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              id={`value-card-${idx}`}
              className="p-6 rounded-xl bg-[#090E1A] border border-white/[0.08] flex items-center gap-4 hover:border-blue-500/30 transition-colors"
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

      {/* Bottom Contact Callout */}
      <section id="about-cta" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#0A1020] to-[#060912] border border-blue-500/30 shadow-[0_0_40px_rgba(0,102,255,0.15)]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to collaborate with APEX?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Tell us about your upcoming digital or AI initiatives and let's explore practical solutions.
          </p>
          <button
            id="btn-about-contact"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
