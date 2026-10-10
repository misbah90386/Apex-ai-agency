import { WHATSAPP_CONTACTS_DATA, getGeneralWhatsAppUrl, UI_STRINGS } from '../config/translations';
import WhatsAppBriefBuilder from '../components/WhatsAppBriefBuilder';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { language, isRTL } = useLanguage();
  const strings = UI_STRINGS[language];

  const contacts = [
    {
      ...WHATSAPP_CONTACTS_DATA.line1,
      url: getGeneralWhatsAppUrl(language, WHATSAPP_CONTACTS_DATA.line1.rawNumber)
    },
    {
      ...WHATSAPP_CONTACTS_DATA.line2,
      url: getGeneralWhatsAppUrl(language, WHATSAPP_CONTACTS_DATA.line2.rawNumber)
    }
  ];

  return (
    <div className="min-h-[85vh] flex flex-col justify-center pt-28 pb-32 sm:pb-36 relative overflow-hidden bg-[#02070D]">
      {/* Ambient background grid and electric blue aura */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-4xl w-full mx-auto px-4 sm:px-6 my-auto space-y-12">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-6">
            {strings.directCommunication}
          </div>

          <h1 id="contact-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            {strings.contactTitle}
          </h1>

          <p id="contact-supporting-text" className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            {strings.contactSub}
          </p>
        </div>

        {/* 1. Quick Direct WhatsApp Channels (Always Available for Visitors Who Skip Questions) */}
        <div
          id="contact-whatsapp-card"
          className="rounded-2xl bg-[#070D1A]/95 border border-blue-500/30 p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(0,102,255,0.15)] relative overflow-hidden backdrop-blur-xl space-y-6 text-left"
        >
          {/* Subtle top light beam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-emerald-400 fill-current"
                  role="img"
                  aria-label="WhatsApp"
                >
                  <path d="M17.472 14.382c-.301-.15-1.781-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.18-.176.2-.351.226-.652.075-.301-.151-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.526.15-.176.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.151-.676-1.63-1.026-2.23-.275-.652-.551-.552-.751-.552-.176 0-.376-.025-.576-.025-.2 0-.526.075-.802.376-.276.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.228 3.109.15.201 2.119 3.235 5.134 4.536.718.31 1.278.495 1.714.634.721.229 1.377.197 1.895.12.578-.087 1.781-.728 2.032-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.39A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167a8.12 8.12 0 01-4.148-1.135l-.297-.176-3.08.86.824-2.997-.193-.308A8.13 8.13 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
                </svg>
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {strings.directWhatsAppChannels}
                </h2>
                <p className="text-xs text-slate-400">
                  {strings.directWhatsAppChannelsSub}
                </p>
              </div>
            </div>
          </div>

          {/* Both preserved numbers with prefilled message */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contacts.map((contact, idx) => (
              <div
                key={contact.rawNumber}
                id={`whatsapp-channel-${idx + 1}`}
                className="p-5 rounded-xl bg-black/40 border border-white/[0.08] hover:border-emerald-500/35 transition-all flex flex-col justify-between gap-4 text-left group"
              >
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1 font-semibold">
                    {contact.lineLabel[language]}
                  </span>
                  <div className="text-lg sm:text-xl font-mono font-bold text-white tracking-wider select-all bidi-ltr">
                    {contact.displayNumber}
                  </div>
                </div>

                <a
                  id={`btn-chat-whatsapp-${idx + 1}`}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] active:scale-[0.98] cursor-pointer"
                >
                  <span>{strings.chatOn} {contact.lineLabel[language]}</span>
                  <span className={`text-base leading-none ${isRTL ? 'rotate-180 inline-block' : ''}`}>→</span>
                </a>
              </div>
            ))}
          </div>

          <div className="text-[11px] font-mono text-slate-500 text-center sm:text-left">
            {strings.directPrefillNote}
          </div>
        </div>

        {/* 2. WhatsApp Project Brief Builder */}
        <WhatsAppBriefBuilder />
      </div>
    </div>
  );
}
