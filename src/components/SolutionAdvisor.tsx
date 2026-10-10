import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layout, 
  MessageSquareText, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  Check, 
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { getSolutionOptions, UI_STRINGS } from '../config/translations';
import { SolutionOptionId, SolutionOption } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getCustomWhatsAppUrl } from '../config/site';

export default function SolutionAdvisor() {
  const { language, isRTL } = useLanguage();
  const [selectedId, setSelectedId] = useState<SolutionOptionId>('website');

  const options = getSolutionOptions(language);
  const strings = UI_STRINGS[language];

  const selectedOption: SolutionOption = 
    options.find(opt => opt.id === selectedId) || options[0];

  const getOptionIcon = (iconName: string, isSelected: boolean) => {
    const className = `w-5 h-5 shrink-0 transition-colors ${
      isSelected ? 'text-sky-300' : 'text-slate-400 group-hover:text-sky-400'
    }`;
    switch (iconName) {
      case 'Layout':
        return <Layout className={className} />;
      case 'MessageSquareText':
        return <MessageSquareText className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      default:
        return <HelpCircle className={className} />;
    }
  };

  const whatsappUrl = getCustomWhatsAppUrl(selectedOption.whatsappPrefill);

  return (
    <section 
      id="find-right-solution" 
      aria-labelledby="solution-advisor-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/[0.06] scroll-mt-24 text-left"
    >
      <div className="max-w-3xl mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-3">
          {strings.interactiveDemonstrations}
        </div>
        <h2 
          id="solution-advisor-heading" 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
        >
          {strings.findRightSolution}
        </h2>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {strings.findRightSolutionSub}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: 4 Selectable Choices (Accessible Radiogroup) */}
        <div 
          role="radiogroup" 
          aria-label={strings.selectYourGoal}
          className="lg:col-span-5 space-y-3"
        >
          <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
            {strings.selectYourGoal}
          </span>

          {options.map((option) => {
            const isSelected = selectedId === option.id;
            return (
              <button
                key={option.id}
                id={`btn-solution-choice-${option.id}`}
                type="button"
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setSelectedId(option.id)}
                className={`group w-full p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 border focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isSelected
                    ? 'bg-[#0A1329] border-blue-500/60 shadow-[0_0_30px_rgba(0,102,255,0.22)] ring-1 ring-blue-500/50'
                    : 'bg-[#060B16] border-white/[0.08] hover:border-blue-500/30 hover:bg-[#070D1B]'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 transition-colors ${
                    isSelected 
                      ? 'bg-blue-600/30 border-blue-400/50 text-sky-300' 
                      : 'bg-white/[0.03] border-white/10 text-slate-400 group-hover:border-sky-500/30'
                  }`}>
                    {getOptionIcon(option.iconName, isSelected)}
                  </div>
                  <div className="min-w-0">
                    <span className={`block text-sm sm:text-base font-semibold leading-snug transition-colors ${
                      isSelected ? 'text-white font-bold' : 'text-slate-200 group-hover:text-white'
                    }`}>
                      {option.label}
                    </span>
                    <span className="block text-xs text-slate-400 truncate mt-0.5">
                      {option.tagline}
                    </span>
                  </div>
                </div>

                {/* Visible Selection State Indicator */}
                <div className="shrink-0 flex items-center justify-center">
                  <span 
                    aria-hidden="true"
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected
                        ? 'border-sky-400 bg-sky-500 text-[#02070D]'
                        : 'border-white/20 group-hover:border-slate-400'
                    }`}
                  >
                    {isSelected && <span className="w-2 h-2 rounded-full bg-slate-950" />}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Tailored Recommendation Box */}
        <div className="lg:col-span-7">
          <div 
            id={`solution-recommendation-panel-${selectedOption.id}`}
            className="rounded-2xl bg-gradient-to-b from-[#091124] to-[#050A14] border border-blue-500/35 p-6 sm:p-8 md:p-9 shadow-[0_0_40px_rgba(0,102,255,0.12)] relative overflow-hidden transition-all duration-300"
          >
            {/* Ambient top light beam */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-mono font-medium text-sky-400 tracking-wider uppercase">
                {strings.recommendedSolution}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {strings.ruleMatched}
              </span>
            </div>

            {/* Recommended Service Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {selectedOption.recommendedServiceTitle}
            </h3>

            {/* Short Practical Explanation */}
            <p className="text-base text-slate-200 leading-relaxed mb-6">
              {selectedOption.practicalExplanation}
            </p>

            {/* Key Deliverable Highlights */}
            <div className="rounded-xl bg-black/40 border border-white/[0.06] p-4 sm:p-5 mb-6 space-y-2.5">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold block mb-1">
                {strings.whatThisDelivers}
              </span>
              <ul className="space-y-2">
                {selectedOption.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Paired Service Suggestion (if applicable) */}
            {selectedOption.pairedService && (
              <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-slate-300 mb-6 flex items-start gap-2.5">
                <span className="font-mono text-sky-400 font-bold uppercase shrink-0">
                  {strings.optionalExtension}
                </span>
                <span>
                  {strings.pairsWellWith} <strong className="text-white">{selectedOption.pairedService.title}</strong> — {selectedOption.pairedService.reason}
                </span>
              </div>
            )}

            {/* Action Buttons: “Discuss This Solution” (WhatsApp) & View Service Inclusions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                id="btn-solution-whatsapp-discuss"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{strings.discussSolution}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </a>

              <Link
                to={`/services#${selectedOption.recommendedServiceId}`}
                id="link-solution-view-service-details"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all"
              >
                <span>{strings.viewFullServiceDetails}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
