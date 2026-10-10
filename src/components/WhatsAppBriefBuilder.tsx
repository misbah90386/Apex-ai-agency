import { useState, useId } from 'react';
import { MessageCircle, Check, ArrowRight, HelpCircle } from 'lucide-react';
import { 
  WHATSAPP_CONTACTS_DATA,
  BRIEF_BUSINESS_TYPES,
  BRIEF_SERVICES_NEEDED,
  BRIEF_PROJECT_NATURES,
  buildLocalizedBriefText,
  buildLocalizedBriefUrl,
  BriefBuilderState,
  UI_STRINGS
} from '../config/translations';
import { useLanguage } from '../context/LanguageContext';

export default function WhatsAppBriefBuilder() {
  const requirementsId = useId();
  const { language, isRTL } = useLanguage();
  const strings = UI_STRINGS[language];

  // Store selections using stable IDs rather than localized strings
  const [businessTypeId, setBusinessTypeId] = useState<string>('real-estate');
  const [serviceNeededId, setServiceNeededId] = useState<string>('website');
  const [projectNatureId, setProjectNatureId] = useState<string>('new');
  const [requirements, setRequirements] = useState<string>('');
  const [selectedLine, setSelectedLine] = useState<'966582578793' | '966534182945'>('966582578793');

  const currentState: BriefBuilderState = {
    businessTypeId,
    serviceNeededId,
    projectNatureId,
    requirements,
    selectedLine,
  };

  const generatedMessage = buildLocalizedBriefText(currentState, language);
  const whatsappUrl = buildLocalizedBriefUrl(currentState, language);

  const selectedContact = selectedLine === '966582578793' 
    ? WHATSAPP_CONTACTS_DATA.line1 
    : WHATSAPP_CONTACTS_DATA.line2;

  return (
    <div 
      id="whatsapp-brief-builder"
      className="rounded-2xl bg-[#070D1A]/95 border border-blue-500/30 p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(0,102,255,0.12)] relative overflow-hidden backdrop-blur-xl text-left space-y-8"
    >
      {/* Top accent light line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-3">
          {strings.briefBuilderTitle}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          {strings.briefBuilderTitle}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {strings.briefBuilderSub}
        </p>
      </div>

      {/* 1. Business Type Selection */}
      <div className="space-y-3">
        <label className="block text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
          {strings.step1Business}
        </label>
        <div 
          role="radiogroup" 
          aria-label={strings.step1Business}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5"
        >
          {BRIEF_BUSINESS_TYPES.map((item) => {
            const isSelected = businessTypeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setBusinessTypeId(item.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left flex items-center justify-between gap-2 border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-400 text-white font-semibold ring-1 ring-blue-500/40 shadow-[0_0_15px_rgba(0,102,255,0.2)]'
                    : 'bg-black/30 border-white/[0.08] text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                <span className="truncate">{item[language]}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Service Needed */}
      <div className="space-y-3">
        <label className="block text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
          {strings.step2Service}
        </label>
        <div 
          role="radiogroup" 
          aria-label={strings.step2Service}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5"
        >
          {BRIEF_SERVICES_NEEDED.map((item) => {
            const isSelected = serviceNeededId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setServiceNeededId(item.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left flex items-center justify-between gap-2 border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-400 text-white font-semibold ring-1 ring-blue-500/40 shadow-[0_0_15px_rgba(0,102,255,0.2)]'
                    : 'bg-black/30 border-white/[0.08] text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                <span className="truncate">{item[language]}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. New Project or Upgrade */}
      <div className="space-y-3">
        <label className="block text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
          {strings.step3Stage}
        </label>
        <div 
          role="radiogroup" 
          aria-label={strings.step3Stage}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {BRIEF_PROJECT_NATURES.map((item) => {
            const isSelected = projectNatureId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setProjectNatureId(item.id)}
                className={`p-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left flex items-center justify-between gap-2 border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-400 text-white font-semibold ring-1 ring-blue-500/40 shadow-[0_0_15px_rgba(0,102,255,0.2)]'
                    : 'bg-black/30 border-white/[0.08] text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                <div>
                  <span className="block font-semibold text-white">{item[language]}</span>
                  <span className="block text-xs text-slate-400 mt-0.5">
                    {item.desc?.[language]}
                  </span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-sky-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Short Description of Requirements (Preserved across language switches) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label 
            htmlFor={requirementsId}
            className="block text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold"
          >
            {strings.step4Reqs}
          </label>
          <span className="text-[11px] text-slate-400 font-mono">
            {requirements.length}/400
          </span>
        </div>
        <textarea
          id={requirementsId}
          rows={3}
          maxLength={400}
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder={strings.step4Placeholder}
          className="w-full rounded-xl bg-black/40 border border-white/[0.1] hover:border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-y min-h-[90px]"
        />
      </div>

      {/* 5. Select WhatsApp Direct Line */}
      <div className="space-y-3">
        <label className="block text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
          {strings.step5Line}
        </label>
        <div 
          role="radiogroup" 
          aria-label={strings.step5Line}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {[WHATSAPP_CONTACTS_DATA.line1, WHATSAPP_CONTACTS_DATA.line2].map((contact) => {
            const isSelected = selectedLine === contact.rawNumber;
            return (
              <button
                key={contact.rawNumber}
                type="button"
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setSelectedLine(contact.rawNumber as '966582578793' | '966534182945')}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  isSelected
                    ? 'bg-emerald-950/30 border-emerald-500/60 text-white shadow-[0_0_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/40'
                    : 'bg-black/30 border-white/[0.08] text-slate-300 hover:border-white/20'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block font-semibold">
                    {contact.lineLabel[language]}
                  </span>
                  <span className="font-mono font-bold text-white text-sm sm:text-base bidi-ltr inline-block">
                    {contact.displayNumber}
                  </span>
                </div>
                {isSelected ? (
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                ) : (
                  <span className="w-5 h-5 rounded-full border border-white/20 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 6. Message Preview Box */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            {strings.messagePreview}
          </span>
          <span className="text-[11px] font-mono text-emerald-400 shrink-0">
            {strings.sendingTo} {selectedContact.lineLabel[language]} (<span className="bidi-ltr">{selectedContact.displayNumber}</span>)
          </span>
        </div>
        <div className="rounded-xl bg-black/60 border border-white/[0.08] p-4 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed select-all">
          {generatedMessage}
        </div>
        <p className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
          <HelpCircle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span>
            {strings.briefNotice}
          </span>
        </p>
      </div>

      {/* 7. Final Action Button */}
      <div className="pt-2">
        <a
          id="btn-continue-to-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] active:scale-[0.98] cursor-pointer"
        >
          <MessageCircle className="w-5 h-5" />
          <span>{strings.continueToWhatsApp}</span>
          <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
        </a>
      </div>
    </div>
  );
}
