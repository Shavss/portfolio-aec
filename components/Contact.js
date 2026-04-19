'use client'

import { motion } from 'framer-motion'
import InstitutionsBanner from './InstitutionsBanner'

const LINKS = [
  {
    label: 'Email',
    href: 'mailto:kacper.ryske@outlook.com',
    text: 'kacper.ryske@outlook.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Shavss',
    text: 'github.com/Shavss',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kacper-ryske-30125824a/',
    text: 'linkedin.com/in/kacper-ryske',
    external: true,
  },
]

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-10">
      {/* Thick rule */}
      <div className="h-[3px] bg-ink mb-10 md:mb-14" />

      <motion.div {...fade} transition={{ duration: 0.6 }}>
        <h2 className="font-display text-4xl md:text-6xl text-ink uppercase tracking-tight leading-[0.9] mb-6">
          Let&apos;s Work<br />Together
        </h2>
        <p className="font-body text-sm text-muted max-w-md leading-relaxed mb-0">
        </p>

      </motion.div>

      {/* Contact links — ruled list */}
      <div className="h-px bg-rule" />
      {LINKS.map(link => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noreferrer' : undefined}
          className="flex justify-between items-center py-4 border-b border-rule group hover:pl-2 transition-all"
        >
          <span className="font-mono text-xs text-muted tracking-wider uppercase">
            {link.label}
          </span>
          <span className="font-body text-sm text-ink group-hover:text-accent transition-colors">
            {link.text}
          </span>
        </a>
      ))}

      {/* Institutions banner */}
      <InstitutionsBanner />

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-rule flex justify-between items-center">
        <p className="font-mono text-xs text-muted tracking-wider">
          KR<span className="text-accent">.</span>
        </p>
        <p className="font-mono text-xs text-muted tracking-wider">
          2026
        </p>
      </div>
    </section>
  )
}
