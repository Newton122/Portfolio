'use client';

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-2 sm:py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3"
        >
          {/* Brand */}
          <motion.div whileHover={{ scale: 1.05 }} className="text-gray-900 dark:text-white font-bold text-xs sm:text-sm md:text-base font-mono">
            {}
          </motion.div>

          {/* Links */}
          <div className="flex gap-3 sm:gap-4 text-gray-600 dark:text-slate-400 text-xs sm:text-sm">
            <motion.a
              href="#about"
              whileHover={{ color: '#10b981' }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              About
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ color: '#10b981' }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Projects
            </motion.a>
            <motion.a
              href="#resume"
              whileHover={{ color: '#10b981' }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ color: '#10b981' }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Contact
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-2 pt-2 border-t border-gray-200 dark:border-slate-800 text-center text-gray-600 dark:text-slate-400 text-xs sm:text-sm"
        >
          Crafted using React, TypeScripton  & Framer Motion
        </motion.div>
      </div>
    </footer>
  )
}
