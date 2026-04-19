/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-space-mono)', 'monospace'],
        body: ['var(--font-work-sans)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        canvas: 'var(--color-canvas)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        rule: 'var(--color-rule)',
        stroke: 'var(--color-stroke)',
      },
    },
  },
  plugins: [],
}
