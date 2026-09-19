import { Link } from 'react-router-dom';
import { 
  Brain, 
  Mic, 
  MessageSquare, 
  Monitor, 
  Settings, 
  Box, 
  ArrowRight 
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  idPrefix?: string;
}

export default function ServiceCard({ service, idPrefix = 'service-card' }: ServiceCardProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ai-agents':
        return <Brain className="w-5 h-5 text-sky-400" />;
      case 'ai-voice-agents':
        return <Mic className="w-5 h-5 text-sky-400" />;
      case 'ai-chatbots':
        return <MessageSquare className="w-5 h-5 text-sky-400" />;
      case 'professional-websites':
        return <Monitor className="w-5 h-5 text-sky-400" />;
      case 'business-automation':
        return <Settings className="w-5 h-5 text-sky-400" />;
      case 'custom-ai-solutions':
        return <Box className="w-5 h-5 text-sky-400" />;
      default:
        return <Brain className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div
      id={`${idPrefix}-${service.id}`}
      className="group relative rounded-2xl bg-[#040914]/85 border border-blue-500/20 p-7 sm:p-8 hover:border-blue-400/50 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,102,255,0.18)] flex flex-col justify-between backdrop-blur-sm"
    >
      {/* Subtle corner hover glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-tr-2xl blur-2xl group-hover:bg-blue-500/15 transition-all duration-300 pointer-events-none" />

      <div>
        {/* Minimal Blue Icon in rounded container */}
        <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mb-6 group-hover:border-sky-400/40 group-hover:bg-blue-500/15 transition-all duration-200">
          {getIcon(service.id)}
        </div>

        {/* White Heading */}
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-sky-300 transition-colors">
          {service.title}
        </h3>

        {/* Light-gray description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {service.shortDescription}
        </p>
      </div>

      {/* Blue Learn More link */}
      <div className="pt-3">
        <Link
          to={`/services#${service.id}`}
          id={`link-learn-more-${service.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors group/link"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
