import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { xanoAPI } from '../lib/api';

const AuthCallback = () => {
  const { provider } = useParams<{ provider: 'google' | 'facebook' }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login, signup, user, isAuthenticated } = useAuth(); // Assume useAuth provides a way to set the user
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      
      if (!provider || !code) {
        setError('Invalid authentication callback. No provider or code found.');
        return;
      }

      try {
        const redirectUri = `${window.location.origin}/auth/callback/${provider}`;
        const response = await xanoAPI.handleOauthCallback(provider, code, redirectUri);
        
        // This part is tricky. The `useAuth` context needs to be updated.
        // A simple page reload might be the easiest way to re-trigger the auth check.
        window.location.href = '/';

      } catch (err: any) {
        setError(err.message || 'An error occurred during authentication.');
      }
    };

    handleCallback();
  }, [provider, searchParams, navigate]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Failed</h1>
        <p className="text-gray-700 mb-4">{error}</p>
        <button onClick={() => navigate('/')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Return to Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
      <p className="mt-4 text-gray-600">Finalizing authentication, please wait...</p>
    </div>
  );
};

export default AuthCallback; 