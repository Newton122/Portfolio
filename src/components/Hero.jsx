'use client';

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-4 sm:py-8 lg:py-2 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-2 left-8 w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-2 right-8 w-16 h-16 sm:w-20 sm:h-20 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 max-w-6xl">
        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl text-center z-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded border border-emerald-500/50 bg-emerald-100 dark:bg-emerald-900/30 mb-2">
            <Sparkles size={6} className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-[20px] font-medium">Developer, AI & Data Engineering Enthusiast</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight tracking-tight font-mono">
            Build <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-emerald-300">Exceptional</span> Products
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-[15px] text-gray-600 dark:text-slate-300 mx-auto mb-2 leading-tight px-2">
            High-performance web applications and Exploring AI & Data Engineering.
          </motion.p>

          <motion.p variants={itemVariants} className="text-xs sm:text-sm md:text-[13px] text-gray-500 dark:text-slate-400 mx-auto mb-3 leading-tight px-2">
            React, Node.js and modern full-stack solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 max-w-xs sm:max-w-md mx-auto">
            <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded">
              <p className="text-xs sm:text-[10px] font-bold text-emerald-600 dark:text-emerald-400"></p>
              <p className="text-gray-600 dark:text-slate-300 text-[8px] sm:text-[9px] leading-tight">Full-Stack </p>
            </div>
            <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded">
              <p className="text-xs sm:text-[10px] font-bold text-emerald-600 dark:text-emerald-400"></p>
              <p className="text-gray-600 dark:text-slate-300 text-[8px] sm:text-[9px] leading-tight">Continuous Learner</p>
            </div>
            <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded">
              <p className="text-xs sm:text-[10px] font-bold text-emerald-600 dark:text-emerald-400"></p>
              <p className="text-gray-600 dark:text-slate-300 text-[8px] sm:text-[9px] leading-tight">Projects</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-3">
            <motion.a
              href="#featured"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-animated-gradient px-2.5 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-[10px] text-white font-semibold inline-flex items-center gap-1.5"
            >
              Featured
              <motion.span animate={{ x: [0, 2, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={4} />
              </motion.span>
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-[10px] font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
            >
              Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white text-xs sm:text-[10px] font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
            >
              Contact
            </motion.a>
          </motion.div>

          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="mt-4">
            <p className="text-gray-500 dark:text-slate-400 text-[9px] mb-3"></p>
            <div className="flex justify-center">
              <svg className="w-5 h-5 text-gray-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 18 18">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Picture Section */}
        <motion.div
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center border-3 sm:border-4 border-emerald-500 flex-shrink-0 shadow-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.img
            src="/img.jpg"
            alt="img"
            className="w-full h-full rounded-full object-cover"
            animate={{ rotate: [0, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  )
}

