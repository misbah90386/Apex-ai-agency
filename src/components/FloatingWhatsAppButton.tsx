import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../config/translations';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingWhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    // Show button after a tiny delay for smooth non-blocking entry
    const timer = setTimeout(() => {
      setVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const whatsappUrl = getGeneralWhatsAppUrl(language);

  return (
    <aside 
      aria-label="Direct WhatsApp Contact"
      className={`fixed bottom-5 sm:bottom-6 z-40 flex items-center print:hidden ${
        isRTL ? 'left-5 sm:left-6' : 'right-5 sm:right-6'
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="btn-floating-whatsapp"
        className="group relative flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.55)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02070D] active:scale-95 cursor-pointer"
        aria-label={language === 'ar' ? "محادثة عبر واتساب (+966 58 257 8793)" : "Chat with APEX AI AGENCY on WhatsApp (+966 58 257 8793)"}
      >
        {/* Subtle ping indicator */}
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current text-white shrink-0" />

        {/* Label */}
        <span className="font-semibold tracking-wide">
          {language === 'ar' ? 'واتساب' : 'WhatsApp'}
        </span>
      </a>
    </aside>
  );
}
