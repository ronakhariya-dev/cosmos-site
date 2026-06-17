import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, BlogSection } from '../../data/siteData'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return blogPosts.filter(p => !p.comingSoon).map(p => ({ id: p.id }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const post = blogPosts.find(p => p.id === params.id)
  if (!post) return { title: 'Not Found' }
  return {
    title: `${post.title} — Ronak · Cosmos`,
    description: post.excerpt,
  }
}

const categoryLabel: Record<string, string> = {
  cosmos: 'COSMOS', learning: 'LEARNING', photography: 'PHOTOGRAPHY',
}

export default function BlogPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id)
  if (!post || post.comingSoon || !post.content) notFound()

  return (
    <main style={{ background: 'var(--void)', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* Stars background */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(1px 1px at 15% 25%, rgba(232,244,253,0.5) 0%, transparent 100%), radial-gradient(1px 1px at 45% 10%, rgba(232,244,253,0.4) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 70% 60%, rgba(232,244,253,0.3) 0%, transparent 100%), radial-gradient(1px 1px at 85% 30%, rgba(232,244,253,0.4) 0%, transparent 100%), radial-gradient(1px 1px at 30% 75%, rgba(232,244,253,0.35) 0%, transparent 100%), radial-gradient(1px 1px at 90% 85%, rgba(232,244,253,0.3) 0%, transparent 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Top bar */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: 'rgba(2,4,15,0.92)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(79,195,247,0.1)',
          padding: '0 2rem', height: '60px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href="/#blogs" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'Space Mono, monospace', fontSize: '0.65rem',
            color: 'rgba(79,195,247,0.6)', textDecoration: 'none', letterSpacing: '0.1em',
            transition: 'color 0.2s',
          }}>
            ← BACK TO BLOGS
          </Link>
          <Link href="/" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.9rem',
            color: '#E8F4FD', textDecoration: 'none', letterSpacing: '-0.01em',
          }}>
            🔭 RONAK <span style={{ color: '#4FC3F7' }}>· COSMOS</span>
          </Link>
        </nav>

        {/* Hero */}
        <header style={{
          padding: '5rem 2rem 3.5rem',
          background: 'linear-gradient(180deg, rgba(13,31,60,0.6) 0%, transparent 100%)',
          textAlign: 'center',
          maxWidth: '760px', margin: '0 auto',
        }}>
          {/* Category + read time */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.6rem',
              padding: '3px 10px', background: `${post.color}18`,
              border: `1px solid ${post.color}35`, color: post.color,
              borderRadius: '2px', letterSpacing: '0.08em',
            }}>{categoryLabel[post.category]}</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: 'rgba(232,244,253,0.3)' }}>
              {post.readTime} read
            </span>
            {post.date && (
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: 'rgba(232,244,253,0.25)' }}>
                {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            )}
          </div>

          {/* Title */}
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{post.emoji}</div>
          <h1 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.75rem, 4.5vw, 2.8rem)',
            color: '#E8F4FD', lineHeight: 1.15,
            letterSpacing: '-0.02em', marginBottom: '1.25rem',
          }}>{post.title}</h1>

          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '1.05rem',
            color: 'rgba(232,244,253,0.5)', lineHeight: 1.75,
            fontWeight: 300, fontStyle: 'italic',
            maxWidth: '580px', margin: '0 auto 2rem',
          }}>{post.excerpt}</p>

          {/* Tags */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
            {post.tags.map(t => (
              <span key={t} style={{
                fontFamily: 'Space Mono, monospace', fontSize: '0.6rem',
                padding: '3px 10px', background: 'rgba(79,195,247,0.06)',
                border: '1px solid rgba(79,195,247,0.15)', color: 'rgba(79,195,247,0.6)',
                borderRadius: '2px',
              }}>{t}</span>
            ))}
          </div>

          {/* Divider */}
          <div style={{ marginTop: '3rem', height: '1px', background: `linear-gradient(to right, transparent, ${post.color}40, transparent)` }} />
        </header>

        {/* Body */}
        <article style={{ maxWidth: '720px', margin: '0 auto', padding: '0 2rem 6rem' }}>
          {post.content.map((section, i) => (
            <BlogBlock key={i} section={section} accentColor={post.color} />
          ))}

          {/* Footer nav */}
          <div style={{
            marginTop: '4rem', paddingTop: '2rem',
            borderTop: '1px solid rgba(79,195,247,0.08)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
          }}>
            <Link href="/#blogs" style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.65rem',
              color: 'rgba(79,195,247,0.5)', textDecoration: 'none', letterSpacing: '0.08em',
              transition: 'color 0.2s',
            }}>← ALL BLOGS</Link>
            <Link href="/" style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.65rem',
              color: 'rgba(79,195,247,0.5)', textDecoration: 'none', letterSpacing: '0.08em',
              transition: 'color 0.2s',
            }}>HOME →</Link>
          </div>
        </article>
      </div>
    </main>
  )
}

