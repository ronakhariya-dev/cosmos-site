'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const nebulaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = nebulaRef.current
    if (!el) return
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 30%, #0d1f3c 0%, #060b1a 50%, #02040f 100%)',
    }}>
      {/* Nebula glow orbs */}
      <div ref={nebulaRef} style={{ position: 'absolute', inset: 0, transition: 'transform 0.1s ease-out', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '15%', left: '60%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,77,255,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,195,247,0.08) 0%, transparent 70%)', filter: 'blur(25px)' }} />
        <div style={{ position: 'absolute', top: '60%', left: '70%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)', filter: 'blur(20px)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        {/* Status */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2.5rem' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4FC3F7', display: 'inline-block', animation: 'pulse-ring 2s infinite' }} />
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: 'rgba(79,195,247,0.7)', letterSpacing: '0.15em' }}>
            EXPLORING THE COSMOS SINCE 2015
          </span>
        </div>

        {/* Main headline */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.9 }}>
            <span style={{ display: 'block', fontSize: 'clamp(3rem, 8vw, 6.5rem)', color: '#E8F4FD' }}>The Universe</span>
            <span style={{ display: 'block', fontSize: 'clamp(3rem, 8vw, 6.5rem)', color: '#4FC3F7', textShadow: '0 0 40px rgba(79,195,247,0.4)' }}>is my Canvas</span>
          </h1>
        </div>

        {/* Divider with label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
          <div style={{ width: '40px', height: '1px', background: '#4FC3F7' }} />
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.7rem', color: 'rgba(232,244,253,0.4)', letterSpacing: '0.12em' }}>
            RONAK HARIYA · SOFTWARE ENGINEER & SPACE ENTHUSIAST
          </span>
        </div>

        {/* Bio */}
        <p style={{ maxWidth: '560px', lineHeight: 1.8, color: 'rgba(232,244,253,0.45)', fontSize: '0.95rem', marginBottom: '2.5rem', fontWeight: 300 }}>
          By day, I build distributed systems and microservices. By night, I chase galaxies, 
          simulate planetary orbits, and contemplate the physics of spacetime. This is where 
          those two worlds collide.
        </p>

        {/* Interest tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '3rem' }}>
          {['🔭 Astronomy', '🌌 Cosmology', '📸 Astrophotography', '🏏 Cricket', '🚗 Cars', '💻 Code & Cosmos'].map(tag => (
            <span key={tag} style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.65rem',
              padding: '5px 14px', border: '1px solid rgba(79,195,247,0.2)',
              color: 'rgba(79,195,247,0.65)', borderRadius: '2px', letterSpacing: '0.04em',
            }}>{tag}</span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
          <a href="#gallery" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem',
            padding: '13px 28px', background: '#4FC3F7', color: '#02040F',
            textDecoration: 'none', borderRadius: '3px', letterSpacing: '0.04em',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#29B6F6'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#4FC3F7'}
          >Explore Gallery</a>
          <a href="#codecosmos" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem',
            padding: '13px 28px', border: '1px solid rgba(124,77,255,0.5)',
            color: '#7C4DFF', textDecoration: 'none', borderRadius: '3px', letterSpacing: '0.04em',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(124,77,255,0.1)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
          >🪐 Orbit Simulator</a>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: '3rem', paddingTop: '2.5rem',
          borderTop: '1px solid rgba(79,195,247,0.08)', flexWrap: 'wrap',
        }}>
          {[['10+', 'Years Stargazing'], ['4', 'Gallery Shots'], ['6', 'Knowledge Capsules'], ['7', 'Celestial Events'], ['1', 'Live Simulator']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: '#4FC3F7', lineHeight: 1 }}>{num}</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: 'rgba(232,244,253,0.3)', marginTop: '4px', letterSpacing: '0.1em' }}>{label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to bottom, transparent, #02040f)', pointerEvents: 'none' }} />
    </section>
  )
}
