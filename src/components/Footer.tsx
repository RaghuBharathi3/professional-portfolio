import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-900 text-stone-600 dark:text-stone-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Copyright */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-semibold text-stone-900 dark:text-stone-100 font-sans">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-stone-300 dark:text-stone-700">•</span>
              <span className="font-mono text-stone-500">
                Chennai, India
              </span>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-500">
              © {new Date().getFullYear()} Raghu Bharathi K P. All code architectures and artifacts are verified.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2 rounded-md hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-4 w-px bg-stone-200 dark:bg-stone-800" />

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors"
            >
              <span className="text-[11px] font-mono">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
