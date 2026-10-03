import React, { useState } from 'react';
import { 
  Globe2, 
  Compass, 
  Anchor, 
  Radio, 
  ShieldAlert, 
  Scale, 
  ChevronRight, 
  ExternalLink
} from 'lucide-react';
import { thesis } from '../data/portfolioData';

export const ThesisSpotlight = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 0,
      icon: <Globe2 size={18} />,
      title: "Geostrategic Value & Ice Melt",
      summary: "Arctic warming is unlocking polar shipping routes—the Northwest Passage and Northern Sea Route—while opening up massive deposits of rare earth minerals and hydrocarbon basins.",
      detail: "The qualitative case study demonstrates how climate change has fundamentally shifted Greenland from an isolated polar outpost into a central geostrategic fulcrum in 21st-century maritime logistics and power projection."
    },
    {
      id: 1,
      icon: <Radio size={18} />,
      title: "Pituffik Space Base & GIUK Gap",
      summary: "Analysis of North American early warning architecture from WWII through the Cold War to today, focusing on Pituffik Space Base (formerly Thule) and the GIUK Gap.",
      detail: "Investigates the role of ballistic missile early warning radars, satellite tracking facilities, and underwater acoustic sensor networks critical for NORAD surveillance and NATO anti-submarine warfare (ASW) doctrines."
    },
    {
      id: 2,
      icon: <ShieldAlert size={18} />,
      title: "Russian & Chinese Arctic Posture",
      summary: "Examination of how Russian Arctic militarization and Beijing's self-declared 'Near-Arctic State' doctrine challenge Western security postures.",
      detail: "Explores the reopening of Soviet-era military bases along the Northern Sea Route and Chinese investments in Greenlandic mining infrastructure, analyzing their impact on U.S. freedom of navigation and deterrence."
    },
    {
      id: 3,
      icon: <Scale size={18} />,
      title: "Realism & Monroe Doctrine Framework",
      summary: "Synthesis of classical geopolitical theory (Mahan, Mackinder, Spykman) and the Monroe Doctrine to interpret modern Arctic power dynamics.",
      detail: "Applies structural realism to analyze zero-sum power calculations, great power competition, and why hemispheric defense doctrines must adapt to polar theater threats without alienating regional partners."
    },
    {
      id: 4,
      icon: <Compass size={18} />,
      title: "Cooperative Policy & Self-Determination",
      summary: "Strategic policy recommendations advocating for institutional diplomacy between Washington, Copenhagen, and Nuuk.",
      detail: "Argues decisively against unilateral coercion or transactional territorial acquisition, instead presenting a sustainable multilateral framework that balances Pentagon security needs with Greenland's indigenous autonomy and legal sovereignty."
    }
  ];

  return (
    <section id="thesis" className="thesis-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pretitle">
            <Compass size={15} />
            <span>Capstone Research & Strategic Analysis</span>
          </span>
          <h2 className="section-title">Greenland & Arctic Geopolitics</h2>
          <p className="section-subtitle">
            An in-depth qualitative study evaluating the shifting military, economic, and strategic balance across the High North.
          </p>
        </div>

        {/* Main Interactive Thesis Showcase Card */}
        <div className="thesis-card-main">
          {/* Left: Cartographic Visualization */}
          <div className="thesis-visual-box">
            <img 
              src={thesis.image} 
              alt="Arctic Geopolitical & Strategic Map Visualization" 
              className="thesis-visual-img"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80";
              }}
            />
            <div className="thesis-map-overlay">
              <div className="map-badge-group">
                <span className="badge-pill font-mono">
                  <Anchor size={12} /> GIUK Gap
                </span>
                <span className="badge-pill font-mono badge-gold">
                  <Radio size={12} /> Pituffik Space Base
                </span>
                <span className="badge-pill font-mono">
                  Polar Sea Lanes
                </span>
              </div>
              <h3 className="map-overlay-title">High North Strategic Corridor</h3>
              <p className="map-overlay-desc">
                Tactical surveillance, ballistic missile warning radars, and submarine chokepoints between North America and the Arctic Ocean.
              </p>
            </div>
          </div>

          {/* Right: Thesis Summary & Dynamic Pillar Tabs */}
          <div className="thesis-content-box">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge-pill badge-gold font-mono">{thesis.period}</span>
                <span className="badge-pill badge-emerald font-mono">Peer-Reviewed</span>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.85rem', color: 'var(--text-primary)' }}>
                {thesis.title}
              </h3>

              <p className="thesis-abstract-quote">
                "{thesis.abstract}"
              </p>

              {/* Interactive Pillar Selector Tabs */}
              <div className="thesis-findings-tabs">
                {pillars.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`finding-tab-item ${activeTab === idx ? 'active' : ''}`}
                  >
                    <div className="finding-tab-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ color: activeTab === idx ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>
                          {item.icon}
                        </span>
                        <span>{item.title}</span>
                      </div>
                      <ChevronRight 
                        size={16} 
                        style={{ 
                          transform: activeTab === idx ? 'rotate(90deg)' : 'none', 
                          transition: 'transform 0.2s ease',
                          color: activeTab === idx ? 'var(--accent-cyan)' : 'var(--text-muted)'
                        }} 
                      />
                    </div>
                    {activeTab === idx && (
                      <div className="finding-tab-body">
                        <p style={{ marginBottom: '0.4rem' }}>{item.summary}</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{item.detail}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                METHODOLOGY: Qualitative Case-Study & Realist Analysis
              </span>
              <a href="#publications" className="btn-secondary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}>
                <span>See Journal Publication</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
