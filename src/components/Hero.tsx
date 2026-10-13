import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Terminal, Check, Copy, Code2, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal?: () => void;
}

const codeSnippets = {
  'developer.ts': `// Daffa Aulia Rahman - Software Developer
const developer: DeveloperProfile = {
  name: "Daffa Aulia Rahman",
  role: "Software Developer",
  location: "Tangerang, Indonesia",
  education: "IPB University (Economics)",
  focus: [
    "Web Applications",
    "AI Integration",
    "Data-Driven Solutions"
  ],
  stack: {
    core: ["TypeScript", "Python", "SQL"],
    frontend: ["React", "Vite", "Tailwind CSS"],
    database: ["PostgreSQL", "Supabase"]
  },
  availableForHire: true
};

export default developer;`,
  'architecture.ts': `// Architectural Philosophy
export function createSolution(requirements: ProjectRequirements) {
  return {
    frontend: buildReactiveInterface({
      framework: "React + TypeScript",
      styling: "Tailwind CSS",
      performance: "Optimized SPA"
    }),
    intelligence: integrateAIEndpoints({
      parser: "Unstructured-to-Structured",
      validation: "Strict Schema Guard"
    }),
    persistence: configureRelationalDB({
      engine: "PostgreSQL",
      queries: "Normalized SQL"
    })
  };
}`,
  'terminal.sh': `$ whoami
daffa_rahman

$ cat current_focus.txt
- Full-stack web application development
- Practical Generative AI & API integrations
- Scalable database schema design & SQL analytics
- Interactive data visualizations for decisions

$ status
All systems operational. Ready for collaboration.`
};

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [activeTab, setActiveTab] = useState<keyof typeof codeSnippets>('developer.ts');
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/5 blur-[120px] pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/5 blur-[90px] pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Label */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-cyan-950/40 dark:bg-cyan-950/40 bg-cyan-50/80 border border-cyan-800/40 dark:border-cyan-800/40 border-cyan-200 text-xs text-cyan-700 dark:text-cyan-300 font-medium mb-6 backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 max-w-2xl text-balance">
              Building Digital Solutions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">
                Through Code.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              I'm <span className="text-slate-900 dark:text-white font-semibold">{PERSONAL_INFO.nickname}</span>, a Software Developer focused on web applications, AI integration, and data-driven solutions.
            </p>

            {/* Quick Location & Specialization Tags */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                {PERSONAL_INFO.location}
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>React & TypeScript</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Python & Streamlit</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>PostgreSQL & SQL</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 dark:bg-cyan-400 dark:hover:bg-cyan-300 rounded-xl transition-all shadow-md hover:shadow-cyan-400/20 active:scale-98 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>Get in Touch</span>
              </button>

              {/* Additional Link: Download CV */}
              <a
                href="/cv.pdf"
                download="Daffa_Aulia_Rahman_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Download CV PDF"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Code Editor Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden bg-[#0d131f] border border-slate-800 shadow-2xl shadow-black/40">
              {/* Editor Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-slate-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-slate-400 hidden sm:inline-flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    daffa-workspace
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-[11px] font-mono transition-colors"
                    title="Copy code snippet"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center px-2 bg-[#0b101c] border-b border-slate-800/60 overflow-x-auto text-xs font-mono">
                {(Object.keys(codeSnippets) as Array<keyof typeof codeSnippets>).map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center gap-1.5 px-3 py-2 border-b-2 text-xs transition-colors whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'border-cyan-400 text-cyan-300 bg-[#0d131f]'
                          : 'border-transparent text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab.endsWith('.ts') ? (
                        <span className="text-blue-400">ts</span>
                      ) : (
                        <Terminal className="w-3 h-3 text-emerald-400" />
                      )}
                      <span>{tab}</span>
                    </button>
                  );
                })}
              </div>

              {/* Editor Code Content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto max-h-[340px] text-slate-300">
                <pre className="text-left font-mono whitespace-pre selection:bg-cyan-500/30">
                  {codeSnippets[activeTab]}
                </pre>
              </div>

              {/* Editor Status Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#090d16] border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-cyan-400">
                    <Sparkles className="w-3 h-3" />
                    Ready
                  </span>
                  <span className="hidden sm:inline">TypeScript 5.8</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span>LN 16, COL 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
