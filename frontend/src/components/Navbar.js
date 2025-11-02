import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isKitePage = location.pathname.startsWith('/kite');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isKitePage) {
    return null; // Don't show navbar on Kite pages
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-blue-600">ZaM</div>
              <div className="text-xs text-gray-500 mt-2">Gen Z & Millennials</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Products
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/support" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Support
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/kite/dashboard"
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Open account
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <Link
              to="/products"
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/support"
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsOpen(false)}
            >
              Support
            </Link>
            <Link
              to="/about"
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/kite/dashboard"
                  className="block w-full px-4 py-2 bg-blue-600 text-white rounded text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
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
                  className="block text-gray-600 hover:text-gray-900 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full px-4 py-2 bg-blue-600 text-white rounded text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Open account
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