'use client'
import { blogPosts } from '../data/siteData'

const categoryLabel = { cosmos: 'COSMOS', learning: 'LEARNING', photography: 'PHOTOGRAPHY' }

export default function Blogs() {
  return (
    <section id="blogs" style={{ padding: '7rem 0', background: 'var(--void)', position: 'relative' }}>
      <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,98,146,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>04 / Cosmos Blogs</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em', color: '#E8F4FD' }}>
              Written in <span style={{ color: '#F06292' }}>Starlight</span>
            </h2>
          </div>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: 'rgba(232,244,253,0.25)', letterSpacing: '0.1em' }}>
            {blogPosts.filter(b => !b.comingSoon).length} PUBLISHED · {blogPosts.filter(b => b.comingSoon).length} COMING SOON
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {blogPosts.map(post => <BlogCard key={post.id} post={post} />)}
        </div>
      </div>
    </section>
  )
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid rgba(79,195,247,0.07)',
      borderRadius: '12px', overflow: 'hidden',
      opacity: post.comingSoon ? 0.55 : 1,
      transition: 'all 0.3s',
      cursor: post.comingSoon ? 'default' : 'pointer',
    }}
      onMouseEnter={e => {
        if (!post.comingSoon) {
          (e.currentTarget as HTMLElement).style.borderColor = `${post.color}30`
          ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${post.color}10`
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
        }
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,195,247,0.07)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
        ;(e.currentTarget as HTMLElement).style.transform = 'none'
      }}
    >
      {/* Color bar */}
      <div style={{ height: '3px', background: post.color, opacity: post.comingSoon ? 0.4 : 1 }} />

      <div style={{ padding: '1.5rem' }}>
        {/* Meta */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', padding: '2px 8px', background: `${post.color}15`, border: `1px solid ${post.color}25`, color: post.color, borderRadius: '2px', letterSpacing: '0.06em' }}>
            {categoryLabel[post.category]}
          </span>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {post.comingSoon && <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.55rem', color: 'rgba(232,244,253,0.25)', letterSpacing: '0.08em' }}>COMING SOON</span>}
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: 'rgba(232,244,253,0.25)' }}>{post.readTime} read</span>
          </div>
        </div>

        {/* Title */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{post.emoji}</span>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#E8F4FD', lineHeight: 1.35 }}>{post.title}</h3>
        </div>

        {/* Excerpt */}
        <p style={{ fontSize: '0.8rem', color: 'rgba(232,244,253,0.4)', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.25rem' }}>
          {post.excerpt.slice(0, 120)}...
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '1rem' }}>
          {post.tags.map(t => (
            <span key={t} style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.56rem', padding: '1px 7px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(232,244,253,0.3)', borderRadius: '2px' }}>{t}</span>
          ))}
        </div>

        {/* Date or CTA */}
        {!post.comingSoon ? (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: 'rgba(232,244,253,0.25)' }}>{post.date}</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: post.color }}>Read →</span>
          </div>
        ) : (
          <div style={{ height: '2px', background: 'linear-gradient(to right, rgba(255,255,255,0.05), transparent)', borderRadius: '1px' }} />
        )}
      </div>
    </div>
  )
}
