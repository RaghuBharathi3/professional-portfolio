import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Linkedin, Github, Copy, Check, Send, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Interactive message composer
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [subject, setSubject] = useState('Software Engineering Opportunity');
  const [message, setMessage] = useState('');

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

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const bodyContent = `Hi Raghu,\n\n${message}\n\nBest regards,\n${senderName || 'Recruiter'}\n${senderOrg ? `Company: ${senderOrg}` : ''}`;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;
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
            Actively available for software engineering roles, cloud security teams, and technical opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 flex items-center space-x-1"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
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
                className="text-base font-semibold font-mono text-stone-900 dark:text-stone-100 hover:text-brand-700 dark:hover:text-brand-400 transition-colors block truncate"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-stone-500">
                Primary contact for recruiters and engineering hiring managers.
              </p>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Mobile / WhatsApp
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs font-mono text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 flex items-center space-x-1"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
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
                className="text-base font-semibold font-mono text-stone-900 dark:text-stone-100 hover:text-brand-700 dark:hover:text-brand-400 transition-colors block"
              >
                {PERSONAL_INFO.phone}
              </a>
              <p className="text-xs text-stone-500">
                Based in Chennai (IST / UTC +5:30). Open to relocation and remote positions.
              </p>
            </div>

            {/* Professional Profiles */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs hover:border-stone-300 dark:hover:border-stone-700 transition-all flex items-center justify-between"
              >
                <div className="flex items-center space-x-2 text-stone-800 dark:text-stone-200">
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span className="text-xs font-semibold font-sans">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs hover:border-stone-300 dark:hover:border-stone-700 transition-all flex items-center justify-between"
              >
                <div className="flex items-center space-x-2 text-stone-800 dark:text-stone-200">
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-semibold font-sans">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-4">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-sans">
                  Send Direct Inquiry
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Composes a structured email directly to raghubharathi82@gmail.com with your preferred mail client.
                </p>
              </div>

              <form onSubmit={handleSendMail} className="space-y-3.5 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-stone-600 dark:text-stone-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3 py-2 rounded-md bg-surface-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-600 dark:text-stone-400 mb-1">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Engineering Recruiting"
                      value={senderOrg}
                      onChange={(e) => setSenderOrg(e.target.value)}
                      className="w-full px-3 py-2 rounded-md bg-surface-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden focus:border-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-600 dark:text-stone-400 mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-surface-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-600 dark:text-stone-400 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="We're looking for a backend engineer or cloud security specialist..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-surface-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden focus:border-brand-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 text-stone-50 dark:text-stone-900 text-xs font-medium tracking-tight shadow-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
