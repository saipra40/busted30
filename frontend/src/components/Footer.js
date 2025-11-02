import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Youtube, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-genzdark via-genzpurple to-genzpink text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles size={24} />
              <h3 className="text-2xl font-bold">FundZ</h3>
            </div>
            <p className="text-white/80 text-sm">
              Investing made simple for Gen Z and Millennials
            </p>
          </div>

          {/* Invest */}
          <div>
            <h3 className="font-semibold mb-4">Invest</h3>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-white/80 hover:text-white text-sm">Explore Funds</Link></li>
              <li><Link to="/calculators" className="text-white/80 hover:text-white text-sm">SIP Calculators</Link></li>
              <li><Link to="/portfolio" className="text-white/80 hover:text-white text-sm">My Portfolio</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><Link to="/learn" className="text-white/80 hover:text-white text-sm">Educational Content</Link></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Investment Guide</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">FAQs</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white/80 hover:text-white transform hover:scale-110 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transform hover:scale-110 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transform hover:scale-110 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transform hover:scale-110 transition-all">
                <Youtube size={20} />
              </a>
            </div>
            <Link to="/social-auth" className="inline-block px-6 py-2 bg-white text-genzpurple rounded-full font-semibold text-sm hover:bg-gray-100 transform hover:scale-105 transition-all">
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-xs leading-relaxed">
            FundZ: Your Gen Z investment companion. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
          </p>
          <p className="text-white/60 text-xs mt-4">
            © 2025 FundZ. Made with love for Gen Z and Millennials. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;