'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { featured } from '/data/projectsData'

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-10">
      {/* Section header */}
      <motion.div {...fade} transition={{ duration: 0.5 }}>
        <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
          Selected Work
        </p>
        <div className="h-[3px] bg-ink" />
      </motion.div>

      {/* Project list — ruled entries */}
      {featured.map((p, i) => (
        <motion.div
          key={p.name}
          className="project-entry group"
          {...fade}
          transition={{ duration: 0.5, delay: i * 0.06 }}
        >
          <Link href={`/projects/${p.slug}`} className="block">
            <div className="border-t border-rule pt-8 pb-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Name + subtitle + description */}
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

                {/* Tags */}
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
        </motion.div>
      ))}

      {/* View all link */}
      <div className="border-t border-rule pt-2">
        <Link
          href="/projects"
          className="font-mono text-xs text-ink tracking-wider uppercase hover:text-accent transition-colors"
        >
          View All Projects &rarr;
        </Link>
      </div>
    </section>
  )
}
