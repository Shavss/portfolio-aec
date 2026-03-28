'use client'

import { motion } from 'framer-motion'
import AIOrb from './AiOrb'

const basePath = '/portfolio-aec'

const TECHS = [
  { name: 'Rhino / GH',  icon: `${basePath}/images/logo-grasshopper-10.png` },
  { name: 'Python',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C#',           icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'JavaScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'SQL',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'Power BI',     icon: null },
  { name: 'React',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Docker',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
]

function TechIcon({ name }) {
  const icons = {
    'Power BI': (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="18" width="4" height="8" rx="1" fill="#6667ab"/>
        <rect x="12" y="12" width="4" height="14" rx="1" fill="#7c6af7"/>
        <rect x="18" y="8" width="4" height="18" rx="1" fill="#a89cf7"/>
        <rect x="24" y="4" width="4" height="22" rx="1" fill="#c4b8fc"/>
      </svg>
    ),
  }
  return icons[name] || null
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-[#7c6af7] text-sm tracking-widest uppercase mb-4 font-mono">
          Hi, I&apos;m
        </p>

        {/* Name + orb row */}
        <div className="flex items-center gap-6 mb-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Kacper Ryske
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-light mt-2">
              Software Developer &amp; Computational Designer
            </h2>
          </div>
          <div className="hidden md:block ml-auto">
            <AIOrb size={180} />
          </div>
        </div>

        <p className="text-gray-500 max-w-xl leading-relaxed text-sm mb-10">
          I&apos;m an architectutal designer turned software developer who builds computational
          design tools, automation pipelines, and data-driven workflows for the
          AEC industry. With a background in architecture and a computational postgraduate degree, I bridge design thinking with
          robust software engineering to solve complex building and urban design challenges.
        </p>

        <div className="flex gap-4 flex-wrap mb-12">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#7c6af7] text-white text-sm tracking-widest uppercase rounded hover:bg-[#6a58e0] transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/10 text-gray-300 text-sm tracking-widest uppercase rounded hover:border-[#7c6af7] hover:text-white transition-all"
          >
            Contact
          </a>
        </div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-4 gap-3">
          {TECHS.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#7c6af7]/40 hover:bg-white/10 transition-all"
            >
              {tech.icon ? (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8"
                />
              ) : (
                <TechIcon name={tech.name} />
              )}
              <span className="text-xs text-gray-400">{tech.name}</span>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}