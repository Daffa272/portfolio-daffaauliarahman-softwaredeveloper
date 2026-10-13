import React, { useState } from 'react';
import { Mail, Linkedin, Globe, MapPin, Copy, Check, Send, ExternalLink, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [topic, setTopic] = useState<string>('Software Development Opportunity');
  const [senderName, setSenderName] = useState<string>('');
  const [messageNote, setMessageNote] = useState<string>('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`[Inquiry] ${topic} - ${senderName || 'Collaboration'}`);
    const body = encodeURIComponent(
      `Hello Daffa,\n\nI came across your developer portfolio and would like to connect regarding ${topic}.\n\n${
        messageNote ? `Details: ${messageNote}\n\n` : ''
      }Best regards,\n${senderName || 'Colleague'}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-2 font-mono">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Let's Build Something Useful.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I'm open to software development opportunities, collaborations, and projects involving web applications, AI integration, and data-driven solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Contact Information & Channels */}
            <div className="md:col-span-5 space-y-4">
              {/* Email Card with Copy Affordance */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 dark:text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Email Address
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors block break-all font-mono"
                >
                  {PERSONAL_INFO.email}
                </a>
                {copiedEmail && (
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-1 block">
                    ✓ Copied to clipboard!
                  </span>
                )}
              </div>

              {/* LinkedIn Profile Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all block shadow-xs group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  linkedin.com/in/daffaauliar
                </div>
              </a>

              {/* Portfolio Reference Card */}
              <a
                href={PERSONAL_INFO.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all block shadow-xs group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Portfolio Archive
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  bit.ly/daffaar-portfolio
                </div>
              </a>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Location
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.location}
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">
                  Western Indonesia Time (WIB / UTC+7) · Remote & On-site
                </span>
              </div>
            </div>

            {/* Functional Email Composer Helper */}
            <div className="md:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Direct Email Inquiry
                  </h3>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    Verified Link
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Compose a structured message draft below. Clicking the button opens your default email client with your message pre-filled.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Inquiry Topic
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-cyan-500"
                    >
                      <option value="Software Development Opportunity">Software Development Opportunity</option>
                      <option value="Web Application Project">Web Application Project</option>
                      <option value="AI Integration & Data Processing">AI Integration & Data Processing</option>
                      <option value="General Engineering Collaboration">General Engineering Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Your Name or Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hiring Team / John Doe"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Brief Message or Brief Overview
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Brief description of your team or project requirements..."
                      value={messageNote}
                      onChange={(e) => setMessageNote(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-cyan-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={getMailtoLink()}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open in Email Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedEmail ? 'Email Copied' : 'Copy Email Address'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
