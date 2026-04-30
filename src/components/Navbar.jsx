'use client';

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from './ThemeProvider'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <>
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
              ? 'dark:bg-black/90 dark:backdrop-blur-md dark:border-b dark:border-slate-900 bg-white/90 backdrop-blur-md border-b border-gray-200'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-8 sm:h-10">
              {/* Logo */}
              <motion.div
                className="text-xs sm:text-[20px] font-bold text-white font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/profile">Brighton Matikiti</Link>
              </motion.div>

              {/* Desktop Nav & Hamburger */}
              <div className="flex items-center gap-2">
                {/* Desktop Nav Items */}
                <ul className="hidden md:flex gap-2 lg:gap-3">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link
                        to={item.path}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 rounded dark:bg-slate-800 dark:text-slate-500 dark:hover:text-emerald-400 dark:hover:bg-slate-700 bg-gray-200 text-gray-700 hover:text-blue-600 hover:bg-gray-300 transition-colors text-[8px] sm:text-[10px] font-medium"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Hamburger */}
                <motion.button
                  className="md:hidden p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu size={20} className="dark:text-slate-300 text-gray-700" />
                </motion.button>
              </div>

              {/* Right side buttons */}
              <div className="flex items-center gap-2">
                {/* Theme Toggle */}
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1 sm:p-2 rounded transition-colors dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-700 hover:bg-gray-200 border dark:border-slate-700 border-gray-300"
                  title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  {theme === 'dark' ? <Sun size={16} className="sm:size-18" /> : <Moon size={16} className="sm:size-18" />}
                </motion.button>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-animated-gradient px-3 py-1.5 rounded text-white font-semibold text-xs whitespace-nowrap hidden sm:inline-flex"
                  onClick={() => window.location.href = 'mailto:matikitibrighton6@gmail.com?subject=Project%20Inquiry&body=Hi%20Brighton,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.'}
                >
                  Get in Touch
                </motion.button>

                {/* Mobile CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-animated-gradient px-2 py-1.5 rounded text-white font-semibold text-xs sm:hidden whitespace-nowrap"
                  onClick={() => window.location.href = 'mailto:matikitibrighton6@gmail.com?subject=Project%20Inquiry&body=Hi%20Brighton,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.'}
                >
                  Contact
                </motion.button>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <motion.div
          ref={sidebarRef}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className="fixed inset-0 z-[99] flex md:hidden"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {/* Overlay */}
          <motion.div
            className="flex-1 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <motion.div
            className="w-72 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-l border-gray-200 dark:border-slate-800 shadow-2xl flex flex-col"
            transition={{ delay: 0.1 }}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold dark:text-white text-gray-900">
                  Menu
                </div>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <X size={24} className="dark:text-slate-400 text-gray-600" />
                </motion.button>
              </div>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 p-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Link
                    to={item.path}
                    className="block w-full py-3 px-4 rounded-xl font-medium text-lg dark:text-slate-200 text-gray-800 dark:hover:bg-slate-800/50 hover:bg-gray-100 transition-all duration-200 flex items-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA in sidebar */}
            <div className="p-4 border-t border-gray-200 dark:border-slate-800">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-animated-gradient w-full py-3 rounded-xl text-white font-semibold text-base"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  window.location.href = 'mailto:matikitibrighton6@gmail.com?subject=Project%20Inquiry&body=Hi%20Brighton,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.'
                }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
