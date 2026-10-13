import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Leadership } from './components/Leadership';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0b0f17] text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

        <main>
          <Hero onOpenCvModal={() => setCvModalOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Leadership />
          <Certifications />
          <Contact />
        </main>

        <Footer />

        <CvModal
          isOpen={cvModalOpen}
          onClose={() => setCvModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
