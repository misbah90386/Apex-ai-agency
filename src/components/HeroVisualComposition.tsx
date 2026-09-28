import { useState, useEffect } from 'react';
import { 
  Bot, 
  ArrowRight, 
  Globe, 
  Sparkles,
  Inbox,
  Bell,
  CheckCircle2
} from 'lucide-react';

export default function HeroVisualComposition() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div 
      className="relative w-full max-w-[480px] lg:max-w-[510px] mx-auto select-none"
      role="region"
      aria-label="APEX Digital Services Composition"
    >
      {/* Background Soft Aura & Edge Glows */}
      <div 
        className="absolute -top-6 -left-6 w-60 h-60 bg-blue-600/12 rounded-full blur-[70px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-6 -right-6 w-64 h-64 bg-sky-500/12 rounded-full blur-[70px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Multi-Layer Composition with zero obscuring overlaps */}
      <div className="relative space-y-3">
        
        {/* ============================================================ */}
        {/* 1. PROFESSIONAL WEBSITES PREVIEW                             */}
        {/* ============================================================ */}
        <div 
          className="rounded-xl bg-[#060D1E]/95 border border-blue-500/25 shadow-[0_12px_36px_rgba(0,5,20,0.7),0_0_24px_rgba(0,102,255,0.1)] overflow-hidden backdrop-blur-md"
        >
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#030814]/90 border-b border-white/[0.08]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-600/70" />
              <span className="w-2 h-2 rounded-full bg-slate-600/70" />
              <span className="w-2 h-2 rounded-full bg-slate-600/70" />
            </div>

            {/* Short Label */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
              <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Professional Websites</span>
            </div>

            {/* Clearly readable Concept Preview Label */}
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-500/15 border border-blue-400/30 text-[9px] font-mono text-sky-300 uppercase tracking-wider font-semibold">
              Concept Preview
            </span>
          </div>

          {/* Browser Inner Page Content */}
          <div className="p-3 sm:p-4 bg-gradient-to-b from-[#070F24]/90 to-[#040814] space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-[10px] shadow-[0_0_8px_rgba(0,102,255,0.4)]">
                  A
                </div>
                <span className="text-xs font-bold text-white tracking-wide">
                  APEX DEMO
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">
                Designed for responsive performance
              </span>
            </div>

            {/* Clean 3-Service Preview Cards */}
            <div className="grid grid-cols-3 gap-2 pt-0.5">
              <div className="p-2 rounded-lg bg-[#0B152E]/70 border border-white/[0.05] text-center">
                <span className="text-[11px] font-semibold text-white block">Modern UI</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Clean Design</span>
              </div>
              <div className="p-2 rounded-lg bg-[#0B152E]/70 border border-white/[0.05] text-center">
                <span className="text-[11px] font-semibold text-white block">AI Assistant</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Enquiry Flow</span>
              </div>
              <div className="p-2 rounded-lg bg-[#0B152E]/70 border border-white/[0.05] text-center">
                <span className="text-[11px] font-semibold text-white block">Automations</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Connected Apps</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. CONNECTED WORKFLOWS PANEL                                 */}
        {/* ============================================================ */}
        <div 
          className="rounded-xl bg-[#060D1E]/95 border border-sky-400/30 p-3 sm:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(56,189,248,0.12)] backdrop-blur-md"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] mb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-xs font-bold text-white">
                Connected Workflows
              </span>
            </div>
            <span className="text-[9px] font-mono text-sky-300">
              Automated Pipeline
            </span>
          </div>

          {/* 3 Step Sequence with connecting arrows - 100% visible & unobscured */}
          <div className="flex items-center justify-between gap-1.5 sm:gap-2">
            {/* Step 1: Intake */}
            <div className="flex-1 p-2 rounded-lg bg-black/40 border border-white/[0.06] text-center">
              <div className="w-5 h-5 mx-auto rounded bg-blue-500/15 text-sky-400 flex items-center justify-center mb-1">
                <Inbox className="w-3 h-3" />
              </div>
              <div className="text-[10px] font-bold text-white leading-tight">
                1. Intake
              </div>
              <div className="text-[8px] text-slate-400 mt-0.5">
                New Enquiry
              </div>
            </div>

            <ArrowRight className="w-3.5 h-3.5 text-sky-400/60 shrink-0" />

            {/* Step 2: AI Routing */}
            <div className="flex-1 p-2 rounded-lg bg-blue-950/40 border border-blue-400/30 text-center shadow-[0_0_12px_rgba(0,102,255,0.2)]">
              <div className="w-5 h-5 mx-auto rounded bg-sky-500/20 text-sky-300 flex items-center justify-center mb-1">
                <Sparkles className="w-3 h-3" />
              </div>
              <div className="text-[10px] font-bold text-sky-200 leading-tight">
                2. AI Routing
              </div>
              <div className="text-[8px] text-sky-300/80 mt-0.5">
                Organised
              </div>
            </div>

            <ArrowRight className="w-3.5 h-3.5 text-sky-400/60 shrink-0" />

            {/* Step 3: Team Alert */}
            <div className="flex-1 p-2 rounded-lg bg-black/40 border border-white/[0.06] text-center">
              <div className="w-5 h-5 mx-auto rounded bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-1">
                <Bell className="w-3 h-3" />
              </div>
              <div className="text-[10px] font-bold text-white leading-tight">
                3. Team Alert
              </div>
              <div className="text-[8px] text-slate-400 mt-0.5">
                WhatsApp / Email
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. AI ASSISTANCE PANEL                                       */}
        {/* ============================================================ */}
        <div 
          className="rounded-xl bg-[#060D1E]/95 border border-blue-500/30 p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.7),0_0_20px_rgba(0,102,255,0.15)] backdrop-blur-md"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] mb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-600/30 border border-blue-400/30 text-sky-300 flex items-center justify-center">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-white">
                AI Assistance
              </span>
            </div>
            <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Active
            </span>
          </div>

          {/* Brief, Clean Sample Conversation */}
          <div className="space-y-2 text-xs">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-[#0C1938] border border-blue-500/20 text-slate-200 rounded-xl rounded-tr-xs px-2.5 py-1.5 max-w-[85%] text-[11px] leading-snug">
                Can you summarise our new enquiries?
              </div>
            </div>

            {/* AI Assistant response */}
            <div className="flex justify-start">
              <div className="bg-[#081226] border border-sky-400/30 text-sky-100 rounded-xl rounded-tl-xs px-2.5 py-1.5 max-w-[90%] shadow-[0_2px_10px_rgba(0,102,255,0.1)]">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>2 enquiries logged and organized for review.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
