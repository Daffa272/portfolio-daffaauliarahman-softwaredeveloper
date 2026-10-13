import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, LEADERSHIP_ENTRIES, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c121e]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Curriculum Vitae
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-500 font-mono">Daffa Aulia Rahman</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/cv.pdf"
              download="Daffa_Aulia_Rahman_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200 text-sm">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
              Software Developer | Web Applications & AI Integration
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>{PERSONAL_INFO.location}</span>
              <span>·</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/daffaauliar</a>
              <span>·</span>
              <a href={PERSONAL_INFO.portfolio} target="_blank" rel="noreferrer" className="hover:underline">bit.ly/daffaar-portfolio</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
              Education
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.education.institution}
                </h3>
                <span className="text-xs font-mono text-slate-500">{PERSONAL_INFO.education.period}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1">
                {PERSONAL_INFO.education.degree} — {PERSONAL_INFO.education.minor}
              </p>
              <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1">
                Cumulative GPA: {PERSONAL_INFO.education.gpa}
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-4">
              Work Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {exp.role} <span className="font-normal text-slate-500">at {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                    {cat.title}:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Leadership */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                Certifications
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.id}>
                    • <strong className="text-slate-900 dark:text-white">{c.title}</strong> — {c.issuer}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                Leadership
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {LEADERSHIP_ENTRIES.map((l) => (
                  <li key={l.id}>
                    • <strong className="text-slate-900 dark:text-white">{l.role}</strong> ({l.organization})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
