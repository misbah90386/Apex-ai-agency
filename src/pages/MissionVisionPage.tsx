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
  Rocket,
  MessageCircle 
} from 'lucide-react';
import { getBeliefsData, getRoadmapData, getGeneralWhatsAppUrl, UI_STRINGS } from '../config/translations';
import { useLanguage } from '../context/LanguageContext';

export default function MissionVisionPage() {
  const navigate = useNavigate();
  const { language, isRTL } = useLanguage();

  const beliefs = getBeliefsData(language);
  const roadmap = getRoadmapData(language);
  const strings = UI_STRINGS[language];
  const whatsappUrl = getGeneralWhatsAppUrl(language);

  return (
    <div className="pt-28 pb-20 relative overflow-hidden bg-[#02070D] text-left">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Hero */}
      <section id="mission-vision-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-4">
          {strings.missionVisionTag}
        </div>

        <h1 id="mission-vision-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
          {strings.missionVisionTitle}
        </h1>

        <p id="mission-vision-subtitle" className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {strings.missionVisionSubtitle}
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
                {strings.ourMission}
              </h2>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  {language === 'ar'
                    ? "رسالتنا هي تطوير تقنيات رقمية عملية ومفيدة وحديثة تساعد الشركات على حل تحدياتها اليومية بنجاح."
                    : "Our mission is to create useful, modern, and accessible digital technology that helps businesses solve real challenges."}
                </p>
                <p>
                  {language === 'ar'
                    ? "نسعى لتبسيط العمليات المعقدة، وبناء حلول ذكاء اصطناعي عملية، وتطوير أنظمة ذكية تجعل استخدام التقنيات المتقدمة أكثر سهولة وفاعلية."
                    : "We aim to simplify complex processes, create practical AI solutions, develop intelligent systems, and make advanced technology easier to use."}
                </p>
                <p className="p-4 rounded-xl bg-black/40 border border-white/[0.04] text-sm text-sky-200">
                  {language === 'ar'
                    ? "نركز على فهم المتطلبات الحقيقية للأعمال بدلاً من بناء تقنيات لمجرد إظهار القدرة التقنية."
                    : "We focus on understanding real requirements rather than building technology simply because it is possible."}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.04] text-xs font-mono text-slate-500">
              {language === 'ar' ? "التركيز: التطبيق العملي المفيد" : "MISSION FOCUS: PRACTICAL APPLICATION"}
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#090E1A] border border-blue-500/30 relative flex flex-col justify-between shadow-[0_0_30px_rgba(0,102,255,0.08)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-300 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5">
                {strings.ourVision}
              </h2>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  {language === 'ar'
                    ? "رؤيتنا هي أن نكون الشريك التقني الموثوق للشركات الطامحة لبناء بنية رقمية حديثة تدمج بسلاسة بين المواقع والذكاء الاصطناعي والأتمتة."
                    : "Our vision is to be the trusted technology partner for forward-looking businesses, establishing modern digital foundations that seamlessly integrate websites, AI, and automation."}
                </p>
                <p>
                  {language === 'ar'
                    ? "نطمح لتطوير منظومة تقنية متكاملة ترفع كفاءة الأعمال، وتحرر طاقات فرق العمل من المهام المكررة للتركيز على النمو والإبداع."
                    : "We aspire to develop integrated technological architectures that maximize business efficiency, freeing team capacity from repetitive operations to focus on strategic growth."}
                </p>
                <p className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 text-sm text-sky-200">
                  {language === 'ar'
                    ? "الجمع بين البساطة في الاستخدام والعمق في المعمارية البرمجية."
                    : "Combining effortless simplicity of use with rigorous architectural depth."}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.04] text-xs font-mono text-slate-500">
              {language === 'ar' ? "الرؤية: بنية رقمية مستدامة" : "VISION FOCUS: SCALABLE ARCHITECTURES"}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Beliefs */}
      <section id="mission-vision-beliefs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2 font-bold">
            {strings.ourBeliefs}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {strings.ourBeliefs}
          </h2>
          <p className="text-slate-400 text-base">
            {strings.ourBeliefsSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((b, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#070D1A] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-sky-400 font-bold mb-3 block">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section id="mission-vision-roadmap" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2 font-bold">
            {strings.roadmapTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {strings.roadmapTitle}
          </h2>
          <p className="text-slate-400 text-base">
            {strings.roadmapSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadmap.map((phase) => (
            <div 
              key={phase.phase}
              className="p-6 sm:p-8 rounded-2xl bg-[#070D1A] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-mono font-bold text-sky-400 mb-4">
                  {phase.phase}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  {phase.subtitle}
                </p>
                <ul className="space-y-2.5">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="rounded-2xl bg-gradient-to-b from-[#060D1E] to-[#02070E] border border-blue-500/35 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            {strings.readyToBuild}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl mx-auto">
            {strings.readySubtext}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-[0_0_25px_rgba(16,185,129,0.45)] cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{strings.discussOnWhatsApp}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
