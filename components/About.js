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
        <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {skills.map(s => (
          <div key={s.category}>
            <p className="text-[#7c6af7] text-xs tracking-widest uppercase mb-3">{s.category}</p>
            <div className="flex flex-wrap gap-2">
              {s.items.map(item => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}