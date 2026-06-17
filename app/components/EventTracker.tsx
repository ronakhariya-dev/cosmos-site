'use client'
import { useState } from 'react'
import { celestialEvents, CelestialEvent } from '../data/siteData'

const typeColors: Record<string, string> = {
  eclipse: '#FFB300', moon: '#7C4DFF', meteor: '#4FC3F7',
  planet: '#00E5FF', comet: '#F06292', conjunction: '#A5D6A7',
}
const intensityConfig = {
  rare:        { label: 'RARE', color: '#FFB300', bg: 'rgba(255,179,0,0.1)' },
  spectacular: { label: 'SPECTACULAR', color: '#F06292', bg: 'rgba(240,98,146,0.1)' },
  regular:     { label: 'REGULAR', color: '#4FC3F7', bg: 'rgba(79,195,247,0.1)' },
}

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr)
  const now = new Date()
  const diff = target.getTime() - now.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export default function EventTracker() {
  const [selected, setSelected] = useState<CelestialEvent | null>(null)

  const sorted = [...celestialEvents].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  const upcoming = sorted.filter(e => daysUntil(e.date) > 0)
  const past = sorted.filter(e => daysUntil(e.date) <= 0)

  return (
    <section id="events" style={{ padding: '7rem 0', background: 'var(--void)', position: 'relative' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '30%', right: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,77,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>02 / Event Tracker</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em', color: '#E8F4FD' }}>
            Celestial <span style={{ color: '#7C4DFF' }}>Calendar</span>
          </h2>
          <p style={{ color: 'rgba(232,244,253,0.35)', fontSize: '0.88rem', marginTop: '0.6rem', fontWeight: 300 }}>
            Upcoming sky events worth stepping outside for.
          </p>
        </div>

        {/* Upcoming */}
        {upcoming.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: '#4FC3F7', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>— UPCOMING EVENTS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {upcoming.map(evt => <EventRow key={evt.id} evt={evt} onClick={() => setSelected(evt)} />)}
            </div>
          </div>
        )}

        {/* Past */}
        {past.length > 0 && (
          <div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: 'rgba(232,244,253,0.2)', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>— PAST EVENTS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0.45 }}>
              {past.map(evt => <EventRow key={evt.id} evt={evt} onClick={() => setSelected(evt)} />)}
            </div>
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(2,4,15,0.9)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem',
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: 'var(--surface)', border: `1px solid ${typeColors[selected.type]}30`,
            borderRadius: '16px', maxWidth: '520px', width: '100%', padding: '2rem',
            boxShadow: `0 0 60px ${typeColors[selected.type]}15`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2.5rem' }}>{selected.emoji}</span>
                <div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#E8F4FD', marginBottom: '4px' }}>{selected.title}</h3>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: typeColors[selected.type] }}>{selected.date} {selected.time && `· ${selected.time}`}</div>
                </div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: 'rgba(232,244,253,0.4)', cursor: 'pointer', fontSize: '1.2rem' }}>✕</button>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'rgba(232,244,253,0.6)', lineHeight: 1.75, marginBottom: '1.5rem', fontWeight: 300 }}>{selected.description}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ background: 'rgba(79,195,247,0.05)', border: '1px solid rgba(79,195,247,0.1)', borderRadius: '8px', padding: '0.75rem' }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.55rem', color: 'rgba(79,195,247,0.5)', letterSpacing: '0.1em', marginBottom: '4px' }}>VISIBILITY</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#E8F4FD' }}>{selected.visibility}</div>
              </div>
              <div style={{ background: intensityConfig[selected.intensity].bg, border: `1px solid ${intensityConfig[selected.intensity].color}25`, borderRadius: '8px', padding: '0.75rem' }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.55rem', color: intensityConfig[selected.intensity].color, letterSpacing: '0.1em', marginBottom: '4px', opacity: 0.7 }}>INTENSITY</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: intensityConfig[selected.intensity].color, fontWeight: 700 }}>{intensityConfig[selected.intensity].label}</div>
              </div>
            </div>

            {daysUntil(selected.date) > 0 && (
              <div style={{ marginTop: '1rem', textAlign: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#4FC3F7' }}>
                {daysUntil(selected.date)} days away
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

function EventRow({ evt, onClick }: { evt: CelestialEvent; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  const days = daysUntil(evt.date)
  const ic = intensityConfig[evt.intensity]
  const tc = typeColors[evt.type]

  return (
    <div onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      display: 'grid', gridTemplateColumns: '56px 1fr auto',
      gap: '1.25rem', alignItems: 'center',
      padding: '1rem 1.25rem',
      background: hovered ? 'rgba(79,195,247,0.04)' : 'rgba(255,255,255,0.015)',
      border: `1px solid ${hovered ? 'rgba(79,195,247,0.2)' : 'rgba(79,195,247,0.07)'}`,
      borderRadius: '10px', cursor: 'pointer',
      transition: 'all 0.2s',
    }}>
      {/* Emoji + type dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <span style={{ fontSize: '1.6rem' }}>{evt.emoji}</span>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: tc }} />
      </div>

      {/* Info */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '2px' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#E8F4FD' }}>{evt.title}</span>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.56rem', padding: '1px 7px', background: ic.bg, color: ic.color, borderRadius: '2px', letterSpacing: '0.06em' }}>{ic.label}</span>
        </div>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: 'rgba(232,244,253,0.3)', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <span>{evt.date}</span>
          {evt.time && <span>{evt.time}</span>}
          <span style={{ color: 'rgba(79,195,247,0.4)' }}>📍 {evt.visibility}</span>
        </div>
      </div>

      {/* Days */}
      <div style={{ textAlign: 'right', minWidth: '70px' }}>
        {days > 0 ? (
          <>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: tc, lineHeight: 1 }}>{days}</div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.52rem', color: 'rgba(232,244,253,0.3)', letterSpacing: '0.08em' }}>DAYS</div>
          </>
        ) : (
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: 'rgba(232,244,253,0.25)', letterSpacing: '0.06em' }}>PASSED</div>
        )}
      </div>
    </div>
  )
}
