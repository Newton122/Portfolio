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
    { name: 'Python for Data Science ,AI $Development', issuer: 'IBM', year: '2025' },
    { name: 'Aspire Program -Cohort 5', issuer: 'Havard Aspire Institute', year: '2025' },
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
    <section id="resume" className="py-1 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-1">
            <div>
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 font-mono" style={{fontSize: 'clamp(18px, 5vw, 32px)'}}>Technical Profile</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Learning Experience</p>
            </div>
            <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-animated-gradient flex items-center justify-center gap-1 px-3 sm:px-4 py-2 rounded text-xs sm:text-sm text-white font-semibold shadow-lg w-full sm:w-auto">
              <Download size={16} />
              Download CV
            </motion.a>
          </div>

          <div className="mb-3 md:mb-4">
            <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex items-center gap-2 mb-2">
              <Briefcase size={18} className="text-blue-400" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">Experience & Skills</h3>
            </motion.div>

            <div className="p-3 sm:p-4 border border-emerald-500 rounded-lg bg-emerald-50">
              <p className="text-xs sm:text-sm md:text-base font-semibold text-emerald-700">
                Aspiring Software Engineer with a strong foundation in Java, JavaScript, React, and database systems. Passionate about building real-world applications and continuously learning modern technologies. Currently focused on Data Engineering while strengthening full-stack skills.
              </p>
            </div>
          </div>

          <div className="mb-3 md:mb-4">
            <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex items-center gap-2 mb-2">
              <BookOpen size={18} className="text-blue-400" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">Education</h3>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-1 md:space-y-2">
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -3 }} className="p-2 sm:p-3 rounded bg-gradient-to-br from-blue-600/15 to-blue-700/5 border border-blue-500/30 hover:border-blue-400/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs sm:text-sm text-slate-400">{edu.year}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-400 font-semibold">{edu.institution}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex items-center gap-2 mb-2">
              <Award size={18} className="text-blue-400" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">Certifications</h3>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-2 md:gap-3">
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -2 }} className="p-2 sm:p-3 rounded bg-gradient-to-br from-indigo-600/15 to-indigo-700/5 border border-indigo-500/30 hover:border-indigo-400/50 transition-all">
                  <p className="font-semibold text-white mb-1 text-xs sm:text-sm md:text-base">{cert.name}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs sm:text-sm text-slate-400">{cert.issuer}</p>
                    <p className="text-xs sm:text-sm text-indigo-400">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}