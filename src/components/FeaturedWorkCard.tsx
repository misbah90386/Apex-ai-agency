import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectPreviewGraphic from './ProjectPreviewGraphic';

interface FeaturedWorkCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  graphicType: 'assistant' | 'website' | 'automation' | 'support';
}

export default function FeaturedWorkCard({
  id,
  name,
  category,
  description,
  graphicType,
}: FeaturedWorkCardProps) {
  return (
    <div
      id={`featured-work-card-${id}`}
      className="group rounded-2xl bg-[#040914]/85 border border-blue-500/20 p-5 sm:p-6 hover:border-blue-400/50 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,102,255,0.18)] flex flex-col justify-between backdrop-blur-sm"
    >
      <div>
        {/* Futuristic Project Preview Image */}
        <div className="mb-5 overflow-hidden rounded-xl">
          <ProjectPreviewGraphic type={graphicType} />
        </div>

        {/* Project Name */}
        <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
          {name}
        </h3>

        {/* Category in Electric Blue */}
        <span className="text-xs font-mono font-medium text-sky-400 block mb-3">
          {category}
        </span>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {description}
        </p>
      </div>

      {/* View Project Link */}
      <div className="pt-2 border-t border-white/[0.04]">
        <Link
          to={`/our-work#${id}`}
          id={`link-view-project-${id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors group/link"
        >
          <span>View Project</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
