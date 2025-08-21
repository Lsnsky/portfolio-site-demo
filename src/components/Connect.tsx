'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Mail, Send } from 'lucide-react';

const Connect = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            Have an Awesome Project Idea?{' '}
            <span className="text-primary">Let&apos;s Discuss</span>
          </h2>
          
          {/* Email Input */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg">
              <div className="flex items-center px-4 py-3 text-gray-400">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 px-4 py-3 outline-none text-gray-700"
              />
              <button className="bg-primary text-white px-6 py-3 hover:bg-primary-dark transition-colors duration-200 flex items-center space-x-2">
                <span>Send</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-primary" />
              <span>4.9/5 Average Ratings</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">🏆</span>
              </div>
              <span>25+ Winning Awards</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span>Certified Product Designer</span>
            </div>
          </div>
        </motion.div>

        {/* Orange Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl p-8 mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-white text-lg font-medium">
            <span>UX Design</span>
            <Star className="w-4 h-4" />
            <span>App Design</span>
            <Star className="w-4 h-4" />
            <span>Dashboard</span>
            <Star className="w-4 h-4" />
            <span>Wireframe</span>
            <Star className="w-4 h-4" />
            <span>User Research</span>
          </div>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-dark mb-8">
            Let&apos;s{' '}
            <span className="text-primary">Connect</span>
          </h3>
          <button className="btn-primary flex items-center space-x-2 mx-auto">
            <span>Hire me</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
