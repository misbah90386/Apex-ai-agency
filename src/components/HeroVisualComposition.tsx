import { useState, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Sparkles,
  Inbox,
  Zap,
  Bell
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
      className="relative w-full max-w-[620px] lg:max-w-none mx-auto select-none"
      role="region"
      aria-label="APEX Digital Services Composition"
    >
      {/* Background Soft Aura & Edge Glows - integrated seamlessly into the dark canvas */}
      <div 
        className="absolute -top-12 -left-8 w-72 h-72 bg-blue-600/15 rounded-full blur-[90px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-10 -right-8 w-80 h-80 bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Multi-Layer Composition Container */}
      <div className="relative pt-6 pb-4 sm:pt-8 sm:pb-6">
        
        {/* ============================================================ */}
        {/* 1. LARGE ELEGANT WEBSITE INTERFACE PREVIEW (Core Platform)   */}
        {/* ============================================================ */}
        <div 
          className="relative z-10 w-full rounded-2xl bg-[#060D1E]/95 border border-blue-500/30 shadow-[0_20px_60px_rgba(0,5,20,0.85),0_0_35px_rgba(0,102,255,0.15)] overflow-hidden backdrop-blur-xl transition-all duration-300"
        >
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#030814]/90 border-b border-white/[0.08]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600/70" />
            </div>

            {/* URL Search Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#081329] border border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-slate-300 max-w-[200px] sm:max-w-xs w-full justify-center">
              <Globe className="w-3 h-3 text-sky-400 shrink-0" />
              <span className="truncate">apex-solutions.web/enterprise</span>
            </div>

            {/* Mandatory Concept Preview Label */}
            <div className="shrink-0">
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-500/15 border border-blue-400/30 text-[9px] sm:text-[10px] font-mono text-sky-300 uppercase tracking-wider font-semibold">
                Concept Preview
              </span>
            </div>
          </div>

          {/* Browser Inner Page Content */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 bg-gradient-to-b from-[#070F24]/90 to-[#040814]">
            {/* Inner Header Navigation Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center font-bold text-white text-[11px] shadow-[0_0_10px_rgba(0,102,255,0.5)]">
                  A
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide">
                  APEX CORP
                </span>
              </div>

              {/* Sub-nav links (purely conceptual presentation) */}
              <div className="hidden sm:flex items-center gap-3 text-[11px] font-medium text-slate-400">
                <span className="text-white">Capabilities</span>
                <span>Workflows</span>
                <span>Inquiry</span>
              </div>

              <div className="px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-semibold shadow-[0_0_12px_rgba(0,102,255,0.4)]">
                Launch Portal
              </div>
            </div>

            {/* Inner Hero Section */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-1">
              <div className="sm:col-span-8 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/25 text-[10px] font-mono text-sky-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Production Website Architecture</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  Scalable Digital Platforms Built For Everyday Operations
                </div>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  Engineered with semantic structure, dark mode aesthetics, and zero-latency performance across all devices.
                </p>
              </div>

              {/* Graphical Metric Representation (Realistic, Concept only) */}
              <div className="sm:col-span-4 flex sm:justify-end">
                <div className="w-full sm:w-auto p-2.5 rounded-xl bg-black/40 border border-white/[0.06] text-left">
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">
                    System State
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Operational</span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 mt-1 block">
                    Fast Response
                  </span>
                </div>
              </div>
            </div>

            {/* Inner 3-Card Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
              <div className="p-2.5 rounded-xl bg-[#0B152E]/70 border border-white/[0.05] space-y-1">
                <div className="w-5 h-5 rounded-md bg-blue-500/15 flex items-center justify-center text-sky-400">
                  <Globe className="w-3 h-3" />
                </div>
                <div className="text-[11px] font-semibold text-white truncate">
                  Web Systems
                </div>
                <div className="text-[9px] text-slate-400 line-clamp-1">
                  Responsive UI
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0B152E]/70 border border-white/[0.05] space-y-1">
                <div className="w-5 h-5 rounded-md bg-sky-500/15 flex items-center justify-center text-sky-300">
                  <Bot className="w-3 h-3" />
                </div>
                <div className="text-[11px] font-semibold text-white truncate">
                  AI Assistants
                </div>
                <div className="text-[9px] text-slate-400 line-clamp-1">
                  Enquiry handling
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0B152E]/70 border border-white/[0.05] space-y-1">
                <div className="w-5 h-5 rounded-md bg-indigo-500/15 flex items-center justify-center text-indigo-300">
                  <Zap className="w-3 h-3" />
                </div>
                <div className="text-[11px] font-semibold text-white truncate">
                  Automations
                </div>
                <div className="text-[9px] text-slate-400 line-clamp-1">
                  Connected tools
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. CONNECTED WORKFLOW PANEL (Automated Pipeline Demonstration)*/}
        {/* ============================================================ */}
        <div 
          className="relative z-20 mt-3 sm:-mt-6 sm:ml-auto sm:mr-4 max-w-full sm:max-w-md rounded-xl bg-[#081226]/95 border border-sky-400/35 p-3 sm:p-3.5 shadow-[0_16px_45px_rgba(0,0,0,0.85),0_0_25px_rgba(56,189,248,0.18)] backdrop-blur-xl transition-all duration-300"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] mb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                Automated Workflow
              </span>
            </div>
            <span className="text-[9px] font-mono text-sky-300 bg-sky-500/15 px-1.5 py-0.5 rounded border border-sky-500/25">
              Concept Preview
            </span>
          </div>

          {/* 3 Step Workflow Chain */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 items-center">
            {/* Step 1: Intake */}
            <div className="p-2 rounded-lg bg-black/40 border border-white/[0.06] text-center space-y-1">
              <div className="w-6 h-6 mx-auto rounded-md bg-blue-500/20 text-sky-400 flex items-center justify-center">
                <Inbox className="w-3 h-3" />
              </div>
              <div className="text-[10px] font-bold text-white leading-tight">
                1. New Enquiry
              </div>
              <div className="text-[8px] text-slate-400">
                Form Intake
              </div>
            </div>

            {/* Step 2: AI Processing */}
            <div className="relative p-2 rounded-lg bg-blue-950/40 border border-blue-400/40 text-center space-y-1 shadow-[0_0_15px_rgba(0,102,255,0.25)]">
              {/* Connecting arrows indicator */}
              <div className="w-6 h-6 mx-auto rounded-md bg-sky-500/20 text-sky-300 flex items-center justify-center">
                <Sparkles className="w-3 h-3" />
              </div>
              <div className="text-[10px] font-bold text-sky-200 leading-tight">
                2. AI Routing
              </div>
              <div className="text-[8px] text-sky-300/80">
                Parsed & Tagged
              </div>
            </div>

            {/* Step 3: Team Sync */}
            <div className="p-2 rounded-lg bg-black/40 border border-white/[0.06] text-center space-y-1">
              <div className="w-6 h-6 mx-auto rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Bell className="w-3 h-3" />
              </div>
              <div className="text-[10px] font-bold text-white leading-tight">
                3. Dispatched
              </div>
              <div className="text-[8px] text-slate-400">
                Team Notified
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. AI CONVERSATION PANEL (Intelligent Chatbot / Assistant)   */}
        {/* ============================================================ */}
        <div 
          className="relative z-30 mt-3 sm:-mt-8 sm:mr-auto sm:ml-4 max-w-full sm:max-w-md rounded-xl bg-[#050C1B]/95 border border-blue-500/35 p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,102,255,0.2)] backdrop-blur-xl transition-all duration-300"
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] mb-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-400/40 text-sky-300 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#050C1B]" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5">
                  <span>APEX Assistant</span>
                </div>
                <span className="text-[9px] font-mono text-slate-400">
                  Business AI Agent · Online
                </span>
              </div>
            </div>

            <span className="text-[9px] font-mono text-sky-300 bg-blue-500/15 px-2 py-0.5 rounded border border-blue-500/25 uppercase tracking-wider font-semibold">
              Concept Preview
            </span>
          </div>

          {/* Chat Exchange */}
          <div className="space-y-2.5 text-xs">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-[#0C1938] border border-blue-500/20 text-slate-200 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%] text-[11px] leading-relaxed">
                Can you review today's incoming website enquiries?
              </div>
            </div>

            {/* AI Assistant response */}
            <div className="flex justify-start">
              <div className="bg-gradient-to-br from-[#0B1736] to-[#060E21] border border-sky-400/30 text-sky-100 rounded-2xl rounded-tl-sm p-3 max-w-[90%] shadow-[0_4px_15px_rgba(0,102,255,0.15)] space-y-1.5">
                <div className="flex items-center gap-1 text-[10px] font-mono text-sky-300 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>3 Enquiries Processed & Qualified</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Client requirements extracted, project scope summarized, and notification sent to your WhatsApp line.
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-[9px] font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Action checklist ready for team review</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
