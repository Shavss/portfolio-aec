'use client'

import { motion } from 'framer-motion'

const skills = [
  { category: 'Computational Design', items: ['Rhino', 'Grasshopper', 'Revit', 'Dynamo', 'COMPAS'] },
  { category: 'Languages', items: ['Python', 'C#', 'JavaScript', 'SQL', 'LaTeX'] },
  { category: 'Web & Data', items: ['React', 'Next.js', 'Node.js', 'Power BI', 'Azure'] },
  { category: 'Tools & Platforms', items: ['Git', 'Docker', 'ABB Robotics', 'ROS', 'Jupyter'] },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#7c6af7] text-xs tracking-widest uppercase mb-2">Background</p>
        <h2 className="text-3xl font-bold text-white mb-10">About</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
          I studied Architecture at the University of Glasgow, where my interest in the relationship between data-driven systems and physical space first took shape. At David Chipperfield Architects I joined the digital transformation team, working on data modelling, business intelligence, and engineering internal tooling. That experience pulled me toward building the systems themselves.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
          I went on to complete a Master&apos;s in Information Technologies at the Technical University of Munich, specialising in software development and AI. Alongside my studies, I worked as a research assistant at TUM&apos;s Professorship of Digital Fabrication, contributing to computational design tools and robotic fabrication workflows for climate-responsive brick assemblies. I also worked with Siemens on legacy system modernisation. My thesis was completed at MIT&apos;s Senseable City Lab, building a Bayesian fusion model for urban species classification. I bring an architect&apos;s instinct for structure and clarity to every system I build.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5"
        >
          {skills.map(s => (
            <div key={s.category}>
              <p className="text-[#7c6af7] text-xs tracking-widest uppercase mb-2">{s.category}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
