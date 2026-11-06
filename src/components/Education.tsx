import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle, BookOpen, ExternalLink } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-stone-200/80 dark:border-stone-800/80 bg-surface-100/50 dark:bg-surface-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-2">
            <span>06 / Academic Foundation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-sans">
            Education & Certifications
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
            Academic qualifications in Information Technology and verified professional credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          
          {/* Left Column: Formal Degree */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-6">
              
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100 dark:border-stone-800">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-md bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 flex items-center justify-center font-bold">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-sans">
                        {EDUCATION.institution}
                      </h3>
                      <p className="text-xs font-mono text-stone-500 dark:text-stone-400">
                        {EDUCATION.location}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-base font-semibold text-brand-800 dark:text-brand-300">
                      {EDUCATION.degree} in {EDUCATION.field}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400 flex items-center space-x-1 justify-end">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{EDUCATION.period}</span>
                  </div>
                </div>
              </div>

              {/* Core Coursework */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold">
                  <BookOpen className="w-3.5 h-3.5 text-brand-600" />
                  <span>Relevant Technical Coursework</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300">
                  {EDUCATION.coursework.map((course) => (
                    <div key={course} className="flex items-center space-x-2 p-2 rounded-md bg-surface-50 dark:bg-stone-950/40 border border-stone-200/50 dark:border-stone-800/50">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Certifications & Recognitions */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold">
              Certifications & Industry Credentials
            </h3>

            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-2 hover:border-stone-300 dark:hover:border-stone-700 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                    <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 font-sans">
                      {cert.title}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400 shrink-0">
                    {cert.date}
                  </span>
                </div>

                <div className="text-xs font-mono text-brand-700 dark:text-brand-400">
                  Issuer: {cert.issuer}
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                  {cert.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span>ID: <span className="text-stone-700 dark:text-stone-300">{cert.credentialId}</span></span>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-brand-700 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 font-semibold transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
