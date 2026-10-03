import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Medal, 
  Users, 
  Radio
} from 'lucide-react';
import { certifications, awards, conferences } from '../data/portfolioData';

export const Accreditations = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="accreditations" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle">
            <Award size={15} />
            <span>Honors & Certifications</span>
          </span>
          <h2 className="section-title">Credentials & Academic Forums</h2>
          <p className="section-subtitle">
            Accreditations from international agencies (IAEA, British Council) and distinguished national academic honors.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Distinctions' },
            { id: 'certs', label: 'Certifications' },
            { id: 'awards', label: 'Academic Honors' },
            { id: 'conferences', label: 'Conferences & Seminars' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`btn-secondary font-mono ${activeTab === tab.id ? 'active' : ''}`}
              style={{
                borderColor: activeTab === tab.id ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                background: activeTab === tab.id ? 'var(--accent-cyan-glow)' : 'var(--bg-card)',
                color: activeTab === tab.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontSize: '0.85rem',
                padding: '0.5rem 1.1rem'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="awards-grid">
          {/* Certifications */}
          {(activeTab === 'all' || activeTab === 'certs') && certifications.map((cert, idx) => (
            <div key={`cert-${idx}`} className="award-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span className="badge-pill badge-gold font-mono">{cert.badge}</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    {cert.date}
                  </span>
                </div>
                <div className="award-issuer">{cert.issuer}</div>
                <h3 className="award-title">{cert.title}</h3>
                <p className="award-desc">{cert.desc}</p>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                <ShieldCheck size={14} />
                <span>Verified Accreditation</span>
              </div>
            </div>
          ))}

          {/* Awards */}
          {(activeTab === 'all' || activeTab === 'awards') && awards.map((award, idx) => (
            <div key={`award-${idx}`} className="award-card" style={{ borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span className="badge-pill font-mono badge-gold">
                    <Medal size={12} /> {award.category}
                  </span>
                  {award.date && (
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      {award.date}
                    </span>
                  )}
                </div>
                <div className="award-issuer">{award.issuer}</div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-desc">{award.desc}</p>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                <Medal size={14} />
                <span>Competitive Academic Merit</span>
              </div>
            </div>
          ))}

          {/* Conferences */}
          {(activeTab === 'all' || activeTab === 'conferences') && conferences.map((conf, idx) => (
            <div key={`conf-${idx}`} className="award-card" style={{ borderColor: 'rgba(56, 189, 248, 0.2)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span className="badge-pill font-mono">
                    <Radio size={12} /> {conf.type}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    {conf.date}
                  </span>
                </div>
                <div className="award-issuer" style={{ color: 'var(--accent-cyan)' }}>{conf.organizer}</div>
                <h3 className="award-title">{conf.title}</h3>
                <p className="award-desc">{conf.desc}</p>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                <Users size={14} />
                <span>Strategic Policy Delegate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
