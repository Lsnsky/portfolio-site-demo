'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BlogPosts = () => {
  const blogPosts = [
    {
      title: 'Design Unraveled: Behind the Scenes of UI/UX Magic',
      category: 'UI/UX Design',
      author: 'Jayesh Patil',
      date: '10 Nov, 2023',
      description: 'Exploring the creative process behind successful UI/UX design projects.',
      image: '/api/placeholder/400/300',
      color: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Sugee: Loan Management System for Rural Sector',
      category: 'App Design',
      author: 'Jayesh Patil',
      date: '09 Oct, 2023',
      description: 'Innovative loan management solution designed for rural banking needs.',
      image: '/api/placeholder/400/300',
      color: 'from-green-400 to-blue-400'
    },
    {
      title: 'Cinetrade: Innovative way to invest in Digital Media',
      category: 'App Design',
      author: 'Jayesh Patil',
      date: '13 Aug, 2023',
      description: 'Revolutionary platform for digital media investment and trading.',
      image: '/api/placeholder/400/300',
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4 sm:mb-0">
            From my{' '}
            <span className="text-primary">blog post</span>
          </h2>
          <button className="btn-primary flex items-center space-x-2">
            <span>See All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-100"
            >
              {/* Blog Post Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl text-gray-400">📱</div>
                </div>
              </div>

              {/* Blog Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-primary font-medium">{post.category}</span>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                
                <div className="text-sm text-gray-500 mb-3">
                  {post.author} • {post.date}
                </div>
                
                <h3 className="text-xl font-bold text-dark mb-3 leading-tight">{post.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.description}</p>
                
                {/* Read More Button */}
                <button className="text-primary font-medium text-sm hover:text-primary-dark transition-colors duration-200 flex items-center space-x-1">
                  <span>Read more</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
