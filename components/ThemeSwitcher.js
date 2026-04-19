'use client'

import { useState, useEffect } from 'react'

const THEMES = ['a', 'b']
const ACCENT_COLORS = {
  a: '#D4580A',
  b: '#D4580A',
}

export default function ThemeSwitcher() {
  const [current, setCurrent] = useState('a')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const theme = THEMES.includes(saved) ? saved : 'a'
    setCurrent(theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [])

  const selectTheme = (theme) => {
    setCurrent(theme)
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    setExpanded(false)
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: expanded ? '6px' : '0px',
          padding: '8px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-rule)',
          borderRadius: '2px',
          transition: 'all 200ms ease',
          cursor: 'pointer',
          width: expanded ? '52px' : '28px',
          height: '28px',
          overflow: 'hidden',
          justifyContent: 'center',
        }}
      >
        {expanded ? (
          THEMES.map((theme) => (
            <button
              key={theme}
              onClick={() => selectTheme(theme)}
              aria-label={`Switch to theme ${theme.toUpperCase()}`}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: ACCENT_COLORS[theme],
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                flexShrink: 0,
                opacity: theme === current ? 1 : 0.5,
                transition: 'opacity 200ms ease',
              }}
            />
          ))
        ) : (
          <span
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: ACCENT_COLORS[current],
              display: 'block',
              flexShrink: 0,
            }}
          />
        )}
      </div>
    </div>
  )
}
