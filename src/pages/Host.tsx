
import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Host = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        isLoggedIn={false}
        user={null}
        onAuthModal={() => {}}
        onLogout={() => {}}
      />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Airbnb your home</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turn your extra space into extra income. Start hosting and earn money on Airbnb.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why host on Airbnb?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">💰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Earn extra income</h3>
                  <p className="text-gray-600">Make money from your extra space.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🛡️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Host with confidence</h3>
                  <p className="text-gray-600">You're covered by our Host Guarantee.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Easy to get started</h3>
                  <p className="text-gray-600">List your space in just a few steps.</p>
                </div>
              </div>
            </div>
            <Link
              to="/become-host"
              className="inline-block mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get started
            </Link>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Host your home"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Host;
