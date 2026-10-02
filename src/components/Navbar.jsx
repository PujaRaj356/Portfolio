import React from 'react';
import { Download, Sun, Moon, Terminal, FileText, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar({ onOpenTerminal, onOpenContact, currentTheme, onToggleTheme, profile }) {
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

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg-main)',
      borderBottom: '2.5px solid var(--border-main)',
      padding: '14px 0',
      transition: 'background-color 0.25s ease'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Developer Brand Logo Badge */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '14px' }}
        >
          <div className="cartforge-logo-badge">
            PR
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 900, 
              fontSize: '1.25rem', 
              lineHeight: 1.1, 
              letterSpacing: '-0.02em',
              textTransform: 'uppercase' 
            }}>
              PUJA R.
            </div>
            <div style={{ 
              fontSize: '0.72rem', 
              fontFamily: 'var(--font-mono)', 
              fontWeight: 700, 
              color: 'var(--text-muted)',
              letterSpacing: '0.05em' 
            }}>
              SOFTWARE ENGINEER & AI DEVELOPER
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '26px' }} className="desktop-nav">
          <a href="#about" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 800, fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
            About
          </a>
          <a href="#work" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 800, fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
            Projects
          </a>
          <a href="#skills" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 800, fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
            Skills
          </a>
          <a href="#experience" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 800, fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
            Experience
          </a>
          <a href="#console" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 800, fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
            AI Console
          </a>
        </nav>

        {/* Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onToggleTheme}
            className="cartforge-pill"
            title={`Switch to ${currentTheme === 'light' ? 'Dark' : 'Light'} Mode`}
            style={{ padding: '8px 12px' }}
          >
            {currentTheme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            onClick={onOpenTerminal}
            className="cartforge-pill cartforge-pill-active"
            title="Launch Terminal Shell"
            style={{ padding: '8px 14px', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}
          >
            <Terminal size={14} /> Terminal
          </button>

          <button
            onClick={handleDownloadResume}
            className="cartforge-btn cartforge-btn-coral"
            style={{ padding: '9px 18px', fontSize: '0.88rem' }}
          >
            <FileText size={15} /> Resume <Download size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
