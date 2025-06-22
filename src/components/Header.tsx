
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, Menu, User, MapPin } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  onAuthModal: (type: 'login' | 'signup') => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, user, onAuthModal, onLogout }) => {
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

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-red-500">airbnb</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
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

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Host Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowHostDropdown(!showHostDropdown)}
                className="text-gray-700 hover:text-gray-900 font-medium px-3 py-2 rounded-full hover:bg-gray-100 transition-colors"
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
                  <Link
                    to="/hosting-resources"
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowHostDropdown(false)}
                  >
                    <div className="font-medium text-gray-900">Hosting resources</div>
                    <div className="text-sm text-gray-600">Learn tips from other hosts</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Language/Region Dropdown */}
            <div className="relative">
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
                className="flex items-center space-x-2 border border-gray-300 rounded-full py-2 px-3 hover:shadow-md transition-shadow"
              >
                <Menu className="w-4 h-4 text-gray-700" />
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {isLoggedIn ? (
                    <>
                      <div className="px-4 py-3 border-b border-gray-200">
                        <div className="font-medium text-gray-900">{user?.name}</div>
                        <div className="text-sm text-gray-600">{user?.email}</div>
                      </div>
                      <Link
                        to="/trips"
                        className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Trips
                      </Link>
                      <Link
                        to="/wishlists"
                        className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Wishlists
                      </Link>
                      <Link
                        to="/account"
                        className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Account
                      </Link>
                      <hr className="my-2" />
                      <button
                        onClick={() => {
                          onLogout();
                          setShowUserMenu(false);
                        }}
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
  );
};

export default Header;
