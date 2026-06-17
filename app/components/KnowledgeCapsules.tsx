'use client'
import { useState } from 'react'
import { knowledgeCapsules } from '../data/siteData'

const categoryColors: Record<string, string> = {
  cosmology: '#7C4DFF', astrophysics: '#4FC3F7', astronomy: '#FFB300', instruments: '#00E5FF',
}

export default function KnowledgeCapsules() {
  return (
    <section id="capsules" style={{ padding: '7rem 0', background: 'var(--deep)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '20%', right: '8%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,195,247,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>05 / Knowledge Capsules</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em', color: '#E8F4FD' }}>
            Space in <span style={{ color: '#FFB300' }}>60 Seconds</span>
          </h2>
          <p style={{ color: 'rgba(232,244,253,0.35)', fontSize: '0.88rem', marginTop: '0.6rem', fontWeight: 300 }}>
            Flip any card to unlock the science. Quick, dense, and mind-expanding.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {knowledgeCapsules.map(cap => <CapsuleCard key={cap.id} capsule={cap} />)}
        </div>
      </div>
    </section>
  )
}

function CapsuleCard({ capsule }: { capsule: typeof knowledgeCapsules[0] }) {
  const [flipped, setFlipped] = useState(false)
  const catColor = categoryColors[capsule.category] || '#4FC3F7'

  return (
    <div onClick={() => setFlipped(!flipped)} style={{ perspective: '1000px', height: '300px', cursor: 'pointer', userSelect: 'none' }}>
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        transformStyle: 'preserve-3d',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        transition: 'transform 0.55s cubic-bezier(0.23,1,0.32,1)',
      }}>

        {/* FRONT */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'var(--surface)',
          border: `1px solid ${capsule.color}25`,
          borderRadius: '12px', padding: '1.5rem',
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          overflow: 'hidden',
        }}>
          {/* Glow */}
          <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '140px', height: '140px', borderRadius: '50%', background: `radial-gradient(circle, ${capsule.color}12 0%, transparent 70%)`, pointerEvents: 'none' }} />

          <div>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', padding: '2px 8px', background: `${catColor}15`, border: `1px solid ${catColor}25`, color: catColor, borderRadius: '2px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{capsule.category}</span>
            <div style={{ marginTop: '1.25rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '2.5rem' }}>{capsule.emoji}</span>
            </div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: capsule.color, lineHeight: 1.15, marginBottom: '6px' }}>{capsule.title}</h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic', fontSize: '0.78rem', color: 'rgba(232,244,253,0.4)', fontWeight: 300 }}>{capsule.tagline}</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: `${capsule.color}70` }}>{capsule.facts.length} key facts inside</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: 'rgba(232,244,253,0.25)' }}>flip →</span>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(145deg, ${capsule.color}22 0%, var(--surface2) 100%)`,
          border: `1px solid ${capsule.color}35`,
          borderRadius: '12px', padding: '1.25rem',
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          overflow: 'hidden',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.2rem' }}>{capsule.emoji}</span>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: capsule.color }}>{capsule.title}</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(232,244,253,0.6)', lineHeight: 1.65, fontWeight: 300, marginBottom: '1rem' }}>{capsule.body}</p>
          </div>

          <div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: capsule.color, opacity: 0.7, letterSpacing: '0.1em', marginBottom: '6px' }}>KEY FACTS</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {capsule.facts.map((f, i) => (
                <li key={i} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                  <span style={{ color: capsule.color, fontSize: '0.55rem', marginTop: '3px', flexShrink: 0 }}>▸</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'rgba(232,244,253,0.55)', lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
