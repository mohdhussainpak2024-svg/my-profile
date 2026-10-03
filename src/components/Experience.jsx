import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Activity,
  Award
} from 'lucide-react';
import { experience } from '../data/portfolioData';

export const Experience = () => {
  const [selectedExpId, setSelectedExpId] = useState(experience[0].id);

  const selectedExp = experience.find((e) => e.id === selectedExpId) || experience[0];

  const getOrgIcon = (id) => {
    switch (id) {
      case 'who':
        return <Activity size={18} color="var(--accent-cyan)" />;
      case 'amal':
        return <Award size={18} color="var(--accent-gold)" />;
      case 'ispr':
        return <ShieldCheck size={18} color="var(--accent-emerald)" />;
      default:
        return <Briefcase size={18} />;
    }
  };

  return (
    <section id="experience" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle">
            <Briefcase size={15} />
            <span>Fieldwork & Professional Track Record</span>
          </span>
          <h2 className="section-title">Institutional Experience</h2>
          <p className="section-subtitle">
            Hands-on fieldwork, strategic communications, and rigorous data quality control across international organizations and national defense institutions.
          </p>
        </div>

        <div className="experience-layout">
          {/* Left Vertical Nav / Timeline Selector */}
          <div className="experience-nav">
            {experience.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`exp-nav-btn ${selectedExpId === exp.id ? 'active' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {getOrgIcon(exp.id)}
                  <span className="exp-nav-org">{exp.organization.split('(')[0].trim()}</span>
                </div>
                <span className="exp-nav-role">{exp.role}</span>
                <span className="exp-nav-period">{exp.period}</span>
              </button>
            ))}
          </div>

          {/* Right Detailed Card */}
          <div className="experience-detail-card">
            <div className="exp-detail-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                  <span className="badge-pill font-mono">{selectedExp.type}</span>
                  <span className="badge-pill badge-gold font-mono">{selectedExp.period}</span>
                </div>
                <h3 className="exp-detail-title">{selectedExp.role}</h3>
                <div className="exp-detail-org">{selectedExp.organization}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                  <MapPin size={14} />
                  <span>{selectedExp.location}</span>
                </div>
              </div>
            </div>

            {/* Impact Metric Counters */}
            <div className="exp-metrics-grid">
              {selectedExp.metrics.map((m, idx) => (
                <div key={idx} className="exp-metric-box">
                  <div className="exp-metric-val">{m.value}</div>
                  <div className="exp-metric-lbl">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Core Achievements Bullets */}
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
              Key Responsibilities & Measured Outcomes
            </h4>
            <ul className="exp-bullets">
              {selectedExp.highlights.map((bullet, idx) => (
                <li key={idx} className="exp-bullet-item">
                  <CheckCircle2 size={18} className="exp-bullet-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Skills / Methods Applied */}
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.5rem' }}>
                COMPETENCIES APPLIED:
              </span>
              <div className="tag-list">
                {selectedExp.skills.map((s, idx) => (
                  <span key={idx} className="tag-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
