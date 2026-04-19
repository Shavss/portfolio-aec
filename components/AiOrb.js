'use client'

import { useEffect, useRef } from 'react'

export default function AIOrb({ size = 220 }) {
  const orbRef = useRef(null)
  const wrapRef = useRef(null)
  const rotRef = useRef({ x: 8, y: 0 })
  const rafRef = useRef(null)
  const targetRef = useRef({ x: 8, y: 0 })

  useEffect(() => {
    const orb = orbRef.current
    if (!orb) return

    const totalDots = 520
    const radius = 88
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < totalDots; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / totalDots)
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.cos(phi)
      const z = radius * Math.sin(phi) * Math.sin(theta)

      const dot = document.createElement('span')
      const dotSize = (1.0 + Math.random() * 1.0).toFixed(2) + 'px'
      const pulse = (3.8 + Math.random() * 3.6).toFixed(2) + 's'

      // Latitude wave — dots on same horizontal ring pulse together
      const delay = (-(phi / Math.PI) * 4).toFixed(2) + 's'

      dot.style.cssText = `
        --size: ${dotSize};
        --x: ${x}px; --y: ${y}px; --z: ${z}px;
        --pulse: ${pulse}; --delay: ${delay};
        position: absolute;
        top: 50%; left: 50%;
        width: var(--size); height: var(--size);
        margin: calc(var(--size) / -2);
        border-radius: 50%;
        background: rgba(235, 245, 255, 0.95);
        box-shadow: 0 0 4px rgba(255,255,255,0.18);
        opacity: 0.75;
        transform: translate3d(var(--x), var(--y), var(--z));
        animation: orbPulse var(--pulse) ease-in-out infinite var(--delay);
        will-change: transform, opacity;
      `
      fragment.appendChild(dot)
    }
    orb.appendChild(fragment)

    // Mouse tracking
    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetRef.current = {
        x: ((e.clientY - cy) / cy) * 18,
        y: ((e.clientX - cx) / cx) * 25,
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Smooth lerp loop
    const lerp = (a, b, t) => a + (b - a) * t
    const tick = () => {
      rotRef.current.x = lerp(rotRef.current.x, targetRef.current.x, 0.05)
      rotRef.current.y = lerp(rotRef.current.y, targetRef.current.y, 0.05)
      if (orb) {
        orb.style.transform = `rotateX(${rotRef.current.x}deg) rotateY(${rotRef.current.y}deg)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafRef.current)
      orb.innerHTML = ''
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes orbPulse {
          0%, 100% { opacity: 0.35; transform: translate3d(var(--x), var(--y), var(--z)) scale(0.9); }
          50%       { opacity: 1;   transform: translate3d(var(--x), var(--y), var(--z)) scale(1.8); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(0.96); opacity: 0.45; }
          50%       { transform: scale(1.06); opacity: 0.8; }
        }
        .orb-breathe { animation: breathe 7s ease-in-out infinite; }
      `}</style>

      <div
        ref={wrapRef}
        style={{ width: size, height: size, perspective: '800px' }}
        className="relative grid place-items-center flex-shrink-0"
      >
        <div
          className="orb-breathe absolute rounded-full pointer-events-none"
          style={{
            width: size * 0.4,
            height: size * 0.4,
            background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 40%, rgba(255,255,255,0) 75%)',
            filter: 'blur(10px)',
          }}
        />
        <div
          ref={orbRef}
          className="relative"
          style={{
            width: size * 0.78,
            height: size * 0.78,
            transformStyle: 'preserve-3d',
          }}
        />
      </div>
    </>
  )
}
