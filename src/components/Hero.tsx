import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Terminal,
  Cpu
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Editorial Presentation */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse"></span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-sans leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-brand-700 dark:text-brand-400 font-mono tracking-tight">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Specializing in resilient backend architectures, multi-cloud security telemetry pipelines across <strong className="font-semibold text-stone-900 dark:text-stone-100">AWS, Azure, GCP, and OCI</strong>, and deterministic threat-scoring engines mapped to <strong className="font-semibold text-stone-900 dark:text-stone-100">NIST CSF 2.0 and ISO 27001</strong>. Enterprise experience shipping CRM automation logic at <strong className="font-semibold text-stone-900 dark:text-stone-100">Zoho Corporation</strong>.
            </p>

            {/* Quick Meta Location & Contact Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-stone-500 dark:text-stone-400 pt-1">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="hidden sm:inline text-stone-300 dark:text-stone-700">•</span>
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                <span>Zero-Trust Architecture</span>
              </span>
              <span className="hidden sm:inline text-stone-300 dark:text-stone-700">•</span>
              <span className="flex items-center space-x-1">
                <Cpu className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                <span>FastAPI & Python</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 text-sm font-medium tracking-tight transition-all shadow-xs"
              >
                <span>View Technical Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="RaghuBharathi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 text-sm font-medium tracking-tight transition-all shadow-2xs"
              >
                <Download className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#simulator"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-md bg-brand-50/80 dark:bg-brand-950/40 text-brand-800 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-900/60 border border-brand-200/60 dark:border-brand-800/60 text-sm font-medium tracking-tight transition-all"
              >
                <Terminal className="w-4 h-4" />
                <span>Live Security Demo</span>
              </a>
            </div>

            {/* Verified Social & Professional Connections */}
            <div className="pt-4 flex items-center space-x-3 text-stone-600 dark:text-stone-400">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-md hover:bg-stone-200/70 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-md hover:bg-stone-200/70 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Raghu Bharathi"
                className="p-2 rounded-md hover:bg-stone-200/70 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Res Profile Photograph with Editorial Treatment */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
              {/* Subtle architectural frame */}
              <div className="absolute -inset-1.5 rounded-2xl bg-stone-200/80 dark:bg-stone-800/80 -rotate-1 transition-transform group-hover:rotate-0 duration-300"></div>
              
              <div className="relative rounded-xl overflow-hidden bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 shadow-md">
                <img
                  src={PERSONAL_INFO.profilePhoto}
                  alt="Raghu Bharathi K P — Backend & Cloud Security Engineer"
                  className="w-full h-auto object-cover object-center aspect-4/5"
                  loading="eager"
                  width={800}
                  height={1000}
                />

                {/* Overlaid Editorial Footnote */}
                <div className="p-4 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xs border-t border-stone-200/80 dark:border-stone-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-stone-900 dark:text-stone-100 font-sans">
                      {PERSONAL_INFO.name}
                    </p>
                    <p className="text-[11px] font-mono text-stone-500 dark:text-stone-400">
                      B.Tech IT • Zoho CRM Alum
                    </p>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-200/60 dark:border-emerald-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Highlights Row */}
        <div className="mt-14 pt-8 border-t border-stone-200/80 dark:border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {PERSONAL_INFO.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="p-3.5 rounded-lg bg-white/60 dark:bg-stone-900/40 border border-stone-200/60 dark:border-stone-800/60"
            >
              <div className="text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-lg font-bold text-stone-900 dark:text-stone-100 font-sans mt-0.5">
                {metric.value}
              </div>
              <div className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
