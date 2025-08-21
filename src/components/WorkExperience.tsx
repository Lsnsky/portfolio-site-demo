'use client';

import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Cognizant, Mumbai',
      period: 'Sep 2016 - July 2020',
      role: 'Experience Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.',
      isActive: false
    },
    {
      company: 'Sugee Pvt limited, Mumbai',
      period: 'Sep 2020 - July 2023',
      role: 'UI/UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.',
      isActive: true
    },
    {
      company: 'Cinetstox, Mumbai',
      period: 'Sep 2023',
      role: 'Lead UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.',
      isActive: false
    }
  ];

  return (
    <section id="resume" className="section-padding bg-white">
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
            My Work{' '}
            <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

            {/* Experience Items */}
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${
                  experience.isActive ? 'bg-primary' : 'bg-gray-400'
                }`}></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-dark mb-2">{experience.company}</h3>
                    <p className="text-primary font-medium mb-2">{experience.period}</p>
                    <h4 className="text-lg font-semibold text-dark mb-3">{experience.role}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{experience.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
