import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, ShieldCheck, Database, Wrench, Terminal, Server } from 'lucide-react';

export const Skills: React.FC = () => {
  const icons = [
    <Terminal className="w-4 h-4" />,
    <Server className="w-4 h-4" />,
    <Cpu className="w-4 h-4" />,
    <ShieldCheck className="w-4 h-4" />,
    <Database className="w-4 h-4" />,
    <Wrench className="w-4 h-4" />
  ];

  return (
    <section id="skills" className="py-20 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-2">
            <span>05 / Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-sans">
            Technical Skills & Engineering Stack
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
            Systematic competency matrix organized into balanced domains based on production implementations and enterprise internship delivery.
          </p>
        </div>

        {/* Perfectly Balanced 6-Group Grid Layout (3x2 on desktop, 2x3 on tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className="flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs hover:border-stone-300 dark:hover:border-stone-700 transition-all space-y-4"
            >
              {/* Category Header */}
              <div className="space-y-1 pb-3 border-b border-stone-100 dark:border-stone-800">
                <div className="flex items-center space-x-2 text-brand-700 dark:text-brand-400">
                  {icons[idx % icons.length]}
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 font-sans">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-normal line-clamp-2">
                  {category.description}
                </p>
              </div>

              {/* Skills List with Context (Exactly 6 items per group for perfect symmetry) */}
              <div className="space-y-2.5 flex-grow">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-2.5 rounded-lg bg-surface-50 dark:bg-stone-950/50 border border-stone-200/60 dark:border-stone-800/60 hover:bg-white dark:hover:bg-stone-950 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-stone-900 dark:text-stone-100 font-mono">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-brand-50 dark:bg-brand-950/60 text-brand-800 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60">
                        {skill.level}
                      </span>
                    </div>
                    {skill.context && (
                      <p className="text-[11px] text-stone-600 dark:text-stone-400 mt-1 leading-snug">
                        {skill.context}
                      </p>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Security & Regulatory Compliance Banner */}
        <div className="mt-10 p-6 rounded-xl bg-brand-50/50 dark:bg-brand-950/20 border border-brand-200/60 dark:border-brand-900/40 text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-800 dark:text-brand-300">
              Regulatory & Compliance Standard Alignment
            </span>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              Direct implementation experience with <strong className="font-semibold text-stone-900 dark:text-stone-100">NIST CSF 2.0</strong> (PR.AC, DE.CM), <strong className="font-semibold text-stone-900 dark:text-stone-100">CIS Controls v8</strong> (Account Governance & Network Boundaries), and <strong className="font-semibold text-stone-900 dark:text-stone-100">ISO/IEC 27001:2022</strong> (Access Control & Audit Logging).
            </p>
          </div>
          <div className="flex items-center space-x-2 shrink-0">
            <span className="px-3 py-1 rounded-md bg-white dark:bg-stone-900 text-xs font-mono font-semibold border border-brand-200 dark:border-brand-800 text-stone-800 dark:text-stone-200">
              NIST CSF 2.0
            </span>
            <span className="px-3 py-1 rounded-md bg-white dark:bg-stone-900 text-xs font-mono font-semibold border border-brand-200 dark:border-brand-800 text-stone-800 dark:text-stone-200">
              CIS Controls v8
            </span>
            <span className="px-3 py-1 rounded-md bg-white dark:bg-stone-900 text-xs font-mono font-semibold border border-brand-200 dark:border-brand-800 text-stone-800 dark:text-stone-200">
              ISO 27001
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
