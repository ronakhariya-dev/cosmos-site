'use client'
import { journeyEntries } from '../data/siteData'

export default function Journey() {
  return (
    <section id="journey" style={{ padding: '7rem 0', background: 'var(--deep)', position: 'relative' }}>
      <div style={{ position: 'absolute', left: '50%', top: '10%', bottom: '10%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(79,195,247,0.15) 20%, rgba(79,195,247,0.15) 80%, transparent)', transform: 'translateX(-50%)', pointerEvents: 'none' }} className="timeline-line" />

      <div className="container">
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem', justifyContent: 'center' }}>03 / Personal Journey</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em', color: '#E8F4FD' }}>
            My <span style={{ color: '#00E5FF' }}>Space Story</span>
          </h2>
          <p style={{ color: 'rgba(232,244,253,0.35)', fontSize: '0.88rem', marginTop: '0.6rem', fontWeight: 300 }}>
            From first stargazing to building orbit simulators.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
          {journeyEntries.map((entry, i) => (
            <JourneyItem key={entry.id} entry={entry} index={i} />
          ))}

          {/* Future placeholder */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginTop: '1rem' }}>
            <div style={{ width: '52px', flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px dashed rgba(79,195,247,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--deep)' }}>
                <span style={{ fontSize: '1rem', opacity: 0.4 }}>+</span>
              </div>
            </div>
            <div style={{ paddingBottom: '0.5rem', paddingTop: '6px' }}>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: 'rgba(79,195,247,0.25)', letterSpacing: '0.1em' }}>YOUR NEXT CHAPTER · COMING SOON</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .timeline-line { display: none; } }
      `}</style>
    </section>
  )
}

function JourneyItem({ entry, index }: { entry: import('../data/siteData').JourneyEntry; index: number }) {
  return (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
      {/* Year orb */}
      <div style={{ width: '52px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%',
          background: 'var(--surface)', border: '1.5px solid rgba(79,195,247,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 12px rgba(79,195,247,0.15)',
        }}>
          <span style={{ fontSize: '1.3rem' }}>{entry.emoji}</span>
        </div>
        {index < 4 && <div style={{ width: '1px', height: '100%', minHeight: '20px', background: 'linear-gradient(rgba(79,195,247,0.2), rgba(79,195,247,0.05))' }} />}
      </div>

      {/* Content */}
      <div style={{
        flex: 1, background: 'var(--surface)', border: '1px solid rgba(79,195,247,0.08)',
        borderRadius: '10px', padding: '1.25rem 1.5rem',
        transition: 'all 0.2s',
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,195,247,0.2)'
          ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(79,195,247,0.08)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,195,247,0.08)'
          ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#00E5FF' }}>{entry.year}</span>
          <span style={{ color: 'rgba(79,195,247,0.3)', fontSize: '0.7rem' }}>—</span>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#E8F4FD' }}>{entry.title}</h3>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'rgba(232,244,253,0.5)', lineHeight: 1.72, fontWeight: 300, marginBottom: '10px' }}>{entry.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {entry.tags.map(t => (
            <span key={t} style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', padding: '2px 8px', background: 'rgba(0,229,255,0.07)', border: '1px solid rgba(0,229,255,0.12)', color: 'rgba(0,229,255,0.6)', borderRadius: '2px' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
