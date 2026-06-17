'use client'
import { useState } from 'react'
import { galleryShots, GalleryShot } from '../data/siteData'

export default function Gallery() {
  const [active, setActive] = useState<GalleryShot | null>(null)

  return (
    <section id="gallery" style={{ padding: '7rem 0', background: 'var(--deep)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>01 / Photography + Science</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em', color: '#E8F4FD' }}>
            Shots &amp; <span style={{ color: '#4FC3F7' }}>Science Facts</span>
          </h2>
          <p style={{ color: 'rgba(232,244,253,0.35)', fontSize: '0.88rem', marginTop: '0.6rem', fontWeight: 300 }}>
            Every photo tells a physics story. Click any card to reveal the science behind the shot.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {galleryShots.map(shot => (
            <GalleryCard key={shot.id} shot={shot} onClick={() => setActive(shot)} />
          ))}

          {/* Add Your Shot — placeholder */}
          <div style={{
            border: '1px dashed rgba(79,195,247,0.2)', borderRadius: '12px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '8px', padding: '2rem', minHeight: '260px', cursor: 'default',
            background: 'rgba(79,195,247,0.02)',
          }}>
            <span style={{ fontSize: '2rem', opacity: 0.3 }}>📸</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: 'rgba(79,195,247,0.3)', letterSpacing: '0.1em' }}>MORE COMING SOON</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div onClick={() => setActive(null)} style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(2,4,15,0.92)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem',
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: 'var(--surface)', border: '1px solid rgba(79,195,247,0.15)',
            borderRadius: '16px', maxWidth: '600px', width: '100%', overflow: 'hidden',
            boxShadow: '0 0 80px rgba(79,195,247,0.1)',
          }}>
            {/* Image area */}
            <div style={{ height: '220px', background: active.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <span style={{ fontSize: '4rem', filter: 'drop-shadow(0 0 20px rgba(79,195,247,0.5))' }}>{active.emoji}</span>
              <button onClick={() => setActive(null)} style={{
                position: 'absolute', top: '12px', right: '16px',
                background: 'rgba(0,0,0,0.4)', border: 'none', color: 'white',
                width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer', fontSize: '1rem',
              }}>✕</button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#E8F4FD', marginBottom: '6px' }}>{active.title}</h3>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: 'rgba(79,195,247,0.6)' }}>📍 {active.location}</span>
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: 'rgba(232,244,253,0.3)' }}>🗓 {active.date}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(232,244,253,0.55)', lineHeight: 1.7, marginBottom: '1.25rem', fontWeight: 300 }}>{active.description}</p>

              {/* Science fact */}
              <div style={{
                background: 'rgba(79,195,247,0.06)', border: '1px solid rgba(79,195,247,0.15)',
                borderRadius: '8px', padding: '1rem',
              }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: '#4FC3F7', letterSpacing: '0.1em', marginBottom: '6px' }}>⚛ SCIENCE FACT</div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(232,244,253,0.7)', lineHeight: 1.65, fontStyle: 'italic' }}>{active.scienceFact}</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '1rem' }}>
                {active.tags.map(t => (
                  <span key={t} style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', padding: '2px 8px', background: 'rgba(79,195,247,0.08)', border: '1px solid rgba(79,195,247,0.12)', color: 'rgba(79,195,247,0.6)', borderRadius: '2px' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function GalleryCard({ shot, onClick }: { shot: GalleryShot; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      borderRadius: '12px', overflow: 'hidden', cursor: 'pointer',
      border: '1px solid rgba(79,195,247,0.08)',
      transition: 'all 0.3s ease',
      boxShadow: hovered ? '0 0 30px rgba(79,195,247,0.15)' : 'none',
      transform: hovered ? 'translateY(-4px)' : 'none',
    }}>
      {/* Image */}
      <div style={{ height: '180px', background: shot.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <span style={{ fontSize: '3.5rem', filter: hovered ? 'drop-shadow(0 0 15px rgba(79,195,247,0.6))' : 'none', transition: 'filter 0.3s' }}>{shot.emoji}</span>
        {hovered && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(79,195,247,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: '#4FC3F7', letterSpacing: '0.1em' }}>CLICK FOR SCIENCE →</span>
          </div>
        )}
      </div>
      {/* Info */}
      <div style={{ padding: '1rem', background: 'var(--surface)' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#E8F4FD', marginBottom: '4px' }}>{shot.title}</h3>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: 'rgba(79,195,247,0.5)', marginBottom: '8px' }}>📍 {shot.location} · {shot.date}</div>
        <p style={{ fontSize: '0.78rem', color: 'rgba(232,244,253,0.4)', lineHeight: 1.6, fontWeight: 300 }}>{shot.description.slice(0, 80)}...</p>
      </div>
    </div>
  )
}
