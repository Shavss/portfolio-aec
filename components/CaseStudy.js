'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import VideoModal from './VideoModal'

const fade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const scrollReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
}

export default function CaseStudy({ project, index, prev, next }) {
  const num = String(index + 1).padStart(2, '0')
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <article className="py-24 md:py-32">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors tracking-wider uppercase mb-16"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Projects
        </Link>
      </motion.div>

      {/* ── Hero Section ── */}
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
      >
        {/* Thick rule */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-[3px] bg-ink mb-10 md:mb-14"
        />

        {/* Number + Title + Metadata */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Background number watermark */}
          <span
            className="absolute -top-6 -left-2 font-display font-bold leading-none text-ink select-none pointer-events-none hidden md:block"
            style={{ fontSize: '16rem', opacity: 0.04 }}
          >
            {num}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 relative">
            {/* Left: Title */}
            <div className="md:col-span-7">
              <p className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4">
                {num}
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight text-ink uppercase mb-4">
                {project.name}
              </h1>
              <p className="font-body text-sm text-muted leading-relaxed max-w-lg">
                {project.subtitle}
              </p>
            </div>

            {/* Right: Metadata */}
            <div className="md:col-span-5 md:flex md:flex-col md:justify-end">
              <div className="space-y-4">
                {[
                  { label: 'Role', value: project.role },
                  { label: 'Context', value: project.context },
                  { label: 'Year', value: project.year },
                ].map(item => (
                  <div key={item.label}>
                    <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-1">
                      {item.label}
                    </span>
                    <span className="font-body text-sm text-ink">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thin rule */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.5 }}
          className="h-px bg-rule mt-10 mb-6 md:mt-14 md:mb-8"
        />

        {/* Tag strip */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-muted tracking-wider">
            {project.tags.join(' / ')}
          </p>
        </motion.div>

        {/* Thin rule */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.4 }}
          className="h-px bg-rule mt-6 md:mt-8"
        />
      </motion.div>

      {/* ── Challenge + Approach ── */}
      <motion.div
        {...scrollReveal}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-16 md:mt-24"
      >
        <div>
          <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-4">
            The Challenge
          </span>
          <p className="font-body text-sm text-muted leading-relaxed">
            {project.challenge}
          </p>
        </div>
        <div>
          <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-4">
            The Approach
          </span>
          <p className="font-body text-sm text-muted leading-relaxed">
            {project.approach}
          </p>
        </div>
      </motion.div>

      {/* Thin rule */}
      <div className="h-px bg-rule mt-16 md:mt-24" />

      {/* ── Key Capabilities ── */}
      <div className="mt-16 md:mt-24">
        <motion.div
          {...scrollReveal}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-8 md:mb-12">
            Key Capabilities
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
          {project.keyFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...scrollReveal}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-rule py-6 md:py-8"
            >
              <span className="font-mono text-xs text-ink-faded block mb-2">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-sm md:text-base text-ink uppercase tracking-tight mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-xs text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Thin rule */}
      <div className="h-px bg-rule mt-8 md:mt-12" />

      {/* ── Outcome ── */}
      <motion.div
        {...scrollReveal}
        transition={{ duration: 0.6 }}
        className="mt-16 md:mt-24"
      >
        <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-6">
          Outcome
        </span>
        <p className="font-body text-lg md:text-xl text-ink leading-relaxed max-w-3xl">
          {project.outcome}
        </p>
      </motion.div>

      {/* External link + Video */}
      <motion.div
        {...scrollReveal}
        transition={{ duration: 0.5 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="case-study-link inline-flex items-center gap-3 border border-rule px-6 py-3 font-mono text-xs text-ink uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
        >
          View Project
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>

        {project.parentProject && (
          <a
            href={project.parentProject.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-rule px-6 py-3 font-mono text-xs text-ink uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
          >
            {project.parentProject.label}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}

        {project.vimeoId && (
          <button
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-3 border border-rule px-6 py-3 font-mono text-xs text-ink uppercase tracking-wider hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            Watch Video
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}
      </motion.div>

      {/* Video modal */}
      {project.vimeoId && (
        <VideoModal
          vimeoId={project.vimeoId}
          isOpen={videoOpen}
          onClose={() => setVideoOpen(false)}
        />
      )}

      {/* ── Bottom Navigation ── */}
      <div className="h-[3px] bg-ink mt-20 md:mt-32" />

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div>
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="group block"
            >
              <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] block mb-2">
                Previous
              </span>
              <span className="font-display text-sm md:text-lg text-ink uppercase tracking-tight group-hover:text-accent transition-colors">
                &larr; {prev.name}
              </span>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="group block"
            >
              <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] block mb-2">
                Next
              </span>
              <span className="font-display text-sm md:text-lg text-ink uppercase tracking-tight group-hover:text-accent transition-colors">
                {next.name} &rarr;
              </span>
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
