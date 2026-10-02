import React from 'react';
import { Award, CheckCircle, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certifications({ certifications }) {
  return (
    <section style={{ padding: '60px 0' }} id="certifications">
      <div className="container">
        <div>
          <h2 className="section-title">Industry Certifications & Credentials</h2>
          <p className="section-subtitle">
            Verified qualifications across Cloud Computing, Network Engineering, and IT Security.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(59, 130, 246, 0.15)',
                border: '1px solid var(--accent-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)',
                flexShrink: 0
              }}>
                <Award size={24} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span className={`badge badge-${cert.badgeColor || 'blue'}`}>
                    {cert.issuer}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {cert.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '6px', marginBottom: '8px' }}>
                  {cert.name}
                </h3>

                {cert.verified && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                    <ShieldCheck size={14} /> Verified Credential
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
