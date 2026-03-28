'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { featured } from '/data/projectsData'

function ProjectCard({ p, i }) {
  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="project-card block p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#7c6af7]/40 hover:bg-white/[0.04] group"
      data-hover
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
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#7c6af7] text-xs tracking-widest uppercase mb-2">Selected Work</p>
        <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {featured.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#a89cf7] transition-colors tracking-widest uppercase"
        >
          View all projects
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7l-10 10M7 7h10v10" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
