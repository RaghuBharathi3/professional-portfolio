import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SecuritySimulator } from './components/SecuritySimulator';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('rb-portfolio-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('rb-portfolio-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('rb-portfolio-theme', 'light');
      }
    } catch {
      // ignore in constrained contexts
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-surface-50 text-surface-900 dark:bg-surface-950 dark:text-surface-100 font-sans selection:bg-brand-600 selection:text-white transition-colors duration-200">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SecuritySimulator />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
