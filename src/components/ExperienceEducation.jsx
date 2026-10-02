import React from 'react';
import { GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

export default function ExperienceEducation({ education, internship }) {
  return (
    <section style={{ padding: '60px 0' }} id="experience">
      <div className="container">
        <div style={{ marginBottom: '32px' }}>
          <div className="cartforge-badge cartforge-badge-lime" style={{ fontSize: '0.9rem', padding: '8px 18px' }}>
            ACADEMIC & PROFESSIONAL CREDENTIALS
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {/* Internship Card */}
          <div className="cartforge-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span className="cartforge-badge cartforge-badge-coral">
                {internship.duration}
              </span>
              <div style={{ padding: '8px', backgroundColor: 'var(--accent-lime)', border: '2px solid var(--border-main)', boxShadow: '2px 2px 0px var(--border-main)' }}>
                <Briefcase size={20} color="#0E0E0E" />
              </div>
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '6px' }}>
              {internship.title}
            </h3>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-coral)', marginBottom: '20px', textTransform: 'uppercase' }}>
              {internship.company}
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {internship.highlights.map((h, hIdx) => (
                <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-coral)', shrink: 0, marginTop: '3px' }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Background Card */}
          <div className="cartforge-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span className="cartforge-badge">
                ACADEMIC STANDING
              </span>
              <div style={{ padding: '8px', backgroundColor: 'var(--accent-blue)', border: '2px solid var(--border-main)', boxShadow: '2px 2px 0px var(--border-main)' }}>
                <GraduationCap size={20} color="#0E0E0E" />
              </div>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: idx === 0 ? '24px' : '0', paddingBottom: idx === 0 ? '20px' : '0', borderBottom: idx === 0 ? '2px dashed var(--border-subtle)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px', flexWrap: 'wrap', gap: '8px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900 }}>
                    {edu.degree}
                  </h3>
                  <span style={{ fontSize: '0.88rem', fontWeight: 900, fontFamily: 'var(--font-mono)', backgroundColor: 'var(--accent-lime)', color: '#0E0E0E', padding: '2px 8px', border: '1.5px solid var(--border-main)' }}>
                    {edu.score}
                  </span>
                </div>

                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  {edu.institution} ({edu.period})
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
