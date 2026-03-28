'use client'

import { useEffect, useRef } from 'react'

export default function CursorBuddy() {
  const glowRef = useRef(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches
    if (isMobile) return

    const el = glowRef.current
    if (!el) return

    const handleMouseMove = (e) => {
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(102, 103, 171, 0.15), transparent 80%)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 transition-none"
      style={{ background: 'transparent' }}
    />
  )
}
