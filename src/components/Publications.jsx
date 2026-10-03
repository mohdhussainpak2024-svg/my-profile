import React, { useState } from 'react';
import { 
  BookOpen, 
  Copy, 
  Check, 
  FileCheck2
} from 'lucide-react';
import { publications } from '../data/portfolioData';

export const Publications = ({ onNotify }) => {
  const [citationFormat, setCitationFormat] = useState('apa');
  const [copiedId, setCopiedId] = useState(null);

  const copyCitation = (pub, format) => {
    const text = pub.citations[format];
    navigator.clipboard.writeText(text);
    setCopiedId(`${pub.id}-${format}`);
    onNotify?.(`Copied ${format.toUpperCase()} citation to clipboard!`);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="publications" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle">
            <BookOpen size={15} />
            <span>Academic Contributions</span>
          </span>
          <h2 className="section-title">Peer-Reviewed Publications</h2>
          <p className="section-subtitle">
            Scholarly investigations published in recognized academic journals with rigorous peer-review evaluation.
          </p>
        </div>

        {publications.map((pub) => (
          <div key={pub.id} className="publication-card">
            <div className="pub-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="badge-pill badge-emerald font-mono">
                    <FileCheck2 size={13} /> {pub.type}
                  </span>
                  <span className="badge-pill font-mono">
                    {pub.year}
                  </span>
                  <span className="badge-pill badge-gold font-mono">
                    Vol. {pub.volume}, Issue {pub.issue}
                  </span>
                </div>
                <h3 className="pub-title">{pub.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <strong>Authors:</strong> <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{pub.authors}</span>
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.2rem' }}>
                  <strong>Journal:</strong> <em>{pub.journal}</em>, pp. {pub.pages}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => copyCitation(pub, citationFormat)}
                  className="btn-primary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  {copiedId === `${pub.id}-${citationFormat}` ? <Check size={15} /> : <Copy size={15} />}
                  <span>{copiedId === `${pub.id}-${citationFormat}` ? 'Copied!' : 'Copy Citation'}</span>
                </button>
              </div>
            </div>

            {/* Citation Formatter Box */}
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  SELECT CITATION STYLE:
                </span>
                <div className="citation-btn-group" style={{ margin: 0 }}>
                  {['apa', 'bibtex', 'chicago'].map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setCitationFormat(fmt)}
                      className={`citation-pill-btn ${citationFormat === fmt ? 'active' : ''}`}
                    >
                      {fmt.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pub-citation-text">
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontFamily: 'inherit', margin: 0 }}>
                  {pub.citations[citationFormat]}
                </pre>
                <button
                  onClick={() => copyCitation(pub, citationFormat)}
                  style={{ color: 'var(--text-muted)', cursor: 'pointer', padding: '0.25rem', flexShrink: 0 }}
                  title="Copy formatted citation"
                >
                  {copiedId === `${pub.id}-${citationFormat}` ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Topic Badges */}
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>KEYWORDS:</span>
              {pub.topics.map((topic, i) => (
                <span key={i} className="tag-pill">
                  #{topic}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
