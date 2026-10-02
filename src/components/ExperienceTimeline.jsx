import React from 'react';
import { Briefcase, Calendar, Award, CheckCircle2 } from 'lucide-react';

export default function ExperienceTimeline({ experience }) {
  return (
    <section style={{ padding: '60px 0' }} id="experience">
      <div className="container">
        <div>
          <h2 className="section-title">Career Experience & Operations</h2>
          <p className="section-subtitle">
            Track record in enterprise systems management, incident mitigation, and cloud architecture.
          </p>
        </div>

        <div style={{ position: 'relative', paddingLeft: '24px', borderLeft: '2px solid var(--border-glow)' }}>
          {experience.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '40px', position: 'relative' }}>
              {/* Timeline Bullet Dot */}
              <div style={{
                position: 'absolute',
                left: '-32px',
                top: '0px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'var(--accent-blue)',
                border: '4px solid var(--bg-primary)',
                boxShadow: '0 0 10px var(--accent-blue)'
              }}></div>

              <div className="glass-panel" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    {item.role}
                  </h3>
                  <span className="badge badge-blue" style={{ fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={12} /> {item.period}
                  </span>
                </div>

                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Briefcase size={16} /> {item.company}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  {item.description}
                </p>

                {/* Key Achievements Bullet Points */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Award size={14} /> Key Accomplishments:
                  </div>
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                      <CheckCircle2 size={14} color="var(--accent-emerald)" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
