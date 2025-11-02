import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Customer first',
      description: 'We prioritize customer success above everything else. Our goal is to empower retail investors.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do - from technology to customer support.'
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Complete transparency in pricing, operations, and communication with our customers.'
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'Building long-term trust through reliable services and ethical business practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About ZaM
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built by millennials, for Gen Z and Millennials. We're revolutionizing investing for the next generation.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg mb-6">
              ZaM is a next-generation trading platform built specifically for Gen Z and Millennials. We offer ₹0 equity delivery, flat ₹20 intraday and F&O trades, and a modern interface that matches your lifestyle.
            </p>
            <p className="text-lg mb-6">
              Our mission is simple: make investing accessible, transparent, and engaging for the next generation of wealth builders. No jargon, no hidden fees, just straightforward investing tools.
            </p>
            <p className="text-lg">
              We believe in financial literacy and empowerment. Through our educational content and community features, we're helping young investors make informed decisions and build sustainable wealth for their future.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 text-center">
          <div className="p-6">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">1.5+ Cr</h3>
            <p className="text-gray-600">Active Clients</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">15%</h3>
            <p className="text-gray-600">Retail Volume</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">₹4.5+ L Cr</h3>
            <p className="text-gray-600">Assets Under Custody</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">15+ Years</h3>
            <p className="text-gray-600">In Business</p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex items-start p-6 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Built by millennials who understand your generation. We're passionate about creating a platform that speaks your language and meets your needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;