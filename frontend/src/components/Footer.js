import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-gray-900 text-sm">Products</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-gray-600 hover:text-gray-900 text-sm">Contact</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Support portal</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Z-Connect blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">List of charges</a></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/signup" className="text-gray-600 hover:text-gray-900 text-sm">Open an account</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Fund transfer</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-xs leading-relaxed">
            ZaM Trading Platform: A modern investment platform designed for Gen Z and Millennials. Member of NSE, BSE. All investments are subject to market risks. Please read all scheme related documents carefully before investing.
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2025, ZaM. All rights reserved. Investing for Gen Z and Millennials.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;