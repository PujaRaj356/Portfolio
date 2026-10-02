import React, { useState } from 'react';
import { ArrowUpRight, Search, Terminal, Cpu, Code2, Shield, Download, FileText, Sparkles, CheckCircle2, Layers, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import ProfilePhotoCard from './ProfilePhotoCard';

export default function Hero({ profile, onUpdatePhoto, onOpenContact, onOpenTerminal, onSearchChange, selectedCategory, onCategoryChange, totalProjectsCount }) {
  const [internalSearch, setInternalSearch] = useState('');

  const handleSearchInput = (e) => {
    const val = e.target.value;
    setInternalSearch(val);
    if (onSearchChange) onSearchChange(val);
  };

  const handleDownloadResume = () => {
    confetti({
      particleCount: 100,
      spread: 75,
      origin: { y: 0.6 }
    });

    const resumeContent = `# ${profile.name} - ${profile.title}
Phone: ${profile.phone} | Email: ${profile.email}
LinkedIn: ${profile.linkedin} | GitHub: ${profile.github}
Location: ${profile.location}

## SUMMARY
${profile.summary}

## EDUCATION
- ${profile.education[0].degree} (${profile.education[0].institution})
  Score: ${profile.education[0].score}
`;

    const blob = new Blob([resumeContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Puja_R_Resume.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const categories = [
    { id: 'ALL', label: 'All Projects', icon: Layers },
    { id: 'AI', label: 'AI & Machine Learning', icon: Cpu },
    { id: 'CYBER', label: 'Cybersecurity & NIDS', icon: Shield },
    { id: 'WEB', label: 'Full-Stack Web', icon: Globe },
    { id: 'SYSTEMS', label: 'Systems & C++', icon: Code2 }
  ];

  return (
    <section id="about" style={{ padding: '40px 0 60px 0' }}>
      <div className="container">
        {/* HERO TOP BANNER (Header-less Main Hero Box) */}
        <div className="cartforge-card" style={{
          backgroundColor: 'var(--accent-lime)',
          padding: '42px 36px',
          marginBottom: '44px',
          position: 'relative'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}>
            {/* LEFT COLUMN: HERO TEXT & ACTIONS */}
            <div>
              {/* Top Info Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="cartforge-logo-badge" style={{ backgroundColor: '#0E0E0E', color: 'var(--accent-lime)' }}>
                    PR
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.18rem', color: '#0E0E0E', lineHeight: 1.1 }}>
                      PUJA RANGARAJ
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', fontWeight: 800, color: '#222222' }}>
                      M.SC SOFTWARE SYSTEMS (2024–2029) • CIT COIMBATORE
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="cartforge-badge" style={{ backgroundColor: '#0E0E0E', color: '#FFFFFF', padding: '5px 12px' }}>
                    CGPA: 9.1
                  </span>
                  <span className="cartforge-badge cartforge-badge-coral" style={{ padding: '5px 12px' }}>
                    NIT WINNER
                  </span>
                </div>
              </div>

              {/* Giant Display Headline */}
              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 0.98,
                color: '#0E0E0E',
                textTransform: 'uppercase',
                marginBottom: '18px',
                letterSpacing: '-0.025em'
              }}>
                <div>BUILDING</div>
                <div className="text-outlined" style={{ WebkitTextStroke: '2.5px #0E0E0E' }}>
                  DIFFERENT.
                </div>
              </h1>

              {/* Subheading / Bio */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: '#111111',
                maxWidth: '740px',
                lineHeight: 1.6,
                marginBottom: '28px'
              }}>
                {profile.summary}
              </p>

              {/* Main Action CTAs */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#work" className="cartforge-btn cartforge-btn-black" style={{ padding: '12px 24px', fontSize: '0.92rem' }}>
                  Explore Projects <ArrowUpRight size={17} />
                </a>

                <button onClick={onOpenContact} className="cartforge-btn cartforge-btn-coral" style={{ padding: '12px 22px', fontSize: '0.92rem' }}>
                  Transmit Inquiry
                </button>

                <button onClick={handleDownloadResume} className="cartforge-btn" style={{ padding: '12px 20px', fontSize: '0.9rem' }}>
                  <FileText size={16} /> Resume <Download size={14} />
                </button>

                <button onClick={onOpenTerminal} className="cartforge-btn" style={{ padding: '12px 18px', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                  <Terminal size={16} /> PUJA.AI~$
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: PROFILE PHOTO PLACEHOLDER CARD */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ProfilePhotoCard />
            </div>
          </div>
        </div>

        {/* STATS & CREDENTIALS ROW */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '20px',
          marginBottom: '50px'
        }}>
          {profile.stats.map((stat, idx) => {
            const bgColors = ['var(--accent-lime)', 'var(--accent-coral)', 'var(--accent-blue)', 'var(--accent-yellow)'];
            const cardBg = bgColors[idx % bgColors.length];
            return (
              <div 
                key={idx} 
                className="cartforge-card" 
                style={{ 
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span className="cartforge-badge">0{idx + 1}</span>
                  <div style={{ width: '13px', height: '13px', backgroundColor: cardBg, border: '2px solid #0E0E0E' }}></div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, marginTop: '3px', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '3px' }}>
                    {stat.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div style={{ padding: '14px 0' }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '28px'
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '6px',
                textTransform: 'uppercase'
              }}>
                PROJECTS & TECHNICAL ARCHITECTURES
              </div>

              <h2 style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.02em'
              }}>
                <div>Featured</div>
                <div style={{ color: 'var(--accent-coral)' }}>
                  Work Showcase
                </div>
              </h2>
            </div>

            {/* Search Input Box */}
            <div className="cartforge-search-box">
              <Search size={18} style={{ marginRight: '10px', color: '#555' }} />
              <input
                type="text"
                placeholder="Search projects, skills, tech..."
                value={internalSearch}
                onChange={handleSearchInput}
              />
            </div>
          </div>

          {/* Filter Pills Tag Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '20px',
            borderBottom: '2.5px solid var(--border-main)',
            paddingBottom: '20px'
          }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {categories.map((cat) => {
                const isActive = (selectedCategory || 'ALL') === cat.id;
                const CatIcon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onCategoryChange && onCategoryChange(cat.id)}
                    className={`cartforge-pill ${isActive ? 'cartforge-pill-active' : ''}`}
                  >
                    {CatIcon && <CatIcon size={15} />}
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: 'var(--text-main)',
              letterSpacing: '0.05em'
            }}>
              {totalProjectsCount || 3} FEATURED PROJECTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
