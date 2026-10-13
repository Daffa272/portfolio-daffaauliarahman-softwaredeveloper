import React from 'react';
import { Users, Calendar, Sparkles } from 'lucide-react';
import { LEADERSHIP_ENTRIES } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-16 md:py-24 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-2 font-mono">
            Organizational Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Leadership & Collaboration
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Coordinating cross-functional student teams and community digital solutions.
          </p>
        </div>

        {/* 3 Entry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERSHIP_ENTRIES.map((entry) => (
            <div
              key={entry.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {entry.period}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {entry.role}
                </h3>
                <h4 className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-mono mb-3">
                  {entry.organization}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
