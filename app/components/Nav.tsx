'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Events',     href: '#events' },
  { label: 'Journey',    href: '#journey' },
  { label: 'Blogs',      href: '#blogs' },
  { label: 'Capsules',   href: '#capsules' },
  { label: 'Code+Cosmos',href: '#codecosmos' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = scrolled
    ? 'rgba(2,4,15,0.92)'
    : 'transparent'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: navBg,
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(79,195,247,0.1)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.3rem' }}>🔭</span>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.95rem', color: '#E8F4FD', lineHeight: 1, letterSpacing: '-0.01em' }}>
              RONAK <span style={{ color: '#4FC3F7' }}>· COSMOS</span>
            </div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.55rem', color: 'rgba(79,195,247,0.5)', letterSpacing: '0.15em' }}>
              ASTRONOMY · PHOTOGRAPHY
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.62rem',
              color: 'rgba(232,244,253,0.45)', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4FC3F7')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,244,253,0.45)')}
            >{l.label}</a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="nav-mobile-btn"
          style={{ background: 'none', border: 'none', color: '#4FC3F7', cursor: 'pointer', fontSize: '1.4rem' }}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(2,4,15,0.97)', borderTop: '1px solid rgba(79,195,247,0.1)',
          padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.1rem',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.78rem',
              color: 'rgba(232,244,253,0.6)', textDecoration: 'none', letterSpacing: '0.1em',
            }}>{l.label.toUpperCase()}</a>
          ))}
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
