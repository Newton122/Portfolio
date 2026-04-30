'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProject from '../components/FeaturedProject';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Profile() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <img
        src="/background.jpeg"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover -z-10 dark:block hidden"
      />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 space-y-24 pb-24 pt-12 text-white dark:text-black"
      >
        <Hero />
        <FeaturedProject />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}
