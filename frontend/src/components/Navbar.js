import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-genzpink" size={28} />
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent">
                  ZaM
                </div>
                <div className="text-xs text-gray-500 -mt-1">Vibe Investing</div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/explore" className="text-gray-700 hover:text-genzpink font-medium transition-colors">
              Explore Funds
            </Link>
            <Link to="/calculators" className="text-gray-700 hover:text-genzpurple font-medium transition-colors">
              Calculators
            </Link>
            <Link to="/learn" className="text-gray-700 hover:text-genzpink font-medium transition-colors">
              Learn
            </Link>
            {isAuthenticated && (
              <Link to="/portfolio" className="text-gray-700 hover:text-genzpurple font-medium transition-colors">
                Portfolio
              </Link>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/portfolio"
                  className="px-6 py-2 bg-gradient-to-r from-genzpink to-genzpurple text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  My Portfolio
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-genzpurple font-medium">
                  Login
                </Link>
                <Link
                  to="/social-auth"
                  className="px-6 py-2 bg-gradient-to-r from-genzpink to-genzpurple text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-genzpink"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="px-4 py-3 space-y-3">
            <Link
              to="/explore"
              className="block text-gray-700 hover:text-genzpink py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Explore Funds
            </Link>
            <Link
              to="/calculators"
              className="block text-gray-700 hover:text-genzpurple py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Calculators
            </Link>
            <Link
              to="/learn"
              className="block text-gray-700 hover:text-genzpink py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Learn
            </Link>
            {isAuthenticated && (
              <Link
                to="/portfolio"
                className="block text-gray-700 hover:text-genzpurple py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
            )}
            {isAuthenticated ? (
              <>
                <Link
                  to="/portfolio"
                  className="block w-full px-4 py-2 bg-gradient-to-r from-genzpink to-genzpurple text-white rounded-full text-center font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  My Portfolio
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-gray-700 hover:text-genzpurple py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full px-4 py-2 bg-gradient-to-r from-genzpink to-genzpurple text-white rounded-full text-center font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;