import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Linkedin, Github, Copy, Check, ArrowUpRight, Mail, Phone, MapPin, FileText } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-2">
            <span>07 / Contact & Coordination</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-sans">
            Get in Touch
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
            Available for software engineering roles, cloud security teams, and technical interviews.
          </p>
        </div>

        {/* Balanced 4-Card Contact Grid (2x2 on desktop/tablet, 1-col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Email Card */}
          <div className="flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs hover:border-stone-300 dark:hover:border-stone-700 transition-all space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-brand-700 dark:text-brand-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Direct Email
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors flex items-center space-x-1"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold font-mono text-stone-900 dark:text-stone-100 hover:text-brand-700 dark:hover:text-brand-400 transition-colors block truncate pt-1"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
              Primary contact for technical recruiters and hiring managers. Direct inbox monitored daily.
            </p>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs hover:border-stone-300 dark:hover:border-stone-700 transition-all space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-brand-700 dark:text-brand-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Mobile / WhatsApp
                  </span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors flex items-center space-x-1"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-base sm:text-lg font-bold font-mono text-stone-900 dark:text-stone-100 hover:text-brand-700 dark:hover:text-brand-400 transition-colors block pt-1"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
              Available Monday – Friday in India Standard Time (IST / UTC +5:30) for phone screenings.
            </p>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs hover:border-stone-300 dark:hover:border-stone-700 transition-all space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-[#0A66C2]">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    LinkedIn
                  </span>
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-stone-900 dark:text-stone-100 hover:text-brand-700 dark:hover:text-brand-400 transition-colors block pt-1"
              >
                in/raghu-bharathi-983837323
              </a>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
              Connect on LinkedIn for professional network recommendations, background, and career updates.
            </p>
          </div>

          {/* GitHub Profile Card */}
          <div className="flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs hover:border-stone-300 dark:hover:border-stone-700 transition-all space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-stone-900 dark:text-stone-100">
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    GitHub Repositories
                  </span>
                </div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold font-mono text-stone-900 dark:text-stone-100 hover:text-brand-700 dark:hover:text-brand-400 transition-colors block pt-1"
              >
                github.com/RaghuBharathi3
              </a>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
              Review public source repositories, multi-cloud schemas, commit histories, and automated test suites.
            </p>
          </div>

        </div>

        {/* Availability & Location Callout Bar */}
        <div className="mt-8 p-6 rounded-xl bg-surface-50 dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800 text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse"></span>
              <span>Available for Full-Time Opportunities</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-stone-600 dark:text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>Based in Chennai, Tamil Nadu, India • Open to On-site, Hybrid, and Remote Roles</span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Target Roles: Backend Engineer, Cloud Security Engineer, Software Engineer (Python / TypeScript / APIs)
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={PERSONAL_INFO.resumePath}
              download="RaghuBharathi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 text-xs font-medium tracking-tight shadow-xs transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Latest Resume</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
