import React from 'react';
import { Trophy, ShieldCheck, Award, Star } from 'lucide-react';

export default function AchievementsHonors({ achievements, certifications }) {
  const cardColors = ['var(--accent-lime)', 'var(--accent-coral)', 'var(--accent-blue)', 'var(--accent-yellow)'];

  return (
    <section style={{ padding: '60px 0' }} id="achievements">
      <div className="container">
        <div style={{ marginBottom: '32px' }}>
          <div className="cartforge-badge cartforge-badge-coral" style={{ fontSize: '0.9rem', padding: '8px 18px' }}>
            AWARDS & INDUSTRY RECOGNITION
          </div>
        </div>

        {/* Achievements Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {achievements.map((item, idx) => {
            const color = cardColors[idx % cardColors.length];
            return (
              <div key={idx} className="cartforge-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span className="cartforge-badge">
                      {item.badge}
                    </span>
                    <div style={{ padding: '6px', backgroundColor: color, border: '1.5px solid #0E0E0E', boxShadow: '2px 2px 0px #0E0E0E' }}>
                      <Trophy size={18} color="#0E0E0E" />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 900, marginBottom: '8px' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={24} style={{ color: 'var(--accent-coral)' }} /> VERIFIED CERTIFICATIONS
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {certifications.map((cert, cIdx) => (
              <div key={cIdx} className="cartforge-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ padding: '12px', backgroundColor: 'var(--accent-lime)', border: '2px solid var(--border-main)', boxShadow: '3px 3px 0px var(--border-main)' }}>
                  <Award size={24} color="#0E0E0E" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                    {cert.badge} • {cert.year}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 900, marginTop: '2px' }}>
                    {cert.name}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Issuer: {cert.issuer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
