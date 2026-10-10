import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  Wrench, 
  Sliders, 
  CheckCircle2,
  MessageCircle 
} from 'lucide-react';
import { getProcessSteps, getCoreValues, getGeneralWhatsAppUrl, UI_STRINGS } from '../config/translations';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const navigate = useNavigate();
  const { language, isRTL } = useLanguage();

  const processSteps = getProcessSteps(language);
  const coreValues = getCoreValues(language);
  const strings = UI_STRINGS[language];
  const whatsappUrl = getGeneralWhatsAppUrl(language);

  return (
    <div className="pt-28 pb-20 relative overflow-hidden bg-[#02070D] text-left">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-600/[0.06] blur-[140px] pointer-events-none rounded-full" />

      {/* Hero */}
      <section id="about-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-4">
          {strings.aboutAgencyApproach}
        </div>

        <h1 id="about-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
          {strings.aboutTitle}
        </h1>

        <p id="about-subtitle" className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {strings.aboutSubtitle}
        </p>
      </section>

      {/* Main Narrative: Clear Communication, Practical Solutions, Tailored Requirements */}
      <section id="about-narrative" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-2xl bg-[#070D1A] border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <div className="max-w-3xl mx-auto space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-white font-semibold">APEX AI AGENCY</strong>{' '}
              {language === 'ar'
                ? "تطوّر مواقع إلكترونية احترافية، ومساعدين بالذكاء الاصطناعي، وروبوتات دردشة، ومسارات عمل مؤتمتة مصممة لمساعدة الشركات على تقديم خدماتها، واستقبال الاستفسارات، وتقليص المهام الروتينية."
                : "builds professional websites, AI assistants, chatbots, and automated workflows designed to help businesses present their services, handle enquiries, and reduce repetitive work."}
            </p>
            <p>
              {language === 'ar'
                ? "نؤمن بأن القيمة الحقيقية للتقنية تكمن في حل التحديات التشغيلية الملموسة دون تعقيد إضافي. بدلاً من المصطلحات التقنية المبهمة والوعود غير الواقعية، نركز على فهم ما تحتاجه أعمالك فعلياً لتعمل بأعلى كفاءة وسلاسة."
                : "We believe technology is most valuable when it solves concrete operational challenges without adding unnecessary friction. Rather than relying on confusing technical buzzwords or making unsupported promises, we focus on understanding what your business actually requires to run efficiently."}
            </p>
          </div>

          {/* 3 Pillars of Our Approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/[0.08]">
            <div className="p-5 rounded-xl bg-black/40 border border-white/[0.04]">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sky-400 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {strings.aboutPillar1Title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {strings.aboutPillar1Desc}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/[0.04]">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {strings.aboutPillar2Title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {strings.aboutPillar2Desc}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/[0.04]">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {strings.aboutPillar3Title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {strings.aboutPillar3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process: A Clear Path From Idea to Launch */}
      <section id="about-approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2 font-bold">
            {strings.projectLifecycle}
          </span>
          <h2 id="approach-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {strings.projectLifecycle}
          </h2>
          <p className="text-slate-400 text-base">
            {strings.projectLifecycleSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              id={`about-process-${step.step}`}
              className="p-6 rounded-2xl bg-[#070D1A] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 mb-3 block">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section id="about-values" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-2xl bg-[#070D1A] border border-white/[0.08] p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {language === 'ar' ? "قيمنا ومبادئنا الأساسية" : "Our Core Values"}
            </h2>
            <p className="text-sm text-slate-400">
              {language === 'ar' 
                ? "المبادئ التي تحكم كل مشروع نقوم بتطويره وشراكته مع عملائنا."
                : "The guiding principles behind every project and collaboration."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-black/40 border border-white/[0.04] flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-sm font-medium text-slate-200">{val}</span>
              </div>
            ))}
          </div>
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
