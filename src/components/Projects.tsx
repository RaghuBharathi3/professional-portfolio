import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  Github, 
  Layers, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => {
        if (selectedCategory === 'cloud') return p.category === 'cloud-security';
        if (selectedCategory === 'fullstack') return p.category === 'fullstack';
        return true;
      });

  return (
    <section id="projects" className="py-20 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-2">
              <span>03 / Engineering Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-sans">
              Featured Technical Projects
            </h2>
            <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
              Production architectures, cloud security telemetry pipelines, and resilient distributed applications.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-stone-100 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700/60 self-start md:self-end">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-2xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('cloud')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                selectedCategory === 'cloud'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-2xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              Cloud Security & ML
            </button>
            <button
              onClick={() => setSelectedCategory('fullstack')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                selectedCategory === 'fullstack'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-2xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              Full-Stack & Systems
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 text-left">
          {filteredProjects.map((project) => {
            const isFlagship = project.id === 'multi-cloud-threat-eval';

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl bg-white dark:bg-stone-900 border transition-all duration-300 ${
                  isFlagship 
                    ? 'border-brand-300/80 dark:border-brand-700/60 shadow-md ring-1 ring-brand-500/10' 
                    : 'border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 shadow-2xs'
                }`}
              >
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Card Header & Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {isFlagship && (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-brand-100 dark:bg-brand-950/80 text-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                            <Sparkles className="w-3 h-3 text-brand-600 dark:text-brand-400" />
                            <span>Flagship Architecture</span>
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                          {project.category.replace('-', ' ')}
                        </span>
                        <span className="text-xs font-mono text-stone-400 dark:text-stone-500">
                          {project.date}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 font-sans tracking-tight pt-1">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-brand-700 dark:text-brand-400 font-mono">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Action Controls */}
                    <div className="flex items-center space-x-2 shrink-0">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-medium border border-stone-200 dark:border-stone-700 transition-colors"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Architecture Deep Dive</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 text-xs font-medium transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Overview Text */}
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Technical Highlights / Metrics Pill Grid */}
                  {project.stats && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-surface-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800/80">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="text-left">
                          <div className="text-[10px] font-mono uppercase text-stone-500 tracking-wider">
                            {stat.label}
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 font-mono mt-0.5">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Problem / Solution Snapshot */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-lg bg-stone-50/70 dark:bg-stone-950/40 border border-stone-200/60 dark:border-stone-800/60">
                      <span className="font-mono font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider block mb-1">
                        Challenge
                      </span>
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-stone-50/70 dark:bg-stone-950/40 border border-stone-200/60 dark:border-stone-800/60">
                      <span className="font-mono font-bold text-brand-800 dark:text-brand-300 uppercase tracking-wider block mb-1">
                        Solution & Contribution
                      </span>
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Stack Chips & Footnote */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 dark:border-stone-800">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono text-brand-700 dark:text-brand-400 hover:underline flex items-center space-x-1"
                    >
                      <span>Explore specs & diagrams</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep Dive Specs */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
