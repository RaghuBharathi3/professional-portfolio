import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Sun, Moon, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Live Simulation', href: '#simulator' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-surface-50/95 dark:bg-surface-950/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 py-3 shadow-xs' 
          : 'bg-surface-50/80 dark:bg-surface-950/80 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a 
            href="#" 
            className="group flex items-center space-x-3 text-left focus:outline-hidden"
          >
            <div className="w-9 h-9 rounded-md bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 flex items-center justify-center font-mono font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
              RB
            </div>
            <div>
              <span className="block font-semibold text-stone-900 dark:text-stone-100 text-sm tracking-tight group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="block text-[11px] font-mono text-stone-500 dark:text-stone-400">
                Backend & Cloud Security
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs font-medium text-stone-600 dark:text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-md hover:text-stone-950 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-stone-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle visual theme"
              className="p-2 text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white rounded-md hover:bg-stone-200/60 dark:hover:bg-stone-800/60 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume CTA */}
            <a
              href={PERSONAL_INFO.resumePath}
              download="RaghuBharathi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 text-xs font-medium tracking-tight transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle visual theme"
              className="p-2 text-stone-600 dark:text-stone-300 rounded-md"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile navigation"
              className="p-2 text-stone-700 dark:text-stone-200 rounded-md hover:bg-stone-200 dark:hover:bg-stone-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 border border-stone-200 dark:border-stone-800 rounded-xl bg-surface-50 dark:bg-surface-950 shadow-xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
              <a
                href={PERSONAL_INFO.resumePath}
                download="RaghuBharathi_Resume.pdf"
                className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-md bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-sm font-medium"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
