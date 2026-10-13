import React from 'react';
import { ArrowUpRight, Code2, ExternalLink, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl hover:shadow-cyan-500/5">
      <div>
        {/* Preview Image / Designed Container */}
        <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-slate-950 text-slate-400">
              <Code2 className="w-8 h-8 text-cyan-400 mb-2 opacity-60" />
              <span className="text-xs font-mono text-slate-300 text-center font-medium">
                {project.shortTitle}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 font-mono">
                {project.stack.slice(0, 3).join(' · ')}
              </span>
            </div>
          )}

          {/* Category Overlay */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-slate-950/80 text-cyan-300 backdrop-blur-md border border-slate-800/80">
              {project.category[0]}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Unboxed Metadata Line */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono mb-2">
            <span>{project.stack[0]}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category.join(' / ')}</span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug mb-2.5">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack List */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="px-6 py-4 bg-slate-50/50 dark:bg-[#0c121e]/40 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 cursor-pointer"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            title="Open Live Application"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};
