import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getGeneralWhatsAppUrl } from '../config/translations';

export default function NotFoundPage() {
  const { language, isRTL } = useLanguage();
  const whatsappUrl = getGeneralWhatsAppUrl(language);

  return (
    <div className="pt-32 pb-24 min-h-[75vh] flex items-center justify-center relative overflow-hidden bg-[#02070D]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-blue-600/[0.08] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-sky-400 uppercase tracking-widest mb-6">
          <HelpCircle className="w-3.5 h-3.5" />
          404 ERROR
        </div>

        <h1 className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight mb-4 font-mono">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>

        <p className="text-base text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
          {language === 'ar'
            ? 'عذراً، الرابط الذي تحاول الوصول إليه غير موجود أو تم نقله. يمكنك العودة إلى الصفحة الرئيسية أو التواصل معنا عبر واتساب.'
            : "The page you're looking for doesn't exist or has moved. Return to our homepage or get in touch with us on WhatsApp."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/"
            id="btn-notfound-home"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-95 cursor-pointer min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            <span>{language === 'ar' ? 'العودة للرئيسية' : 'Return Home'}</span>
            {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-notfound-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 hover:text-white font-medium text-sm transition-all active:scale-95 cursor-pointer min-h-[44px]"
          >
            {language === 'ar' ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
          </a>
        </div>
      </div>
    </div>
  );
}
