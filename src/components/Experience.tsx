import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-[#080d17]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-2 font-mono">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience & Roles
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Software development, bibliometric data research, and community-driven digital solutions.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Subtle Vertical Timeline Line */}
          <div
            className="absolute left-4 sm:left-6 top-3 bottom-3 w-px bg-slate-200 dark:bg-slate-800"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {EXPERIENCES.map((item, idx) => (
              <div key={item.id} className="relative pl-12 sm:pl-16">
                {/* Timeline Dot */}
                <div
                  className="absolute left-2.5 sm:left-4.5 top-1.5 w-3 h-3 rounded-full bg-white dark:bg-[#0b0f17] border-2 border-cyan-500 -translate-x-1/2"
                  aria-hidden="true"
                />

                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <ul className="space-y-2 mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack tags if present */}
                  {item.techStack && (
                    <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