function BlogBlock({ section, accentColor }: { section: BlogSection; accentColor: string }) {
  switch (section.type) {

    case 'intro':
      return (
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', lineHeight: 1.85,
          color: 'rgba(232,244,253,0.75)', fontWeight: 300,
          marginBottom: '2rem', marginTop: '1rem',
          borderLeft: `3px solid ${accentColor}`,
          paddingLeft: '1.25rem',
        }}>{section.text}</p>
      )

    case 'heading':
      return (
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          fontSize: '1.35rem', color: '#E8F4FD',
          marginTop: '2.5rem', marginBottom: '1rem',
          letterSpacing: '-0.01em',
        }}>{section.text}</h2>
      )

    case 'para':
      return (
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.85,
          color: 'rgba(232,244,253,0.6)', fontWeight: 300,
          marginBottom: '1.25rem',
        }}>{section.text}</p>
      )

    case 'quote':
      return (
        <blockquote style={{
          margin: '2.5rem 0',
          padding: '1.5rem 2rem',
          background: `${accentColor}08`,
          borderLeft: `3px solid ${accentColor}`,
          borderRadius: '0 8px 8px 0',
        }}>
          <p style={{
            fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontStyle: 'italic',
            fontWeight: 600, color: '#E8F4FD', lineHeight: 1.5, marginBottom: '0.5rem',
          }}>&ldquo;{section.text}&rdquo;</p>
          {section.label && (
            <cite style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.65rem',
              color: accentColor, letterSpacing: '0.06em',
            }}>{section.label}</cite>
          )}
        </blockquote>
      )

    case 'list':
      return (
        <ul style={{ listStyle: 'none', margin: '1.25rem 0 1.75rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {section.items?.map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: accentColor, flexShrink: 0, marginTop: '3px', fontFamily: 'Space Mono, monospace', fontSize: '0.7rem' }}>▸</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(232,244,253,0.6)', fontWeight: 300 }}>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'callout':
      return (
        <div style={{
          margin: '2rem 0',
          padding: '1.25rem 1.5rem',
          background: `${accentColor}0D`,
          border: `1px solid ${accentColor}30`,
          borderRadius: '8px',
        }}>
          {section.label && (
            <div style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', fontWeight: 700,
              color: accentColor, letterSpacing: '0.12em', marginBottom: '8px',
            }}>◈ {section.label.toUpperCase()}</div>
          )}
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.92rem', lineHeight: 1.75,
            color: 'rgba(232,244,253,0.7)', fontWeight: 300,
          }}>{section.text}</p>
        </div>
      )

    case 'divider':
      return (
        <div style={{
          margin: '3rem 0',
          display: 'flex', alignItems: 'center', gap: '16px',
        }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(79,195,247,0.08)' }} />
          <span style={{ color: 'rgba(79,195,247,0.3)', fontSize: '0.7rem' }}>✦ ✦ ✦</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(79,195,247,0.08)' }} />
        </div>
      )

    default:
      return null
  }
}
