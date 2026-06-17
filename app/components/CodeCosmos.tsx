'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

interface Planet {
  name: string; color: string; radius: number; orbitRadius: number
  speed: number; angle: number; emoji: string; fact: string
}

const PLANETS_INIT: Planet[] = [
  { name: 'Mercury', color: '#B0BEC5', radius: 4,  orbitRadius: 70,  speed: 0.047, angle: 0,   emoji: '☿', fact: 'Fastest planet — orbits the Sun in 88 days' },
  { name: 'Venus',   color: '#FFCC80', radius: 7,  orbitRadius: 105, speed: 0.035, angle: 1.2, emoji: '♀', fact: 'Hottest planet (462°C) despite being 2nd from Sun' },
  { name: 'Earth',   color: '#4FC3F7', radius: 7,  orbitRadius: 145, speed: 0.029, angle: 2.5, emoji: '🌍', fact: 'Only known planet with life — for now!' },
  { name: 'Mars',    color: '#EF9A9A', radius: 5,  orbitRadius: 185, speed: 0.024, angle: 4.1, emoji: '♂', fact: 'Has the largest volcano in the solar system' },
  { name: 'Jupiter', color: '#FFAB91', radius: 14, orbitRadius: 235, speed: 0.013, angle: 0.7, emoji: '♃', fact: 'Largest planet — 1,300 Earths could fit inside' },
  { name: 'Saturn',  color: '#FFF176', radius: 12, orbitRadius: 285, speed: 0.009, angle: 3.3, emoji: '♄', fact: 'Its rings are mostly water ice particles' },
]

