import { all } from '/data/projectsData'
import Link from 'next/link'

export const metadata = {
  title: 'Projects — Kacper Ryske',
  description: 'All projects by Kacper Ryske — computational design, software development, and AEC technology.',
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[#0e1529] px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-[#a89cf7] transition-colors tracking-widest uppercase mb-12"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <p className="text-[#7c6af7] text-xs tracking-widest uppercase mb-2">All Work</p>
        <h1 className="text-4xl font-bold text-white mb-16">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {all.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="project-card block p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#7c6af7]/40 hover:bg-white/[0.04] group"
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-[#a89cf7] transition-colors">
                  {p.name}
                </h3>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-[#7c6af7] transition-colors flex-shrink-0 ml-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7l-10 10M7 7h10v10" />
                </svg>
              </div>
              <p className="text-[#7c6af7] text-xs mb-3">{p.subtitle}</p>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
