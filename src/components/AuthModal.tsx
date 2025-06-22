import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

interface AuthModalProps {
  type: 'login' | 'signup';
  onClose: () => void;
  onAuth: (user: { name: string; email: string }) => void;
  onSwitchType: (type: 'login' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ type, onClose, onAuth, onSwitchType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    if (type === 'signup' && !agreeToTerms) {
      setLoading(false);
      alert('Please agree to the terms and conditions');
      return;
    }
    try {
      let result;
      if (type === 'signup') {
        result = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name } }
        });
      } else {
        result = await supabase.auth.signInWithPassword({
          email,
          password
        });
      }
      if (result.error) throw result.error;
      const user = result.data.user;
      onAuth({
        name: user?.user_metadata?.name || user?.email?.split('@')[0] || '',
        email: user?.email || email
      });
    } catch (err: any) {
      let msg = err.message || 'Authentication failed';
      if (msg.toLowerCase().includes('confirmation email')) {
        msg = 'Xano error sending confirmation email';
      }
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialAuth = async (provider: 'google' | 'apple' | 'facebook') => {
    setError(null);
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) throw error;
      // Supabase will redirect, so no need to call onAuth here
    } catch (err: any) {
      setError(err.message || 'Social login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-hidden"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">
              {type === 'login' ? 'Log in' : 'Sign up'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Welcome to Airbnb
              </h3>

              {/* Social Login Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleSocialAuth('google')}
                  className="w-full flex items-center justify-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
                  disabled={loading}
                >
                  <div className="w-5 h-5 bg-red-500 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span>Continue with Google</span>
                </button>

                <button
                  onClick={() => handleSocialAuth('apple')}
                  className="w-full flex items-center justify-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
                  disabled={loading}
                >
                  <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs">🍎</span>
                  </div>
                  <span>Continue with Apple</span>
                </button>

                <button
                  onClick={() => handleSocialAuth('facebook')}
                  className="w-full flex items-center justify-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
                  disabled={loading}
                >
                  <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  <span>Continue with Facebook</span>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {type === 'signup' && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                )}

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {type === 'signup' && (
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      className="mt-1 w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to Airbnb's{' '}
                      <a href="#" className="text-red-500 hover:underline">Terms of Service</a>,{' '}
                      <a href="#" className="text-red-500 hover:underline">Privacy Policy</a>, and{' '}
                      <a href="#" className="text-red-500 hover:underline">Nondiscrimination Policy</a>
                    </label>
                  </div>
                )}

                {error && <div className="text-red-500 text-sm mb-2 text-center">{error}</div>}

                <Button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium text-lg transition-colors"
                  disabled={loading}
                >
                  {loading ? (type === 'login' ? 'Logging in...' : 'Signing up...') : (type === 'login' ? 'Log in' : 'Sign up')}
                </Button>
              </form>

              {/* Switch Auth Type */}
              <div className="mt-6 text-center pb-6">
                <span className="text-gray-600">
                  {type === 'login' ? "Don't have an account?" : 'Already have an account?'}
                </span>
                <button
                  onClick={() => onSwitchType(type === 'login' ? 'signup' : 'login')}
                  className="ml-2 text-red-500 hover:text-red-600 font-medium"
                >
                  {type === 'login' ? 'Sign up' : 'Log in'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;
