import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Sun, 
  Moon, 
  FileText, 
  Menu, 
  X, 
  Clock, 
  ChevronRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ theme, toggleTheme, onOpenCv }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [islamabadTime, setIslamabadTime] = useState('');

  // Update Islamabad Pakistan local time
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setIslamabadTime(formatter.format(now));
      } catch {
        setIslamabadTime('GMT+5');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'thesis', 'publications', 'experience', 'skills', 'accreditations', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Overview' },
    { id: 'thesis', label: 'Arctic Thesis' },
    { id: 'publications', label: 'Publications' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'accreditations', label: 'Credentials' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="brand-badge">
          <div className="brand-crest">
            <Shield size={20} />
          </div>
          <div className="brand-info">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-tag">ISLAMABAD • DEFENSE & STRATEGIC STUDIES</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Islamabad Time Ticker */}
          <div className="badge-pill font-mono" style={{ display: 'none', md: 'inline-flex' }}>
            <Clock size={12} className="pulse-indicator" />
            <span>ISB: {islamabadTime}</span>
          </div>

          {/* CV Button */}
          <button 
            onClick={onOpenCv}
            className="btn-secondary font-mono"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.825rem' }}
            title="View Formatted Academic Curriculum Vitae"
          >
            <FileText size={15} />
            <span>CV</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="mobile-nav-link"
            >
              <span>{link.label}</span>
              <ChevronRight size={16} />
            </button>
          ))}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenCv(); }} 
              className="btn-primary" 
              style={{ width: '100%' }}
            >
              <FileText size={16} />
              <span>Academic CV / Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
