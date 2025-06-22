
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import AuthModal from '../components/AuthModal';
import { listings } from '../data/listings';

const Index = () => {
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const featuredListings = listings.slice(0, 8);

  const handleAuth = (userData: { name: string; email: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
    setAuthModal(null);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        isLoggedIn={isLoggedIn}
        user={user}
        onAuthModal={setAuthModal}
        onLogout={handleLogout}
      />

      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')`
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Belong Anywhere
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover unique homes and experiences around the world
          </p>
          <Link
            to="/explore"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Explore by Category - Professional Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Explore by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                name: 'Beachfront', 
                icon: '🏖️', 
                count: '200+',
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              { 
                name: 'Cabins', 
                icon: '🏕️', 
                count: '150+',
                image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              { 
                name: 'Trending', 
                icon: '🔥', 
                count: '300+',
                image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              { 
                name: 'Luxury', 
                icon: '✨', 
                count: '100+',
                image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
            ].map((category, index) => (
              <div
                key={category.name}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count} properties</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Stays</h2>
            <Link
              to="/explore"
              className="text-red-500 hover:text-red-600 font-medium flex items-center space-x-2 group"
            >
              <span>View all</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredListings.map((listing, index) => (
              <div
                key={listing.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ListingCard listing={listing} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Discover Destinations
          </h2>
          
          <div className="h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600">Explore destinations worldwide</p>
              <Link
                to="/explore"
                className="inline-block mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                View on Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
              <ul className="space-y-3">
                <li><Link to="/help-center" className="hover:text-gray-900 transition-colors">Help Center</Link></li>
                <li><Link to="/aircover" className="hover:text-gray-900 transition-colors">AirCover</Link></li>
                <li><Link to="/safety" className="hover:text-gray-900 transition-colors">Safety information</Link></li>
                <li><Link to="/accessibility" className="hover:text-gray-900 transition-colors">Supporting people with disabilities</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Community</h3>
              <ul className="space-y-3">
                <li><Link to="/disaster-relief" className="hover:text-gray-900 transition-colors">Airbnb.org: disaster relief housing</Link></li>
                <li><Link to="/anti-discrimination" className="hover:text-gray-900 transition-colors">Combating discrimination</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Hosting</h3>
              <ul className="space-y-3">
                <li><Link to="/host" className="hover:text-gray-900 transition-colors">Airbnb your home</Link></li>
                <li><Link to="/host-protection" className="hover:text-gray-900 transition-colors">AirCover for Hosts</Link></li>
                <li><Link to="/hosting-resources" className="hover:text-gray-900 transition-colors">Hosting resources</Link></li>
                <li><Link to="/community-forum" className="hover:text-gray-900 transition-colors">Community forum</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Airbnb</h3>
              <ul className="space-y-3">
                <li><Link to="/newsroom" className="hover:text-gray-900 transition-colors">Newsroom</Link></li>
                <li><Link to="/features" className="hover:text-gray-900 transition-colors">New features</Link></li>
                <li><Link to="/careers" className="hover:text-gray-900 transition-colors">Careers</Link></li>
                <li><Link to="/investors" className="hover:text-gray-900 transition-colors">Investors</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">airbnb</span>
            </div>
            <div className="text-gray-600 text-sm">
              © 2024 Airbnb, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {authModal && (
        <AuthModal
          type={authModal}
          onClose={() => setAuthModal(null)}
          onAuth={handleAuth}
          onSwitchType={(type) => setAuthModal(type)}
        />
      )}
    </div>
  );
};

export default Index;
