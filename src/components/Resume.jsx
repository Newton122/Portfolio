'use client';

import { motion } from 'framer-motion'
import { Download, Award, BookOpen, Briefcase } from 'lucide-react'

export default function Resume() {
  const experiences = [
    {
      role: 'Aspiring Software Engineer',
      company: '',
      period: '',
      location: '',
      description: '',
      achievements: [],
      skills: [],
    },
  ]

  const teams = [
    {
      name: 'Open Minds Club',
      role: 'IT Department - UI/UX Designer & AI',
      period: '2025 - Present',
      description: 'Designing user interfaces and exploring AI applications for club projects.',
    },
    {
      name: 'Aspire Program - Cohort 5',
      role: 'Member',
      period: '2025',
      description: 'Participated in intensive training on career ,  development and leadership skills.',
    },
  ]

  const education = [
    { degree: 'B.S. Computer Science Engineering', institution: 'USTHB', year: '2024-2029' },
  ]

  const certifications = [
    { name: 'Fundamentals of Machine Learning and Artificial Intelligence', issuer: 'AWS', year: '2026' },
    { name: 'Python for Data Science ,AI & Development', issuer: 'IBM', year: '2025' },
    { name: 'Aspire Program -Cohort 5', issuer: 'Havard Aspire Institute', year: '2025' },
    { name: 'Python Project for Data Engineering', issuer: 'IBM', year: '2026' },
  ]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.section 
      variants={containerVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }}
      className="relative py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="max-w-2xl mx-auto space-y-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.3 }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-1">
            <div>
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-0.5 font-mono" style={{fontSize: 'clamp(18px, 5vw, 32px)'}}>Technical Profile</h2>
              <p className="dark:text-slate-400 text-gray-600 text-xs sm:text-sm">Learning Experience</p>
            </div>
            <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-animated-gradient flex items-center justify-center gap-1 px-3 sm:px-4 py-2 rounded text-xs sm:text-sm text-white font-semibold shadow-lg w-full sm:w-auto">
              <Download size={16} />
              Download CV
            </motion.a>
          </div>

          <div className="mb-3 md:mb-4">
            <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex items-center gap-2 mb-2">
              <Briefcase size={18} className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white">Experience & Skills</h3>
            </motion.div>

            <div className="p-3 sm:p-4 border border-emerald-500/50 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/20">
              <p className="text-xs sm:text-sm md:text-base font-semibold text-emerald-800 dark:text-emerald-300">
              Aspiring Data Engineer currently strengthening core skills in Python and Database Systems. Actively exploring AI/ML, while leveraging a backgroung in modern Full-Stack development to build scalable applications.
              </p>
            </div>
          </div>

          <div className="mb-3 md:mb-4">
            <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex items-center gap-2 mb-2">
              <BookOpen size={18} className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white">Education</h3>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-1 md:space-y-2">
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -3 }} className="p-2 sm:p-3 rounded bg-white/80 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <span className="text-xs sm:text-sm dark:text-slate-400 text-gray-600">{edu.year}</span>
                  </div>
                  <p className="text-xs sm:text-sm dark:text-blue-400 text-blue-600 font-semibold">{edu.institution}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex items-center gap-2 mb-2">
              <Award size={18} className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white">Certifications</h3>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-2 md:gap-3">
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -2 }} className="p-2 sm:p-3 rounded bg-white/80 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 hover:border-indigo-500/50 transition-all">
                  <p className="font-semibold text-gray-900 dark:text-white mb-1 text-xs sm:text-sm md:text-base">{cert.name}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs sm:text-sm dark:text-slate-400 text-gray-600">{cert.issuer}</p>
                    <p className="text-xs sm:text-sm dark:text-indigo-400 text-indigo-600">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
