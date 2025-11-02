import React from 'react';
import { Phone, Mail, MessageCircle, FileText, Search, HelpCircle } from 'lucide-react';

const Support = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Support Portal',
      description: 'Search our knowledge base for quick answers',
      link: '#'
    },
    {
      icon: Phone,
      title: 'Call us',
      description: '+91 80 4040 2020',
      link: 'tel:+918040402020'
    },
    {
      icon: Mail,
      title: 'Email us',
      description: 'support@zerodha.com',
      link: 'mailto:support@zerodha.com'
    },
    {
      icon: FileText,
      title: 'Track tickets',
      description: 'Track your support requests',
      link: '#'
    }
  ];

  const popularTopics = [
    'How to open an account?',
    'How to add funds?',
    'How to place an order?',
    'What are the brokerage charges?',
    'How to withdraw funds?',
    'What is margin trading?',
    'How to use Kite platform?',
    'Account maintenance charges'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ZaM Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're here to help! Search for answers or reach out to our support team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
          </div>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <a
                key={index}
                href={option.link}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </a>
            );
          })}
        </div>

        {/* Popular Topics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="mr-2 text-blue-600" size={28} />
            Popular topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularTopics.map((topic, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-700">{topic}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact information</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Email:</strong> support@zam.com
            </p>
            <p>
              <strong>Phone:</strong> +91 80 4040 2020 (Monday to Friday, 8 AM to 8 PM)
            </p>
            <p>
              <strong>WhatsApp:</strong> +91 80 4719 2020
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Gen Z & Millennial friendly support - reach out anytime, we're here for you!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;