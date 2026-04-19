'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-sm border-b border-stroke' : ''
      }`}
      style={{ backgroundColor: scrolled ? 'var(--color-canvas-alpha)' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        <a
          href="#"
          className="font-display text-base font-bold tracking-tight text-ink"
        >
          KR<span className="text-accent">.</span>
        </a>

        <div className="flex gap-8 items-center">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link font-mono text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5"
            >
              {link.label}
              {link.label === 'Contact' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
            </a>
          ))}
          <a
            href="https://github.com/Shavss"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link font-mono text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
