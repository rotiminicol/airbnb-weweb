
import React, { useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  onAuthModal: (type: 'login' | 'signup') => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, user, onAuthModal, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-coral-600">Staycation</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-coral-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-coral-600 transition-colors">Explore</a>
            <a href="#" className="text-gray-700 hover:text-coral-600 transition-colors">Host your home</a>
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn && user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 bg-coral-50 text-coral-700 px-4 py-2 rounded-full hover:bg-coral-100 transition-colors"
                >
                  <User size={20} />
                  <span className="font-medium">{user.name}</span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                    <div className="px-4 py-2 border-b">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={onLogout}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => onAuthModal('login')}
                  className="text-gray-700 hover:text-coral-600 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => onAuthModal('signup')}
                  className="bg-coral-600 text-white px-4 py-2 rounded-lg hover:bg-coral-700 transition-colors"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-coral-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-coral-600 transition-colors">Explore</a>
              <a href="#" className="text-gray-700 hover:text-coral-600 transition-colors">Host your home</a>
              
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
                      <span>Logout</span>
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
                      Login
                    </button>
                    <button
                      onClick={() => {
                        onAuthModal('signup');
                        setIsMenuOpen(false);
                      }}
                      className="block w-full bg-coral-600 text-white px-4 py-2 rounded-lg hover:bg-coral-700 transition-colors"
                    >
                      Sign Up
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