export default function CodeCosmos() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const planetsRef = useRef<Planet[]>(PLANETS_INIT.map(p => ({ ...p })))
  const rafRef = useRef<number>(0)
  const pausedRef = useRef(false)
  const speedRef = useRef(1)
  const [hoveredPlanet, setHoveredPlanet] = useState<Planet | null>(null)
  const [paused, setPaused] = useState(false)
  const [speed, setSpeed] = useState(1)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const W = canvas.width, H = canvas.height
    const cx = W / 2, cy = H / 2

    ctx.clearRect(0, 0, W, H)

    // Background
    ctx.fillStyle = '#02040F'
    ctx.fillRect(0, 0, W, H)

    // Stars
    ctx.fillStyle = 'rgba(232,244,253,0.4)'
    for (let i = 0; i < 80; i++) {
      const sx = ((i * 137.5) % 1) * W
      const sy = ((i * 79.3) % 1) * H
      const sr = (i % 3 === 0) ? 1 : 0.5
      ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill()
    }

    // Orbit rings
    planetsRef.current.forEach(p => {
      ctx.beginPath()
      ctx.arc(cx, cy, p.orbitRadius, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(79,195,247,0.08)'
      ctx.lineWidth = 1
      ctx.stroke()
    })

    // Sun
    const sunGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 22)
    sunGrad.addColorStop(0, '#FFF9C4'); sunGrad.addColorStop(0.5, '#FFB300'); sunGrad.addColorStop(1, '#E65100')
    ctx.shadowBlur = 30; ctx.shadowColor = '#FFB300'
    ctx.beginPath(); ctx.arc(cx, cy, 18, 0, Math.PI * 2)
    ctx.fillStyle = sunGrad; ctx.fill()
    ctx.shadowBlur = 0

    // Planets
    if (!pausedRef.current) {
      planetsRef.current = planetsRef.current.map(p => ({
        ...p, angle: p.angle + p.speed * speedRef.current * 0.016,
      }))
    }

    planetsRef.current.forEach(p => {
      const px = cx + Math.cos(p.angle) * p.orbitRadius
      const py = cy + Math.sin(p.angle) * p.orbitRadius

      // Trail
      for (let t = 1; t <= 8; t++) {
        const ta = p.angle - t * p.speed * 3
        const tx = cx + Math.cos(ta) * p.orbitRadius
        const ty = cy + Math.sin(ta) * p.orbitRadius
        ctx.beginPath(); ctx.arc(tx, ty, p.radius * (1 - t * 0.1), 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${Math.floor((1 - t * 0.1) * 20).toString(16).padStart(2, '0')}`
        ctx.fill()
      }

      // Saturn rings
      if (p.name === 'Saturn') {
        ctx.save(); ctx.translate(px, py)
        ctx.scale(1, 0.35)
        ctx.beginPath(); ctx.arc(0, 0, p.radius + 8, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(255,241,118,0.45)'; ctx.lineWidth = 4; ctx.stroke()
        ctx.restore()
      }

      // Planet
      ctx.shadowBlur = 12; ctx.shadowColor = p.color
      ctx.beginPath(); ctx.arc(px, py, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = p.color; ctx.fill()
      ctx.shadowBlur = 0

      // Label
      ctx.fillStyle = 'rgba(232,244,253,0.5)'
      ctx.font = '500 9px Space Mono, monospace'
      ctx.textAlign = 'center'
      ctx.fillText(p.name, px, py + p.radius + 12)
    })

    rafRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      const container = canvas.parentElement
      if (container) { canvas.width = container.clientWidth; canvas.height = Math.min(container.clientWidth * 0.65, 460) }
    }
    resize()
    window.addEventListener('resize', resize)
    rafRef.current = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener('resize', resize) }
  }, [draw])

  // Mouse hover for planet tooltip
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mx = (e.clientX - rect.left) * (canvas.width / rect.width)
    const my = (e.clientY - rect.top) * (canvas.height / rect.height)
    const cx = canvas.width / 2, cy = canvas.height / 2
    let found: Planet | null = null
    planetsRef.current.forEach(p => {
      const px = cx + Math.cos(p.angle) * p.orbitRadius
      const py = cy + Math.sin(p.angle) * p.orbitRadius
      const dist = Math.sqrt((mx - px) ** 2 + (my - py) ** 2)
      if (dist < p.radius + 8) found = p
    })
    setHoveredPlanet(found)
  }, [])

  const togglePause = () => {
    pausedRef.current = !pausedRef.current
    setPaused(v => !v)
  }

  const changeSpeed = (s: number) => {
    speedRef.current = s
    setSpeed(s)
  }

  return (
    <section id="codecosmos" style={{ padding: '7rem 0', background: 'var(--void)', position: 'relative' }}>
      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>06 / Code + Cosmos</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em', color: '#E8F4FD' }}>
            Where Code Meets <span style={{ color: '#7C4DFF' }}>Gravity</span>
          </h2>
          <p style={{ color: 'rgba(232,244,253,0.35)', fontSize: '0.88rem', marginTop: '0.6rem', fontWeight: 300 }}>
            Interactive simulations built with pure JavaScript canvas.
          </p>
        </div>

        {/* Simulator card */}
        <div style={{ background: 'var(--surface)', border: '1px solid rgba(124,77,255,0.2)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 0 60px rgba(124,77,255,0.08)' }}>

          {/* Header */}
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(79,195,247,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', background: 'rgba(124,77,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.4rem' }}>🪐</span>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#E8F4FD' }}>Planetary Orbit Simulator</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: 'rgba(124,77,255,0.7)', letterSpacing: '0.08em' }}>JAVASCRIPT · CANVAS API · KEPLER&apos;S LAWS</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Speed */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {[0.5, 1, 2, 4].map(s => (
                  <button key={s} onClick={() => changeSpeed(s)} style={{
                    fontFamily: 'Space Mono, monospace', fontSize: '0.6rem',
                    padding: '4px 10px', border: `1px solid ${speed === s ? '#7C4DFF' : 'rgba(79,195,247,0.15)'}`,
                    background: speed === s ? 'rgba(124,77,255,0.2)' : 'transparent',
                    color: speed === s ? '#7C4DFF' : 'rgba(232,244,253,0.35)',
                    borderRadius: '3px', cursor: 'pointer', transition: 'all 0.15s',
                  }}>{s}×</button>
                ))}
              </div>
              {/* Pause */}
              <button onClick={togglePause} style={{
                fontFamily: 'Space Mono, monospace', fontSize: '0.62rem',
                padding: '5px 14px', border: `1px solid ${paused ? '#4FC3F7' : 'rgba(79,195,247,0.25)'}`,
                background: paused ? 'rgba(79,195,247,0.1)' : 'transparent',
                color: paused ? '#4FC3F7' : 'rgba(232,244,253,0.5)',
                borderRadius: '3px', cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '0.06em',
              }}>{paused ? '▶ PLAY' : '⏸ PAUSE'}</button>
            </div>
          </div>

          {/* Canvas */}
          <div style={{ position: 'relative', background: '#02040F' }}>
            <canvas
              ref={canvasRef}
              onMouseMove={onMouseMove}
              onMouseLeave={() => setHoveredPlanet(null)}
              style={{ display: 'block', width: '100%', cursor: 'crosshair' }}
            />
            {/* Hover tooltip */}
            {hoveredPlanet && (
              <div style={{
                position: 'absolute', top: '12px', right: '12px',
                background: 'rgba(13,31,60,0.92)', backdropFilter: 'blur(8px)',
                border: `1px solid ${hoveredPlanet.color}40`,
                borderRadius: '8px', padding: '0.75rem 1rem', maxWidth: '200px',
              }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: hoveredPlanet.color, marginBottom: '4px' }}>
                  {hoveredPlanet.emoji} {hoveredPlanet.name}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'rgba(232,244,253,0.6)', lineHeight: 1.5, fontWeight: 300 }}>{hoveredPlanet.fact}</div>
              </div>
            )}
          </div>

          {/* Planet legend */}
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid rgba(79,195,247,0.06)', display: 'flex', flexWrap: 'wrap', gap: '12px', background: 'rgba(0,0,0,0.2)' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: 'rgba(232,244,253,0.25)', letterSpacing: '0.08em', alignSelf: 'center' }}>HOVER PLANETS FOR FACTS:</span>
            {PLANETS_INIT.map(p => (
              <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.color }} />
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: 'rgba(232,244,253,0.4)' }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* More projects coming */}
        <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
          {[
            { title: 'Star Map Generator', desc: 'Real-time constellation map based on your location and date', emoji: '🗺️', status: 'Coming Soon' },
            { title: 'Stellar Life Cycle', desc: 'Animated journey from nebula to black hole or white dwarf', emoji: '⭐', status: 'Coming Soon' },
            { title: 'Telescope FOV Calculator', desc: 'Calculate your telescope\'s field of view and magnification', emoji: '🔭', status: 'Coming Soon' },
          ].map(project => (
            <div key={project.title} style={{
              background: 'rgba(255,255,255,0.015)', border: '1px dashed rgba(79,195,247,0.12)',
              borderRadius: '10px', padding: '1.25rem',
            }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
                <span style={{ fontSize: '1.3rem' }}>{project.emoji}</span>
                <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: 'rgba(232,244,253,0.5)' }}>{project.title}</h4>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(232,244,253,0.28)', lineHeight: 1.55, fontWeight: 300, marginBottom: '0.75rem' }}>{project.desc}</p>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: 'rgba(79,195,247,0.3)', letterSpacing: '0.08em' }}>{project.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
