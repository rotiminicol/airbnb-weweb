import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, Menu, User, MapPin, Calendar } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  onAuthModal: (type: 'login' | 'signup') => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthModal }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showHostDropdown, setShowHostDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const languages = [
    { code: 'en', name: 'English', currency: 'USD' },
    { code: 'es', name: 'Español', currency: 'EUR' },
    { code: 'fr', name: 'Français', currency: 'EUR' },
    { code: 'de', name: 'Deutsch', currency: 'EUR' },
    { code: 'it', name: 'Italiano', currency: 'EUR' },
  ];

  const getUserInitials = (name: string) => {
    if (!name) return '';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/airbnb-logo.svg" alt="Airbnb Logo" className="w-16 h-16 sm:w-24 sm:h-24" />
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden lg:flex items-center flex-1 max-w-2xl mx-8">
              <div className="w-full border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="flex-1 px-6 py-3">
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full outline-none text-sm font-medium"
                    />
                  </div>
                  <div className="border-l border-gray-300 px-6 py-3">
                    <input
                      type="text"
                      placeholder="Check in / Check out"
                      className="w-full outline-none text-sm"
                    />
                  </div>
                  <div className="border-l border-gray-300 px-6 py-3">
                    <input
                      type="text"
                      placeholder="Add guests"
                      className="w-full outline-none text-sm"
                    />
                  </div>
                  <button className="bg-red-500 text-white p-3 rounded-full mr-2 hover:bg-red-600 transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Search Button */}
            <div className="flex lg:hidden">
              <Link to="/explore" className="p-3 rounded-full hover:bg-gray-100 border border-gray-300 shadow-md">
                <Search className="w-6 h-6 text-gray-700" />
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Host Dropdown - Hidden on mobile */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setShowHostDropdown(!showHostDropdown)}
                  className="text-gray-700 hover:text-gray-900 font-medium px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  Airbnb your home
                </button>
                {showHostDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      to="/host"
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setShowHostDropdown(false)}
                    >
                      <div className="font-medium text-gray-900">List your space</div>
                      <div className="text-sm text-gray-600">Earn extra income by hosting</div>
                    </Link>
                    <Link
                      to="/host-experience"
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setShowHostDropdown(false)}
                    >
                      <div className="font-medium text-gray-900">Host an experience</div>
                      <div className="text-sm text-gray-600">Share your passion with guests</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Language/Region Dropdown */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Globe className="w-4 h-4 text-gray-700" />
                </button>
                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Choose a language and region</h3>
                    </div>
                    <div className="p-4 space-y-2 max-h-60 overflow-y-auto">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          className="w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setShowLanguageDropdown(false)}
                        >
                          <div className="font-medium text-gray-900">{lang.name}</div>
                          <div className="text-sm text-gray-600">{lang.currency}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 border border-gray-300 rounded-full py-1 px-2 sm:py-2 sm:px-3 hover:shadow-md transition-shadow"
                >
                  <Menu className="w-4 h-4 text-gray-700" />
                  {isAuthenticated && user ? (
                    <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-red-500 text-white text-xs font-medium">
                        {getUserInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-500 rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  )}
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {isAuthenticated && user ? (
                      <>
                        <div className="px-4 py-3 border-b border-gray-200">
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-600 truncate">{user.email}</div>
                        </div>
                        <Link
                          to="/trips"
                          className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Trips
                        </Link>
                        <Link
                          to="/bookings"
                          className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Your bookings
                        </Link>
                        <Link
                          to="/wishlists"
                          className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Wishlists
                        </Link>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Profile
                        </Link>
                        <hr className="my-2" />
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                          Log out
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            onAuthModal('signup');
                            setShowUserMenu(false);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors font-medium"
                        >
                          Sign up
                        </button>
                        <button
                          onClick={() => {
                            onAuthModal('login');
                            setShowUserMenu(false);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                          Log in
                        </button>
                        <hr className="my-2" />
                        <Link
                          to="/host"
                          className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Airbnb your home
                        </Link>
                        <Link
                          to="/help-center"
                          className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Help Center
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Animated Bottom Navigation for Mobile */}
      <MobileBottomNav user={user} showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />
    </>
  );
};

// Mobile Bottom Nav Component
const navTabs = [
  { to: '/', label: 'Explore', icon: MapPin },
  { to: '/bookings', label: 'Bookings', icon: User },
  { to: '/trips', label: 'Trips', icon: Calendar },
  { to: '/host', label: 'Host', icon: Menu },
  { to: '/profile', label: 'Profile', icon: User },
];

function MobileBottomNav({ user, showUserMenu, setShowUserMenu }) {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center py-2 sm:hidden shadow-2xl">
      {navTabs.map((tab, idx) => {
        const isActive = location.pathname === tab.to || (tab.to === '/profile' && location.pathname.startsWith('/profile'));
        const Icon = tab.icon;
        return tab.label !== 'Profile' ? (
          <Link
            key={tab.to}
            to={tab.to}
            className="flex flex-col items-center text-xs relative"
            aria-current={isActive}
          >
            <motion.div
              animate={isActive ? { scale: 1.2, color: '#ef4444' } : { scale: 1, color: '#374151' }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="flex flex-col items-center"
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="font-medium">{tab.label}</span>
            </motion.div>
            {isActive && (
              <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-red-500" />
            )}
          </Link>
        ) : (
          <button
            key={tab.to}
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex flex-col items-center text-xs relative"
            aria-current={isActive}
          >
            <motion.div
              animate={isActive ? { scale: 1.2, color: '#ef4444' } : { scale: 1, color: '#374151' }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="flex flex-col items-center"
            >
              <Avatar className="w-6 h-6 mb-1">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="bg-red-500 text-white text-xs font-medium">
                  {isAuthenticated && user ? getUserInitials(user.name) : <User className="w-4 h-4" />}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium">{tab.label}</span>
            </motion.div>
            {isActive && (
              <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-red-500" />
            )}
          </button>
        );
      })}
    </nav>
  );
}

export default Header;
