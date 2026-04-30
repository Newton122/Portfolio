'use client';

import { motion } from 'framer-motion'
import { Github, ExternalLink, Award } from 'lucide-react'

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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-1 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white dark:bg-slate-950"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-1"
        >
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded border border-emerald-500/50 bg-emerald-100 dark:bg-emerald-900/30 mb-1">
            <Award size={12} className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm md:text-base font-medium">Featured</span>
          </div>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-mono" style={{fontSize: 'clamp(20px, 5vw, 32px)'}}>
            Project Spotlight
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center py-4 sm:py-6 md:py-8 bg-gray-100/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded p-3 sm:p-4 backdrop-blur-sm"
        >
          <p className="dark:text-slate-400 text-gray-600 text-xs sm:text-sm md:text-base">Featured project coming soon...</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
