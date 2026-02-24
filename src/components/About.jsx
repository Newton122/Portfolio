'use client';

import { motion } from 'framer-motion'
import { Code2, Zap, Target } from 'lucide-react'

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
    { icon: Code2, title: 'Aspiring Full Stack Development', description: 'End-to-end development from beautiful frontends to robust backend systems.' },
    { icon: Zap, title: 'Performance Optimization', description: 'Creating lightning-fast applications through code splitting and caching.' },
    { icon: Target, title: 'User Experience Design', description: 'Building intuitive interfaces that delight users.' },
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
    <section id="about" className="py-1 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-1">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 font-mono" style={{fontSize: 'clamp(18px, 5vw, 32px)'}}>About & Skills</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-500"></p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-2 mb-3">
         <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 space-y-1 md:space-y-2">
            <motion.p variants={itemVariants} className="text-slate-500 text-sm md:text-base leading-relaxed">I'm a full-stack developer, with experience in building modern web applications using MERN stack.</motion.p>
            <motion.p variants={itemVariants} className="text-slate-500 text-sm md:text-base leading-relaxed">I'm passionate creating user friendly interfaces and exploring AI and data engineering to solve real world problems.</motion.p>
            <motion.p variants={itemVariants} className="text-slate-500 text-sm md:text-base leading-relaxed"> </motion.p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-1 md:space-y-2">
            {[
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="dotted-left bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded p-2 hover:border-blue-500/30 transition-all">
                <p className="text-xs sm:text-sm md:text-base font-bold text-blue-400">{stat.value}</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-3">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-emerald-400 mb-2">Core Expertise</h3>
          <div className="grid md:grid-cols-3 gap-2 md:gap-3">
            {expertise.filter(item => item.title !== 'DevOps').map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05, y: -2 }} className="dotted-left bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-3 sm:p-4 hover:border-emerald-500 transition-all" style={{ '--dot-color': 'rgba(16,185,129,0.9)' }}>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Icon size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs sm:text-sm md:text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">{item.description}</p>
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
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-1 md:mb-2 flex items-center gap-1">
              <Code2 size={16} className="text-blue-400" />
              Frontend
            </h3>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 sm:gap-2">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="zigzag-badge dotted-left px-2 sm:px-3 py-2 sm:py-3 rounded bg-gradient-to-br from-blue-600/20 to-blue-700/10 text-blue-300 font-medium text-center cursor-default transition-all text-[8px] sm:text-xs md:text-sm flex flex-col items-center gap-1"
                  style={{ '--zigzag': 'rgba(96,165,250,0.95)', '--dot-color': 'rgba(96,165,250,0.95)' }}
                >
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" onError={(e) => e.target.style.display = 'none'} />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-1 md:mb-2 flex items-center gap-1">
              <Zap size={16} className="text-blue-400" />
              Backend
            </h3>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 sm:gap-2">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="zigzag-badge dotted-left px-2 sm:px-3 py-2 sm:py-3 rounded bg-gradient-to-br from-indigo-600/20 to-indigo-700/10 text-indigo-300 font-medium text-center cursor-default transition-all text-[8px] sm:text-xs md:text-sm flex flex-col items-center gap-1"
                  style={{ '--zigzag': 'rgba(99,102,241,0.95)', '--dot-color': 'rgba(99,102,241,0.95)' }}
                >
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" onError={(e) => e.target.style.display = 'none'} />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
    
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-1 md:mb-2 flex items-center gap-1">
              <Target size={16} className="text-blue-400" />
              Other
            </h3>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 sm:gap-2">
              {Other.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="zigzag-badge dotted-left px-2 sm:px-3 py-2 sm:py-3 rounded bg-gradient-to-br from-green-600/20 to-green-700/10 text-green-300 font-medium text-center cursor-default transition-all text-[8px] sm:text-xs md:text-sm flex flex-col items-center gap-1"
                  style={{ '--zigzag': 'rgba(34,197,94,0.95)', '--dot-color': 'rgba(34,197,94,0.95)' }}
                >
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" onError={(e) => e.target.style.display = 'none'} />
                  <span>{skill.name}</span>
                </motion.div>
              ))} 

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}