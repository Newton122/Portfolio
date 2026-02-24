'use client';

import { motion } from 'framer-motion'
import { Github, ExternalLink, Award } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations'

export default function FeaturedProject() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="featured" className="py-1 px-8 bg-slate-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-1"
        >
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded border border-emerald-500/40 bg-emerald-600/10 mb-1">
            <Award size={12} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs sm:text-sm md:text-base font-medium">Featured</span>
          </div>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-mono" style={{fontSize: 'clamp(20px, 5vw, 32px)'}}>
            Project Spotlight
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center py-4 sm:py-6 md:py-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50 rounded p-3 sm:p-4"
        >
          <p className="text-slate-400 text-xs sm:text-sm md:text-base">Featured project coming soon...</p>
        </motion.div>
      </div>
    </section>
  )
}