'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Database, Zap, Brain, GitBranch } from 'lucide-react';

export default function LandingPage() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Welcome to My Portfolio";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <img
        src="/background.jpeg"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover -z-10 dark:block hidden"
      />
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 z-20">
        {/* Blur lines and background elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-x-0 top-20 h-1 bg-white/10 blur-3xl opacity-40"></div>
          <div className="absolute inset-x-0 bottom-24 h-1 bg-blue-200/20 blur-3xl opacity-40"></div>
          <div className="absolute top-10 left-10 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-black/20 z-20" />

        <div className="text-center z-30 max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-mono"
          >
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-emerald-400"
            >
              |
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8"
          >
            Discover my journey, projects and passion for technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/profile">
              <button className="px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-slate-800 text-slate-500 hover:text-emerald-400 hover:bg-slate-700 transition-colors text-[8px] sm:text-[10px] font-medium">
                Explore My Work
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-slate-800 text-slate-500 hover:text-emerald-400 hover:bg-slate-700 transition-colors text-[8px] sm:text-[10px] font-medium">
                  Get In Touch
              </button>
            </Link>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4 }}
            className="flex justify-center gap-3 sm:gap-4 mt-8"
          >
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-2 bg-blue-500/10 border-blue-500/30 rounded-lg border">
                <Code2 size={20} className="text-blue-400" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-2 bg-teal-500/10 border-teal-500/30 rounded-lg border">
                <Database size={20} className="text-teal-400" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-2 bg-yellow-500/10 border-yellow-500/30 rounded-lg border">
                <Zap size={20} className="text-yellow-400" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-2 bg-purple-500/10 border-purple-500/30 rounded-lg border">
                <Brain size={20} className="text-purple-400" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-2 bg-green-500/10 border-green-500/30 rounded-lg border">
                <GitBranch size={20} className="text-green-400" />
              </motion.div>
          </motion.div>

          {/* Animated 3D Floating Code Drum */}
          <motion.div
            className="absolute inset-y-28 right-4 sm:right-8 lg:right-12 z-10 hidden md:flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.75, rotateX: 18 }}
            animate={{ opacity: 1, scale: 1, rotateX: 18 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div
              className="relative w-40 h-64 sm:w-44 sm:h-72"
              style={{ perspective: 2200 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              >
                <div
                  className="absolute left-1/2 top-0 -translate-x-1/2 w-24 sm:w-28 h-full rounded-full border-slate-500/10 shadow-[inset_0_0_60px_rgba(15,23,42,0.24),0_24px_70px_rgba(15,23,42,0.12)] overflow-hidden"
                  style={{
                    background: 'radial-gradient(circle at 18% 28%, rgba(148,163,184,0.12), transparent 18%), radial-gradient(circle at 78% 28%, rgba(96,165,250,0.08), transparent 38%), linear-gradient(180deg, rgba(15,23,42,0.78), rgba(15,23,42,0.55))',
                    transform: 'translateZ(0px)',
                    backfaceVisibility: 'hidden',
                    opacity: 0.85,
                    backdropFilter: 'blur(7px)',
                  }}
                >
                  <div className="absolute inset-x-4 top-4 h-10 rounded-full bg-slate-800/25 border-slate-700/10 border" />
                  <div className="absolute inset-x-4 bottom-4 h-10 rounded-full bg-slate-800/20 border-slate-700/10 border" />
                  <div className="relative z-10 h-full px-3 py-5 flex flex-col justify-center gap-1 text-[10px] sm:text-[11px] font-mono leading-snug text-slate-200/70"
                    style={{ filter: 'blur(0.65px)' }}
                  >
                    {[
                      'const pipeline = [',
                      '  fetch(source)',
                      '  .clean(data)',
                      '  .aggregate()',
                      '  .store(db)',
                      '];',
                      'pipeline();',
                    ].map((line, index) => (
                      <div
                        key={index}
                        className={`${index === 0 ? 'font-semibold text-slate-100' : 'text-slate-300/70'} ${index > 0 ? 'ml-3' : ''}`}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute left-1/2 top-0 -translate-x-1/2 w-24 sm:w-28 h-10 rounded-full border-slate-500/20 bg-slate-900/45 shadow-[0_0_26px_rgba(15,23,42,0.18)]"
                  style={{ transform: 'rotateX(90deg) translateZ(100px)', backfaceVisibility: 'hidden' }}
                />
                <div
                  className="absolute left-1/2 top-0 -translate-x-1/2 w-20 sm:w-24 h-6 rounded-full border-slate-600/15 bg-slate-950/50"
                  style={{ transform: 'rotateX(90deg) translateZ(102px)', backfaceVisibility: 'hidden' }}
                />
                <div
                  className="absolute left-1/2 bottom-0 -translate-x-1/2 w-24 sm:w-28 h-10 rounded-full border-slate-600/15 bg-slate-900/45"
                  style={{ transform: 'rotateX(90deg) translateZ(-100px)', backfaceVisibility: 'hidden' }}
                />
              </motion.div>

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/3 via-violet-500/3 to-fuchsia-500/3 blur-xl -z-10" />
            </div>
          </motion.div>

          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-blue-500/5 to-transparent blur-3xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
