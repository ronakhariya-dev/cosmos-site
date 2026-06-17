'use client'
import { useEffect, useRef } from 'react'

interface Star { x: number; y: number; r: number; a: number; speed: number; twinkleOffset: number }

export default function StarField({ density = 180 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = window.innerWidth
    let H = document.body.scrollHeight
    canvas.width = W
    canvas.height = H

    const stars: Star[] = Array.from({ length: density }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.008 + 0.002,
      twinkleOffset: Math.random() * Math.PI * 2,
    }))

    let t = 0
    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.016
      stars.forEach(s => {
        const alpha = 0.4 + 0.5 * Math.sin(t * s.speed * 40 + s.twinkleOffset)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,244,253,${alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = window.innerWidth
      H = document.body.scrollHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 0,
        pointerEvents: 'none', opacity: 0.6,
      }}
    />
  )
}
