import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = ({ onOpenCv }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer no-print">
      <div className="container">
        <div className="footer-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="brand-crest" style={{ width: 36, height: 36 }}>
              <Shield size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                {personalInfo.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Defense & Strategic Studies Graduate • Islamabad, Pakistan
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenCv} 
              style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
            >
              Academic CV
            </button>
            <a 
              href={`mailto:${personalInfo.email}`} 
              style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}
            >
              {personalInfo.email}
            </a>
            <a 
              href={`tel:${personalInfo.phone}`} 
              style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}
            >
              {personalInfo.phone}
            </a>
            <button
              onClick={scrollToTop}
              className="quick-icon-btn"
              title="Return to top"
              style={{ width: 32, height: 32 }}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <div>
            © 2026 {personalInfo.name}. All research, publications, and citations documented for scholarly & policy reference.
          </div>
          <div className="font-mono">
            GPA: 3.74/4.0 • 133 Credit Hours • GCUF
          </div>
        </div>
      </div>
    </footer>
  );
};
