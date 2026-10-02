import React, { useState } from 'react';
import { Sliders, X, Save, Download, Upload, CheckCircle2 } from 'lucide-react';

export default function ProfileEditorModal({ isOpen, onClose, profile, onSaveProfile }) {
  const [edited, setEdited] = useState({ ...profile });
  const [saveMessage, setSaveMessage] = useState('');

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onSaveProfile(edited);
    setSaveMessage('Profile saved successfully!');
    setTimeout(() => {
      setSaveMessage('');
      onClose();
    }, 1200);
  };

  const exportJSON = () => {
    const jsonStr = JSON.stringify(edited, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `it_profile_config.json`;
    a.click();
  };

  const importJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        setEdited(parsed);
        setSaveMessage('JSON Imported!');
        setTimeout(() => setSaveMessage(''), 2000);
      } catch (err) {
        alert('Invalid JSON File structure.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '650px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '32px',
        position: 'relative',
        background: 'var(--bg-secondary)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.08)',
            border: 'none',
            color: 'var(--text-main)',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <Sliders size={22} color="var(--accent-purple)" />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>
            Live Profile Customizer
          </h2>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
          Customize your name, professional title, bio summary, and contact links instantly.
        </p>

        {saveMessage && (
          <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--accent-emerald)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', color: 'var(--accent-emerald)', fontSize: '0.9rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={16} /> {saveMessage}
          </div>
        )}

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>FULL NAME</label>
              <input
                type="text"
                value={edited.name}
                onChange={e => setEdited({ ...edited, name: e.target.value })}
                style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>JOB TITLE</label>
              <input
                type="text"
                value={edited.title}
                onChange={e => setEdited({ ...edited, title: e.target.value })}
                style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>LOCATION</label>
              <input
                type="text"
                value={edited.location}
                onChange={e => setEdited({ ...edited, location: e.target.value })}
                style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>EMAIL</label>
              <input
                type="email"
                value={edited.email}
                onChange={e => setEdited({ ...edited, email: e.target.value })}
                style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>PROFILE PHOTO URL / DATA LINK</label>
            <input
              type="text"
              placeholder="https://example.com/photo.jpg or leave blank for placeholder"
              value={edited.photoUrl || ''}
              onChange={e => setEdited({ ...edited, photoUrl: e.target.value })}
              style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>PROFESSIONAL SUMMARY</label>
            <textarea
              rows={3}
              value={edited.summary}
              onChange={e => setEdited({ ...edited, summary: e.target.value })}
              style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-color)', color: 'var(--text-main)', resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              <Save size={16} /> Save Changes
            </button>
            <button type="button" onClick={exportJSON} className="btn-secondary" style={{ fontSize: '0.85rem' }}>
              <Download size={16} /> Export JSON
            </button>
            <label className="btn-secondary" style={{ fontSize: '0.85rem', cursor: 'pointer' }}>
              <Upload size={16} /> Import
              <input type="file" accept=".json" onChange={importJSON} style={{ display: 'none' }} />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
