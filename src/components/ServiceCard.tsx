import { Link } from 'react-router-dom';
import { 
  Bot, 
  Mic, 
  MessageSquareText, 
  Layout, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  MessageCircle,
  Wrench,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import { ServiceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS, getServiceWhatsAppUrlWithLang } from '../config/translations';

interface ServiceCardProps {
  service: ServiceItem;
  idPrefix?: string;
}

export default function ServiceCard({ service, idPrefix = 'service-card' }: ServiceCardProps) {
  const { language, isRTL } = useLanguage();
  const strings = UI_STRINGS[language];

  const getIcon = (id: string) => {
    switch (id) {
      case 'ai-agents':
        return <Bot className="w-5 h-5 text-sky-400" />;
      case 'ai-voice-agents':
        return <Mic className="w-5 h-5 text-sky-400" />;
      case 'ai-chatbots':
        return <MessageSquareText className="w-5 h-5 text-sky-400" />;
      case 'professional-websites':
        return <Layout className="w-5 h-5 text-sky-400" />;
      case 'business-automation':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'custom-ai-solutions':
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      default:
        return <Bot className="w-5 h-5 text-sky-400" />;
    }
  };

  const whatsappUrl = service.whatsappUrl || getServiceWhatsAppUrlWithLang(service.title, language);

  return (
    <div
      id={`${idPrefix}-${service.id}`}
      className="group relative rounded-2xl bg-[#040914]/85 border border-blue-500/20 p-6 sm:p-7 hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,102,255,0.18)] flex flex-col justify-between backdrop-blur-sm text-left"
    >
      {/* Subtle corner hover glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-tr-2xl blur-2xl group-hover:bg-blue-500/15 transition-all duration-300 pointer-events-none" />

      <div>
        {/* Minimal Blue Icon container */}
        <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mb-5 group-hover:border-sky-400/40 group-hover:bg-blue-500/15 transition-all duration-200">
          {getIcon(service.id)}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-sky-300 transition-colors">
          {service.title}
        </h3>

        {/* 1. What We Build */}
        <div className="mb-3 space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
            <Wrench className="w-3 h-3 text-sky-400 shrink-0" />
            <span>{strings.whatWeBuildLabel}</span>
          </span>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {service.whatWeBuild}
          </p>
        </div>

        {/* 2. How It Helps The Business */}
        <div className="mb-4 space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
            <TrendingUp className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>{strings.howItHelpsLabel}</span>
          </span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {service.whatItHelps}
          </p>
        </div>

        {/* 3. Practical Example callout box */}
        <div className="rounded-xl bg-black/45 border border-white/[0.06] p-3 text-xs mb-5">
          <span className="text-sky-300 font-medium block mb-1 font-mono uppercase text-[10px] tracking-wider flex items-center gap-1.5">
            <Lightbulb className="w-3 h-3 text-sky-400 shrink-0" />
            <span>{strings.practicalExampleLabel}</span>
          </span>
          <p className="text-slate-300 leading-relaxed">
            {service.practicalExample}
          </p>
        </div>
      </div>

      {/* Card Footer: Discuss This Service on WhatsApp & Learn More link */}
      <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between gap-3">
        {/* Discuss This Service WhatsApp link with service-specific prefilled message */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id={`link-discuss-service-${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors py-1.5 px-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/25 cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>{strings.discussService}</span>
        </a>

        {/* Inclusions and details link */}
        <Link
          to={`/services#${service.id}`}
          id={`link-service-details-${service.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-sky-300 transition-colors py-1"
        >
          <span>{strings.viewFullServiceDetails}</span>
          <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
        </Link>
      </div>
    </div>
  );
}
