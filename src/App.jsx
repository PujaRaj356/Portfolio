import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Hero from './components/Hero';
import AIHealthMonitor from './components/AIHealthMonitor';
import SkillsMatrix from './components/SkillsMatrix';
import Projects from './components/Projects';
import AchievementsHonors from './components/AchievementsHonors';
import ExperienceEducation from './components/ExperienceEducation';
import TerminalModal from './components/TerminalModal';
import ContactModal from './components/ContactModal';
import { pujaProfile } from './data/portfolioData';
import { ArrowUp, Terminal, Code, ArrowUpRight, Mail, Phone, MapPin, Sun, Moon, Sparkles, Layers, Cpu, GraduationCap, Award, FileText, Download, FolderGit2, User } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState(() => {
    const savedPhoto = localStorage.getItem('puja_profile_photo');
    return savedPhoto ? { ...pujaProfile, photoUrl: savedPhoto } : pujaProfile;
  });
  const [theme, setTheme] = useState('light');
  const [searchFilter, setSearchFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleUpdatePhoto = (newPhotoUrl) => {
    setProfile(prev => {
      const updated = { ...prev, photoUrl: newPhotoUrl };
      if (newPhotoUrl) {
        localStorage.setItem('puja_profile_photo', newPhotoUrl);
      } else {
        localStorage.removeItem('puja_profile_photo');
      }
      return updated;
    });
  };

  const handleDownloadResume = () => {
    confetti({
      particleCount: 110,
      spread: 80,
      origin: { y: 0.6 }
    });

    const resumeContent = `# ${profile.name} - ${profile.title}
Phone: ${profile.phone} | Email: ${profile.email}
LinkedIn: ${profile.linkedin} | GitHub: ${profile.github}
Location: ${profile.location}

## SUMMARY
${profile.summary}

## ACADEMIC HIGHLIGHTS
- ${profile.education[0].degree} (${profile.education[0].institution})
  Score: ${profile.education[0].score}
- Class 12 HSC: 94% (Geethanjalee Hr Sec)

## ACHIEVEMENTS
- 1st Place Winner - NIT Hackathon (AgriHive Platform)
- Best Theme Award - Racathon
- Finalist - U & Me Hackathon (Top 240)
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', transition: 'background-color 0.25s ease', position: 'relative' }}>
      
      {/* DESKTOP SIDE MARGIN RAILS (High-Tech Engineering Gutter Displays) */}
      <div className="desktop-side-rail" style={{
        position: 'fixed',
        left: '18px',
        top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'left center',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        fontWeight: 800,
        color: 'var(--text-muted)',
        letterSpacing: '0.08em',
        pointerEvents: 'none'
      }}>
        <span className="pulse-dot" style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-lime)', borderRadius: '50%', border: '1px solid #0E0E0E' }}></span>
        SYSTEM // PUJA.AI PORTFOLIO
      </div>

      <div className="desktop-side-rail" style={{
        position: 'fixed',
        right: '18px',
        top: '50%',
        transform: 'translateY(-50%) rotate(90deg)',
        transformOrigin: 'right center',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        fontWeight: 800,
        color: 'var(--text-muted)',
        letterSpacing: '0.08em',
        pointerEvents: 'none'
      }}>
        CIT COIMBATORE • M.SC SOFTWARE SYSTEMS (9.1 CGPA)
      </div>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, position: 'relative' }}>
        <Hero
          profile={profile}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onSearchChange={setSearchFilter}
          selectedCategory={categoryFilter}
          onCategoryChange={setCategoryFilter}
          totalProjectsCount={profile.projects.length}
        />

        <Projects 
          projects={profile.projects}
          searchFilter={searchFilter}
          categoryFilter={categoryFilter}
        />

        <SkillsMatrix categories={profile.skillCategories} />

        <ExperienceEducation education={profile.education} internship={profile.internship} />

        <AchievementsHonors achievements={profile.achievements} certifications={profile.certifications} />

        <AIHealthMonitor />

        {/* BOTTOM RESUME & CONTACT SECTION */}
        <section style={{ padding: '50px 0 20px 0' }} id="contact">
          <div className="container">
            {/* DEDICATED RESUME DOWNLOAD CARD */}
            <div className="cartforge-card" style={{ 
              padding: '32px', 
              backgroundColor: 'var(--accent-lime)', 
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span className="cartforge-badge" style={{ backgroundColor: '#0E0E0E', color: '#FFFFFF' }}>
                    OFFICIAL DOSSIER
                  </span>
                  <span className="cartforge-badge cartforge-badge-coral">
                    VERIFIED ACADEMIC RECORD
                  </span>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0E0E0E', textTransform: 'uppercase', marginBottom: '4px' }}>
                  DOWNLOAD RESUME / CV
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#222222', fontWeight: 700 }}>
                  Puja R. • M.Sc. Software Systems (CIT) • CGPA 9.1 • NIT Hackathon Winner
                </p>
              </div>

              <button
                onClick={handleDownloadResume}
                className="cartforge-btn cartforge-btn-black"
                style={{ padding: '14px 28px', fontSize: '0.95rem' }}
              >
                <FileText size={18} /> DOWNLOAD RESUME <Download size={16} />
              </button>
            </div>

            {/* CONTACT DETAILS CARD */}
            <div className="cartforge-card" style={{ padding: '32px', backgroundColor: 'var(--bg-card)' }}>
              <div style={{ marginBottom: '24px' }}>
                <span className="cartforge-badge cartforge-badge-coral" style={{ fontSize: '0.82rem', padding: '6px 14px' }}>
                  CONNECT & COLLABORATE
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '28px', fontFamily: 'var(--font-mono)' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800, marginBottom: '4px' }}>
                    DIRECT EMAIL
                  </div>
                  <a href={`mailto:${profile.email}`} style={{ color: 'var(--text-main)', fontWeight: 900, fontSize: '0.92rem', textDecoration: 'underline' }}>
                    {profile.email.toUpperCase()}
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800, marginBottom: '4px' }}>
                    GITHUB PROFILES
                  </div>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: 900, fontSize: '0.92rem', textDecoration: 'underline' }}>
                    GITHUB.COM/PUJA
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800, marginBottom: '4px' }}>
                    LINKEDIN NETWORK
                  </div>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: 900, fontSize: '0.92rem', textDecoration: 'underline' }}>
                    LINKEDIN.COM/IN/PUJA
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800, marginBottom: '4px' }}>
                    ACADEMIC INSTITUTION
                  </div>
                  <div style={{ fontWeight: 900, fontSize: '0.9rem' }}>
                    CIT COIMBATORE • TAMIL NADU
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="cartforge-btn cartforge-btn-lime"
                  style={{ padding: '10px 22px', fontSize: '0.9rem' }}
                >
                  TRANSMIT INQUIRY <ArrowUpRight size={16} />
                </button>

                <button
                  onClick={handleDownloadResume}
                  className="cartforge-btn"
                  style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                >
                  <FileText size={15} /> Resume <Download size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING CYBER TASKBAR DOCK */}
      <div className="floating-dock-bar">
        <a href="#about" className="dock-item">
          <User size={14} /> About
        </a>
        <a href="#work" className="dock-item">
          <FolderGit2 size={14} /> Projects
        </a>
        <a href="#skills" className="dock-item">
          <Cpu size={14} /> Skills
        </a>
        <a href="#experience" className="dock-item">
          <GraduationCap size={14} /> Experience
        </a>
        
        <button
          onClick={handleDownloadResume}
          className="dock-item dock-item-active"
          style={{ backgroundColor: 'var(--accent-coral)', borderColor: '#0E0E0E' }}
          title="Download Resume"
        >
          <FileText size={14} /> Resume <Download size={13} />
        </button>

        <div style={{ width: '1.5px', height: '18px', backgroundColor: 'var(--border-main)', margin: '0 2px', opacity: 0.4 }}></div>

        <button
          onClick={toggleTheme}
          className="dock-item"
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          style={{ padding: '7px 10px' }}
        >
          {theme === 'light' ? <Moon size={15} color="var(--text-main)" /> : <Sun size={15} color="var(--accent-yellow)" />}
        </button>

        <button
          onClick={() => setIsTerminalOpen(true)}
          className="dock-item dock-item-active"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          <Terminal size={14} /> PUJA.AI~$
        </button>

        <button
          onClick={scrollToTop}
          className="dock-item"
          style={{ padding: '7px 10px' }}
          title="Scroll to Top"
        >
          <ArrowUp size={15} />
        </button>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '3px solid var(--border-main)',
        backgroundColor: 'var(--bg-card)',
        padding: '36px 0 90px 0',
        marginTop: '60px'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="cartforge-logo-badge" style={{ width: '28px', height: '28px', fontSize: '0.85rem' }}>PR</div>
              {profile.name} • {profile.institution}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              M.Sc. Software Systems (2024–2029) • CGPA 9.1 • AI & Full-Stack Developer
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="cartforge-pill cartforge-pill-active"
              style={{ padding: '8px 14px', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}
            >
              <Terminal size={14} /> PUJA.AI~$
            </button>

            <button
              onClick={scrollToTop}
              className="cartforge-pill"
              style={{ padding: '8px 12px' }}
              title="Scroll to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        profile={profile}
        onOpenContact={() => {
          setIsTerminalOpen(false);
          setIsContactOpen(true);
        }}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        profile={profile}
      />
    </div>
  );
}
