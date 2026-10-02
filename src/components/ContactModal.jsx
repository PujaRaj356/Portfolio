import React, { useState } from 'react';
import { Mail, Send, X, CheckCircle2, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose, profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI & Software Systems Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(6px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="cartforge-card" style={{
        width: '100%',
        maxWidth: '560px',
        padding: '36px',
        backgroundColor: 'var(--bg-card)',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
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

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '36px 20px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'var(--accent-lime)',
              color: '#0E0E0E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              border: '2.5px solid var(--border-main)',
              boxShadow: '4px 4px 0px var(--border-main)'
            }}>
              <CheckCircle2 size={36} strokeWidth={2.5} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '8px' }}>
              TRANSMISSION RECEIVED!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
              Thank you for reaching out. Puja will review your message and respond shortly.
            </p>
          </div>
        ) : (
          <div>
            <span className="cartforge-badge cartforge-badge-coral" style={{ marginBottom: '16px' }}>
              CONNECT WITH PUJA R.
            </span>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '20px', marginTop: '6px' }}>
              Transmit Inquiry
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '2.5px solid var(--border-main)',
                    backgroundColor: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    fontWeight: 600
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                  YOUR EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.name@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '2.5px solid var(--border-main)',
                    backgroundColor: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    fontWeight: 600
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                  MESSAGE / INQUIRY DETAILS *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Details regarding project or opportunity..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '2.5px solid var(--border-main)',
                    backgroundColor: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontWeight: 600
                  }}
                />
              </div>

              <button type="submit" className="cartforge-btn cartforge-btn-lime" style={{ justifyContent: 'center', padding: '12px 20px', fontSize: '1rem' }}>
                <Send size={18} /> Transmit Message
              </button>
            </form>

            {/* Direct Links */}
            <div style={{ borderTop: '2.5px solid var(--border-main)', paddingTop: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>
                EMAIL: <a href={`mailto:${profile.email}`} style={{ color: 'var(--text-main)', fontWeight: 800, textDecoration: 'underline' }}>{profile.email}</a>
              </div>
              <div>
                GITHUB: <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: 800, textDecoration: 'underline' }}>github.com/Puja</a>
              </div>
              <div>
                PHONE: <span style={{ fontWeight: 800 }}>{profile.phone}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
