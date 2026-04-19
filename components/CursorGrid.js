'use client'

import { useEffect, useRef } from 'react'

const CELL = 40
const BASE_ARM = 6
const PEAK_ARM = 14
const BASE_OPACITY = 0.12
const PEAK_OPACITY = 0.5
const WAVE_SPEED = 180
const BAND_WIDTH = 24
const PULSE_DURATION = 1200
const MAX_PULSES = 3
const PULSE_RADIUS = 400
const PULSE_INTERVAL = 300

export default function CursorGrid({ isStatic = false }) {
  const canvasRef = useRef(null)
  const pulsesRef = useRef([])
  const lastPulseTimeRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let dpr = window.devicePixelRatio || 1

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
    }
    resize()
    window.addEventListener('resize', resize)

    const drawStatic = () => {
      const W = canvas.width / dpr
      const H = canvas.height / dpr
      const style = getComputedStyle(document.documentElement)
      const inkColor = style.getPropertyValue('--color-ink').trim()

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, W, H)

      const cols = Math.ceil(W / CELL) + 1
      const rows = Math.ceil(H / CELL) + 1
      const halfArm = BASE_ARM / 2

      ctx.strokeStyle = inkColor
      ctx.lineWidth = 1
      ctx.globalAlpha = BASE_OPACITY
      ctx.beginPath()

      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
          const ix = col * CELL
          const iy = row * CELL
          ctx.moveTo(ix - halfArm, iy)
          ctx.lineTo(ix + halfArm, iy)
          ctx.moveTo(ix, iy - halfArm)
          ctx.lineTo(ix, iy + halfArm)
        }
      }

      ctx.stroke()
      ctx.globalAlpha = 1
    }

    if (isStatic || isTouch) {
      drawStatic()
      const onResize = () => { resize(); drawStatic() }
      window.addEventListener('resize', onResize)
      return () => {
        window.removeEventListener('resize', resize)
        window.removeEventListener('resize', onResize)
      }
    }

    const onMouseMove = (e) => {
      const now = performance.now()
      if (now - lastPulseTimeRef.current > PULSE_INTERVAL) {
        pulsesRef.current.push({ x: e.clientX, y: e.clientY, t: now })
        if (pulsesRef.current.length > MAX_PULSES) {
          pulsesRef.current.shift()
        }
        lastPulseTimeRef.current = now
      }
    }
    window.addEventListener('mousemove', onMouseMove)

    const draw = () => {
      const W = canvas.width / dpr
      const H = canvas.height / dpr

      const style = getComputedStyle(document.documentElement)
      const inkColor = style.getPropertyValue('--color-ink').trim()

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, W, H)

      const now = performance.now()
      pulsesRef.current = pulsesRef.current.filter(p => now - p.t < PULSE_DURATION)
      const activePulses = pulsesRef.current

      const cols = Math.ceil(W / CELL) + 1
      const rows = Math.ceil(H / CELL) + 1

      const pulsed = []

      ctx.strokeStyle = inkColor
      ctx.lineWidth = 1
      ctx.globalAlpha = BASE_OPACITY
      ctx.beginPath()

      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
          const ix = col * CELL
          const iy = row * CELL

          let arm = BASE_ARM
          let opacity = BASE_OPACITY
          let isPulsed = false

          for (let p = 0; p < activePulses.length; p++) {
            const pulse = activePulses[p]
            const dx = ix - pulse.x
            const dy = iy - pulse.y
            const distSq = dx * dx + dy * dy

            if (distSq > PULSE_RADIUS * PULSE_RADIUS) continue

            const dist = Math.sqrt(distSq)
            const elapsed = (now - pulse.t) / 1000
            const wavefront = elapsed * WAVE_SPEED
            const diff = Math.abs(dist - wavefront)

            if (diff < BAND_WIDTH) {
              isPulsed = true
              const t = 1 - diff / BAND_WIDTH
              const bell = 0.5 * (1 + Math.cos(Math.PI * (1 - t)))
              const ageFade = 1 - (now - pulse.t) / PULSE_DURATION

              arm = Math.max(arm, BASE_ARM + (PEAK_ARM - BASE_ARM) * bell * ageFade)
              opacity = Math.max(opacity, BASE_OPACITY + (PEAK_OPACITY - BASE_OPACITY) * bell * ageFade)
            }
          }

          if (isPulsed) {
            pulsed.push({ ix, iy, arm, opacity })
          } else {
            const halfArm = BASE_ARM / 2
            ctx.moveTo(ix - halfArm, iy)
            ctx.lineTo(ix + halfArm, iy)
            ctx.moveTo(ix, iy - halfArm)
            ctx.lineTo(ix, iy + halfArm)
          }
        }
      }

      ctx.stroke()

      for (let i = 0; i < pulsed.length; i++) {
        const { ix, iy, arm, opacity } = pulsed[i]
        const halfArm = arm / 2
        ctx.globalAlpha = opacity
        ctx.beginPath()
        ctx.moveTo(ix - halfArm, iy)
        ctx.lineTo(ix + halfArm, iy)
        ctx.moveTo(ix, iy - halfArm)
        ctx.lineTo(ix, iy + halfArm)
        ctx.stroke()
      }

      ctx.globalAlpha = 1
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [isStatic])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}