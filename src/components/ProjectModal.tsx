import React from 'react';
import { Project } from '../data/portfolioData';
import { X, Github, ShieldAlert, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden z-10 text-left my-8">
        
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-start justify-between bg-surface-50/70 dark:bg-stone-950/40">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1">
              <span>{project.category.replace('-', ' ')}</span>
              <span>•</span>
              <span>{project.date}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 font-sans">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
              {project.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Key Stats Bar */}
          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800/80">
              {project.stats.map((s, i) => (
                <div key={i}>
                  <div className="text-[11px] font-mono text-stone-500 uppercase">{s.label}</div>
                  <div className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-0.5">{s.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/40 space-y-2">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-red-800 dark:text-red-400 font-mono uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/40 space-y-2">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-400 font-mono uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Implemented Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Architecture Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-stone-900 dark:text-stone-100 font-bold">
              <Layers className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>Architectural Breakdown</span>
            </div>
            <div className="space-y-2">
              {project.architecture.map((layer, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-lg bg-surface-50 dark:bg-stone-950/50 border border-stone-200/70 dark:border-stone-800/70 flex items-start space-x-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300"
                >
                  <span className="font-mono text-brand-700 dark:text-brand-400 font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <span className="leading-relaxed">{layer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold">
              Key Capabilities & Contributions:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Technology Stack:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-mono border border-stone-200 dark:border-stone-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-surface-50/70 dark:bg-stone-950/40 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-stone-500">
            Source repository on GitHub
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-medium"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-md bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 text-xs font-medium"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Repository</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
