import React, { useState } from 'react';
import { Search, Code, Cpu, Server, Globe, Shield, Database, Sparkles, Layers, CheckCircle } from 'lucide-react';

export default function SkillsMatrix({ categories }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const servicesOffered = [
    {
      title: "AI & ML PLATFORMS",
      desc: "Random Forest predictive modeling, SHAP explainable AI, Particle Swarm Optimization (PSO), and FastAPI deployment.",
      color: "var(--accent-lime)"
    },
    {
      title: "FEDERATED SECURITY",
      desc: "Decentralized Machine Learning Network Intrusion Detection Systems (NIDS) with zero raw traffic data leaks.",
      color: "var(--accent-coral)"
    },
    {
      title: "FULL-STACK WEB DEV",
      desc: "Architecting responsive React & Next.js web applications backed by Node.js REST APIs and MySQL databases.",
      color: "var(--accent-blue)"
    },
    {
      title: "SYSTEMS & C++",
      desc: "Advanced data structures, high-performance C/C++ systems engineering, and algorithmic optimization.",
      color: "var(--accent-yellow)"
    }
  ];

  const categoryTitles = ['ALL', ...categories.map(c => c.title)];

  return (
    <section style={{ padding: '60px 0' }} id="skills">
      <div className="container">
        {/* CORE CAPABILITIES */}
        <div style={{ marginBottom: '32px' }}>
          <div className="cartforge-badge cartforge-badge-lime" style={{ fontSize: '0.9rem', padding: '8px 18px' }}>
            TECHNICAL CAPABILITIES & DOMAINS
          </div>
        </div>

        {/* 4-Item Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '70px'
        }}>
          {servicesOffered.map((service, idx) => (
            <div key={idx} className="cartforge-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                    0{idx + 1} // DOMAIN
                  </span>
                  <div style={{ width: '12px', height: '12px', backgroundColor: service.color, border: '1.5px solid #0E0E0E' }}></div>
                </div>

                <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '10px' }}>
                  {service.title}
                </h4>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SKILLS MATRIX SECTION - Clean Tech Badges (No Percentages) */}
        <div id="matrix" style={{ paddingTop: '40px', borderTop: '2.5px solid var(--border-main)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div className="cartforge-badge cartforge-badge-coral" style={{ fontSize: '0.9rem', padding: '8px 18px' }}>
              TECH STACK & TOOLS
            </div>

            {/* Search Filter */}
            <div className="cartforge-search-box" style={{ maxWidth: '280px' }}>
              <Search size={16} style={{ marginRight: '8px', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search tech stack..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {categoryTitles.map(title => (
              <button
                key={title}
                onClick={() => setActiveCategory(title)}
                className={`cartforge-pill ${activeCategory === title ? "cartforge-pill-active" : ""}`}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Skill Groups */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {categories
              .filter(group => activeCategory === 'ALL' || group.title === activeCategory)
              .map((group, gIdx) => {
                const matchingSkills = group.skills.filter(s =>
                  s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  s.desc.toLowerCase().includes(searchTerm.toLowerCase())
                );

                if (matchingSkills.length === 0) return null;

                return (
                  <div key={gIdx} className="cartforge-card" style={{ padding: '28px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '20px', borderBottom: '2px solid var(--border-main)', paddingBottom: '10px' }}>
                      {group.title}
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                      {matchingSkills.map((skill, sIdx) => (
                        <div 
                          key={sIdx} 
                          style={{
                            padding: '16px',
                            backgroundColor: 'var(--bg-main)',
                            border: '2px solid var(--border-main)',
                            boxShadow: '2px 2px 0px var(--border-main)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: '8px'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle size={16} style={{ color: 'var(--accent-coral)', shrink: 0 }} />
                            <div style={{ fontWeight: 900, fontSize: '1.05rem', color: 'var(--text-main)' }}>
                              {skill.name}
                            </div>
                          </div>

                          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                            {skill.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
