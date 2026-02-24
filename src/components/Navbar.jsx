'use client';

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-slate-500 to-transparent hidden sm:block">
        <div className="h-1 w-1 bg-slate-500 rounded-full absolute top-1/4 left-1/2 transform -translate-x-1/2"></div>
        <div className="h-1 w-1 bg-slate-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2"></div>
        <div className="h-1 w-1 bg-slate-500 rounded-full absolute top-3/4 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-slate-500 to-transparent hidden sm:block">
        <div className="h-1 w-1 bg-slate-500 rounded-full absolute top-1/4 left-1/2 transform -translate-x-1/2"></div>
        <div className="h-1 w-1 bg-slate-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2"></div>
        <div className="h-1 w-1 bg-slate-500 rounded-full absolute top-3/4 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-slate-900'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8 sm:h-10">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-xs sm:text-[10px] font-bold text-white font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Brighton Matikiti
            </motion.a>

            {/* Nav Items */}
            <ul className="hidden md:flex gap-2 lg:gap-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href={item.href}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-slate-800 text-slate-500 hover:text-emerald-400 hover:bg-slate-700 transition-colors text-[8px] sm:text-[10px] font-medium"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-animated-gradient px-3 sm:px-4 py-1.5 sm:py-2 rounded text-white font-semibold text-xs sm:text-sm"
              onClick={() => window.location.href = 'mailto:matikitibrighton6@gmail.com?subject=Project%20Inquiry&body=Hi%20Brighton,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.'}
            >
              <span className="hidden sm:inline">Get in Touch</span>
              <span className="sm:hidden">Contact</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </div>
  )
}