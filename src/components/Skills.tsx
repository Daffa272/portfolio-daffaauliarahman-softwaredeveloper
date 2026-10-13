import React from 'react';
import {
  Code2,
  FileCode2,
  Terminal,
  Database,
  Layout,
  Palette,
  Atom,
  Smartphone,
  Boxes,
  Zap,
  BarChart3,
  Globe,
  Layers,
  Server,
  HardDrive,
  Cpu,
  Binary,
  GitBranch,
  Laptop,
  LineChart,
  FileSpreadsheet,
  Cloud,
  PieChart
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4 text-cyan-500" />,
  FileCode2: <FileCode2 className="w-4 h-4 text-blue-500" />,
  Terminal: <Terminal className="w-4 h-4 text-amber-500" />,
  Database: <Database className="w-4 h-4 text-emerald-500" />,
  Layout: <Layout className="w-4 h-4 text-orange-500" />,
  Palette: <Palette className="w-4 h-4 text-sky-500" />,
  Atom: <Atom className="w-4 h-4 text-cyan-400" />,
  Smartphone: <Smartphone className="w-4 h-4 text-indigo-400" />,
  Boxes: <Boxes className="w-4 h-4 text-purple-400" />,
  Zap: <Zap className="w-4 h-4 text-amber-400" />,
  BarChart3: <BarChart3 className="w-4 h-4 text-rose-400" />,
  Globe: <Globe className="w-4 h-4 text-blue-400" />,
  Layers: <Layers className="w-4 h-4 text-indigo-400" />,
  Server: <Server className="w-4 h-4 text-emerald-400" />,
  HardDrive: <HardDrive className="w-4 h-4 text-teal-400" />,
  Cpu: <Cpu className="w-4 h-4 text-violet-400" />,
  Binary: <Binary className="w-4 h-4 text-cyan-400" />,
  GitBranch: <GitBranch className="w-4 h-4 text-orange-400" />,
  Laptop: <Laptop className="w-4 h-4 text-blue-400" />,
  LineChart: <LineChart className="w-4 h-4 text-sky-400" />,
  FileSpreadsheet: <FileSpreadsheet className="w-4 h-4 text-orange-400" />,
  Cloud: <Cloud className="w-4 h-4 text-amber-400" />,
  PieChart: <PieChart className="w-4 h-4 text-blue-400" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-[#080d17]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-2 font-mono">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills & Capabilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Practical competencies utilized in web development, AI workflow automation, relational databases, and data visualization.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 font-mono mb-4 pb-2 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span>{cat.title}</span>
                  <span className="text-xs font-normal text-slate-400 dark:text-slate-500 font-mono">
                    {cat.skills.length}
                  </span>
                </h3>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-colors"
                    >
                      {skill.iconName && iconMap[skill.iconName]}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
