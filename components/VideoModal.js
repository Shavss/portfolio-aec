'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VideoModal({ vimeoId, isOpen, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-canvas" style={{ opacity: 0.96 }} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 font-mono text-xs text-muted hover:text-accent transition-colors tracking-wider uppercase flex items-center gap-2"
          >
            Close
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Video container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="relative w-full max-w-6xl mx-6"
            style={{ aspectRatio: '16 / 9' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Accent border frame */}
            <div
              className="absolute -inset-px border border-rule"
              style={{ pointerEvents: 'none' }}
            />

            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
              className="w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
