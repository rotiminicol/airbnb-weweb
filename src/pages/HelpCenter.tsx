
import React from 'react';
import Header from '../components/Header';

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        isLoggedIn={false}
        user={null}
        onAuthModal={() => {}}
        onLogout={() => {}}
      />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Help Center</h1>
        <div className="prose prose-lg text-gray-700">
          <p>Welcome to the Airbnb Help Center. Find answers to common questions and get support for your bookings.</p>
          <h2>Popular Topics</h2>
          <ul>
            <li>How to make a reservation</li>
            <li>Cancellation policies</li>
            <li>Payment methods</li>
            <li>House rules</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
