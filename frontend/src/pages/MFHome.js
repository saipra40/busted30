import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, BookOpen, Calculator, Sparkles, Zap } from 'lucide-react';

const MFHome = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-genzpink via-genzpurple to-genzdark text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Built for Gen Z & Millennials</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Invest Smart,<br />Grow Wealth
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Mutual funds made simple. No jargon, just real talk about growing your money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="px-8 py-4 bg-white text-genzpurple rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Start Investing
            </Link>
            <Link
              to="/learn"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all"
            >
              Learn First
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-genzpink/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-genzpurple/30 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent mb-2">
                ₹100
              </div>
              <p className="text-gray-600">Minimum to start</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent mb-2">
                0%
              </div>
              <p className="text-gray-600">Commission. Seriously.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-gray-600">Invest anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent">
              Everything you need
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            All the tools to make investing easy and fun
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/calculators" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-genzpink to-genzpurple rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calculator className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">SIP Calculators</h3>
                <p className="text-gray-600">
                  Plan your investments. See how much you will grow.
                </p>
              </div>
            </Link>

            <Link to="/explore" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-genzpurple to-genzdark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Explore Funds</h3>
                <p className="text-gray-600">
                  Discover funds that match your vibe and goals.
                </p>
              </div>
            </Link>

            <Link to="/learn" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-genzpink to-genzpurple rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Learn & Grow</h3>
                <p className="text-gray-600">
                  Simple guides to understand investing. No boring stuff.
                </p>
              </div>
            </Link>

            <Link to="/portfolio" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-genzpurple to-genzpink rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Track Portfolio</h3>
                <p className="text-gray-600">
                  See your money grow in real-time. Stay on top of your game.
                </p>
              </div>
            </Link>

            <div className="bg-gradient-to-br from-genzpink to-genzpurple rounded-2xl p-8 shadow-lg text-white transform hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Auto-Invest</h3>
              <p className="text-white/90">
                Set it and forget it. Money moves while you sleep.
              </p>
            </div>

            <div className="bg-gradient-to-br from-genzpurple to-genzdark rounded-2xl p-8 shadow-lg text-white transform hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Goal Based</h3>
              <p className="text-white/90">
                Dream bike? World trip? We help you get there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-genzpink via-genzpurple to-genzdark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start your wealth journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of Gen Z and Millennials building wealth with FundZ
          </p>
          <Link
            to="/signup"
            className="inline-block px-10 py-4 bg-white text-genzpurple rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MFHome;