import { useNavigate } from 'react-router-dom';
import { 
  Compass, 
  Lightbulb, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Rocket 
} from 'lucide-react';
import { BELIEFS_DATA, ROADMAP_DATA } from '../config/site';

export default function MissionVisionPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Hero */}
      <section id="mission-vision-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-4">
          Foundational Direction
        </div>

        <h1 id="mission-vision-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
          Our Mission & Vision
        </h1>

        <p id="mission-vision-subtitle" className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Building useful technology today while creating a bigger vision for tomorrow.
        </p>
      </section>

      {/* Mission and Vision Grid */}
      <section id="mission-vision-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#090E1A] border border-white/[0.08] relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sky-400 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5">
                Our Mission
              </h2>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  Our mission is to create useful, modern, and accessible digital technology that helps businesses solve real challenges.
                </p>
                <p>
                  We aim to simplify complex processes, create practical AI solutions, develop intelligent systems, and make advanced technology easier to use.
                </p>
                <p className="p-4 rounded-xl bg-black/40 border border-white/[0.04] text-sm text-sky-200">
                  We focus on understanding real requirements rather than building technology simply because it is possible.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.04] text-xs font-mono text-slate-500">
              MISSION FOCUS: PRACTICAL APPLICATION
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#090E1A] border border-blue-500/30 relative flex flex-col justify-between shadow-[0_0_30px_rgba(0,102,255,0.08)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-300 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5">
                Our Vision
              </h2>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Our vision is to build APEX into a technology company known for powerful digital systems, intelligent AI solutions, automation platforms, and advanced technology products.
              </p>

              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-3">
                  Over time, our vision includes exploring:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                  <li className="flex items-center gap-2 p-2 rounded bg-white/[0.02]">
                    <span className="text-blue-400">▹</span> Advanced AI systems
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded bg-white/[0.02]">
                    <span className="text-blue-400">▹</span> Intelligent AI agents
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded bg-white/[0.02]">
                    <span className="text-blue-400">▹</span> Automation platforms
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded bg-white/[0.02]">
                    <span className="text-blue-400">▹</span> Scalable digital systems
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded bg-white/[0.02]">
                    <span className="text-blue-400">▹</span> New technology products
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded bg-white/[0.02]">
                    <span className="text-blue-400">▹</span> Research and development
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.04] text-xs font-mono text-slate-500">
              VISION FOCUS: LONG-TERM CAPABILITY EXPLORATION
            </div>
          </div>
        </div>
      </section>

      {/* Our Beliefs Section */}
      <section id="mission-beliefs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
            Core Tenets
          </span>
          <h2 id="beliefs-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Our Beliefs
          </h2>
          <p className="text-slate-400 text-base">
            The foundational standards that guide our architectural choices and client engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BELIEFS_DATA.map((belief, idx) => (
            <div
              key={idx}
              id={`belief-card-${idx}`}
              className="p-7 rounded-xl bg-[#090D16] border border-white/[0.08] hover:border-blue-500/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-sky-400 flex items-center justify-center font-mono text-xs font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {belief.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {belief.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APEX Roadmap Visual Timeline */}
      <section id="apex-roadmap" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-3">
            Our Long-Term Direction
          </div>
          <h2 id="roadmap-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            APEX ROADMAP
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A transparent architectural horizon distinguishing active services from upcoming research and future ambitions.
          </p>
        </div>

        {/* 3 Phases Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {ROADMAP_DATA.map((col, idx) => {
            const isToday = col.phase === 'TODAY';
            const isNext = col.phase === 'NEXT';
            return (
              <div
                key={col.phase}
                id={`roadmap-column-${col.phase.toLowerCase()}`}
                className={`p-7 rounded-2xl border flex flex-col justify-between ${
                  isToday
                    ? 'bg-[#0A1020] border-blue-500/50 shadow-[0_0_30px_rgba(0,102,255,0.15)]'
                    : 'bg-[#070B14] border-white/[0.08]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-3 py-1 rounded text-xs font-mono font-bold tracking-wider uppercase ${
                        isToday
                          ? 'bg-blue-600 text-white'
                          : isNext
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}
                    >
                      {col.phase}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      PHASE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {col.title}
                  </h3>

                  <p className="text-xs text-slate-400 mb-6">
                    {col.subtitle}
                  </p>

                  <ul className="space-y-2.5">
                    {col.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className={`p-3 rounded-lg text-sm flex items-center gap-2.5 ${
                          isToday
                            ? 'bg-blue-950/30 border border-blue-500/20 text-slate-200'
                            : 'bg-white/[0.02] border border-white/[0.04] text-slate-400'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isToday ? 'bg-sky-400' : 'bg-slate-600'
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                  {isToday
                    ? 'STATUS: ACTIVE & DELIVERABLE'
                    : isNext
                    ? 'STATUS: PLANNED ARCHITECTURE'
                    : 'STATUS: LONG-TERM RESEARCH DIRECTION'}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Statement Card */}
      <section id="mission-final-statement" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-14 rounded-2xl bg-gradient-to-b from-[#0B1224] to-[#070B14] border border-blue-500/30 relative shadow-[0_0_50px_rgba(0,102,255,0.15)]">
          <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-sky-400 flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-6 h-6" />
          </div>

          <h2 id="final-mission-statement" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Think Bigger. Build Smarter. Keep Moving Forward.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Every breakthrough begins with clear specifications and deliberate execution. Let's discuss your next milestone.
          </p>

          <button
            id="btn-mission-discuss"
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
