'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, Layout } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'UI/UX Design',
      icon: Smartphone,
      description: 'Smart home control interface with advanced automation features',
      features: ['Living Room', 'Bedroom', 'Kitchen', 'Smart Controls'],
      percentage: '80%',
      color: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Web Design',
      icon: Globe,
      description: 'Modern food delivery platform with seamless user experience',
      features: ['Beef Burger Whopper', 'Beef Cheese Burger', 'Fast Delivery'],
      percentage: '90%',
      color: 'from-green-400 to-blue-400'
    },
    {
      title: 'Landing Page',
      icon: Layout,
      description: 'High-converting landing pages that drive results',
      features: ['Smart Home', 'Analytics', 'User Dashboard'],
      percentage: '85%',
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  return (
    <section id="services" className="section-padding bg-dark text-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My{' '}
            <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              {/* Mockup Phone */}
              <div className="relative mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 border border-gray-700">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs text-gray-400">{service.percentage}</div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="h-2 bg-gray-600 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-dark rounded-full flex items-center justify-center border border-white/20 hover:bg-primary transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Service Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-2 mt-12"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                i === 0 ? 'bg-primary' : 'bg-gray-600'
              }`}
            ></div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
