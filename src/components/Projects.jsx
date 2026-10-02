import React, { useState } from 'react';
import { Github, ExternalLink, Layers, X, Heart, Sparkles, CheckCircle2, Shield, Cpu, Code2 } from 'lucide-react';

export default function Projects({ projects, searchFilter = '', categoryFilter = 'ALL' }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [likes, setLikes] = useState({
    agrihive: 42,
    nids: 38,
    'blood-donation': 29
  });
  const [userLiked, setUserLiked] = useState({});

  const toggleLike = (e, id) => {
    e.stopPropagation();
    const isCurrentlyLiked = !!userLiked[id];
    setUserLiked(prev => ({ ...prev, [id]: !isCurrentlyLiked }));
    setLikes(prev => ({
      ...prev,
      [id]: isCurrentlyLiked ? prev[id] - 1 : prev[id] + 1
    }));
  };

  // Filter projects by search query and category
  const filteredProjects = projects.filter(p => {
    const matchesSearch = searchFilter === '' ||
      p.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchFilter.toLowerCase()));

    const matchesCategory = categoryFilter === 'ALL' ||
      (categoryFilter === 'AI' && p.category.includes('AI')) ||
      (categoryFilter === 'CYBER' && (p.category.includes('Cyber') || p.category.includes('NIDS'))) ||
      (categoryFilter === 'WEB' && (p.category.includes('Web') || p.category.includes('Full-Stack'))) ||
      (categoryFilter === 'SYSTEMS' && p.category.includes('Systems'));

    return matchesSearch && matchesCategory;
  });

  // Card background theme colors matching CartForge screenshot 1!
  const cardColorPalette = [
    { bg: 'var(--accent-lime)', badgeBg: '#0E0E0E', badgeText: '#FFFFFF', icon: Cpu },
    { bg: 'var(--accent-coral)', badgeBg: '#0E0E0E', badgeText: '#FFFFFF', icon: Shield },
    { bg: 'var(--accent-blue)', badgeBg: '#0E0E0E', badgeText: '#FFFFFF', icon: Code2 }
  ];

  return (
    <section style={{ padding: '40px 0 80px 0' }} id="work">
      <div className="container">
        {/* Section Title */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
          <div className="cartforge-badge cartforge-badge-lime" style={{ fontSize: '0.9rem', padding: '8px 18px' }}>
            FEATURED PROJECTS & SYSTEMS
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>
            CLICK ANY CARD FOR ARCHITECTURE CONSOLE
          </div>
        </div>

        {/* 3-Column CartForge Grid Layout (Matching Screenshot 1 Bottom Cards!) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: '32px'
        }}>
          {filteredProjects.map((project, idx) => {
            const themeColor = cardColorPalette[idx % cardColorPalette.length];
            const IconComp = themeColor.icon;
            const isLiked = !!userLiked[project.id];
            const likeCount = likes[project.id] || 0;

            return (
              <div
                key={project.id}
                className="cartforge-card"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              >
                {/* CARTFORGE TOP COLOR BLOCK (Screenshot 1: Bright Lime, Coral, Blue Card Tops!) */}
                <div style={{
                  backgroundColor: themeColor.bg,
                  borderBottom: '2.5px solid var(--border-main)',
                  height: '210px',
                  padding: '16px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Top-Left Category Badge in Solid Black Rectangular Box */}
                  <span style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: themeColor.badgeBg,
                    color: themeColor.badgeText,
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    padding: '6px 14px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    border: '1.5px solid var(--border-main)'
                  }}>
                    {project.category.split('&')[0]}
                  </span>

                  {/* Top-Right Heart / Bookmark Action Box (Exact Match to Screenshot 1!) */}
                  <button
                    onClick={(e) => toggleLike(e, project.id)}
                    title={isLiked ? "Saved to favorites" : "Like project"}
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      width: '42px',
                      height: '42px',
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #0E0E0E',
                      boxShadow: '2px 2px 0px #0E0E0E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.15s ease'
                    }}
                  >
                    <Heart
                      size={20}
                      fill={isLiked ? '#FF6E59' : 'none'}
                      color={isLiked ? '#FF6E59' : '#0E0E0E'}
                      strokeWidth={2.2}
                    />
                  </button>

                  {/* Card Center Visual Icon / Feature Graphic */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}>
                    <div style={{
                      width: '74px',
                      height: '74px',
                      backgroundColor: '#0E0E0E',
                      border: '2.5px solid #0E0E0E',
                      boxShadow: '4px 4px 0px #0E0E0E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: themeColor.bg
                    }}>
                      <IconComp size={40} strokeWidth={2.2} />
                    </div>

                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      backgroundColor: '#FFFFFF',
                      color: '#0E0E0E',
                      padding: '3px 10px',
                      border: '1.5px solid #0E0E0E',
                      boxShadow: '2px 2px 0px #0E0E0E'
                    }}>
                      {project.awardBadge}
                    </span>
                  </div>
                </div>

                {/* CARTFORGE CARD INTERIOR CONTENT */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--bg-card)' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-muted)' }}>
                        PROJECT ID: #0{idx + 1}
                      </span>
                      <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Heart size={14} fill="#FF6E59" color="#FF6E59" /> {likeCount}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '10px', lineHeight: 1.25 }}>
                      {project.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.6, marginBottom: '18px' }}>
                      {project.shortDesc}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags Pills */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                      {project.tags.slice(0, 5).map((tag, tIdx) => (
                        <span key={tIdx} style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '3px 8px',
                          border: '1.5px solid var(--border-main)',
                          backgroundColor: 'var(--bg-main)',
                          fontWeight: 700,
                          color: 'var(--text-main)'
                        }}>
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', padding: '3px 6px', fontWeight: 800 }}>
                          +{project.tags.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Bottom CTA Button */}
                    <button
                      className="cartforge-btn cartforge-btn-black"
                      style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: '0.88rem' }}
                    >
                      <Layers size={15} /> View Architecture Spec
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CartForge Neo-Brutalist Architecture Details Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(6px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="cartforge-card" style={{
            width: '100%',
            maxWidth: '680px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '36px',
            backgroundColor: 'var(--bg-card)',
            position: 'relative'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'var(--accent-coral)',
                border: '2px solid var(--border-main)',
                color: '#FFFFFF',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '2px 2px 0px var(--border-main)'
              }}
            >
              <X size={20} />
            </button>

            <span className="cartforge-badge cartforge-badge-lime" style={{ marginBottom: '14px' }}>
              {selectedProject.awardBadge}
            </span>

            <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '12px', marginTop: '6px' }}>
              {selectedProject.title}
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontFamily: 'var(--font-body)', lineHeight: 1.6, marginBottom: '24px' }}>
              {selectedProject.shortDesc}
            </p>

            {/* Architecture Spec Box */}
            <div style={{
              backgroundColor: '#0E0E0E',
              color: '#F6F2E9',
              padding: '20px',
              marginBottom: '24px',
              border: '2.5px solid var(--border-main)',
              boxShadow: '4px 4px 0px var(--accent-lime)'
            }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: 'var(--accent-lime)', marginBottom: '8px', textTransform: 'uppercase' }}>
                ARCHITECTURE & ALGORITHMIC SPECIFICATION:
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                {selectedProject.architecture}
              </div>
            </div>

            <h4 style={{ fontSize: '1rem', fontWeight: 900, marginBottom: '14px', textTransform: 'uppercase' }}>
              SYSTEM HIGHLIGHTS:
            </h4>
            <ul style={{ listStyle: 'none', marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {selectedProject.highlights.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-coral)', shrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="cartforge-btn" style={{ flex: 1, justifyContent: 'center' }}>
                <Github size={18} /> Source Repository
              </a>
              <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="cartforge-btn cartforge-btn-lime" style={{ flex: 1, justifyContent: 'center' }}>
                <ExternalLink size={18} /> Live Deployment
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
