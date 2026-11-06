import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { UserCheck, Compass, Target, Code, Terminal, Server } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-stone-200/80 dark:border-stone-800/80 bg-surface-100/50 dark:bg-surface-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-2">
            <span>01 / About & Specialization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-sans">
            Engineering Identity & Technical Direction
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
            A software engineer grounded in backend architectures, cloud security systems, and disciplined engineering practices.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed text-left">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-800 dark:text-brand-300 font-bold mb-1.5 flex items-center space-x-2">
                <UserCheck className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Professional Identity</span>
              </h3>
              <p>
                {PERSONAL_INFO.aboutMe.identity}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-800 dark:text-brand-300 font-bold mb-1.5 flex items-center space-x-2">
                <Compass className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Technical Interests</span>
              </h3>
              <p>
                {PERSONAL_INFO.aboutMe.interests}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-800 dark:text-brand-300 font-bold mb-1.5 flex items-center space-x-2">
                <Code className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Skills & Practical Approach</span>
              </h3>
              <p>
                {PERSONAL_INFO.aboutMe.skillsAndApproach}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-800 dark:text-brand-300 font-bold mb-1.5 flex items-center space-x-2">
                <Target className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Career Direction</span>
              </h3>
              <p>
                {PERSONAL_INFO.aboutMe.careerDirection}
              </p>
            </div>
          </div>

          {/* Right Column: Specialization Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs text-left">
              <div className="w-8 h-8 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 flex items-center justify-center mb-3">
                <Server className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                Backend Architecture & APIs
              </h4>
              <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-normal">
                Designing resilient REST APIs, asynchronous task processing pipelines, and structured relational database integrations with FastAPI, Node.js, and PostgreSQL.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs text-left">
              <div className="w-8 h-8 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 flex items-center justify-center mb-3">
                <Terminal className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                Cloud Security & Threat Telemetry
              </h4>
              <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-normal">
                Multi-cloud audit log ingestion across AWS, Azure, GCP, and OCI, deterministic risk scoring, and practical alignment with NIST CSF 2.0 and ISO 27001 standards.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs text-left">
              <div className="w-8 h-8 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 flex items-center justify-center mb-3">
                <Code className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                Enterprise Integration & Automation
              </h4>
              <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-normal">
                Hands-on enterprise internship experience at Zoho Corporation, delivering robust business automation scripts, resolving pipeline edge cases, and integrating cross-platform APIs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
