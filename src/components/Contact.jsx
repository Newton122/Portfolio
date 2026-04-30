'use client';

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '',
    message: '' 
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setError(true)
      return
    }

    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Newton122', label: 'GitHub' },
    { icon: Linkedin, href: 'www.linkedin.com/in/brighton-matikiti-1a48b2365', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:matikitibrighton6@gmail.com', label: 'Email' },
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Best for detailed project inquiries',
      value: 'matikitibrighton6@gmail.com',
      link: 'mailto:matikitibrighton6@gmail.com?subject=Project%20Inquiry&body=Hi%20Brighton,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect professionally',
      value: 'linkedin.com/in/brighton-matikiti',
      link: 'www.linkedin.com/in/brighton-matikiti-1a48b2365'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Available for remote & onsite work',
      value: 'Algiers, Algeria',
      link: 'https://www.google.com/maps/place/Algiers,+Algeria'
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'Usually respond within 24 hours',
      value: 'Quick turnaround',
      link: '#'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10 text-center"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 font-mono" style={{fontSize: 'clamp(20px, 5vw, 32px)'}}>Let\'s Connect</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400">
            
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 sm:gap-14 mb-10 sm:mb-12">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4 sm:space-y-5"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 font-mono">Contact</h3>
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  variants={itemVariants}
                  whileHover={{ x: 2 }}
                  className="block p-2 sm:p-3 rounded bg-gray-100/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-400/20 transition-all">
                      <Icon size={12} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">{method.title}</p>
                      <p className="text-gray-600 dark:text-slate-400 text-[10px] sm:text-xs">{method.description}</p>
                      <p className="text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <div className="pt-2 sm:pt-3 border-t border-gray-200 dark:border-slate-700">
              <h4 className="text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-slate-400 uppercase tracking-wider mb-1 sm:mb-2">
                Social
              </h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700 rounded-lg p-2 sm:p-3 transition-all"
                    >
                      <Icon size={18} className="text-gray-900 dark:text-slate-300" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 rounded p-3 sm:p-4 backdrop-blur-sm">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Send me a message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded p-3 sm:p-4 text-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="flex justify-center mb-2"
                  >
                    <CheckCircle size={20} className="text-emerald-600 dark:text-emerald-400" />
                  </motion.div>
                  <p className="text-emerald-700 dark:text-emerald-300 font-semibold mb-1 text-xs sm:text-sm">Message sent successfully!</p>
                  <p className="text-gray-700 dark:text-slate-300 text-xs sm:text-sm">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Name and Company Row */}
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-2 sm:px-3 py-2 rounded bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white dark:placeholder-slate-400 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-xs sm:text-sm shadow-sm"
                        placeholder="Enter your full name"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-2 sm:px-3 py-2 rounded bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white dark:placeholder-slate-400 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-xs sm:text-sm shadow-sm"
                        placeholder="Your company"
                      />
                    </motion.div>
                  </div>

                  {/* Email */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-2 rounded bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white dark:placeholder-slate-400 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-xs sm:text-sm shadow-sm"
                      placeholder="Enter your email address"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-2 sm:px-3 py-2 rounded bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white dark:placeholder-slate-400 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none text-xs sm:text-sm shadow-sm"
                    ></textarea>
                  </motion.div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded p-2 sm:p-3 flex items-center gap-2"
                    >
                      <AlertCircle size={16} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 dark:text-red-300 text-xs sm:text-sm">Please fill all required fields.</p>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="btn-animated-gradient w-full px-4 py-2 sm:py-3 rounded text-white font-semibold text-xs sm:text-sm md:text-base shadow-lg"
                  >
                    Send Message
                  </motion.button>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 text-center">
                    I respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
