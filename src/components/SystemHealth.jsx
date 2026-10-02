import React, { useState, useEffect } from 'react';
import { Activity, Server, ShieldCheck, Cpu, HardDrive, Wifi, RefreshCw } from 'lucide-react';
import { defaultMockSystemStatus } from '../data/portfolioData';

export default function SystemHealth() {
  const [metrics, setMetrics] = useState(defaultMockSystemStatus);
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  // Simulate real-time metric updates for authenticity
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        pingMs: Math.floor(Math.random() * (35 - 18 + 1)) + 18,
        cpuLoad: `${Math.floor(Math.random() * (26 - 14 + 1)) + 14}%`,
      }));
      setActiveLogIndex(prev => (prev + 1) % defaultMockSystemStatus.logs.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ padding: '30px 0 50px 0' }}>
      <div className="container">
        <div className="glass-panel" style={{
          padding: '28px',
          border: '1px solid rgba(59, 130, 246, 0.25)',
          background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.9) 0%, rgba(11, 15, 25, 0.95) 100%)'
        }}>
          {/* Header Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: '0 0 10px var(--accent-emerald)' }}></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'var(--font-mono)', letterSpacing: '-0.01em' }}>
                LIVE_INFRASTRUCTURE_MONITOR
              </h3>
              <span className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>
                <Activity size={12} /> ALL SYSTEMS OPERATIONAL
              </span>
            </div>

            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <RefreshCw size={12} className="animate-spin" style={{ animationDuration: '3s' }} />
              Auto-sync: 3.5s refresh
            </div>
          </div>

          {/* Grid Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '20px'
          }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Wifi size={14} color="var(--accent-cyan)" /> Network Ping
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginTop: '4px' }}>
                {metrics.pingMs} ms
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Cpu size={14} color="var(--accent-purple)" /> Average CPU Load
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', marginTop: '4px' }}>
                {metrics.cpuLoad}
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={14} color="var(--accent-emerald)" /> Firewall Shield
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', marginTop: '4px' }}>
                {metrics.firewall}
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Server size={14} color="var(--accent-amber)" /> Active Nodes
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent-amber)', marginTop: '4px' }}>
                {metrics.activeNodes} Cluster Nodes
              </div>
            </div>
          </div>

          {/* Live Log Ticker */}
          <div style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '12px 16px',
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--accent-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
              <span style={{ color: 'var(--text-dim)', flexShrink: 0 }}>[STREAM]</span>
              <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                {metrics.logs[activeLogIndex]}
              </span>
            </div>
            <span className="terminal-cursor"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
