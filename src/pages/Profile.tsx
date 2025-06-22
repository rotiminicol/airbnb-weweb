import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Heart, Calendar, Shield, CreditCard, Bell, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';

const Profile = () => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '',
    memberSince: '2023',
    verified: true
  });

  const profileSections = [
    {
      title: 'Personal Information',
      icon: User,
      items: [
        { label: 'Name', value: user.name, editable: true },
        { label: 'Email', value: user.email, editable: true },
        { label: 'Phone', value: '+1 (555) 123-4567', editable: true },
        { label: 'Member since', value: user.memberSince, editable: false }
      ]
    },
    {
      title: 'Preferences',
      icon: Settings,
      items: [
        { label: 'Language', value: 'English', editable: true },
        { label: 'Currency', value: 'USD', editable: true },
        { label: 'Time zone', value: 'UTC-5', editable: true }
      ]
    },
    {
      title: 'Account Settings',
      icon: Shield,
      items: [
        { label: 'Two-factor auth', value: 'Enabled', editable: true },
        { label: 'Email notifications', value: 'On', editable: true },
        { label: 'SMS notifications', value: 'Off', editable: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} user={user} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <div className="flex items-center space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center"
              >
                <span className="text-white text-2xl font-bold">{user.name.charAt(0)}</span>
              </motion.div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
                <p className="text-gray-600 mb-2">{user.email}</p>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    Verified
                  </span>
                  <span className="text-gray-500 text-sm">Member since {user.memberSince}</span>
                </div>
              </div>
              <Button className="bg-red-500 hover:bg-red-600">
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Profile Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {profileSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border p-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="font-medium text-gray-900">{item.value}</p>
                      </div>
                      {item.editable && (
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                          Edit
                        </Button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm border p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Heart, label: 'Wishlists', color: 'from-pink-400 to-pink-600' },
                { icon: Calendar, label: 'Trips', color: 'from-blue-400 to-blue-600' },
                { icon: CreditCard, label: 'Payment', color: 'from-green-400 to-green-600' },
                { icon: Bell, label: 'Notifications', color: 'from-purple-400 to-purple-600' }
              ].map((action, index) => (
                <motion.button
                  key={action.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-br ${action.color} text-white p-4 rounded-xl text-center`}
                >
                  <action.icon className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{action.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile; 