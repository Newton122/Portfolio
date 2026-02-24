'use client';

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-slate-900 py-2 sm:py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3"
        >
          {/* Brand */}
          <motion.div whileHover={{ scale: 1.05 }} className="text-white font-bold text-xs sm:text-sm md:text-base font-mono">
            {''}
          </motion.div>

          {/* Links */}
          <div className="flex gap-3 sm:gap-4 text-slate-500 text-xs sm:text-sm">
            <motion.a
              href="#about"
              whileHover={{ color: '#10b981' }}
              className="hover:text-emerald-400 transition-colors"
            >
              About
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ color: '#10b981' }}
              className="hover:text-emerald-400 transition-colors"
            >
              Projects
            </motion.a>
            <motion.a
              href="#resume"
              whileHover={{ color: '#10b981' }}
              className="hover:text-emerald-400 transition-colors"
            >
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ color: '#10b981' }}
              className="hover:text-emerald-400 transition-colors"
            >
              Contact
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-slate-400 text-xs sm:text-sm">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-2 pt-2 border-t border-slate-800 text-center text-slate-500 text-xs sm:text-sm"
        >
          Crafted with passion using React, TypeScript & Framer Motion
        </motion.div>
      </div>
    </footer>
  )
}