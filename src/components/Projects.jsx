'use client';

import { motion } from 'framer-motion'
import { Github, Pointer } from 'lucide-react'

export default function Projects() {
  const projects = [
  
    {
      title: 'Smart Task - Simple MERN App',
      description: 'A Full-stack task management application built with MERN stack.',
      tags: ['React', 'Node.js', 'MongoDB Atlas', 'Express', 'JWT','Typescript'],
      stats: ['','routes'],
      github: 'https://github.com/Newton122',
      live: 'https://full-stack-task-tracker-app-fronten.vercel.app/',
      image: 'SmartTask.png',
    },
    {
      title: 'BookVerse-Library System Frontend',
      description: 'Frontend Library System.',
      tags: ['React', 'TailwindCSS', 'Node.js'],
      stats: ['', 'Books'],
      github: 'https://github.com/Newton122',
      live: 'https://book-library-system-frontend.vercel.app/',
      image: '/Bookverse.png',
    },
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
        <motion.div variants={itemVariants} className="mb-1">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-0.5 font-mono leading-none" style={{fontSize: 'clamp(16px, 5vw, 32px)'}}>Projects</h2>
          <p className="text-sm sm:text-base dark:text-slate-400 text-gray-600">Recent work & technical expertise</p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -2 }} className="group relative overflow-hidden rounded bg-white/90 dark:bg-slate-800/90 border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all backdrop-blur-sm shadow-lg dark:shadow-black/20">
              <div className="relative h-24 sm:h-32 md:h-40 overflow-hidden bg-gray-100 dark:bg-slate-900 rounded-t">
                <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 dark:from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-2 sm:p-3 md:p-4 space-y-1 md:space-y-2">
                <div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="dark:text-slate-400 text-gray-600 text-[10px] sm:text-xs md:text-sm leading-tight">{project.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-1.5 md:gap-2 py-2 md:py-3 border-y border-gray-200 dark:border-slate-700">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-xs sm:text-sm md:text-base font-bold text-blue-600 dark:text-blue-400">{stat}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 sm:px-3 sm:py-2 text-[8px] sm:text-xs md:text-sm rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50 hover:border-blue-400 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-1.5 md:gap-2 pt-2 md:pt-3">
                  <motion.a href={project.github} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center gap-1 flex-1 py-1.5 sm:py-2 md:py-3 rounded bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-900 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white text-[8px] sm:text-xs md:text-sm font-medium transition-colors border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600">
                    <Github size={12} />
                    Code
                  </motion.a>
                  <motion.a href={project.live} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="btn-animated-gradient flex items-center justify-center gap-1 flex-1 py-1.5 sm:py-2 md:py-3 rounded text-white text-[8px] sm:text-xs md:text-sm font-medium shadow-lg">
                    <Pointer size={12} />
                    Preview
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="text-center mt-1">
          <p className="dark:text-slate-400 text-gray-600 mb-1 text-xs sm:text-sm md:text-base">Want to see more work?</p>
          <motion.a href="https://github.com/Newton122" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-1 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded border-2 border-gray-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all text-xs sm:text-sm md:text-base">
            <Github size={16} />
            Visit GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
