import { Globe, Bot, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HeroVisualComposition() {
  const { language, isRTL } = useLanguage();

  const isAr = language === 'ar';

  return (
    <div 
      className="relative w-full max-w-[480px] lg:max-w-[500px] mx-auto select-none"
      role="region"
      aria-label={isAr ? "معاينة توضيحية لخدمات APEX" : "Illustrative preview of APEX services"}
    >
      {/* Background Soft Aura & Edge Glows */}
      <div 
        className="absolute -top-6 -left-6 w-60 h-60 bg-blue-600/15 rounded-full blur-[70px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-6 -right-6 w-60 h-60 bg-sky-500/15 rounded-full blur-[70px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative space-y-3.5">
        {/* ============================================================ */}
        {/* 1. CLEAN WEBSITE PREVIEW WINDOW                              */}
        {/* ============================================================ */}
        <div className="rounded-2xl bg-[#060D1E]/95 border border-blue-500/25 shadow-[0_12px_36px_rgba(0,5,20,0.7),0_0_24px_rgba(0,102,255,0.12)] overflow-hidden backdrop-blur-md">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#030814]/90 border-b border-white/[0.08]">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-white px-2">
              <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="truncate">{isAr ? "موقع إلكتروني احترافي" : "Professional Website"}</span>
            </div>

            <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-500/15 border border-blue-400/30 text-[9px] font-mono text-sky-300 uppercase tracking-wider font-semibold shrink-0">
              {isAr ? "نموذج موقع" : "Website Preview"}
            </span>
          </div>

          {/* Browser Inner Page Content */}
          <div className="p-4 bg-gradient-to-b from-[#070F24]/90 to-[#040814] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-[0_0_10px_rgba(0,102,255,0.5)]">
                  A
                </div>
                <span className="text-xs font-bold text-white tracking-wide">
                  {isAr ? "شركة المستقبل" : "YourBusiness.com"}
                </span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {isAr ? "متصل ومتاح 24/7" : "Live & Online 24/7"}
              </span>
            </div>

            {/* Mock Hero Banner in Website Preview */}
            <div className="p-3 rounded-xl bg-[#0B152E]/80 border border-white/[0.06]">
              <div className="text-[11px] font-bold text-white mb-1">
                {isAr ? "خدمات متميزة وحلول متكاملة" : "Premium Services & Solutions"}
              </div>
              <div className="text-[9px] text-slate-300 leading-relaxed mb-2.5">
                {isAr ? "واجهة حديثة تبرز أعمالك وتسهل طلب الخدمة بنقرة واحدة." : "Modern interface showcasing offerings and making bookings frictionless."}
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-blue-600 text-[9px] font-semibold text-white shadow-xs">
                  {isAr ? "تواصل واتساب" : "Contact via WhatsApp"}
                </span>
                <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] text-slate-300">
                  {isAr ? "خدماتنا" : "Our Services"}
                </span>
              </div>
            </div>

            {/* 3 Showcase feature cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-black/40 border border-white/[0.05] text-center">
                <span className="text-[10px] font-semibold text-white block truncate">
                  {isAr ? "تصميم متجاوب" : "Responsive UI"}
                </span>
                <span className="text-[8px] text-slate-400 block mt-0.5 truncate">
                  {isAr ? "لكافة الشاشات" : "Mobile & PC"}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-white/[0.05] text-center">
                <span className="text-[10px] font-semibold text-white block truncate">
                  {isAr ? "سرعة فائقة" : "Fast Speed"}
                </span>
                <span className="text-[8px] text-slate-400 block mt-0.5 truncate">
                  {isAr ? "تحميل فوري" : "Instant load"}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-white/[0.05] text-center">
                <span className="text-[10px] font-semibold text-white block truncate">
                  {isAr ? "ربط مباشر" : "Direct Leads"}
                </span>
                <span className="text-[8px] text-slate-400 block mt-0.5 truncate">
                  {isAr ? "إلى واتساب" : "To WhatsApp"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. CLEARLY LABELLED EXAMPLE CUSTOMER CONVERSATION            */}
        {/* ============================================================ */}
        <div className="rounded-2xl bg-[#060D1E]/95 border border-sky-400/30 p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.7),0_0_24px_rgba(56,189,248,0.15)] backdrop-blur-md">
          {/* Header clearly labelled as Example Customer Conversation */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-blue-600/30 border border-blue-400/30 text-sky-300 flex items-center justify-center">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block leading-tight">
                  {isAr ? "مساعد الذكاء الاصطناعي للرد على العملاء" : "AI Customer Enquiry Assistant"}
                </span>
                <span className="text-[9px] font-mono text-sky-400 block">
                  {isAr ? "محادثة عميل توضيحية" : "Example customer conversation"}
                </span>
              </div>
            </div>
            <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1 shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {isAr ? "رد فوري" : "Instant Reply"}
            </span>
          </div>

          {/* Clean sample customer enquiry and instant response */}
          <div className="space-y-2 text-xs">
            {/* Customer Message */}
            <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
              <div className="bg-[#0C1938] border border-blue-500/25 text-slate-200 rounded-xl px-3 py-2 max-w-[85%] text-[11px] leading-relaxed">
                <span className="text-[9px] font-mono text-slate-400 block mb-0.5">
                  {isAr ? "العميل:" : "Customer:"}
                </span>
                {isAr 
                  ? "مرحباً، أود معرفة مواعيد العمل لديكم وكيفية حجز موعد؟" 
                  : "Hi, what are your opening hours and how can I book an appointment?"}
              </div>
            </div>

            {/* AI Assistant Instant Reply */}
            <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <div className="bg-[#081226] border border-sky-400/30 text-sky-100 rounded-xl px-3 py-2 max-w-[90%] shadow-[0_2px_12px_rgba(0,102,255,0.15)]">
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 font-semibold mb-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{isAr ? "المساعد الذكي (رد آلي فوري):" : "AI Assistant (Instant response):"}</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-200">
                  {isAr 
                    ? "أهلاً بك! نعمل يومياً من 9 صباحاً حتى 10 مساءً. يمكنك حجز موعدك فوراً باختيار الخدمة وسيقوم فريقنا بتأكيده." 
                    : "Welcome! We are open daily 9 AM – 10 PM. You can book directly here or we can transfer you to WhatsApp."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
