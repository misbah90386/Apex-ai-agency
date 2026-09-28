import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import IllustrativePreview from './IllustrativePreview';
import { DemoProjectItem } from '../types';

interface DemoPortfolioCardProps {
  project: DemoProjectItem;
}

export default function DemoPortfolioCard({ project }: DemoPortfolioCardProps) {
  return (
    <div
      id={`demo-card-${project.id}`}
      className="group relative rounded-2xl bg-[#040914]/85 border border-blue-500/20 p-5 sm:p-6 hover:border-blue-400/50 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,102,255,0.18)] flex flex-col justify-between backdrop-blur-sm"
    >
      {/* Subtle top hover glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-blue-600/5 rounded-tr-2xl blur-2xl group-hover:bg-blue-500/15 transition-all duration-300 pointer-events-none" />

      <div>
        {/* Illustrative Preview Graphic (clearly labelled "Illustrative Preview") */}
        <div className="mb-5 overflow-hidden rounded-xl">
          <IllustrativePreview type={project.previewType} />
        </div>

        {/* Visible "Demo Project" Label */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/25 text-[11px] font-mono font-medium text-sky-400 uppercase tracking-wider mb-3">
          <span>{project.label}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-sky-300 transition-colors">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {project.description}
        </p>
      </div>

      {/* Card Actions: View Live Demo (new tab) + Discuss a Similar Project */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* View Live Demo button opening URL in new tab */}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          id={`btn-live-demo-${project.id}`}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-[0_0_15px_rgba(0,102,255,0.35)] hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-[0.98] cursor-pointer"
        >
          <span>View Live Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {/* Discuss a Similar Project link to Contact page */}
        <Link
          to="/contact"
          id={`link-discuss-${project.id}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors group/link py-1"
        >
          <span>Discuss a Similar Project</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
