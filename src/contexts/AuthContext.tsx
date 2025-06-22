import React, { createContext, useContext, useEffect, useState } from 'react';
import { xanoAPI, User } from '../lib/api';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (xanoAPI.isAuthenticated()) {
          console.log('Auth token found, fetching user on init...');
          const currentUser = await xanoAPI.getCurrentUser();
          console.log('User fetched on init:', currentUser);
          setUser(currentUser);
        }
      } catch (error) {
        console.error('Failed to get current user on init:', error);
        xanoAPI.logout();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      console.log('Attempting login...');
      const response = await xanoAPI.login(email, password);
      console.log('Login API response:', response);
      
      console.log('Fetching user after login...');
      const currentUser = await xanoAPI.getCurrentUser();
      console.log('User fetched after login:', currentUser);
      setUser(currentUser);
      console.log('User state updated.');

    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      console.log('Attempting signup...');
      const response = await xanoAPI.signup(name, email, password);
      console.log('Signup API response:', response);

      console.log('Fetching user after signup...');
      const currentUser = await xanoAPI.getCurrentUser();
      console.log('User fetched after signup:', currentUser);
      setUser(currentUser);
      console.log('User state updated.');

    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    }
  };

  const logout = () => {
    xanoAPI.logout();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 