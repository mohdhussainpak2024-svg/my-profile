import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  Shield, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection = ({ onNotify }) => {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Research Collaboration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    onNotify?.(`${type} copied to clipboard!`);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onNotify?.('Inquiry logged successfully! Opening mail client.');
    // Also build a mailto link
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.inquiryType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle">
            <MessageSquare size={15} />
            <span>Connect & Collaborate</span>
          </span>
          <h2 className="section-title">Inquiries & Policy Engagement</h2>
          <p className="section-subtitle">
            Open to research fellowships, policy analysis, strategic think tanks, and defense consulting opportunities.
          </p>
        </div>

        <div className="contact-container">
          {/* Direct Contact Cards */}
          <div className="contact-info-list">
            <div className="contact-info-card">
              <div className="contact-icon-circle">
                <MapPin size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="contact-label">Location Base</div>
                <div className="contact-val">{personalInfo.location}</div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-circle">
                <Mail size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="contact-label">Electronic Mail</div>
                <div className="contact-val" style={{ fontSize: '0.925rem', wordBreak: 'break-all' }}>
                  {personalInfo.email}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button
                  onClick={() => copyText(personalInfo.email, 'Email')}
                  className="quick-icon-btn"
                  title="Copy Email"
                >
                  {copiedType === 'Email' ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="quick-icon-btn"
                  title="Compose Email"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-circle">
                <Phone size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="contact-label">Direct Line / WhatsApp</div>
                <div className="contact-val">{personalInfo.phone}</div>
              </div>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button
                  onClick={() => copyText(personalInfo.phone, 'Phone')}
                  className="quick-icon-btn"
                  title="Copy Phone Number"
                >
                  {copiedType === 'Phone' ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                </button>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="quick-icon-btn"
                  title="Place Call"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                <Shield size={16} />
                <span>Confidentiality & Response SLA</span>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Direct research proposals, defense policy inquiries, and academic collaboration requests are typically reviewed within 24 operational hours.
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="contact-form">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Send a Policy or Research Briefing Request
            </h3>
            
            {submitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <CheckCircle2 size={40} color="var(--accent-emerald)" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Inquiry Dispatch Initiated</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Thank you, your message draft has been routed to <strong>{personalInfo.email}</strong>.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary" 
                  style={{ marginTop: '1.25rem', fontSize: '0.825rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Dr. Alexander Vance" 
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="vance@thinktank.org" 
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Institution / Organization</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Strategic Studies Institute" 
                      className="form-input"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nature of Inquiry</label>
                    <select 
                      className="form-input"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      <option value="Research Fellowship">Research Fellowship</option>
                      <option value="Policy Analysis Role">Policy Analysis Role</option>
                      <option value="Academic Collaboration">Academic Collaboration</option>
                      <option value="Arctic Security Consultation">Arctic Security Consultation</option>
                      <option value="Other Policy Matter">Other Policy Matter</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Research Scope</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Outline your strategic research query or institutional scope..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                  <Send size={16} />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
