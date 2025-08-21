'use client';

import { motion } from 'framer-motion';
import { User, Settings, BarChart3, FileText, Mail } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { title: 'Profile Views', value: '1,234', icon: User, color: 'text-blue-500' },
    { title: 'Messages', value: '56', icon: Mail, color: 'text-green-500' },
    { title: 'Projects', value: '12', icon: FileText, color: 'text-purple-500' },
    { title: 'Analytics', value: '89%', icon: BarChart3, color: 'text-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container-custom py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">U</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-dark">
                Welcome to Dashboard!
              </h1>
              <p className="text-gray-600">
                This is a preview of your portfolio dashboard. Complete Clerk setup to enable full functionality.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <p className="text-3xl font-bold text-dark">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-dark mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200">
              <Settings className="w-5 h-5 text-primary" />
              <span className="font-medium text-dark">Edit Profile</span>
            </button>
            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200">
              <FileText className="w-5 h-5 text-primary" />
              <span className="font-medium text-dark">Add Project</span>
            </button>
            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-medium text-dark">View Messages</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
