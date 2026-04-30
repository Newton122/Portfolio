'use client';

import { motion } from 'framer-motion'
import { Code2, Zap, Target, Github } from 'lucide-react'

export default function About() {
  const frontendSkills = [
    { name: 'React 19', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Framer Motion', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg' },
    { name: 'Responsive Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' }
  ]
  const backendSkills = [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'Authentication', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' }
  ]
  const Other = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Data Analysis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'UI/UX Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' }
  ]

  const expertise = [
    { icon: Code2, title: 'Aspiring Full Stack Development', description: 'End-to-end development from seamless frontends to robust data-aware backend systems.' },
    { icon: Zap, title: 'Data Engineering & AI', description: 'Exploring data pipelines, database management and the integration of Machine Learning models into functional applications' },
    { icon: Target, title: 'Performance and Scalability', description: 'Optimizing application logic and database queries to ensure lighting-fast perfomance and reliable data processing' },
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
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white dark:bg-slate-950"
    >
      <div className="max-w-2xl mx-auto space-y-10">
        <motion.div variants={itemVariants} className="mb-1">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-0.5 font-mono" style={{fontSize: 'clamp(18px, 5vw, 32px)'}}>About & Skills</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-3">
         <motion.div variants={containerVariants} className="lg:col-span-2 space-y-3">
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">I am a Computer Science Engineering student with experience in building modern web applications using MERN stack.</motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">I am passionate about architecting user friendly interfaces and exploring intersection of AI and data engineering to solve real world problems through data-driven solutions.</motion.p>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-1 md:space-y-2">
            {/* Stats if available */}
          </motion.div>
        </div>

        <motion.div variants={containerVariants} className="mb-3">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-2">Core Expertise</h3>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05, y: -2 }} className="p-3 sm:p-4 bg-white/80 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 rounded-lg hover:border-emerald-500/50 transition-all backdrop-blur-sm">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Icon size={16} className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-2 md:space-y-3">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white mb-1 md:mb-2 flex items-center gap-1">
              <Code2 size={16} className="text-blue-600 dark:text-blue-400" />
              Frontend
            </h3>
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-2 sm:px-3 py-2 sm:py-3 rounded bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all text-[8px] sm:text-xs md:text-sm flex flex-col items-center gap-1"
                >
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" onError={(e) => e.target.style.display = 'none'} />
                  <span className="text-gray-900 dark:text-slate-200 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white mb-1 md:mb-2 flex items-center gap-1">
              <Zap size={16} className="text-blue-600 dark:text-blue-400" />
              Backend
            </h3>
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-2 sm:px-3 py-2 sm:py-3 rounded bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-indigo-500/50 transition-all text-[8px] sm:text-xs md:text-sm flex flex-col items-center gap-1"
                >
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" onError={(e) => e.target.style.display = 'none'} />
                  <span className="text-gray-900 dark:text-slate-200 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
    
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white mb-1 md:mb-2 flex items-center gap-1">
              <Target size={16} className="text-blue-600 dark:text-blue-400" />
              Other
            </h3>
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {Other.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-2 sm:px-3 py-2 sm:py-3 rounded bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-green-500/50 transition-all text-[8px] sm:text-xs md:text-sm flex flex-col items-center gap-1"
                >
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" onError={(e) => e.target.style.display = 'none'} />
                  <span className="text-gray-900 dark:text-slate-200 font-medium">{skill.name}</span>
                </motion.div>
              ))} 
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Newton122"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 dark:bg-slate-900/50 backdrop-blur-md border border-gray-200 dark:border-slate-700 rounded-lg p-6 hover:border-blue-500 inline-flex"
          >
            <Github size={64} className="text-gray-900 dark:text-white" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

