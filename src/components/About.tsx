import React from 'react';
import { ShieldCheck, Server, Code2, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-stone-200/80 dark:border-stone-800/80 bg-surface-100/50 dark:bg-surface-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-2">
            <span>01 / Technical Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-sans">
            Engineering Background & Philosophy
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
            Systematic software development centered on verifiable reliability, multi-cloud threat observability, and defensive systems design.
          </p>
        </div>

        {/* Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed text-left">
            <p>
              I am a Software Engineering undergraduate at <strong className="text-stone-900 dark:text-stone-100 font-semibold">Rajalakshmi Engineering College</strong> (Chennai, India) with practical experience building distributed backend services, enterprise API integrations, and cloud security threat detection systems.
            </p>
            <p>
              During my engineering internship at <strong className="text-stone-900 dark:text-stone-100 font-semibold">Zoho Corporation</strong>, I worked within an active seven-member engineering group to design and debug mission-critical CRM automation modules. I developed custom business logic across Zoho CRM and Zoho Books, integrated RESTful APIs for bidirectional data synchronization, and authored standardized debugging playbooks to root-cause workflow edge cases.
            </p>
            <p>
              My technical work centers on <strong className="text-stone-900 dark:text-stone-100 font-semibold">cloud security engineering and applied machine learning</strong>. I designed and implemented an automated multi-cloud security risk evaluation platform that extracts and normalizes audit telemetry across <strong className="text-stone-900 dark:text-stone-100 font-semibold">AWS, Azure, GCP, and OCI</strong> into a canonical schema. The platform scores threats using an ensemble Random Forest model combined with a deterministic heuristic engine, directly correlating security events to <strong className="text-stone-900 dark:text-stone-100 font-semibold">NIST CSF 2.0, CIS Controls v8, and ISO/IEC 27001:2022</strong>.
            </p>

            {/* Core Architectural Tenets */}
            <div className="pt-4 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-stone-900 dark:text-stone-100 font-bold">
                Engineering Tenets:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 dark:text-stone-100 block">Deterministic Scoring</span>
                    <span className="text-stone-600 dark:text-stone-400">Eliminating ambiguity in anomaly triage through reproducible weighted algorithms.</span>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 dark:text-stone-100 block">Defensive Boundaries</span>
                    <span className="text-stone-600 dark:text-stone-400">Strict Pydantic schema validation, least privilege RBAC, and zero-trust auth checks.</span>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 dark:text-stone-100 block">Verifiable Test Suites</span>
                    <span className="text-stone-600 dark:text-stone-400">Comprehensive Pytest suites (31 unit tests) validating edge cases before merge.</span>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 dark:text-stone-100 block">Regulatory Mapping</span>
                    <span className="text-stone-600 dark:text-stone-400">Translating raw telemetry directly into NIST CSF and ISO 27001 audit evidence.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs text-left">
              <div className="w-8 h-8 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                Multi-Cloud Telemetry & Governance
              </h4>
              <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-normal">
                Hands-on normalization of heterogeneous audit logs across AWS CloudTrail/GuardDuty, Azure Activity Logs, GCP Audit, and OCI Audit into structured canonical schemas.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs text-left">
              <div className="w-8 h-8 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 flex items-center justify-center mb-3">
                <Server className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                Enterprise Backend Engineering
              </h4>
              <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-normal">
                Shipped production CRM automation and REST integrations at Zoho Corporation. Proficient in FastAPI, asynchronous request handling, PostgreSQL, and connection pooling.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs text-left">
              <div className="w-8 h-8 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 flex items-center justify-center mb-3">
                <Code2 className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                Applied Machine Learning for Security
              </h4>
              <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-normal">
                Implementation of Random Forest classifiers for anomaly prioritization, risk scoring algorithms, and SHAP explainability to convert ML outputs into actionable security triage.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
