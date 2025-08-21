'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section-padding bg-white pt-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <div className="inline-block bg-gray-100 rounded-full px-4 py-2">
              <span className="text-gray-600 font-medium">Hello!</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-dark leading-tight">
                I&apos;m Jenny,{' '}
                <span className="text-primary">Product Designer</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Creating exceptional user experiences through innovative design solutions
              </p>
            </div>

            {/* Testimonial */}
            <div className="relative">
              <div className="text-6xl text-primary font-bold">&quot;</div>
              <p className="text-lg text-gray-700 italic pl-8">
                Jenny&apos;s exceptional product design ensures our website&apos;s success. Highly Recommended
              </p>
            </div>

            {/* Experience Badge */}
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <div className="text-2xl font-bold text-dark">10 Years</div>
                <div className="text-gray-600">Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center space-x-2">
                <span>Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary">
                Hire me
              </button>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full transform rotate-12 scale-110"></div>
            
            {/* Main Image */}
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                  <div className="text-6xl text-gray-400">👩‍💼</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-primary/30 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
