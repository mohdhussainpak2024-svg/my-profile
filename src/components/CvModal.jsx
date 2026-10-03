import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  FileText
} from 'lucide-react';
import { personalInfo, education, thesis, publications, experience, skills, certifications, awards, conferences } from '../data/portfolioData';

export const CvModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Modal Controls Bar */}
        <div className="modal-header no-print">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={18} color="var(--accent-cyan)" />
            <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
              Curriculum Vitae — Muhammad Hussain
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              onClick={handlePrint}
              className="btn-primary"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.825rem' }}
              title="Print CV or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="quick-icon-btn"
              title="Close CV Viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body / Paper Sheet */}
        <div className="modal-body">
          <div className="cv-paper">
            {/* Header */}
            <div className="cv-header-title">{personalInfo.name}</div>
            <div className="cv-header-contact">
              {personalInfo.location} | {personalInfo.phone} | {personalInfo.email}
            </div>

            {/* Summary */}
            <div className="cv-sec-title">PROFESSIONAL SUMMARY</div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: '#334155' }}>
              {personalInfo.summary}
            </p>

            {/* Education */}
            <div className="cv-sec-title">EDUCATION</div>
            <div className="cv-entry-row">
              <span>{education.degree}</span>
              <span>{education.period}</span>
            </div>
            <div className="cv-entry-sub">{education.institution}</div>
            <ul className="cv-ul">
              <li>GPA: {education.gpa} | {education.credits}</li>
              <li>
                <strong>Relevant coursework:</strong> {education.coursework.map(c => c.name).join('; ')}
              </li>
            </ul>

            {/* Thesis */}
            <div className="cv-sec-title">THESIS</div>
            <div className="cv-entry-row">
              <span>{thesis.title}</span>
              <span>{thesis.period}</span>
            </div>
            <div className="cv-entry-sub">{thesis.type}</div>
            <ul className="cv-ul">
              {thesis.keyFindings.map((finding, idx) => (
                <li key={idx}>
                  <strong>{finding.title}:</strong> {finding.desc}
                </li>
              ))}
            </ul>

            {/* Publications */}
            <div className="cv-sec-title">PUBLICATIONS</div>
            {publications.map((pub, idx) => (
              <div key={idx} style={{ fontSize: '0.85rem', marginBottom: '0.5rem', color: '#1e293b' }}>
                {pub.citations.apa}
              </div>
            ))}

            {/* Experience */}
            <div className="cv-sec-title">EXPERIENCE</div>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: '0.85rem' }}>
                <div className="cv-entry-row">
                  <span>{exp.role}</span>
                  <span>{exp.period}</span>
                </div>
                <div className="cv-entry-sub">{exp.organization}, {exp.location}</div>
                <ul className="cv-ul">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Skills */}
            <div className="cv-sec-title">SKILLS</div>
            <ul className="cv-ul" style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li style={{ marginBottom: '0.35rem' }}>
                <strong>Research:</strong> {skills.research.map(r => r.name).join(', ')}
              </li>
              <li style={{ marginBottom: '0.35rem' }}>
                <strong>Software:</strong> {skills.software.map(s => s.name).join(', ')}
              </li>
              <li style={{ marginBottom: '0.35rem' }}>
                <strong>Writing:</strong> APA-style academic reports, basic statistical analysis and charts
              </li>
              <li style={{ marginBottom: '0.35rem' }}>
                <strong>Languages:</strong> {skills.languages.map(l => `${l.language} (${l.level})`).join(', ')}
              </li>
            </ul>

            {/* Certifications */}
            <div className="cv-sec-title">CERTIFICATIONS</div>
            <ul className="cv-ul">
              {certifications.map((cert, idx) => (
                <li key={idx}>
                  <strong>{cert.title}</strong> – {cert.issuer} {cert.date ? `(${cert.date})` : ''}
                </li>
              ))}
            </ul>

            {/* Honors and Awards */}
            <div className="cv-sec-title">HONORS AND AWARDS</div>
            <ul className="cv-ul">
              {awards.map((award, idx) => (
                <li key={idx}>
                  <strong>{award.title}</strong> – {award.issuer} {award.date ? `(${award.date})` : ''}
                </li>
              ))}
            </ul>

            {/* Conferences and Seminars */}
            <div className="cv-sec-title">CONFERENCES AND SEMINARS</div>
            <ul className="cv-ul">
              {conferences.map((conf, idx) => (
                <li key={idx}>
                  <strong>{conf.title}</strong> – {conf.organizer} ({conf.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
