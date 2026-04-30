'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <img
        src="/background.jpeg"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover -z-10 dark:block hidden"
      />
      <div className="relative z-20">
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.18 }}
          className="space-y-20 pb-20 pt-12"
        >
          <About />
        </motion.main>
        <Footer />
      </div>
    </div>
  );
}
