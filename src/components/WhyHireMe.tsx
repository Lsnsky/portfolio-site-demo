'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WhyHireMe = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Orange Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full transform rotate-12 scale-110"></div>
            
            {/* Main Image */}
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                <div className="text-6xl text-gray-400">👩‍💼</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
                Why{' '}
                <span className="text-primary">Hire me?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-dark mb-2">450+</div>
                <div className="text-gray-600">Project Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-dark mb-2">450+</div>
                <div className="text-gray-600">Project Completed</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="btn-primary flex items-center space-x-2">
              <span>Hire me</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
