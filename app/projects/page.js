import { all } from '/data/projectsData'
import Link from 'next/link'
import CursorGrid from '../../components/CursorGrid'

export const metadata = {
  title: 'Projects — Kacper Ryske',
  description: 'All projects by Kacper Ryske — ML research, full-stack, data engineering.',
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-canvas px-6 md:px-10 py-24">
      <CursorGrid />
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors tracking-wider uppercase mb-16"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
          All Work
        </p>
        <div className="h-[3px] bg-ink mb-0" />

        {all.map((p, i) => (
          <Link
            key={p.name}
            href={`/projects/${p.slug}`}
            className="project-entry block group"
          >
            <div className="border-t border-rule pt-8 pb-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="md:col-span-7">
                  <h3 className="font-display text-lg md:text-2xl text-ink uppercase tracking-tight mb-1 group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="font-mono text-xs text-accent tracking-wide mb-4">
                    {p.subtitle}
                  </p>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="md:col-span-4 md:flex md:flex-col md:items-end md:justify-end">
                  <p className="tag leading-relaxed text-right hidden md:block">
                    {p.tags.join(' / ')}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 md:hidden">
                    {p.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}

        <div className="border-t border-rule pt-8">
          <Link
            href="/"
            className="font-mono text-xs text-ink tracking-wider uppercase hover:text-accent transition-colors"
          >
            &larr; Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}
