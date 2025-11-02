import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Investing for Gen Z and Millennials
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Modern trading platform designed for the next generation. Invest in stocks, derivatives, mutual funds, ETFs, and more.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Start investing now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">1.5+ Cr</h3>
              <p className="text-gray-600">Active clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">₹4.5+ Lakh Cr</h3>
              <p className="text-gray-600">Assets under custody</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">15+ years</h3>
              <p className="text-gray-600">Trust and reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
              <TrendingUp className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Free equity delivery</h3>
            <p className="text-gray-600">
              All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
              <Zap className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Intraday and F&O trades</h3>
            <p className="text-gray-600">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
              <Shield className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Free direct MF</h3>
            <p className="text-gray-600">
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trust with confidence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Built for your generation</h3>
              <p className="text-gray-600">
                A modern, intuitive platform designed specifically for Gen Z and Millennials. Trade with confidence using tools that match your lifestyle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No spam or gimmicks</h3>
              <p className="text-gray-600">
                No gimmicks, spam, or annoying push notifications. Clean interface, powerful features, and complete transparency in everything we do.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart investing tools</h3>
              <p className="text-gray-600">
                Advanced analytics, real-time insights, and intelligent recommendations to help you make informed investment decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Grow your wealth</h3>
              <p className="text-gray-600">
                Start small, dream big. Our platform empowers you to build wealth your way, at your pace, with complete control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the next generation of investors</h2>
        <p className="text-xl text-gray-600 mb-8">
          Modern platform built for Gen Z and Millennials. ₹0 equity delivery, flat ₹20 intraday and F&O trades.
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
        >
          Start investing now
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>
    </div>
  );
};

export default Home;