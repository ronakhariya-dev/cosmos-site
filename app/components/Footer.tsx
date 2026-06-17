'use client'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(79,195,247,0.07)',
      padding: '3rem 2rem',
      background: 'var(--deep)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '1.5rem' }}>🔭</div>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#E8F4FD' }}>
        RONAK <span style={{ color: '#4FC3F7' }}>· COSMOS</span>
      </div>
      <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.62rem', color: 'rgba(232,244,253,0.2)', letterSpacing: '0.1em', maxWidth: '400px', lineHeight: 1.7 }}>
        &ldquo;The cosmos is within us. We are made of star-stuff.&rdquo;<br />
        <span style={{ color: 'rgba(79,195,247,0.4)' }}>— Carl Sagan</span>
      </p>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { label: 'Portfolio', href: '#' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/ronak-hariya-96b8a5312' },
          { label: 'GitHub', href: 'https://github.com/ronakhariya-dev' },
          { label: 'Email', href: 'mailto:ronak.hariya.dev@gmail.com' },
        ].map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'Space Mono, monospace', fontSize: '0.62rem',
            color: 'rgba(79,195,247,0.4)', textDecoration: 'none', letterSpacing: '0.08em',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#4FC3F7')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(79,195,247,0.4)')}
          >{l.label}</a>
        ))}
      </div>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: 'rgba(232,244,253,0.15)', marginTop: '0.5rem' }}>
        © {new Date().getFullYear()} Ronak Hariya · Pune, India · Built with Next.js & ✦
      </div>
    </footer>
  )
}
