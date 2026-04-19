'use client'

import { motion } from 'framer-motion'
import GridPulse from './GridPulse'

const SKILL_GROUPS = [
  { label: 'LANGUAGES', items: ['Python', 'JavaScript', 'C#', 'SQL'] },
  { label: 'ML / AI', items: ['PyTorch', 'ResNet', 'XGBoost', 'Transformers'] },
  { label: 'WEB', items: ['React', 'Next.js', 'Node.js', 'Three.js'] },
  { label: 'TOOLS', items: ['Git', 'Docker', 'Azure', 'Jupyter'] },
]

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-8 md:pt-12">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.12 }}
      >
        {/* Thick rule */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-[3px] bg-ink mb-10 md:mb-14"
        />

        {/* Name + GridPulse row */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-between items-start"
        >
          <h1 className="font-display text-5xl md:text-[6rem] lg:text-[9rem] font-bold leading-[0.88] tracking-tight text-ink uppercase">
            Kacper<br />Ryske
          </h1>
          <div className="mt-3">
            <GridPulse />
          </div>
        </motion.div>

        {/* Thin rule */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-px bg-rule mt-8 mb-8 md:mt-12 md:mb-10"
        />

        {/* Two-column: role + bio */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16"
        >
          <div>
            <h2 className="font-display text-sm md:text-base text-ink uppercase tracking-wider leading-relaxed">
              Software Developer<br />
              &amp; ML Systems
            </h2>
          </div>
          <div>
            <p className="font-body text-sm text-muted leading-relaxed">
              Trained as an architect. Ended up building ML pipelines. Turns out the instinct is the same. Both collapse if the foundation is wrong. I like the messy problems where the model is only half the story. The other half is making it actually work outside a notebook.
            </p>
          </div>
        </motion.div>

        {/* Thin rule */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-px bg-rule mt-8 mb-6 md:mt-10 md:mb-8"
        />

        {/* Skills breakdown */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0"
        >
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="pr-4">
              <span className="font-display text-[10px] text-accent uppercase tracking-[0.2em] block mb-2">
                {group.label}
              </span>
              <div className="space-y-0.5 pb-2">
                {group.items.map((item) => (
                  <p key={item} className="font-mono text-xs text-muted tracking-wider">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Thin rule */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-px bg-rule mt-2 mb-2 md:mt-4 md:mb-4"
        />

        {/* CTAs */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-end gap-8"
        >
          <a
            href="#projects"
            className="font-mono text-xs text-ink tracking-wider uppercase hover:text-accent transition-colors"
          >
            View Work &rarr;
          </a>
          <a
            href="#contact"
            className="font-mono text-xs text-ink tracking-wider uppercase hover:text-accent transition-colors"
          >
            Contact &rarr;
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
