import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Mail, Apple } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toast } from '../hooks/use-toast';

const SocialAuth = () => {
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSocialAuth = async (provider) => {
    setLoading(true);
    
    // Mock social authentication
    setTimeout(async () => {
      try {
        await signup(`user@${provider}.com`, `${provider}@example.com`, 'password', '9876543210');
        toast({
          title: 'Authentication successful',
          description: `Logged in with ${provider}`,
        });
        navigate('/kyc');
      } catch (error) {
        toast({
          title: 'Authentication failed',
          description: 'Please try again',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-genzpink via-genzpurple to-genzdark flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome to ZaM</h1>
          <p className="text-white/80 text-lg">Choose your vibe to get started</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl space-y-4">
          {/* Google */}
          <button
            onClick={() => handleSocialAuth('Google')}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-white border-2 border-gray-300 rounded-xl hover:border-genzpink hover:bg-pink-50 transition-all font-semibold text-gray-700 disabled:opacity-50"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Facebook */}
          <button
            onClick={() => handleSocialAuth('Facebook')}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-[#1877F2] hover:bg-[#166FE5] rounded-xl transition-all font-semibold text-white disabled:opacity-50"
          >
            <Facebook size={24} fill="white" />
            <span>Continue with Facebook</span>
          </button>

          {/* Apple */}
          <button
            onClick={() => handleSocialAuth('Apple')}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-black hover:bg-gray-800 rounded-xl transition-all font-semibold text-white disabled:opacity-50"
          >
            <Apple size={24} />
            <span>Continue with Apple</span>
          </button>

          {/* Zoho */}
          <button
            onClick={() => handleSocialAuth('Zoho')}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-xl transition-all font-semibold text-white disabled:opacity-50"
          >
            <Mail size={24} />
            <span>Continue with Zoho</span>
          </button>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Email Signup */}
          <button
            onClick={() => navigate('/signup')}
            className="w-full px-6 py-4 bg-gradient-to-r from-genzpink to-genzpurple hover:from-genzpink/90 hover:to-genzpurple/90 rounded-xl transition-all font-semibold text-white"
          >
            Sign up with Email
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-genzpurple font-semibold hover:text-genzpink"
            >
              Login
            </button>
          </p>

          <p className="text-xs text-gray-500 text-center mt-4">
            By continuing, you agree to ZaM's Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialAuth;