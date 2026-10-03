import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone, 
  FileText, 
  ArrowUpRight, 
  Award,
  BookOpen
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenCv, onNotify }) => {
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    onNotify?.(`${label} copied to clipboard!`);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & Strategic Positioning */}
          <div className="hero-content">
            {/* Live Operational Status */}
            <div className="location-live-badge">
              <span className="pulse-indicator"></span>
              <span>Available for Policy & Strategic Analysis Roles | Islamabad</span>
            </div>

            {/* Name & Academic Crest */}
            <div>
              <h1 className="hero-name">{personalInfo.name}</h1>
              <p className="hero-headline">{personalInfo.title}</p>
            </div>

            {/* Location & Academic Badge */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <div className="badge-pill font-mono">
                <MapPin size={13} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="badge-pill font-mono badge-gold">
                <Award size={13} />
                <span>BS Defense & Strategic Studies</span>
              </div>
            </div>

            {/* Executive Professional Summary */}
            <p className="hero-summary">
              {personalInfo.summary}
            </p>

            {/* Focus Research Area Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {personalInfo.focusAreas.map((area, i) => (
                <span key={i} className="tag-pill">
                  {area}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="hero-actions">
              <button onClick={() => scrollTo('thesis')} className="btn-primary">
                <BookOpen size={17} />
                <span>Explore Arctic Security Thesis</span>
              </button>
              <button onClick={onOpenCv} className="btn-secondary">
                <FileText size={17} />
                <span>Academic CV & Bio</span>
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-secondary">
                <Mail size={17} />
                <span>Direct Inquiry</span>
              </button>
            </div>

            {/* Impact / Credential Statistics Strip */}
            <div className="hero-stats-strip">
              <div className="stat-item">
                <div className="stat-num">{personalInfo.gpa}<span>/4.0</span></div>
                <div className="stat-label">Academic GPA (133 Cr)</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">01<span>Peer-Reviewed</span></div>
                <div className="stat-label">Arctic Security Publication</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">750+<span>Surveys</span></div>
                <div className="stat-label">WHO LQAS Verified (100% Acc)</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">ISPR<span>& WHO</span></div>
                <div className="stat-label">Strategic & Field Alum</div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Executive Portrait Card */}
          <div className="hero-card-wrapper">
            <div className="hero-card-glow"></div>
            <div className="hero-card">
              <div className="portrait-img-wrapper">
                <img 
                  src={personalInfo.portrait} 
                  alt="Muhammad Hussain - Defense & Strategic Studies Scholar" 
                  className="portrait-img"
                  onError={(e) => {
                    // Fallback graceful handler if path is altered
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="portrait-overlay-tag">
                  <div className="overlay-tag-left">
                    <span className="overlay-tag-title">Muhammad Hussain</span>
                    <span className="overlay-tag-sub">BS Defense & Strategic Studies • GCUF</span>
                  </div>
                  <div className="badge-pill badge-emerald" style={{ padding: '0.2rem 0.6rem' }}>
                    <ShieldCheck size={14} />
                    <span>Honors</span>
                  </div>
                </div>
              </div>

              {/* Quick Communication Bar */}
              <div className="hero-card-footer">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>COMMUNICATION CHANNELS</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Direct Contact Desk</span>
                </div>
                <div className="contact-quick-links">
                  <button 
                    onClick={() => copyToClipboard(personalInfo.email, 'Email address')}
                    className="quick-icon-btn" 
                    title={`Copy Email: ${personalInfo.email}`}
                  >
                    <Mail size={16} />
                  </button>
                  <button 
                    onClick={() => copyToClipboard(personalInfo.phone, 'Phone number')}
                    className="quick-icon-btn" 
                    title={`Copy Phone: ${personalInfo.phone}`}
                  >
                    <Phone size={16} />
                  </button>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="quick-icon-btn" 
                    title="Send Email Directly"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
