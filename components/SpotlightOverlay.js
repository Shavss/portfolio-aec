'use client'

import { useEffect, useRef, useState } from 'react'

const RADIUS = 100
const SPEED = 4.2
const EXPAND_DURATION = 1000

// PANTONE 11-4201 TCX — Blanc de Blanc (warm off-white)
const OVERLAY_COLOR = '#0A0A0A'
const OVERLAY_COLOR_2 = '#E2E8F0'

// VeryPeri — PANTONE Color of the Year 2022
const ACCENT_COLOR = '#0A0A0A'

export default function SpotlightOverlay() {
  const canvasRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const velRef = useRef({ x: SPEED, y: SPEED * 0.7 })
  const rafRef = useRef(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let expanding = false
    let expandStart = 0
    let expandFromX = 0
    let expandFromY = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (posRef.current.x === 0 && posRef.current.y === 0) {
        posRef.current = {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        }
      }
    }
    resize()
    window.addEventListener('resize', resize)

    const loop = (timestamp) => {
      const W = canvas.width
      const H = canvas.height

      if (expanding) {
        const elapsed = timestamp - expandStart
        const progress = Math.min(elapsed / EXPAND_DURATION, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const maxR = Math.sqrt(W * W + H * H)
        const r = RADIUS + (maxR - RADIUS) * eased

        ctx.clearRect(0, 0, W, H)
        ctx.fillStyle = OVERLAY_COLOR
        ctx.fillRect(0, 0, W, H)

        ctx.save()
        ctx.globalCompositeOperation = 'destination-out'
        ctx.beginPath()
        ctx.arc(expandFromX, expandFromY, r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,0,0,1)'
        ctx.fill()
        ctx.restore()

        if (progress >= 1) {
          ctx.clearRect(0, 0, W, H)
          setDone(true)
          return
        }
        rafRef.current = requestAnimationFrame(loop)
        return
      }

      const pos = posRef.current
      const vel = velRef.current
      pos.x += vel.x
      pos.y += vel.y

      if (pos.x - RADIUS < 0)  { pos.x = RADIUS;     vel.x =  Math.abs(vel.x) }
      if (pos.x + RADIUS > W)  { pos.x = W - RADIUS; vel.x = -Math.abs(vel.x) }
      if (pos.y - RADIUS < 0)  { pos.y = RADIUS;     vel.y =  Math.abs(vel.y) }
      if (pos.y + RADIUS > H)  { pos.y = H - RADIUS; vel.y = -Math.abs(vel.y) }

      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = OVERLAY_COLOR
      ctx.fillRect(0, 0, W, H)

      ctx.save()
      ctx.globalCompositeOperation = 'destination-out'
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, RADIUS, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(0,0,0,1)'
      ctx.fill()
      ctx.restore()

      ctx.save()
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, RADIUS, 0, Math.PI * 2)
      ctx.strokeStyle = ACCENT_COLOR
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.restore()

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    const handleClick = () => {
      if (expanding) return
      expanding = true
      expandFromX = posRef.current.x
      expandFromY = posRef.current.y
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame((ts) => {
        expandStart = ts
        rafRef.current = requestAnimationFrame(loop)
      })
    }

    canvas.addEventListener('click', handleClick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('click', handleClick)
    }
  }, [])

  if (done) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100]"
      style={{ cursor: 'default' }}
    />
  )
}
