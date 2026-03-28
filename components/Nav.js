'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['about', 'projects', 'contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0E1529]/90 backdrop-blur border-b border-black/5' : ''
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="text-gray-900 font-bold tracking-widest text-sm">
          KR<span className="text-[#6667AB]">.</span>
        </a>
        <div className="flex gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="nav-link text-xs tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="https://github.com/Shavss"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-[#7c6af7] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>

        </div>
      </div>
    </nav>
  )
}
