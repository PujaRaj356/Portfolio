import React from 'react';
import { Camera, User } from 'lucide-react';

export default function ProfilePhotoCard() {
  return (
    <div style={{ width: '100%', maxWidth: '300px' }}>
      {/* PURE CLEAN NEO-BRUTALIST PHOTO PLACEHOLDER CARD */}
      <div 
        className="cartforge-card interactive-hover-card"
        style={{
          backgroundColor: '#FFFFFF',
          padding: '14px',
          position: 'relative',
          border: '2.5px solid #0E0E0E',
          boxShadow: '6px 6px 0px #0E0E0E',
          transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
      >
        {/* TOP STATUS BAR */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '12px',
          paddingBottom: '8px',
          borderBottom: '2px solid #0E0E0E'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="pulse-dot" style={{
              width: '9px',
              height: '9px',
              backgroundColor: 'var(--accent-coral)',
              borderRadius: '50%',
              display: 'inline-block',
              border: '1px solid #0E0E0E'
            }}></span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 800,
              color: '#0E0E0E',
              letterSpacing: '0.02em'
            }}>
              PHOTO.PLACEHOLDER
            </span>
          </div>

          <span className="cartforge-badge" style={{ fontSize: '0.68rem', padding: '3px 8px', backgroundColor: '#0E0E0E', color: 'var(--accent-lime)' }}>
            PUJA R.
          </span>
        </div>

        {/* PHOTO CANVAS PLACEHOLDER */}
        <div style={{
          width: '100%',
          height: '265px',
          backgroundColor: 'var(--bg-main)',
          border: '2px dashed #0E0E0E',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '16px 12px',
          textAlign: 'center',
          gap: '12px'
        }}>
          {/* Stylized Avatar Silhouette Frame */}
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-lime)',
            border: '2.5px solid #0E0E0E',
            boxShadow: '3px 3px 0px #0E0E0E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            animation: 'pulseGlow 3s infinite ease-in-out'
          }}>
            <User size={34} color="#0E0E0E" />
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              right: '-2px',
              backgroundColor: 'var(--accent-coral)',
              border: '1.5px solid #0E0E0E',
              borderRadius: '50%',
              padding: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Camera size={12} color="#FFFFFF" />
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '0.95rem',
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              color: '#0E0E0E',
              lineHeight: 1.1
            }}>
              YOUR PHOTO HERE
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: 'var(--text-muted)',
              marginTop: '4px'
            }}>
              Portrait Placeholder
            </div>
          </div>

          <div style={{
            backgroundColor: '#0E0E0E',
            color: 'var(--accent-lime)',
            padding: '4px 10px',
            fontSize: '0.68rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            border: '1px solid #0E0E0E',
            boxShadow: '2px 2px 0px var(--accent-coral)'
          }}>
            PORTRAIT FRAME
          </div>
        </div>
      </div>
    </div>
  );
}
