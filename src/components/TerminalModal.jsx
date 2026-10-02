import React, { useState, useRef, useEffect } from 'react';
import { X, CornerDownLeft } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose, profile, onOpenContact }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: '===================================================' },
    { type: 'output', text: '   PUJA.AI // CARTFORGE TERMINAL CONSOLE v4.0      ' },
    { type: 'output', text: '   Type "help" to view available system commands.  ' },
    { type: 'output', text: '===================================================' }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: `puja@cit-ai-lab:~$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE SYSTEM COMMANDS:
  help        - Show available terminal commands menu
  whoami      - Display Puja R's profile & academic standing
  agrihive    - Show AgriHive AI Platform (NIT 1st Place Winner)
  nids        - Show Federated Learning Network Intrusion Detection System
  skills      - List Python, React, Next.js, ML, and Security skills
  education   - View CIT M.Sc Software Systems details & CGPA (9.1)
  contact     - Transmit inquiry & view email/phone
  clear       - Clear terminal console output`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `NAME: ${profile.name}\nROLE: ${profile.title}\nINSTITUTION: ${profile.institution}\nCGPA: ${profile.cgpa}\nEMAIL: ${profile.email}\nPHONE: ${profile.phone}`
        });
        break;

      case 'agrihive':
        newHistory.push({
          type: 'output',
          text: `PROJECT: AGRIHIVE - AI Smart Agriculture Platform\nAWARD: 🥇 1st Place Winner @ NIT Hackathon\nSTACK: Python, FastAPI, Scikit-learn, Random Forest, PSO, SHAP`
        });
        break;

      case 'nids':
        newHistory.push({
          type: 'output',
          text: `PROJECT: Federated Learning Network Intrusion Detection System (NIDS)\nSTACK: Python, Scikit-learn, Federated Learning, Network Flow Analysis`
        });
        break;

      case 'skills':
        const skillsText = profile.skillCategories.map(cat => `[${cat.title}]\n  ` + cat.skills.map(s => `${s.name.padEnd(24, '.')} ${s.level}%`).join('\n  ')).join('\n\n');
        newHistory.push({ type: 'output', text: `TECHNICAL SKILLS:\n${skillsText}` });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `DEGREE: M.Sc. Software Systems (5 Year Integrated)\nCOLLEGE: Coimbatore Institute of Technology (2024 - 2029)\nSCORE: CGPA 9.1 [Till 4th Semester]`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${profile.email}\nPhone: ${profile.phone}\nGitHub: ${profile.github}\nLinkedIn: ${profile.linkedin}`
        });
        onOpenContact();
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '780px',
        height: '520px',
        backgroundColor: '#0E0E0E',
        color: '#F6F2E9',
        border: '3px solid var(--border-main)',
        boxShadow: '8px 8px 0px var(--accent-lime)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)'
      }}>
        {/* Terminal Header */}
        <div style={{
          backgroundColor: '#1C1C1C',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2.5px solid var(--border-main)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--accent-lime)', border: '1px solid #000' }}></div>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-lime)', marginLeft: '6px' }}>
              puja@cit-ai-lab: ~ (bash)
            </span>
          </div>

          <button onClick={onClose} style={{ background: 'var(--accent-coral)', border: '1.5px solid #fff', color: '#FFFFFF', padding: '2px 8px', cursor: 'pointer', fontWeight: 800 }}>
            <X size={16} />
          </button>
        </div>

        {/* Output Body */}
        <div style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
          fontSize: '0.88rem',
          lineHeight: 1.6
        }}>
          {history.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '8px', whiteSpace: 'pre-wrap' }}>
              {item.type === 'input' && (
                <span style={{ fontWeight: 800, color: 'var(--accent-lime)' }}>{item.text}</span>
              )}
              {item.type === 'output' && (
                <span style={{ color: '#F6F2E9' }}>{item.text}</span>
              )}
              {item.type === 'error' && (
                <span style={{ color: 'var(--accent-coral)', fontWeight: 800 }}>{item.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Form Input */}
        <form onSubmit={handleCommandSubmit} style={{
          padding: '14px 18px',
          borderTop: '2.5px solid var(--border-main)',
          backgroundColor: '#1C1C1C',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontWeight: 800, color: 'var(--accent-lime)' }}>puja@cit-ai-lab:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'whoami', 'skills'..."
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#FFFFFF',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 600
            }}
          />
          <button type="submit" style={{ background: 'none', border: 'none', color: 'var(--accent-lime)', cursor: 'pointer' }}>
            <CornerDownLeft size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
