'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-[#7c6af7] text-xs tracking-widest uppercase mb-2">Get In Touch</p>
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-10">
          Open to computational design, software engineering, and AEC technology roles. Feel free to reach out.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:kacper.ryske@outlook.com"
            className="px-8 py-3 bg-[#7c6af7] text-white text-sm tracking-widest uppercase rounded hover:bg-[#6a58e0] transition-colors"
            data-hover
          >
            Email Me
          </a>
          <a
            href="https://github.com/Shavss"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-white/10 text-gray-300 text-sm tracking-widest uppercase rounded hover:border-[#7c6af7] hover:text-white transition-all"
            data-hover
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kacper-ryske-30125824a/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-white/10 text-gray-300 text-sm tracking-widest uppercase rounded hover:border-[#7c6af7] hover:text-white transition-all"
            data-hover
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-gray-600 text-xs tracking-widest">
          KR<span className="text-[#7c6af7]">.</span> — Built with Next.js
        </p>
      </div>
    </section>
  )
}
