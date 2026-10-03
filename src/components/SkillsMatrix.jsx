import React from 'react';
import { 
  BarChart3, 
  Terminal, 
  PenTool, 
  Languages, 
  Layers
} from 'lucide-react';
import { skills } from '../data/portfolioData';

export const SkillsMatrix = () => {
  return (
    <section id="skills" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle">
            <Layers size={15} />
            <span>Methodological Toolkit</span>
          </span>
          <h2 className="section-title">Capabilities & Technical Skills</h2>
          <p className="section-subtitle">
            A versatile analytical synthesis of quantitative fieldwork, qualitative coding, statistical software, and academic drafting.
          </p>
        </div>

        <div className="skills-grid">
          {/* 1. Research Methodologies */}
          <div className="skill-card">
            <h3 className="skill-card-title">
              <BarChart3 size={20} color="var(--accent-cyan)" />
              <span>Research & Policy Methodologies</span>
            </h3>
            <div className="skill-bar-list">
              {skills.research.map((item, idx) => (
                <div key={idx}>
                  <div className="skill-bar-header">
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.88rem' }}>{item.name}</span>
                    <span className="font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>{item.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: `${item.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Analytical Software & Database Tools */}
          <div className="skill-card">
            <h3 className="skill-card-title">
              <Terminal size={20} color="var(--accent-gold)" />
              <span>Software & Analytical Tools</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {skills.software.map((sw, idx) => (
                <div 
                  key={idx} 
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                      {sw.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {sw.category}
                    </div>
                  </div>
                  <span className="badge-pill badge-gold font-mono" style={{ fontSize: '0.75rem' }}>
                    {sw.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Academic Writing & Policy Formulation */}
          <div className="skill-card">
            <h3 className="skill-card-title">
              <PenTool size={20} color="var(--accent-teal)" />
              <span>Academic Writing & Analysis</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {skills.writing.map((w, idx) => (
                <div key={idx} style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    {w.title}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {w.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Language Competencies */}
          <div className="skill-card">
            <h3 className="skill-card-title">
              <Languages size={20} color="var(--accent-cyan)" />
              <span>Language Proficiencies</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>
              Multilingual fluency facilitating international policy engagement, national discourse, and localized community research.
            </p>
            <div className="languages-grid">
              {skills.languages.map((lang, idx) => (
                <div key={idx} className="language-card">
                  <div className="lang-name">{lang.language}</div>
                  <div className="lang-level">{lang.level}</div>
                  <div className="lang-desc">{lang.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
