import React, { useState } from 'react';
import { Cpu, Zap, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AIHealthMonitor() {
  const [activeTab, setActiveTab] = useState('agrihive');
  const [selectedCrop, setSelectedCrop] = useState('tomato');
  const [isScanning, setIsScanning] = useState(false);

  const cropSamples = {
    tomato: {
      name: "Tomato Leaf Sample #A-89",
      prediction: "Early Blight Detected (Alternaria solani)",
      confidence: "98.4%",
      shapTopFactors: ["Humid Temperature (+0.42)", "Leaf Spot Pattern (+0.31)", "Soil Nitrogen Ratio (-0.12)"],
      recommendation: "Apply organic copper-based fungicide; optimize drip irrigation schedule."
    },
    cotton: {
      name: "Cotton Crop Field #C-12",
      prediction: "Optimal Soil & Leaf Health",
      confidence: "99.1%",
      shapTopFactors: ["Soil Moisture Level (+0.55)", "Balanced N-P-K Ratio (+0.38)"],
      recommendation: "Maintain current irrigation and monitor pest traps weekly."
    },
    corn: {
      name: "Maize Crop Sample #M-04",
      prediction: "Common Rust Initial Stage",
      confidence: "94.7%",
      shapTopFactors: ["High Pustule Density (+0.48)", "Ambient Humidity (+0.25)"],
      recommendation: "Deploy localized resistant hybrid treatment within 48 hours."
    }
  };

  const currentCropData = cropSamples[selectedCrop];

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 350);
  };

  return (
    <section style={{ padding: '30px 0 60px 0' }} id="console">
      <div className="container">
        <div className="cartforge-card" style={{ padding: '36px' }}>
          {/* Header Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                padding: '12px',
                border: '2.5px solid var(--border-main)',
                backgroundColor: 'var(--accent-lime)',
                color: '#0E0E0E',
                boxShadow: '3px 3px 0px var(--border-main)'
              }}>
                <Cpu size={24} strokeWidth={2.2} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>
                  AI MODEL & FEDERATED CONSOLE
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Interactive execution runner for AgriHive AI & Federated NIDS Models.
                </p>
              </div>
            </div>

            {/* Tab Switches */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setActiveTab('agrihive')}
                className={`cartforge-pill ${activeTab === 'agrihive' ? "cartforge-pill-active" : ""}`}
              >
                AgriHive AI
              </button>
              <button
                onClick={() => setActiveTab('nids')}
                className={`cartforge-pill ${activeTab === 'nids' ? "cartforge-pill-active" : ""}`}
              >
                Federated NIDS
              </button>
            </div>
          </div>

          {/* TAB 1: AGRIHIVE AI */}
          {activeTab === 'agrihive' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  SELECT CROP SAMPLE TO INFER:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {Object.keys(cropSamples).map(key => {
                    const isSelected = selectedCrop === key;
                    return (
                      <button
                        key={key}
                        onClick={() => { setSelectedCrop(key); handleScan(); }}
                        className="cartforge-btn"
                        style={{
                          justifyContent: 'space-between',
                          padding: '12px 16px',
                          textAlign: 'left',
                          fontSize: '0.9rem',
                          backgroundColor: isSelected ? 'var(--accent-lime)' : 'var(--bg-card)',
                          color: isSelected ? '#0E0E0E' : 'var(--text-main)',
                          boxShadow: isSelected ? '3px 3px 0px var(--border-main)' : 'var(--shadow-hard-sm)'
                        }}
                      >
                        <span style={{ fontWeight: isSelected ? 900 : 700 }}>{cropSamples[key].name}</span>
                        {isSelected && <Zap size={16} color="#0E0E0E" fill="#0E0E0E" />}
                      </button>
                    );
                  })}
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Model Pipeline: Random Forest + PSO + SHAP Explainability
                </div>
              </div>

              {/* Output Console Panel */}
              <div style={{
                backgroundColor: '#0E0E0E',
                color: '#F6F2E9',
                padding: '24px',
                border: '2.5px solid var(--border-main)',
                boxShadow: '4px 4px 0px var(--accent-coral)',
                fontFamily: 'var(--font-mono)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', borderBottom: '1px dashed #444', paddingBottom: '10px' }}>
                  <span style={{ opacity: 0.8, fontSize: '0.78rem', color: 'var(--accent-lime)' }}>[MODEL_OUTPUT_CONSOLE]</span>
                  <span style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--accent-lime)' }}>
                    CONFIDENCE: {currentCropData.confidence}
                  </span>
                </div>

                <div style={{ fontSize: '1.05rem', fontWeight: 900, marginBottom: '14px', color: '#FFFFFF' }}>
                  {isScanning ? "Evaluating ML feature vectors..." : currentCropData.prediction}
                </div>

                <div style={{ fontSize: '0.82rem', opacity: 0.9, marginBottom: '6px', color: 'var(--accent-coral)' }}>
                  SHAP Explainability Features:
                </div>
                <ul style={{ listStyle: 'none', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {currentCropData.shapTopFactors.map((factor, fIdx) => (
                    <li key={fIdx} style={{ fontSize: '0.82rem', color: '#D0C8B8' }}>
                      ↳ {factor}
                    </li>
                  ))}
                </ul>

                <div style={{ border: '1.5px solid var(--accent-lime)', padding: '12px', fontSize: '0.82rem', color: '#FFFFFF' }}>
                  <strong style={{ color: 'var(--accent-lime)' }}>Recommendation:</strong> {currentCropData.recommendation}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FEDERATED NIDS */}
          {activeTab === 'nids' && (
            <div style={{ fontFamily: 'var(--font-mono)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div style={{ padding: '16px', border: '2px solid var(--border-main)', backgroundColor: 'var(--bg-main)', boxShadow: '2px 2px 0px var(--border-main)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>NODE 01 (EDGE)</div>
                  <div style={{ fontSize: '1rem', fontWeight: 900, marginTop: '4px' }}>NORMAL FLOW</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>Local Sync: 100%</div>
                </div>

                <div style={{ padding: '16px', border: '2px solid var(--border-main)', backgroundColor: 'var(--bg-main)', boxShadow: '2px 2px 0px var(--border-main)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>NODE 02 (EDGE)</div>
                  <div style={{ fontSize: '1rem', fontWeight: 900, marginTop: '4px' }}>NORMAL FLOW</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>Local Sync: 100%</div>
                </div>

                <div style={{ padding: '16px', border: '2px solid var(--border-main)', backgroundColor: 'var(--accent-coral)', color: '#FFFFFF', boxShadow: '2px 2px 0px var(--border-main)' }}>
                  <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>NODE 03 (THREAT)</div>
                  <div style={{ fontSize: '1rem', fontWeight: 900, marginTop: '4px' }}>INTRUSION FLAG</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.9, marginTop: '2px' }}>Flow Threat Classified</div>
                </div>

                <div style={{ padding: '16px', border: '2px solid var(--border-main)', backgroundColor: 'var(--accent-lime)', color: '#0E0E0E', boxShadow: '2px 2px 0px var(--border-main)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800 }}>AGGREGATOR</div>
                  <div style={{ fontSize: '1rem', fontWeight: 900, marginTop: '4px' }}>FEDERATED AVG</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, marginTop: '2px' }}>Zero Raw Leakage</div>
                </div>
              </div>

              <div style={{ backgroundColor: '#0E0E0E', color: 'var(--accent-lime)', padding: '16px', fontSize: '0.88rem', border: '2.5px solid var(--border-main)', boxShadow: '3px 3px 0px var(--border-main)' }}>
                [NIDS_FEDERATED_LOG]: Decentralized machine learning model parameter aggregation across 4 network nodes complete. Raw packet data retained strictly local.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
