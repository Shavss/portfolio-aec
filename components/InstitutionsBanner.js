'use client'

import { useEffect, useRef } from 'react'

const INSTITUTIONS = [
  { name: 'Technical University of Munich' },
  { name: 'University of Glasgow' },
  { name: 'Siemens' },
  { name: 'David Chipperfield Architects' },
  { name: 'ZM-I' },
  { name: 'Innovia Partners' },
  { name: 'MIT Senseable City Lab' },
]

const ITEMS = [...INSTITUTIONS, ...INSTITUTIONS]

export default function InstitutionsBanner() {
  const trackRef = useRef(null)
  const posRef = useRef(0)
  const rafRef = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const speed = 0.35

    const tick = () => {
      if (!pausedRef.current) {
        const halfWidth = track.scrollWidth / 2
        posRef.current += speed
        if (posRef.current >= halfWidth) posRef.current = 0
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    const pause = () => { pausedRef.current = true }
    const resume = () => { pausedRef.current = false }

    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(rafRef.current)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <div className="w-full py-10 border-y border-white/5">
      <p className="text-center text-xs tracking-widest uppercase text-white/30 mb-6">
        Institutions &amp; organisations I&apos;ve worked with
      </p>

      <div className="overflow-hidden">
        <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
          {ITEMS.map((inst, i) => (
            <div key={i} className="inline-flex items-center flex-shrink-0">
              <span className="text-sm font-semibold tracking-widest uppercase text-white/70 px-8">
                {inst.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6667AB] flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
