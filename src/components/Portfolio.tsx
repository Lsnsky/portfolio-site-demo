'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const categories = ['Landing Page', 'Product Design', 'Animation', 'Glassmorphism', 'Cards'];
  
  const projects = [
    {
      title: 'Lirante - Food Delivery Solution',
      category: 'Product Design',
      description: 'Modern food delivery platform with seamless user experience and real-time tracking.',
      image: '/api/placeholder/400/300',
      color: 'from-green-400 to-blue-400'
    },
    {
      title: 'Smart Home Dashboard',
      category: 'UI/UX Design',
      description: 'Intuitive smart home control interface with advanced automation features.',
      image: '/api/placeholder/400/300',
      color: 'from-purple-400 to-pink-400'
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Design',
      description: 'Complete e-commerce solution with modern design and optimized user flow.',
      image: '/api/placeholder/400/300',
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            Let's have a look at my{' '}
            <span className="text-primary">Portfolio</span>
          </h2>
          <button className="btn-primary flex items-center space-x-2 mx-auto">
            <span>See All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                index === 0
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-primary hover:text-white border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl text-gray-400">📱</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                
                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Jayesh Patil • 10 Nov, 2023</span>
                  <div className="flex items-center space-x-2">
                    <span>UI/UX Design</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-dark mb-4">
                Lirante - Food Delivery Solution
              </h3>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-primary font-medium">Product Design</span>
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales. Sed vitae nisi eget nunc aliquam aliquet.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales. Sed vitae nisi eget nunc aliquam aliquet.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center">
                <div className="text-6xl text-white">🍔</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
