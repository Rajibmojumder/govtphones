import React from 'react';
import { motion } from 'framer-motion';
import EligibilityChecker from './EligibilityChecker';

const HeroSection = () => {
  return (
    <section className="relative bg-flag overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Get Your Free Government Phone Today
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-6"
            >
              Through the Lifeline and Affordable Connectivity Program (ACP), eligible low-income Americans can receive a free smartphone with unlimited talk, text, and data. Stay connected with family, access essential services, and embrace the digital world.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <EligibilityChecker />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;