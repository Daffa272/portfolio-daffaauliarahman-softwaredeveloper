import React from 'react';
import { GraduationCap, Code, Cpu, Database, Award, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillarIcons = [
    <Code className="w-5 h-5 text-cyan-400" />,
    <Cpu className="w-5 h-5 text-indigo-400" />,
    <Database className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-2 font-mono">
            Background & Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative & Three Focus Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-4 text-slate-500 dark:text-slate-400">
                Core Competency Pillars
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {PERSONAL_INFO.pillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-slate-50 dark:bg-[#0f172a]/70 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shrink-0">
                        {pillarIcons[idx]}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1.5">
                          {pillar.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Academic Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 dark:from-[#0f172a] dark:to-[#0b101c] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                      Academic Background
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Education
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {PERSONAL_INFO.education.period}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.education.institution}
                  </h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                    {PERSONAL_INFO.education.degree}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {PERSONAL_INFO.education.minor}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/80">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Cumulative GPA</span>
                    <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      {PERSONAL_INFO.education.gpa}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Location</span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      Bogor, Indonesia
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Interdisciplinary perspective applying quantitative reasoning, econometric analysis, and resource modeling toward scalable software applications and data workflows.
                </div>
              </div>
            </div>

            {/* Quick Contact Link Card */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 dark:bg-cyan-950/20 bg-cyan-50/50 border border-cyan-800/30 dark:border-cyan-800/30 border-cyan-200/60 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Looking for a collaborator?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Available for engineering roles and technical projects.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
