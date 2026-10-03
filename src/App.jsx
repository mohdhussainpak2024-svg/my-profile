import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThesisSpotlight } from './components/ThesisSpotlight';
import { Publications } from './components/Publications';
import { EducationCoursework } from './components/EducationCoursework';
import { Experience } from './components/Experience';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Accreditations } from './components/Accreditations';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { Toast } from './components/Toast';

export function App() {
  const [theme, setTheme] = useState('dark');
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="app-wrapper">
      {/* Dynamic Ambient Background Elements */}
      <div className="bg-ambient-layer"></div>
      <div className="bg-grid-overlay"></div>

      {/* Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenCv={() => setCvModalOpen(true)} 
      />

      {/* Main Portfolio Content */}
      <main>
        {/* 1. Executive Hero & Overview */}
        <Hero 
          onOpenCv={() => setCvModalOpen(true)} 
          onNotify={showToast} 
        />

        {/* 2. Capstone Thesis: Greenland & U.S. National Security */}
        <ThesisSpotlight />

        {/* 3. Peer-Reviewed Publications & Citation Exporter */}
        <Publications 
          onNotify={showToast} 
        />

        {/* 4. BS Defense & Strategic Studies & Coursework */}
        <EducationCoursework />

        {/* 5. Institutional Fieldwork & Experience (WHO, Amal, ISPR) */}
        <Experience />

        {/* 6. Methodologies, Analytical Tools, Writing & Languages */}
        <SkillsMatrix />

        {/* 7. Certifications (IAEA, British Council), Honors & Conferences */}
        <Accreditations />

        {/* 8. Contact & Direct Policy Briefing Dispatch */}
        <ContactSection 
          onNotify={showToast} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCv={() => setCvModalOpen(true)} 
      />

      {/* Printable / Downloadable Curriculum Vitae Modal */}
      <CvModal 
        isOpen={cvModalOpen} 
        onClose={() => setCvModalOpen(false)} 
      />

      {/* Interactive Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
