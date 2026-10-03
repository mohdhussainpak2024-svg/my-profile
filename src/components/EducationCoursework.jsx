import React from 'react';
import { 
  GraduationCap, 
  BookMarked, 
  Award, 
  MapPin
} from 'lucide-react';
import { education } from '../data/portfolioData';

export const EducationCoursework = () => {
  return (
    <section id="education" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle">
            <GraduationCap size={15} />
            <span>Academic Foundations</span>
          </span>
          <h2 className="section-title">Education & Strategic Coursework</h2>
          <p className="section-subtitle">
            Rigorous undergraduate training in defense strategy, deterrence theory, national power, and international security architecture.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span className="badge-pill badge-gold font-mono">{education.period}</span>
                <span className="badge-pill badge-emerald font-mono">{education.badge}</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {education.degree}
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '0.25rem' }}>
                {education.institution}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={14} /> {education.location}
                </span>
                <span>•</span>
                <span className="font-mono">GPA: <strong style={{ color: 'var(--accent-gold)' }}>{education.gpa}</strong></span>
                <span>•</span>
                <span className="font-mono">{education.credits}</span>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div className="badge-pill font-mono" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                <Award size={16} /> Prime Minister's Merit Recipient
              </div>
            </div>
          </div>

          {/* Coursework Grid */}
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookMarked size={16} color="var(--accent-cyan)" />
              <span>Core Advanced Coursework</span>
            </h4>
            <div className="coursework-grid">
              {education.coursework.map((course, idx) => (
                <div key={idx} className="course-box">
                  <div className="course-cat">{course.category}</div>
                  <div className="course-name">{course.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
