
import React, { useState } from 'react';
import { Menu, X, User, LogOut, ChevronDown, Search, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  onAuthModal: (type: 'login' | 'signup') => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, user, onAuthModal, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isHostMenuOpen, setIsHostMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Airbnb Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-coral-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h1 className="text-2xl font-bold text-coral-500 hidden sm:block">airbnb</h1>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 max-w-md w-full mx-8">
            <div className="flex-1 px-6 py-3">
              <input
                type="text"
                placeholder="Start your search"
                className="w-full text-sm placeholder-gray-500 border-none outline-none"
              />
            </div>
            <button className="bg-coral-500 text-white p-2 rounded-full m-2 hover:bg-coral-600 transition-colors">
              <Search size={16} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Host Menu */}
            <div className="relative">
              <button
                onClick={() => setIsHostMenuOpen(!isHostMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-coral-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                <span className="font-medium">Airbnb your home</span>
                <ChevronDown size={16} />
              </button>
              
              {isHostMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border py-2 z-50">
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    <div className="font-medium">List your space</div>
                    <div className="text-sm text-gray-500">Earn extra income hosting</div>
                  </a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    <div className="font-medium">Host an experience</div>
                    <div className="text-sm text-gray-500">Create unique activities</div>
                  </a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    <div className="font-medium">Host resources</div>
                    <div className="text-sm text-gray-500">Get hosting tips and tools</div>
                  </a>
                </div>
              )}
            </div>

            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Globe size={18} className="text-gray-700" />
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 border border-gray-300 rounded-full py-2 pl-3 pr-2 hover:shadow-md transition-shadow"
              >
                <Menu size={16} className="text-gray-700" />
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border py-2 z-50">
                  {isLoggedIn && user ? (
                    <>
                      <div className="px-4 py-3 border-b">
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                      <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">Messages</a>
                      <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">Trips</a>
                      <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">Wishlists</a>
                      <div className="border-t my-2"></div>
                      <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">Account</a>
                      <button
                        onClick={onLogout}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Log out
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          onAuthModal('signup');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                      >
                        Sign up
                      </button>
                      <button
                        onClick={() => {
                          onAuthModal('login');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Log in
                      </button>
                      <div className="border-t my-2"></div>
                      <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">Gift cards</a>
                      <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">Help Center</a>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm">
            <div className="flex-1 px-4 py-3">
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full text-sm placeholder-gray-500 border-none outline-none"
              />
            </div>
            <button className="bg-coral-500 text-white p-2 rounded-full m-2">
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/explore" className="text-gray-700 hover:text-coral-600 transition-colors font-medium">Explore</Link>
              <a href="#" className="text-gray-700 hover:text-coral-600 transition-colors">Airbnb your home</a>
              
              <div className="border-t pt-4">
                {isLoggedIn && user ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <User size={20} />
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <button
                      onClick={onLogout}
                      className="flex items-center space-x-2 text-gray-700 hover:text-coral-600 transition-colors"
                    >
                      <LogOut size={16} />
                      <span>Log out</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        onAuthModal('login');
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-coral-600 transition-colors"
                    >
                      Log in
                    </button>
                    <button
                      onClick={() => {
                        onAuthModal('signup');
                        setIsMenuOpen(false);
                      }}
                      className="block w-full bg-coral-500 text-white px-4 py-2 rounded-lg hover:bg-coral-600 transition-colors"
                    >
                      Sign up
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
