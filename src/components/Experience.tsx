import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-2">
            <span>02 / Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-sans">
            Professional Experience
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
            Verified enterprise engineering and internship track record.
          </p>
        </div>

        {/* Experience List / Editorial Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div 
              key={exp.id}
              className="p-6 sm:p-8 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs text-left transition-all hover:border-stone-300 dark:hover:border-stone-700"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-stone-100 dark:border-stone-800">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-md bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 flex items-center justify-center font-bold font-mono text-xs">
                      ZC
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-sans">
                        {exp.company}
                      </h3>
                      <p className="text-xs font-mono text-stone-500 dark:text-stone-400">
                        {exp.department}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-base font-semibold text-brand-800 dark:text-brand-300">
                      {exp.role}
                    </span>
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Period & Location Meta */}
                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-1.5 text-xs font-mono text-stone-500 dark:text-stone-400">
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="mt-6 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Key Technical Contributions:
                </h4>
                <ul className="space-y-2.5 text-sm text-stone-700 dark:text-stone-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 dark:bg-brand-400 shrink-0 mt-2"></span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Highlights Callout */}
              <div className="mt-6 p-4 rounded-lg bg-surface-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-700 dark:text-brand-400 font-semibold mb-2 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Outcomes</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-stone-600 dark:text-stone-300">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="text-stone-400 dark:text-stone-500 font-mono">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-stone-400 dark:text-stone-500 mr-2">
                  Stack:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-mono border border-stone-200/60 dark:border-stone-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
